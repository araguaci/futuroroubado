import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import TimelineEventCard from './TimelineEventCard';
import { ScandalEvent } from '@/types';
import { useIsMobile } from '@/hooks/use-mobile'; // Import useIsMobile
import { cn } from '@/lib/utils'; // Import cn for conditional classes

interface TimelineProps {
  events: ScandalEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const isMobile = useIsMobile(); // Detect if on mobile

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
    return ['Todos', ...sortedGovernments.slice(0, 7)]; // Top 7 + Todos
  }, [events]);

  const filteredEvents = useMemo(() => {
    let currentEvents = events;

    // Aplicar filtro por governo
    if (activeFilter !== 'Todos') {
      currentEvents = currentEvents.filter(event => event.governo === activeFilter);
    }

    // Aplicar filtro por termo de busca
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      currentEvents = currentEvents.filter(event =>
        event.nome.toLowerCase().includes(lowerCaseSearchTerm) ||
        event.descricao.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    return currentEvents;
  }, [events, activeFilter, searchTerm]);

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
        {/* Central Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-400 transform -translate-x-1/2" aria-hidden="true"></div>

        {filteredEvents.length === 0 ? (
          <div className="text-center text-gray-600 text-lg mt-16">
            Nenhum escândalo encontrado com os critérios de busca/filtro.
          </div>
        ) : (
          filteredEvents.map((event, index) => {
            const showYear = event.year !== lastYear;
            lastYear = event.year;
            const isLeft = index % 2 === 0; // Determines side for desktop layout
            const cardIsLeft = isMobile ? false : isLeft; // Controls card background color

            return (
              <div key={`${event.nome}-${index}`} className="relative">
                {showYear && (
                  <div className="relative my-8" style={{ zIndex: 2 }}>
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                      <span className="text-white text-base font-bold">
                        {event.yearLabel === String(event.year) ? event.year : event.yearLabel}
                      </span>
                    </div>
                  </div>
                )}
                
                <div className={cn(
                  "relative mb-8 flex items-center w-full",
                  { "flex-row-reverse": !isMobile && isLeft } // Apply flex-row-reverse only on desktop if isLeft
                )}>
                  {/* Spacer for desktop layout */}
                  <div className={cn("hidden md:block", { "w-5/12": !isMobile })}></div>
                  
                  {/* Central dot */}
                  <div className="z-10 absolute left-1/2 transform -translate-x-1/2 md:relative">
                    <div className="w-4 h-4 bg-gray-800 border-2 border-white rounded-full shadow-sm"></div>
                  </div>
                  
                  {/* Event card container */}
                  <div className={cn(
                    "w-full px-2 md:px-0",
                    { "md:w-5/12": !isMobile } // Take 5/12 width on desktop
                  )}>
                    <TimelineEventCard event={event} isLeft={cardIsLeft} />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Timeline;