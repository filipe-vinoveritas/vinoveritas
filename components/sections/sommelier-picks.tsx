"use client"

import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Wine, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const wines = [
  {
    id: 1,
    name: "Cristal Roederer 2013",
    region: "Champagne, França",
    price: "R$ 349",
    notes: "Aromas florais, frutas cítricas, com um paladar notavelmente equilibrado.",
    rating: 98,
    sommelier: "Emma Laurent",
    sommelierRole: "Sommelier Chefe",
    sommelierImage: "https://images.pexels.com/photos/7819718/pexels-photo-7819718.jpeg",
    wineImage: "https://images.pexels.com/photos/5088188/pexels-photo-5088188.jpeg"
  },
  {
    id: 2,
    name: "Sassicaia 2017",
    region: "Toscana, Itália",
    price: "R$ 269",
    notes: "Bouquet complexo de cassis, cedro e especiarias com taninos elegantes.",
    rating: 97,
    sommelier: "Marco Rossi",
    sommelierRole: "Especialista em Vinhos Italianos",
    sommelierImage: "https://images.pexels.com/photos/8107902/pexels-photo-8107902.jpeg",
    wineImage: "https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg"
  }
];

const SommelierPicks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-gold"></div>
            <Wine className="h-6 w-6 mx-4 text-gold" />
            <div className="h-px w-12 bg-gold"></div>
          </div>
          <h2 className={cn(
            "text-3xl md:text-4xl font-serif mb-4 text-charcoal transition-all duration-1000",
            inView ? "opacity-100" : "opacity-0 translate-y-6"
          )}>
            Seleções do Sommelier
          </h2>
          <p className={cn(
            "text-lg font-sans text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-200",
            inView ? "opacity-100" : "opacity-0"
          )}>
            Recomendações escolhidas a dedo por nossa equipe premiada de sommeliers.
          </p>
        </div>

        <div className="space-y-12">
          {wines.map((wine, index) => (
            <div 
              key={wine.id}
              className={cn(
                "bg-cream rounded-lg overflow-hidden shadow-md transition-all duration-700 delay-[calc(200ms*var(--index))]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              )}
              style={{ '--index': index } as React.CSSProperties}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 relative h-64 lg:h-auto">
                  <Image
                    src={wine.wineImage}
                    alt={wine.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="lg:col-span-3 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-2xl text-charcoal">{wine.name}</h3>
                      <p className="text-gray-600 mb-2">{wine.region}</p>
                      <div className="flex items-center mb-4">
                        {Array(5).fill(0).map((_, i) => (
                          <Star 
                            key={i} 
                            className={cn(
                              "h-4 w-4 mr-1",
                              i < Math.floor(wine.rating / 20) ? "text-gold fill-gold" : "text-gray-300"
                            )} 
                          />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">{wine.rating} pontos</span>
                      </div>
                    </div>
                    <span className="font-serif text-xl font-medium text-burgundy">{wine.price}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-6 italic">"{wine.notes}"</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={wine.sommelierImage}
                          alt={wine.sommelier}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-charcoal">{wine.sommelier}</p>
                        <p className="text-sm text-gray-600">{wine.sommelierRole}</p>
                      </div>
                    </div>
                    <button className="btn-primary">
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className={cn(
            "btn-secondary transition-all duration-1000 delay-500",
            inView ? "opacity-100" : "opacity-0"
          )}>
            Ver Todas as Seleções
          </button>
        </div>
      </div>
    </section>
  );
};

export default SommelierPicks;