"use client"

import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const WineStory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding bg-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 h-48 bg-burgundy opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={cn(
            "transition-all duration-1000",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
          )}>
            <span className="text-burgundy text-sm uppercase tracking-wider font-medium">Nossa História</span>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-charcoal mt-2">
              Um Legado de Excelência desde 1897
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Por mais de um século, o Château Reserve tem sido um símbolo de excelência no mundo dos vinhos finos. Nossa jornada começou nas colinas de Bordeaux, onde nosso fundador, Monsieur Pierre Bonneville, estabeleceu a primeira vinícola Château Reserve com uma visão singular: criar vinhos que expressassem a mais pura essência de seu terroir.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Hoje, essa visão continua guiando cada aspecto de nosso empreendimento. Desde nossos relacionamentos cuidadosamente cultivados com os viticultores mais distintos do mundo até nossas instalações de armazenamento de última geração, somos dedicados a trazer os melhores vinhos da vinícola à sua mesa.
            </p>
            <button className="btn-primary">Nossa História</button>
          </div>
          
          <div className={cn(
            "relative transition-all duration-1000 delay-300",
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
          )}>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl h-[500px]">
              <Image 
                src="https://images.pexels.com/photos/5946641/pexels-photo-5946641.jpeg" 
                alt="Adega histórica"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute top-8 -right-8 w-48 h-48 bg-burgundy opacity-10 rounded-full z-0"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gold opacity-20 rounded-full z-0"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {[
            {
              title: "Curadoria Especializada",
              description: "Nossos Mestres Sommeliers selecionam apenas os melhores vinhos de vinícolas prestigiadas em todo o mundo."
            },
            {
              title: "Procedência Garantida",
              description: "Cada garrafa em nossa coleção pode ser rastreada diretamente até sua origem, garantindo autenticidade."
            },
            {
              title: "Armazenamento Ideal",
              description: "Nossas adegas climatizadas mantêm condições ideais para a preservação do vinho."
            }
          ].map((item, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white p-8 rounded-lg shadow-md transition-all duration-700 delay-[calc(300ms*var(--index))]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ '--index': index } as React.CSSProperties}
            >
              <h3 className="font-serif text-xl text-burgundy mb-4">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WineStory;