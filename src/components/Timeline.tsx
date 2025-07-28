import React, { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import TimelineEventCard from './TimelineEventCard';
import { ScandalEvent } from '@/types';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { ArrowUp } from 'lucide-react'; // Importar o ícone de seta para cima

interface TimelineProps {
  events: ScandalEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
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
    const sortedGovernments = Object.entries(governmentCounts)
      .sort(([, a], [, b]) => b - a)
      .map(([gov]) => gov);
    return ['Todos', ...sortedGovernments.slice(0, 7)];
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
      
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {filters.map(filter => (
          <Button
            key={filter}
            variant={activeFilter === filter ? 'default' : 'outline'}
            onClick={() => {
              setActiveFilter(filter);
              setSearchTerm('');
            }}
            className="text-xs sm:text-sm"
          >
            {filter}
          </Button>
        ))}
        {(activeFilter !== 'Todos' || searchTerm) && (
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
      </div>

      <div className="relative">
        {/* Central Line: Aligned left on mobile, centered on desktop */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-400 md:transform md:-translate-x-1/2" aria-hidden="true"></div>

        {filteredEvents.length === 0 ? (
          <div className="text-center text-gray-600 text-lg mt-16">
            Nenhum escândalo encontrado com os critérios de busca/filtro.
          </div>
        ) : (
          filteredEvents.map((event, index) => {
            const showYear = event.year !== lastYear;
            lastYear = event.year;
            // isLeft now correctly indicates if the card should be on the left side for desktop layout
            const isLeft = index % 2 === 0; 

            return (
              <div key={`${event.nome}-${index}`} className="relative">
                {showYear && (
                  <div className="relative my-8" style={{ zIndex: 2 }}>
                    {/* Year display: Aligned with line on mobile, centered on desktop */}
                    <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 -translate-y-4 w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                      <span className="text-white text-base font-bold">
                        {event.yearLabel === String(event.year) ? event.year : event.yearLabel}
                      </span>
                    </div>
                    {/* Horizontal line for desktop year marker */}
                    <div className={cn(
                      "hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 bg-gray-400 w-24", // Increased width to w-24 (6rem)
                      { "left-[calc(50%-8rem)]": isLeft }, // Starts 6rem to the left of the year circle's left edge (0.5rem is half of w-16)
                      { "left-[calc(50%+2rem)]": !isLeft } // Starts at the year circle's right edge
                    )}></div>
                  </div>
                )}
                
                <div className={cn(
                  "relative mb-8 flex items-center w-full",
                  // On desktop, alternate sides. On mobile, always left-aligned (no flex-row-reverse)
                  // flex-row-reverse is applied when the card should be on the left side (isLeft)
                  { "flex-row-reverse": !isMobile && isLeft }
                )}>
                  {/* Spacer for desktop layout */}
                  <div className={cn("hidden md:block", { "w-5/12": !isMobile })}></div>
                  
                  {/* Central dot: Aligned with line on mobile, centered on desktop */}
                  <div className="z-10 absolute left-8 md:left-1/2 md:relative md:transform md:-translate-x-1/2">
                    <div className="w-4 h-4 bg-gray-800 border-2 border-white rounded-full shadow-sm"></div>
                  </div>
                  
                  {/* Event card container */}
                  <div className={cn(
                    "w-full px-2 md:px-0",
                    { "md:w-5/12": !isMobile }, // Take 5/12 width on desktop
                    { "ml-12": isMobile } // Add left margin for mobile to push card right of line/dot
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