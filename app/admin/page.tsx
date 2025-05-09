"use client"

import { Card } from "@/components/ui/card";
import { 
  LineChart, 
  BarChart, 
  Users, 
  ShoppingBag, 
  DollarSign,
  TrendingUp 
} from "lucide-react";
import { 
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer 
} from "recharts";

const data = [
  { name: "Jan", visits: 4000, orders: 2400 },
  { name: "Feb", visits: 3000, orders: 1398 },
  { name: "Mar", visits: 2000, orders: 9800 },
  { name: "Apr", visits: 2780, orders: 3908 },
  { name: "May", visits: 1890, orders: 4800 },
  { name: "Jun", visits: 2390, orders: 3800 },
];

const stats = [
  {
    title: "Total Vendas",
    value: "R$ 45.231",
    change: "+20.1%",
    icon: DollarSign
  },
  {
    title: "Visitantes",
    value: "12.543",
    change: "+15.3%",
    icon: Users
  },
  {
    title: "Pedidos",
    value: "856",
    change: "+12.5%",
    icon: ShoppingBag
  },
  {
    title: "Conversão",
    value: "6.8%",
    change: "+3.2%",
    icon: TrendingUp
  }
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Bem-vindo ao painel administrativo</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
                  <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                </div>
                <div className="bg-burgundy/10 p-3 rounded-full">
                  <Icon className="h-6 w-6 text-burgundy" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-medium">Visitas vs. Pedidos</h3>
              <p className="text-sm text-gray-500">Últimos 6 meses</p>
            </div>
            <LineChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="visits" stroke="#7f1d1d" />
                <Line type="monotone" dataKey="orders" stroke="#ca8a04" />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-medium">Produtos Mais Vendidos</h3>
              <p className="text-sm text-gray-500">Top 5 produtos</p>
            </div>
            <BarChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {[
              { name: "Château Margaux 2015", sales: 156 },
              { name: "Dom Pérignon 2008", sales: 124 },
              { name: "Opus One 2018", sales: 98 },
              { name: "Sassicaia 2017", sales: 87 },
              { name: "Cristal 2013", sales: 76 }
            ].map((product, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.sales} vendas</p>
                </div>
                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-burgundy"
                    style={{ width: `${(product.sales / 156) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}