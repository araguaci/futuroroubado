import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { SheetClose } from "@/components/ui/sheet";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TimelineFilterControlsProps {
  isLoading: boolean;
  filters: { name: string; count: number }[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedGraveTopics: string[];
  setSelectedGraveTopics: (topics: string[]) => void;
  years: string[];
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  handleClearFilters: () => void;
  filterLabel: string;
  filterPlaceholder: string;
}

// Tópicos graves predefinidos para o filtro
const GRAVE_TOPICS = [
  "Corrupção",
  "Desvio de Verba",
  "Impeachment",
  "Lava Jato",
  "Mensalão",
  "Petrolão",
  "Fraude",
  "Propina",
  "Escândalo"
];

const TimelineFilterControls: React.FC<TimelineFilterControlsProps> = ({
  isLoading,
  filters,
  activeFilter,
  setActiveFilter,
  searchTerm,
  setSearchTerm,
  selectedGraveTopics,
  setSelectedGraveTopics,
  years,
  selectedYear,
  setSelectedYear,
  handleClearFilters,
  filterLabel,
  filterPlaceholder
}) => {
  return (
    <div className="grid gap-6">
      <div>
        <label className="text-sm font-semibold text-gray-700 mb-2 block">Filtrar por {filterLabel}:</label>
        <div className="flex flex-wrap gap-2">
          {isLoading ? (
            <>
              <Skeleton className="h-9 w-20 rounded-md" />
              <Skeleton className="h-9 w-24 rounded-md" />
              <Skeleton className="h-9 w-28 rounded-md" />
            </>
          ) : (
            filters.map(filter => (
              <SheetClose asChild key={filter.name}>
                <Button
                  variant={activeFilter === filter.name ? 'default' : 'outline'}
                  onClick={() => setActiveFilter(filter.name)}
                  className="text-xs sm:text-sm"
                  size="sm"
                >
                  {filter.name} {filter.count > 0 && `(${filter.count})`}
                </Button>
              </SheetClose>
            ))
          )}
        </div>
      </div>
      
      <div>
        <label htmlFor="search-input" className="text-sm font-semibold text-gray-700 mb-2 block">Buscar por termo:</label>
        {isLoading ? (
          <Skeleton className="w-full h-10 rounded-md" />
        ) : (
          <Input
            id="search-input"
            type="text"
            placeholder={filterPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        )}
      </div>

      <div>
        <label className="text-sm font-semibold text-gray-700 mb-2 block">Tópicos Graves:</label>
        {isLoading ? (
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-9 w-24 rounded-md" />
            <Skeleton className="h-9 w-28 rounded-md" />
          </div>
        ) : (
          <ToggleGroup 
            type="multiple" 
            value={selectedGraveTopics} 
            onValueChange={setSelectedGraveTopics}
            className="flex flex-wrap justify-start gap-2"
          >
            {GRAVE_TOPICS.map(topic => (
              <ToggleGroupItem 
                key={topic} 
                value={topic} 
                aria-label={`Toggle ${topic}`}
                className="text-xs sm:text-sm px-3 py-1.5 rounded-md"
              >
                {topic}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        )}
      </div>

      <div>
        <label className="text-sm font-semibold text-gray-700 mb-2 block">Filtrar por Ano:</label>
        {isLoading ? (
          <Skeleton className="w-full h-10 rounded-md" />
        ) : (
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione o Ano" />
            </SelectTrigger>
            <SelectContent>
              {years.map(year => (
                <SelectItem key={year} value={year}>
                  {year === 'Todos' ? 'Todos os Anos' : year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>

      {!isLoading && (activeFilter !== 'Todos' || searchTerm || selectedGraveTopics.length > 0 || selectedYear !== 'Todos') && (
        <div className="pt-4 border-t">
          <SheetClose asChild>
            <Button
              variant="ghost"
              onClick={handleClearFilters}
              className="w-full text-blue-600 hover:text-blue-800"
            >
              Limpar Filtros e Busca
            </Button>
          </SheetClose>
        </div>
      )}
    </div>
  );
};

export default TimelineFilterControls;