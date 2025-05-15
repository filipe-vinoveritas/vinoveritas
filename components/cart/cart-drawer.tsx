'use client';

import { ShoppingBag, X, Plus, Minus, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

// Mock cart data - replace with real data from your state management solution
const initialCart = [
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

export function CartDrawer() {
  const router = useRouter();
  const [cart, setCart] = useState(initialCart);
  const [open, setOpen] = useState(false);

  const updateQuantity = (id: number, change: number) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const handleCheckout = () => {
    setOpen(false);
    router.push('/checkout');
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {/* <Button variant="ghost" className="relative">
          <ShoppingBag className="h-5 w-5" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-burgundy text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </Button> */}
        <button className={cn(
          'hover:text-gold transition-colors duration-300 relative text-charcoal',
          // scrolled ? 'text-charcoal' : 'text-white'
        )}>
          <ShoppingBag className="h-5 w-5" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-burgundy text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl">Carrinho</SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex flex-col h-full">
          <div className="flex-1 overflow-y-auto">
            {cart.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                Seu carrinho está vazio
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b pb-4">
                    <div className="relative h-24 w-24 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-lg">{item.name}</h3>
                      <p className="text-burgundy font-medium">
                        R$ {item.price.toLocaleString()}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => updateQuantity(item.id, -item.quantity)}
                      className="p-2 hover:bg-gray-100 rounded"
                    >
                      <Trash className="h-5 w-5 text-red-500" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          {cart.length > 0 && (
            <div className="border-t pt-4 mt-4 space-y-4 mb-16 sm:mb-14">
              <div className="flex justify-between text-lg font-medium">
                <span>Total</span>
                <span>R$ {total.toLocaleString()}</span>
              </div>
              <Button
                className="w-full bg-burgundy hover:bg-burgundy-light"
                onClick={handleCheckout}
              >
                Finalizar Compra
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}