"use client"

import { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';
import { Wine as WineIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';

const products = [
  {
    id: 1,
    name: "Château Margaux 2015",
    region: "Bordeaux, França",
    price: 4500,
    rating: 98,
    image: "https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg",
    category: "Vinho Tinto"
  },
  {
    id: 2,
    name: "Dom Pérignon 2008",
    region: "Champagne, França",
    price: 2890,
    rating: 96,
    image: "https://images.pexels.com/photos/5088188/pexels-photo-5088188.jpeg",
    category: "Champagne"
  },
  {
    id: 3,
    name: "Opus One 2018",
    region: "Vale do Napa, EUA",
    price: 3250,
    rating: 97,
    image: "https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg",
    category: "Vinho Tinto"
  },
  {
    id: 4,
    name: "Sassicaia 2017",
    region: "Toscana, Itália",
    price: 2890,
    rating: 95,
    image: "https://images.pexels.com/photos/3019019/pexels-photo-3019019.jpeg",
    category: "Vinho Tinto"
  }
];

const FeaturedProducts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const router = useRouter();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

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
            Produtos em Destaque
          </h2>
          <p className={cn(
            "text-lg font-sans text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-200",
            inView ? "opacity-100" : "opacity-0"
          )}>
            Descubra nossa seleção especial de vinhos premium, escolhidos a dedo por nossos especialistas.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full hover:bg-white transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-charcoal" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full hover:bg-white transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-charcoal" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={cn(
                    "flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] transition-all duration-700 delay-[calc(200ms*var(--index))]",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                  )}
                  style={{ '--index': index } as React.CSSProperties}
                >
                  <div
                    className="wine-card bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
                    onClick={() => router.push(`/product/${product.id}`)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="wine-card-image object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4 bg-burgundy text-white text-xs py-1 px-2 rounded">
                        {product.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif text-xl text-charcoal">{product.name}</h3>
                        <span className="font-sans text-lg font-semibold text-burgundy">
                          R$ {product.price.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{product.region}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="bg-gold-light text-white text-xs py-1 px-2 rounded">
                            {product.rating} pts
                          </span>
                        </div>
                        <button className="text-sm text-burgundy hover:text-gold transition-colors duration-300 underline font-medium">
                          Ver Detalhes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;