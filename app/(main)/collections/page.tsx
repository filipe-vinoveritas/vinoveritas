"use client"

import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Wine } from 'lucide-react';
import { cn } from '@/lib/utils';

const collections = [
  {
    id: 1,
    name: "Reserve Collection",
    description: "Our finest selection of rare and exceptional wines",
    image: "https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg",
    items: 24,
    priceRange: "$200 - $10,000"
  },
  {
    id: 2,
    name: "Vintage Classics",
    description: "Timeless wines from historic vintages",
    image: "https://images.pexels.com/photos/3019019/pexels-photo-3019019.jpeg",
    items: 18,
    priceRange: "$150 - $5,000"
  },
  {
    id: 3,
    name: "Limited Editions",
    description: "Exclusive releases and small-batch productions",
    image: "https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg",
    items: 12,
    priceRange: "$300 - $8,000"
  },
  {
    id: 4,
    name: "Sommelier's Choice",
    description: "Expert-curated selection of exceptional wines",
    image: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg",
    items: 15,
    priceRange: "$100 - $3,000"
  }
];

export default function CollectionsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-24 min-h-screen bg-cream">
      <div className="container-custom py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-gold"></div>
            <Wine className="h-6 w-6 mx-4 text-gold" />
            <div className="h-px w-12 bg-gold"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-charcoal">Our Collections</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collections of exceptional wines, each telling a unique story of terroir and tradition.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className={cn(
                "group relative overflow-hidden rounded-lg shadow-lg transition-all duration-700 delay-[calc(200ms*var(--index))]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              )}
              style={{ '--index': index } as React.CSSProperties}
            >
              <div className="relative h-[400px]">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h2 className="font-serif text-2xl text-white mb-2">{collection.name}</h2>
                    <p className="text-gray-200 mb-4">{collection.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gold">{collection.items} Wines</span>
                      <span className="text-gold">{collection.priceRange}</span>
                    </div>
                    <button className="mt-6 btn-gold">
                      Explore Collection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}