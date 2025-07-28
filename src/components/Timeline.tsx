import React, { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import TimelineEventCard from './TimelineEventCard';
import { ScandalEvent } from '@/types';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { ArrowUp } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton'; // Importar o componente Skeleton

interface TimelineProps {
  events: ScandalEvent[];
  isLoading: boolean; // Nova prop para o estado de carregamento
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
      .slice(0, 7); // Top 7 governments

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
        event.descricao.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    return currentEvents;
  }, [events, activeFilter, searchTerm]);

  const handleClearFilters = () => {
    setActiveFilter('Todos');
    setSearchTerm('');
  };

  const handleScroll = () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll animation
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
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">Linha do Tempo de Escândalos Políticos</h1>
      
      {/* Filtros e busca */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {isLoading ? (
          // Esqueletos para os botões de filtro
          <>
            <Skeleton className="h-8 w-20 rounded-md" />
            <Skeleton className="h-8 w-24 rounded-md" />
            <Skeleton className="h-8 w-28 rounded-md" />
          </>
        ) : (
          filters.map(filter => (
            <Button
              key={filter.name}
              variant={activeFilter === filter.name ? 'default' : 'outline'}
              onClick={() => {
                setActiveFilter(filter.name);
                setSearchTerm('');
              }}
              className="text-xs sm:text-sm"
            >
              {filter.name} {filter.count > 0 && `(${filter.count})`}
            </Button>
          ))
        )}
        {!isLoading && (activeFilter !== 'Todos' || searchTerm) && (
          <Button
            variant="ghost"
            onClick={handleClearFilters}
            className="text-xs sm:text-sm text-gray-600 hover:text-gray-900"
          >
            Limpar Filtros
          </Button>
        )}
      </div>

      <div className="mb-12 flex justify-center px-4">
        {isLoading ? (
          <Skeleton className="w-full max-w-md h-10 rounded-md" />
        ) : (
          <Input
            type="text"
            placeholder="Buscar escândalo por nome ou descrição..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setActiveFilter('Todos');
            }}
            className="w-full max-w-md"
          />
        )}
      </div>

      <div className="relative">
        {/* Central Line: Aligned left on mobile, centered on desktop */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-400 md:transform md:-translate-x-1/2" aria-hidden="true"></div>

        {isLoading ? (
          // Renderiza esqueletos quando está carregando
          <div className="space-y-8">
            {[...Array(5)].map((_, i) => ( // Renderiza 5 cartões de esqueleto
              <div key={i} className="relative mb-8">
                {/* Esqueleto do marcador de ano */}
                <div className="relative h-24 flex items-center justify-center" style={{ zIndex: 2 }}>
                  <Skeleton className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-16 h-16 rounded-full" />
                  <div className={cn(
                    "hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 bg-gray-400 w-24",
                    { "left-[calc(50%-8rem)]": i % 2 === 0 }, // Alterna lado para simular layout
                    { "left-[calc(50%+2rem)]": i % 2 !== 0 }
                  )}></div>
                </div>
                
                <div className={cn(
                  "relative flex items-center w-full",
                  { "flex-row-reverse": !isMobile && i % 2 === 0 } // Simula alternância de lado
                )}>
                  <div className={cn("hidden md:block", { "w-5/12": !isMobile })}></div>
                  
                  {/* Esqueleto do ponto central */}
                  <div className="z-10 absolute left-8 md:left-1/2 top-1/2 -translate-y-1/2 md:transform md:-translate-x-1/2">
                    <Skeleton className="w-4 h-4 rounded-full" />
                  </div>
                  
                  {/* Esqueleto do cartão do evento */}
                  <div className={cn(
                    "w-full px-2 md:px-0",
                    { "md:w-5/12": !isMobile },
                    { "ml-12": isMobile }
                  )}>
                    <Skeleton className="h-32 w-full rounded-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="text-center text-gray-600 text-lg mt-16">
            Nenhum escândalo encontrado com os critérios de busca/filtro.
          </div>
        ) : (
          filteredEvents.map((event, index) => {
            const showYear = event.year !== lastYear;
            lastYear = event.year;
            const isLeft = index % 2 === 0; 

            return (
              <div key={`${event.nome}-${index}`} className="relative mb-8">
                {showYear && (
                  <div className="relative h-24 flex items-center justify-center" style={{ zIndex: 2 }}>
                    <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                      <span className="text-white text-base font-bold">
                        {event.yearLabel}
                      </span>
                    </div>
                    <div className={cn(
                      "hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 bg-gray-400 w-24",
                      { "left-[calc(50%-8rem)]": isLeft },
                      { "left-[calc(50%+2rem)]": !isLeft }
                    )}></div>
                  </div>
                )}
                
                <div className={cn(
                  "relative flex items-center w-full",
                  { "flex-row-reverse": !isMobile && isLeft }
                )}>
                  <div className={cn("hidden md:block", { "w-5/12": !isMobile })}></div>
                  
                  <div className="z-10 absolute left-8 md:left-1/2 top-1/2 -translate-y-1/2 md:transform md:-translate-x-1/2">
                    <div className="w-4 h-4 bg-gray-800 border-2 border-white rounded-full shadow-sm"></div>
                  </div>
                  
                  <div className={cn(
                    "w-full px-2 md:px-0",
                    { "md:w-5/12": !isMobile },
                    { "ml-12": isMobile }
                  )}>
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