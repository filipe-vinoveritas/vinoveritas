"use client"

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Wine as WineIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const wines = [
  {
    id: 1,
    name: "Château Margaux 2015",
    region: "Bordeaux, França",
    price: "R$ 695",
    rating: 98,
    image: "https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg",
    category: "Vinho Tinto"
  },
  {
    id: 2,
    name: "Dom Pérignon Vintage 2008",
    region: "Champagne, França",
    price: "R$ 289",
    rating: 96,
    image: "https://images.pexels.com/photos/5088188/pexels-photo-5088188.jpeg",
    category: "Champagne"
  },
  {
    id: 3,
    name: "Opus One 2018",
    region: "Vale do Napa, EUA",
    price: "R$ 425",
    rating: 97,
    image: "https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg",
    category: "Vinho Tinto"
  },
  {
    id: 4,
    name: "Cloudy Bay Sauvignon Blanc 2022",
    region: "Marlborough, Nova Zelândia",
    price: "R$ 65",
    rating: 94,
    image: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg",
    category: "Vinho Branco"
  }
];

const FeaturedCollection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding bg-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-gold"></div>
            <WineIcon className="h-6 w-6 mx-4 text-gold" />
            <div className="h-px w-12 bg-gold"></div>
          </div>
          <h2 className={cn(
            "text-3xl md:text-4xl font-serif mb-4 text-charcoal transition-all duration-1000",
            inView ? "opacity-100" : "opacity-0 translate-y-6"
          )}>
            Coleção em Destaque
          </h2>
          <p className={cn(
            "text-lg font-sans text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-200",
            inView ? "opacity-100" : "opacity-0"
          )}>
            Descubra nossa seleção de vinhos excepcionais, escolhidos a dedo por nossos sommeliers por sua qualidade e caráter únicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {wines.map((wine, index) => (
            <div 
              key={wine.id}
              className={cn(
                "wine-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-700 delay-[calc(200ms*var(--index))]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              )}
              style={{ '--index': index } as React.CSSProperties}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={wine.image}
                  alt={wine.name}
                  fill
                  className="wine-card-image object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute top-4 left-4 bg-burgundy text-white text-xs py-1 px-2 rounded">
                  {wine.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl text-charcoal font-medium">{wine.name}</h3>
                  <span className="font-sans text-lg font-semibold text-burgundy">{wine.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{wine.region}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="bg-gold-light text-white text-xs py-1 px-2 rounded">
                      {wine.rating} pts
                    </span>
                  </div>
                  <button className="text-sm text-burgundy hover:text-gold transition-colors duration-300 underline font-medium">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className={cn(
            "btn-secondary mt-8 transition-all duration-1000 delay-400",
            inView ? "opacity-100" : "opacity-0"
          )}>
            Ver Todos os Vinhos
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;