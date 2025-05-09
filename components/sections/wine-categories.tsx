"use client"

import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const categories = [
  {
    id: 1,
    name: "Vinhos Tintos",
    image: "https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg",
    description: "Encorpados, refinados e complexos"
  },
  {
    id: 2,
    name: "Vinhos Brancos",
    image: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg",
    description: "Frescos, refrescantes e elegantes"
  },
  {
    id: 3,
    name: "Champagne",
    image: "https://images.pexels.com/photos/5088188/pexels-photo-5088188.jpeg",
    description: "Luxuosos, efervescentes e festivos"
  }
];

const WineCategories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-serif mb-4 text-charcoal transition-all duration-1000",
            inView ? "opacity-100" : "opacity-0 translate-y-6"
          )}>
            Explore por Categoria
          </h2>
          <p className={cn(
            "text-lg font-sans text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-200",
            inView ? "opacity-100" : "opacity-0"
          )}>
            Descubra nossa extensa coleção de vinhos finos, categorizada para ajudá-lo a encontrar a combinação perfeita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className={cn(
                "group relative h-96 rounded-lg overflow-hidden shadow-lg transition-all duration-700 delay-[calc(200ms*var(--index))]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              )}
              style={{ '--index': index } as React.CSSProperties}
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                  <h3 className="font-serif text-2xl mb-2">{category.name}</h3>
                  <p className="font-sans text-sm text-gray-200 mb-4">{category.description}</p>
                  <button className="inline-flex items-center text-gold font-medium text-sm group-hover:underline transition-all duration-300">
                    Explorar Coleção
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:ml-2 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className={cn(
            "bg-burgundy text-white rounded-lg p-8 flex flex-col justify-center transition-all duration-700 delay-600",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          )}>
            <h3 className="font-serif text-2xl mb-4">Clube do Vinho</h3>
            <p className="mb-6">Junte-se ao nosso Clube do Vinho exclusivo e receba seleções especiais em sua porta.</p>
            <button className="btn-gold self-start">Associar-se</button>
          </div>
          <div className={cn(
            "bg-cream border border-gold rounded-lg p-8 flex flex-col justify-center transition-all duration-700 delay-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          )}>
            <h3 className="font-serif text-2xl text-charcoal mb-4">Coleção Privada</h3>
            <p className="text-gray-700 mb-6">Vinhos raros e edições limitadas provenientes das vinícolas mais prestigiadas do mundo.</p>
            <button className="btn-secondary self-start">Saiba Mais</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WineCategories;