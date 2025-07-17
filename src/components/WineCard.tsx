import React from 'react';
import { Wine } from '../types/wine';
import { Calendar, Award, Wine as WineIcon } from 'lucide-react';

interface WineCardProps {
  wine: Wine;
}

const WineCard: React.FC<WineCardProps> = ({ wine }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gold/20 hover:border-gold/60">
      <div className="aspect-[3/4] relative overflow-hidden">
        {wine.imageUrl ? (
          <img
            src={wine.imageUrl}
            alt={wine.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-burgundy/20 to-wine-purple/20">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-burgundy/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-burgundy/50 transition-colors duration-300">
                <WineIcon className="w-10 h-10 text-burgundy" />
              </div>
              <p className="text-charcoal/60 text-sm font-medium">
                Imagem em breve
              </p>
            </div>
          </div>
        )}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Wine type badge */}
        <div className="absolute top-4 right-4 bg-burgundy text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
          {wine.type}
        </div>
      </div>
      
      <div className="p-6 bg-gradient-to-br from-white to-cream/30">
        <h3 className="text-2xl font-serif font-bold text-charcoal mb-4 leading-tight group-hover:text-burgundy transition-colors duration-300">
          {wine.name}
        </h3>
        
        <div className="space-y-3 mb-4">
          {wine.vintage && (
            <div className="flex items-center text-charcoal/70">
              <Calendar className="w-5 h-5 mr-3 text-burgundy" />
              <span className="text-base font-medium">{wine.vintage}</span>
            </div>
          )}
          {wine.type && (
            <div className="flex items-center text-charcoal/70">
              <Award className="w-5 h-5 mr-3 text-gold" />
              <span className="text-base font-medium">{wine.type}</span>
            </div>
          )}
        </div>

        {wine.description && (
          <p className="text-charcoal/70 text-sm leading-relaxed line-clamp-3 group-hover:text-charcoal transition-colors duration-300">
            {wine.description}
          </p>
        )}
        
        {/* Decorative bottom border */}
        <div className="mt-4 h-1 bg-gradient-to-r from-burgundy via-gold to-burgundy rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default WineCard;