"use client"

import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Wine, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const regions = [
  {
    id: 1,
    name: "Bordeaux",
    country: "France",
    description: "Home to some of the world's most prestigious wines",
    image: "https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg",
    varieties: ["Cabernet Sauvignon", "Merlot", "Cabernet Franc"],
    wineries: 42
  },
  {
    id: 2,
    name: "Tuscany",
    country: "Italy",
    description: "Renowned for its Chianti and Super Tuscans",
    image: "https://images.pexels.com/photos/3019019/pexels-photo-3019019.jpeg",
    varieties: ["Sangiovese", "Cabernet Sauvignon", "Merlot"],
    wineries: 35
  },
  {
    id: 3,
    name: "Napa Valley",
    country: "United States",
    description: "California's premier wine region",
    image: "https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg",
    varieties: ["Cabernet Sauvignon", "Chardonnay", "Merlot"],
    wineries: 28
  },
  {
    id: 4,
    name: "Champagne",
    country: "France",
    description: "The world's most famous sparkling wine region",
    image: "https://images.pexels.com/photos/5088188/pexels-photo-5088188.jpeg",
    varieties: ["Chardonnay", "Pinot Noir", "Pinot Meunier"],
    wineries: 31
  }
];

export default function RegionsPage() {
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
            <Globe className="h-6 w-6 mx-4 text-gold" />
            <div className="h-px w-12 bg-gold"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-charcoal">Wine Regions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the world's most prestigious wine regions and discover their unique terroirs and traditions.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {regions.map((region, index) => (
            <div
              key={region.id}
              className={cn(
                "bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-700 delay-[calc(200ms*var(--index))]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              )}
              style={{ '--index': index } as React.CSSProperties}
            >
              <div className="relative h-64">
                <Image
                  src={region.image}
                  alt={region.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="font-serif text-2xl text-charcoal">{region.name}</h2>
                    <p className="text-gold">{region.country}</p>
                  </div>
                  <span className="bg-cream px-4 py-2 rounded-full text-sm text-burgundy">
                    {region.wineries} Wineries
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{region.description}</p>
                <div className="mb-6">
                  <h3 className="font-serif text-lg mb-2 text-charcoal">Notable Varieties</h3>
                  <div className="flex flex-wrap gap-2">
                    {region.varieties.map((variety) => (
                      <span
                        key={variety}
                        className="bg-cream text-burgundy px-3 py-1 rounded-full text-sm"
                      >
                        {variety}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="btn-primary w-full">
                  Explore Region
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}