import React from 'react';
import { Wine, Grape } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-wine-gradient text-white relative overflow-hidden min-h-[400px] flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gold/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-orange/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center animate-fade-in-up">
          <div className="flex items-center justify-center mb-8">
            <Grape className="w-12 h-12 mr-4 text-gold animate-pulse" />
            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-wide bg-gradient-to-r from-gold via-white to-gold bg-clip-text text-transparent">
              Vino Veritas
            </h1>
            <Wine className="w-12 h-12 ml-4 text-gold animate-pulse" />
          </div>
          <p className="text-2xl md:text-3xl font-light tracking-wider text-gold/90 max-w-3xl mx-auto mb-8">
            Catálogo Premium de Vinhos Brasileiros Selecionados
          </p>
          <div className="w-32 h-2 bg-gold-gradient mx-auto rounded-full shadow-lg"></div>
          <p className="text-lg text-white/80 mt-6 max-w-2xl mx-auto">
            Descubra a excelência dos vinhos nacionais das melhores vinícolas do Brasil
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-charcoal/30 to-transparent"></div>
    </header>
  );
};

export default Header;