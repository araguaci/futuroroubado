import React, { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import TimelineEventCard from './TimelineEventCard';
import { ScandalEvent } from '@/types';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { ArrowUp } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface TimelineProps {
  events: ScandalEvent[];
  isLoading: boolean;
}

const Timeline: React.FC<TimelineProps> = ({ events, isLoading }) => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);
  const isMobile = useIsMobile();

  const filters = useMemo(() => {
    const governmentCounts: { [key: string]: number } = {};
    events.forEach(event => {
      if (event.governo && event.governo !== 'Não especificado') {
        governmentCounts[event.governo] = (governmentCounts[event.governo] || 0) + 1;
      }
    });

    const governmentFilters = Object.entries(governmentCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 7);

    const allEventsCount = events.length;

    return [{ name: 'Todos', count: allEventsCount }, ...governmentFilters];
  }, [events]);

  const filteredEvents = useMemo(() => {
    let currentEvents = events;

    if (activeFilter !== 'Todos') {
      currentEvents = currentEvents.filter(event => event.governo === activeFilter);
    }

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      currentEvents = currentEvents.filter(event =>
        event.nome.toLowerCase().includes(lowerCaseSearchTerm) ||
        event.descricao.toLowerCase().includes(lowerCaseSearchTerm) ||
        (event.envolvidos && event.envolvidos.toLowerCase().includes(lowerCaseSearchTerm))
      );
    }

    return currentEvents;
  }, [events, activeFilter, searchTerm]);

  const handleClearFilters = () => {
    setActiveFilter('Todos');
    setSearchTerm('');
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let lastYear: number | null = null;

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-8 font-sans">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Linha do Tempo de Escândalos Políticos</h1>
        <p className="text-md text-gray-600 mt-2">Uma retrospectiva dos principais casos de corrupção no Brasil.</p>
      </header>
      
      {/* Painel de Controle: Filtros e Busca */}
      <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-md mb-12 sticky top-4 z-20 border">
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          {/* Filtros */}
          <div className="flex-grow w-full">
            <label className="text-sm font-semibold text-gray-700 mb-2 block">Filtrar por Governo:</label>
            <div className="flex flex-wrap gap-2">
              {isLoading ? (
                <>
                  <Skeleton className="h-9 w-20 rounded-md" />
                  <Skeleton className="h-9 w-24 rounded-md" />
                  <Skeleton className="h-9 w-28 rounded-md" />
                </>
              ) : (
                filters.map(filter => (
                  <Button
                    key={filter.name}
                    variant={activeFilter === filter.name ? 'default' : 'outline'}
                    onClick={() => setActiveFilter(filter.name)}
                    className="text-xs sm:text-sm"
                    size="sm"
                  >
                    {filter.name} {filter.count > 0 && `(${filter.count})`}
                  </Button>
                ))
              )}
            </div>
          </div>
          
          {/* Busca */}
          <div className="flex-shrink-0 w-full sm:w-auto sm:max-w-xs">
            <label htmlFor="search-input" className="text-sm font-semibold text-gray-700 mb-2 block">Buscar por termo:</label>
            {isLoading ? (
              <Skeleton className="w-full h-10 rounded-md" />
            ) : (
              <Input
                id="search-input"
                type="text"
                placeholder="Ex: Mensalão, nome, etc."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            )}
          </div>
        </div>
        
        {!isLoading && (activeFilter !== 'Todos' || searchTerm) && (
          <div className="mt-4 flex justify-center">
            <Button
              variant="ghost"
              onClick={handleClearFilters}
              className="text-xs sm:text-sm text-blue-600 hover:text-blue-800"
            >
              Limpar Filtros e Busca
            </Button>
          </div>
        )}
      </div>

      <div className="relative">
        {/* Central Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-300 md:transform md:-translate-x-1/2" aria-hidden="true"></div>

        {isLoading ? (
          <div className="space-y-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={cn("relative flex items-center w-full", { "md:flex-row-reverse": i % 2 === 0 })}>
                <div className="hidden md:block md:w-1/2"></div>
                <div className="z-10 absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 md:transform md:-translate-x-1/2">
                  <Skeleton className="w-4 h-4 rounded-full" />
                </div>
                <div className={cn("w-full md:w-1/2", isMobile ? "pl-10 pr-2" : (i % 2 === 0 ? "md:pr-8" : "md:pl-8"))}>
                  <Skeleton className="h-40 w-full rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="text-center text-gray-600 text-lg mt-16 bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-2">Nenhum resultado</h3>
            <p>Nenhum escândalo foi encontrado com os critérios de busca/filtro selecionados.</p>
          </div>
        ) : (
          filteredEvents.map((event, index) => {
            const showYear = event.year !== lastYear;
            lastYear = event.year;
            const isLeft = !isMobile && index % 2 === 0;

            return (
              <div key={`${event.nome}-${index}`} className="relative mb-8">
                {showYear && (
                  <div className="relative h-24 flex items-center justify-center" style={{ zIndex: 2 }}>
                    <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                      <span className="text-white text-lg font-bold">
                        {event.yearLabel}
                      </span>
                    </div>
                  </div>
                )}
                
                <div className={cn("relative flex items-center w-full", { "md:flex-row-reverse": isLeft })}>
                  <div className="hidden md:block md:w-1/2"></div>
                  <div className="z-10 absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 md:transform md:-translate-x-1/2">
                    <div className="w-4 h-4 bg-gray-800 border-2 border-white rounded-full shadow-sm"></div>
                  </div>
                  <div className={cn("w-full md:w-1/2", isMobile ? "pl-10 pr-2" : (isLeft ? "md:pr-8" : "md:pl-8"))}>
                    <TimelineEventCard event={event} isLeft={isLeft} isMobile={isMobile} />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {showScrollToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 rounded-full shadow-lg bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
          <span className="sr-only">Voltar ao Topo</span>
        </Button>
      )}
    </div>
  );
};

export default Timeline;