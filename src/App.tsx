import React from 'react';
import Header from './components/Header';
import ProducerSection from './components/ProducerSection';
import { wineData } from './data/wineData';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal via-burgundy-dark to-charcoal">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="space-y-20">
          {wineData.map((producer, index) => (
            <ProducerSection
              key={producer.id}
              producer={producer}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-charcoal text-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-1 bg-gold-gradient mx-auto mb-6 rounded-full"></div>
          <p className="text-xl font-serif mb-2">Vino Veritas</p>
          <p className="text-gold/80">Catálogo Premium de Vinhos Brasileiros</p>
          <p className="text-white/60 mt-4 text-sm">
            Descubra a excelência dos vinhos nacionais
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;