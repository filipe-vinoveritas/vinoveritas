"use client"

import { useState } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Heart, Star, Truck, Shield, Wine, ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock product data - in a real app, this would come from an API/database
const product = {
  id: 1,
  name: "Château Margaux 2015",
  region: "Bordeaux, França",
  price: 4500,
  rating: 98,
  reviews: 124,
  description: "Um vinho excepcional da safra de 2015, considerada uma das melhores do século. Apresenta aromas complexos de frutas negras, notas de cedro e especiarias, com taninos elegantes e um final prolongado.",
  details: {
    type: "Vinho Tinto",
    grape: "Cabernet Sauvignon, Merlot, Petit Verdot, Cabernet Franc",
    alcohol: "13.5%",
    volume: "750ml",
    vintage: "2015",
    aging: "24 meses em barris de carvalho francês",
  },
  stock: 12,
  images: [
    "https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg",
    "https://images.pexels.com/photos/3019019/pexels-photo-3019019.jpeg",
    "https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg",
  ],
  reviews: [
    {
      id: 1,
      user: "João Silva",
      rating: 5,
      date: "2024-03-15",
      comment: "Excepcional! Um dos melhores vinhos que já provei.",
      avatar: "https://images.pexels.com/photos/7819718/pexels-photo-7819718.jpeg"
    },
    {
      id: 2,
      user: "Maria Santos",
      rating: 4,
      date: "2024-03-10",
      comment: "Excelente estrutura e complexidade. Recomendo!",
      avatar: "https://images.pexels.com/photos/8107902/pexels-photo-8107902.jpeg"
    }
  ]
};

export default function ProductPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [cep, setCep] = useState('');

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const calculateShipping = () => {
    // Implement shipping calculation logic
    alert('Calculando frete para o CEP: ' + cep);
  };

  return (
    <div className="min-h-screen bg-cream pt-24">
      <div className="container-custom py-12">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className={cn(
            "relative transition-all duration-700",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
          )}>
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src={product.images[currentImage]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
              >
                <ArrowLeft className="h-6 w-6 text-charcoal" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
              >
                <ArrowRight className="h-6 w-6 text-charcoal" />
              </button>
            </div>
            <div className="flex gap-4 mt-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={cn(
                    "relative h-20 w-20 rounded-md overflow-hidden",
                    currentImage === index && "ring-2 ring-burgundy"
                  )}
                >
                  <Image
                    src={image}
                    alt={`${product.name} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className={cn(
            "transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
          )}>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-serif text-charcoal mb-2">{product.name}</h1>
                <p className="text-gray-600">{product.region}</p>
              </div>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={cn(
                  "p-2 rounded-full transition-colors",
                  isFavorite ? "text-red-500 bg-red-50" : "text-gray-400 hover:text-red-500 hover:bg-red-50"
                )}
              >
                <Heart className="h-6 w-6" fill={isFavorite ? "currentColor" : "none"} />
              </button>
            </div>

            <div className="flex items-center mt-4 space-x-4">
              <div className="flex items-center">
                {Array(5).fill(0).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-5 w-5",
                      i < Math.floor(product.rating / 20) ? "text-gold fill-gold" : "text-gray-300"
                    )}
                  />
                ))}
              </div>
              <span className="text-gray-600">({product.reviews} avaliações)</span>
            </div>

            <div className="mt-8">
              <span className="text-3xl font-serif text-burgundy">
                R$ {product.price.toLocaleString()}
              </span>
              <p className="text-sm text-gray-500 mt-1">Em até 12x sem juros</p>
            </div>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:text-burgundy"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-3 py-2 text-gray-600 hover:text-burgundy"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-gray-500">
                  {product.stock} unidades disponíveis
                </span>
              </div>

              <div className="flex gap-4">
                <Input
                  type="text"
                  placeholder="Digite seu CEP"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  className="max-w-[200px]"
                />
                <Button
                  variant="outline"
                  onClick={calculateShipping}
                >
                  Calcular Frete
                </Button>
              </div>

              <Button className="w-full bg-burgundy hover:bg-burgundy-light h-12 text-lg">
                Adicionar ao Carrinho
              </Button>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-burgundy" />
                  <span className="text-sm">Entrega Segura</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-burgundy" />
                  <span className="text-sm">Garantia de Qualidade</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className={cn(
          "mt-16 transition-all duration-700 delay-400",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        )}>
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger
                value="description"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-burgundy data-[state=active]:bg-transparent"
              >
                Descrição
              </TabsTrigger>
              <TabsTrigger
                value="details"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-burgundy data-[state=active]:bg-transparent"
              >
                Detalhes
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-burgundy data-[state=active]:bg-transparent"
              >
                Avaliações
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-8">
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </TabsContent>
            <TabsContent value="details" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(product.details).map(([key, value]) => (
                  <div key={key} className="flex items-start gap-4">
                    <Wine className="h-5 w-5 text-burgundy mt-1" />
                    <div>
                      <h4 className="font-medium text-charcoal capitalize">
                        {key}
                      </h4>
                      <p className="text-gray-600">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-8">
              <div className="space-y-8">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-8">
                    <div className="flex items-start gap-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src={review.avatar}
                          alt={review.user}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-charcoal">
                            {review.user}
                          </h4>
                          <span className="text-sm text-gray-500">
                            {new Date(review.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center mt-1">
                          {Array(5).fill(0).map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "h-4 w-4",
                                i < review.rating ? "text-gold fill-gold" : "text-gray-300"
                              )}
                            />
                          ))}
                        </div>
                        <p className="mt-2 text-gray-700">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}