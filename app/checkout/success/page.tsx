```typescript
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CheckoutSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // Clear cart here if using state management
  }, []);

  return (
    <div className="min-h-screen bg-cream pt-24">
      <div className="container-custom py-12">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-sm text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-serif mb-4">Pedido Confirmado!</h1>
          <p className="text-gray-600 mb-8">
            Seu pedido foi processado com sucesso. Você receberá um email com os detalhes da compra.
          </p>
          <div className="space-y-4">
            <Button
              onClick={() => router.push('/')}
              className="w-full bg-burgundy hover:bg-burgundy-light"
            >
              Voltar para a Loja
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push('/account/orders')}
              className="w-full"
            >
              Ver Meus Pedidos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
```