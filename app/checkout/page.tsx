'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CreditCard, Truck, MapPin } from 'lucide-react';

// Mock cart data - replace with your state management solution
const cart = [
  {
    id: 1,
    name: "Château Margaux 2015",
    price: 4500,
    quantity: 1,
    image: "https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg"
  },
  {
    id: 2,
    name: "Dom Pérignon 2008",
    price: 2890,
    quantity: 2,
    image: "https://images.pexels.com/photos/5088188/pexels-photo-5088188.jpeg"
  }
];

export default function CheckoutPage() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [loading, setLoading] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 50;
  const total = subtotal + shipping;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Implement payment processing here
    setTimeout(() => {
      setLoading(false);
      router.push('/checkout/success');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-cream pt-24">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div>
            <h1 className="text-3xl font-serif mb-8">Checkout</h1>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Shipping Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
                <div className="flex items-center gap-2 text-burgundy mb-4">
                  <MapPin className="h-5 w-5" />
                  <h2 className="font-serif text-xl">Endereço de Entrega</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" required />
                  </div>
                  <div>
                    <Label htmlFor="cep">CEP</Label>
                    <Input id="cep" required />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Endereço</Label>
                    <Input id="address" required />
                  </div>
                  <div>
                    <Label htmlFor="number">Número</Label>
                    <Input id="number" required />
                  </div>
                  <div>
                    <Label htmlFor="complement">Complemento</Label>
                    <Input id="complement" />
                  </div>
                  <div>
                    <Label htmlFor="city">Cidade</Label>
                    <Input id="city" required />
                  </div>
                  <div>
                    <Label htmlFor="state">Estado</Label>
                    <Input id="state" required />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
                <div className="flex items-center gap-2 text-burgundy mb-4">
                  <CreditCard className="h-5 w-5" />
                  <h2 className="font-serif text-xl">Método de Pagamento</h2>
                </div>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit" id="credit" />
                    <Label htmlFor="credit">Cartão de Crédito</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pix" id="pix" />
                    <Label htmlFor="pix">PIX</Label>
                  </div>
                </RadioGroup>

                {paymentMethod === 'credit' && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="card">Número do Cartão</Label>
                      <Input id="card" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Data de Expiração</Label>
                        <Input id="expiry" placeholder="MM/AA" required />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="name">Nome no Cartão</Label>
                      <Input id="name" required />
                    </div>
                  </div>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-burgundy hover:bg-burgundy-light"
                disabled={loading}
              >
                {loading ? "Processando..." : "Finalizar Compra"}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <h2 className="font-serif text-xl mb-6">Resumo do Pedido</h2>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-20 w-20 rounded overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-500">Quantidade: {item.quantity}</p>
                      <p className="text-burgundy">
                        R$ {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-6" />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R$ {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4" />
                    <span>Frete</span>
                  </div>
                  <span>R$ {shipping.toLocaleString()}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span>R$ {total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}