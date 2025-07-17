import React from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedProducer: string;
  setSelectedProducer: (producer: string) => void;
  producers: string[];
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  selectedProducer,
  setSelectedProducer,
  producers,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-cream/50 p-6 mb-12">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-charcoal/60 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar vinhos ou produtores..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-cream/70 rounded-xl focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy transition-all duration-300 bg-white/90"
          />
        </div>
        <div className="md:w-80 relative">
          <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-charcoal/60 w-5 h-5" />
          <select
            value={selectedProducer}
            onChange={(e) => setSelectedProducer(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-cream/70 rounded-xl focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy transition-all duration-300 bg-white/90 appearance-none cursor-pointer"
          >
            <option value="">Todos os Produtores</option>
            {producers.map((producer) => (
              <option key={producer} value={producer}>
                {producer}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;