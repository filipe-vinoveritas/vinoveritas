"use client"

import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Wine, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const vintages = [
  {
    id: 1,
    year: 2015,
    rating: 98,
    description: "An exceptional year marked by perfect growing conditions",
    image: "https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg",
    regions: ["Bordeaux", "Burgundy", "Champagne"],
    availability: "Limited"
  },
  {
    id: 2,
    year: 2010,
    rating: 99,
    description: "One of the greatest vintages of the century",
    image: "https://images.pexels.com/photos/3019019/pexels-photo-3019019.jpeg",
    regions: ["Tuscany", "Piedmont", "Bordeaux"],
    availability: "Rare"
  },
  {
    id: 3,
    year: 2016,
    rating: 97,
    description: "A classic vintage with exceptional aging potential",
    image: "https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg",
    regions: ["Napa Valley", "Bordeaux", "Rhône"],
    availability: "Available"
  },
  {
    id: 4,
    year: 2008,
    rating: 96,
    description: "A legendary year for Champagne",
    image: "https://images.pexels.com/photos/5088188/pexels-photo-5088188.jpeg",
    regions: ["Champagne", "Burgundy"],
    availability: "Very Rare"
  }
];

export default function VintagesPage() {
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
            <Calendar className="h-6 w-6 mx-4 text-gold" />
            <div className="h-px w-12 bg-gold"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-charcoal">Fine Vintages</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of exceptional vintages from the world's most prestigious wine regions.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vintages.map((vintage, index) => (
            <div
              key={vintage.id}
              className={cn(
                "bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-700 delay-[calc(200ms*var(--index))]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              )}
              style={{ '--index': index } as React.CSSProperties}
            >
              <div className="relative h-64">
                <Image
                  src={vintage.image}
                  alt={`Vintage ${vintage.year}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 right-4 bg-burgundy text-white px-4 py-2 rounded-full">
                  {vintage.year}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <span className="text-gold text-2xl font-serif">{vintage.rating}</span>
                    <span className="text-gray-500 ml-1">points</span>
                  </div>
                  <span className={cn(
                    "px-4 py-1 rounded-full text-sm",
                    vintage.availability === "Rare" ? "bg-burgundy text-white" :
                    vintage.availability === "Very Rare" ? "bg-gold text-white" :
                    "bg-cream text-burgundy"
                  )}>
                    {vintage.availability}
                  </span>
                </div>
                <p className="text-gray-700 mb-6">{vintage.description}</p>
                <div className="mb-6">
                  <h3 className="font-serif text-lg mb-2 text-charcoal">Notable Regions</h3>
                  <div className="flex flex-wrap gap-2">
                    {vintage.regions.map((region) => (
                      <span
                        key={region}
                        className="bg-cream text-burgundy px-3 py-1 rounded-full text-sm"
                      >
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="btn-primary w-full">
                  View Wines from {vintage.year}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}