"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const slides = [
  {
    image: "https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg",
    title: "Descubra Vinhos Excepcionais",
    subtitle: "Seleções exclusivas das vinícolas mais prestigiadas do mundo"
  },
  {
    image: "https://images.pexels.com/photos/3019019/pexels-photo-3019019.jpeg",
    title: "Coleções Premium",
    subtitle: "Safras raras e edições limitadas para conhecedores"
  },
  {
    image: "https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg",
    title: "Experiências Únicas",
    subtitle: "Degustações exclusivas e eventos especiais"
  }
];

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 hero-overlay"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container-custom text-white text-center">
                  <div className={`transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0 -translate-y-6'}`}>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 leading-tight">
                      {slide.title}
                    </h1>
                  </div>
                  <div className={`transition-all duration-1000 delay-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-lg md:text-xl font-sans font-light mb-8 leading-relaxed">
                      {slide.subtitle}
                    </p>
                  </div>
                  <div className={`transition-all duration-1000 delay-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
                    {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <button className="btn-primary">
                        Explorar Coleção
                      </button>
                      <button className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-burgundy">
                        Consultor de Vinhos
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${index === selectedIndex ? 'bg-white w-6' : 'bg-white/50'
              }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center z-10 animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
};

export default HeroSection;