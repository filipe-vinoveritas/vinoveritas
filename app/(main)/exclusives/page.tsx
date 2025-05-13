"use client"

import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Wine, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';

const exclusives = [
  {
    id: 1,
    name: "Château Lafite Rothschild 1982",
    price: "$4,500",
    description: "A legendary vintage from one of Bordeaux's most prestigious estates",
    image: "https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg",
    rating: 100,
    stock: 3,
    type: "Red Wine"
  },
  {
    id: 2,
    name: "Dom Pérignon P3 1971",
    price: "$3,800",
    description: "An exceptional expression of time-enhanced champagne",
    image: "https://images.pexels.com/photos/5088188/pexels-photo-5088188.jpeg",
    rating: 99,
    stock: 2,
    type: "Champagne"
  },
  {
    id: 3,
    name: "Romanée-Conti 2015",
    price: "$15,000",
    description: "The pinnacle of Burgundy wine production",
    image: "https://images.pexels.com/photos/3019019/pexels-photo-3019019.jpeg",
    rating: 100,
    stock: 1,
    type: "Red Wine"
  },
  {
    id: 4,
    name: "Screaming Eagle 2019",
    price: "$5,200",
    description: "California's most sought-after cult wine",
    image: "https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg",
    rating: 98,
    stock: 4,
    type: "Red Wine"
  }
];

export default function ExclusivesPage() {
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
            <Crown className="h-6 w-6 mx-4 text-gold" />
            <div className="h-px w-12 bg-gold"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-charcoal">Exclusive Wines</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our collection of rare and exceptional wines, available only to our most discerning clients.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {exclusives.map((wine, index) => (
            <div
              key={wine.id}
              className={cn(
                "bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-700 delay-[calc(200ms*var(--index))]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              )}
              style={{ '--index': index } as React.CSSProperties}
            >
              <div className="relative h-72">
                <Image
                  src={wine.image}
                  alt={wine.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-burgundy text-white px-3 py-1 rounded-full text-sm">
                  {wine.type}
                </div>
                <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full text-sm">
                  {wine.rating} Points
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="font-serif text-2xl text-charcoal flex-1">{wine.name}</h2>
                  <span className="font-serif text-xl text-burgundy">{wine.price}</span>
                </div>
                <p className="text-gray-700 mb-6">{wine.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Only {wine.stock} bottle{wine.stock !== 1 ? 's' : ''} available
                  </span>
                  <button className="btn-primary">
                    Reserve Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-burgundy text-white rounded-lg p-8 text-center">
          <h2 className="font-serif text-2xl mb-4">Private Wine Consultation</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Our wine experts are available for private consultations to help you discover the perfect additions to your collection.
          </p>
          <button className="btn-gold">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
}