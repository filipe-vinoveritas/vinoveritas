"use client"

import { useState } from "react";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search,
  Download,
  Eye,
  Package,
  Truck,
  CheckCircle2
} from "lucide-react";

// Mock orders data
const orders = [
  {
    id: "#ORD001",
    customer: "João Silva",
    date: "2024-03-20",
    total: 4500,
    status: "Entregue",
    items: [
      { name: "Château Margaux 2015", quantity: 1, price: 4500 }
    ],
    shipping: {
      address: "Rua das Vinhas, 123",
      city: "São Paulo",
      state: "SP",
      zipCode: "01234-567",
      tracking: "BR1234567890"
    }
  },
  {
    id: "#ORD002",
    customer: "Maria Santos",
    date: "2024-03-19",
    total: 5780,
    status: "Em Trânsito",
    items: [
      { name: "Dom Pérignon 2008", quantity: 2, price: 2890 }
    ],
    shipping: {
      address: "Av. dos Vinhedos, 456",
      city: "Rio de Janeiro",
      state: "RJ",
      zipCode: "20000-000",
      tracking: "BR0987654321"
    }
  },
  // Add more orders as needed
];

const statusColors = {
  "Entregue": "text-green-600 bg-green-50",
  "Em Trânsito": "text-blue-600 bg-blue-50",
  "Processando": "text-yellow-600 bg-yellow-50",
  "Cancelado": "text-red-600 bg-red-50"
};

const statusIcons = {
  "Entregue": CheckCircle2,
  "Em Trânsito": Truck,
  "Processando": Package
};

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const exportReport = () => {
    // Implement CSV export logic
    const csv = orders.map(order => {
      return `${order.id},${order.customer},${order.date},${order.total},${order.status}`;
    }).join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vendas-report.csv';
    a.click();
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Pedidos</h1>
          <p className="text-gray-500">Gerencie os pedidos da loja</p>
        </div>
        <Button 
          onClick={exportReport}
          className="bg-burgundy hover:bg-burgundy-light"
        >
          <Download className="h-4 w-4 mr-2" />
          Exportar Relatório
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Buscar pedidos..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pedido</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => {
              const StatusIcon = statusIcons[order.status] || Package;
              return (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                  <TableCell>R$ {order.total.toLocaleString()}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                      <StatusIcon className="h-3.5 w-3.5" />
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedOrder(order)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">Detalhes do Pedido {selectedOrder.id}</h3>
                <p className="text-gray-500">Realizado em {new Date(selectedOrder.date).toLocaleDateString()}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedOrder(null)}
              >
                ✕
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Itens do Pedido</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">Quantidade: {item.quantity}</p>
                      </div>
                      <p className="font-medium">R$ {item.price.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Informações de Entrega</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p>{selectedOrder.shipping.address}</p>
                  <p>{selectedOrder.shipping.city}, {selectedOrder.shipping.state}</p>
                  <p>CEP: {selectedOrder.shipping.zipCode}</p>
                  <p className="mt-2">
                    <span className="font-medium">Código de Rastreio:</span>{" "}
                    {selectedOrder.shipping.tracking}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t">
                <div>
                  <p className="text-sm text-gray-500">Total do Pedido</p>
                  <p className="text-2xl font-bold">R$ {selectedOrder.total.toLocaleString()}</p>
                </div>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${statusColors[selectedOrder.status]}`}>
                  <StatusIcon className="h-4 w-4" />
                  {selectedOrder.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}