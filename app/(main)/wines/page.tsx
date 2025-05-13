"use client"

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Wine, Search, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

// Dados simulados dos vinhos
const allWines = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: `Château Reserve ${2015 + (i % 8)}`,
  region: ["Bordeaux", "Burgundy", "Champagne", "Toscana"][i % 4],
  type: ["Tinto", "Branco", "Rosé", "Espumante"][i % 4],
  price: 100 + (i * 50),
  rating: 90 + (i % 8),
  image: [
    "https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg",
    "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg",
    "https://images.pexels.com/photos/5088188/pexels-photo-5088188.jpeg",
    "https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg"
  ][i % 4],
  year: 2015 + (i % 8)
}));

const WinesPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filters, setFilters] = useState({
    type: '',
    region: '',
    priceRange: '',
    rating: '',
  });

  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filtrar vinhos
  const filteredWines = allWines.filter(wine => {
    const matchesSearch = wine.name.toLowerCase().includes(search.toLowerCase());
    const matchesType = !filters.type || wine.type === filters.type;
    const matchesRegion = !filters.region || wine.region === filters.region;
    const matchesRating = !filters.rating || wine.rating >= parseInt(filters.rating);
    
    let matchesPrice = true;
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      matchesPrice = wine.price >= min && wine.price <= max;
    }

    return matchesSearch && matchesType && matchesRegion && matchesPrice && matchesRating;
  });

  // Paginação
  const totalPages = Math.ceil(filteredWines.length / itemsPerPage);
  const currentWines = filteredWines.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="pt-24 min-h-screen bg-cream">
      <div className="container-custom py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-gold"></div>
            <Wine className="h-6 w-6 mx-4 text-gold" />
            <div className="h-px w-12 bg-gold"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-charcoal">Nossa Coleção de Vinhos</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore nossa seleção premium de vinhos das melhores vinícolas do mundo.
          </p>
        </div>

        {/* Filtros e Busca */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar vinhos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            <select
              className="border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-burgundy"
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            >
              <option value="">Tipo de Vinho</option>
              <option value="Tinto">Tinto</option>
              <option value="Branco">Branco</option>
              <option value="Rosé">Rosé</option>
              <option value="Espumante">Espumante</option>
            </select>
            <select
              className="border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-burgundy"
              value={filters.region}
              onChange={(e) => setFilters({ ...filters, region: e.target.value })}
            >
              <option value="">Região</option>
              <option value="Bordeaux">Bordeaux</option>
              <option value="Burgundy">Burgundy</option>
              <option value="Champagne">Champagne</option>
              <option value="Toscana">Toscana</option>
            </select>
            <select
              className="border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-burgundy"
              value={filters.priceRange}
              onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
            >
              <option value="">Faixa de Preço</option>
              <option value="0-200">Até R$ 200</option>
              <option value="200-500">R$ 200 - R$ 500</option>
              <option value="500-1000">R$ 500 - R$ 1.000</option>
              <option value="1000-99999">Acima de R$ 1.000</option>
            </select>
            <select
              className="border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-burgundy"
              value={filters.rating}
              onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
            >
              <option value="">Avaliação</option>
              <option value="95">95+ pontos</option>
              <option value="90">90+ pontos</option>
              <option value="85">85+ pontos</option>
            </select>
          </div>
        </div>

        {/* Lista de Vinhos */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentWines.map((wine, index) => (
            <div
              key={wine.id}
              className={cn(
                "wine-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-700 delay-[calc(100ms*var(--index))]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              )}
              style={{ '--index': index } as React.CSSProperties}
            >
              <div className="relative h-64">
                <Image
                  src={wine.image}
                  alt={wine.name}
                  fill
                  className="wine-card-image object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute top-4 left-4 bg-burgundy text-white text-xs py-1 px-2 rounded">
                  {wine.type}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl text-charcoal">{wine.name}</h3>
                  <span className="font-sans text-lg font-semibold text-burgundy">
                    R$ {wine.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{wine.region}</p>
                <p className="text-gray-600 mb-4">Safra {wine.year}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="bg-gold-light text-white text-xs py-1 px-2 rounded">
                      {wine.rating} pts
                    </span>
                  </div>
                  <button className="btn-primary text-sm">
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Paginação */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={cn(
                  "px-4 py-2 rounded-md transition-colors duration-300",
                  currentPage === page
                    ? "bg-burgundy text-white"
                    : "bg-white text-burgundy hover:bg-burgundy hover:text-white"
                )}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WinesPage;