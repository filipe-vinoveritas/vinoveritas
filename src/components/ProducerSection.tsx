import React from 'react';
import WineCard from './WineCard';
import { Producer } from '../types/wine';
import { MapPin, Award, Calendar } from 'lucide-react';

interface ProducerSectionProps {
  producer: Producer;
  isEven: boolean;
}

const ProducerSection: React.FC<ProducerSectionProps> = ({ producer, isEven }) => {
  return (
    <section 
      className={`rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-3xl hover:scale-[1.02] ${
        isEven 
          ? 'bg-gradient-to-br from-burgundy via-deep-red to-wine-purple animate-slide-in-left' 
          : 'bg-gradient-to-br from-wine-purple via-deep-red to-burgundy animate-slide-in-right'
      }`}
    >
      <div className="p-8 md:p-12 relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-orange/5 rounded-full blur-2xl"></div>
        
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 tracking-wide drop-shadow-lg">
            {producer.name}
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
            {producer.location && (
              <div className="flex items-center text-gold bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg font-medium">{producer.location}</span>
              </div>
            )}
            {producer.established && (
              <div className="flex items-center text-gold bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Calendar className="w-5 h-5 mr-2" />
                <span className="text-lg font-medium">Desde {producer.established}</span>
              </div>
            )}
          </div>
          
          <div className="w-24 h-2 bg-gold-gradient mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10">
          {producer.wines.map((wine, index) => (
            <div 
              key={wine.id} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <WineCard wine={wine} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProducerSection;