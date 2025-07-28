import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import TimelineEventCard from './TimelineEventCard';
import { ScandalEvent } from '@/types';

interface TimelineProps {
  events: ScandalEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

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
    if (activeFilter === 'Todos') {
      return events;
    }
    return events.filter(event => event.governo === activeFilter);
  }, [events, activeFilter]);

  let lastYear: number | null = null;

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-8 font-sans">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Linha do Tempo de Escândalos Políticos</h1>
      
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {filters.map(filter => (
          <Button
            key={filter}
            variant={activeFilter === filter ? 'default' : 'outline'}
            onClick={() => setActiveFilter(filter)}
            className="text-xs sm:text-sm"
          >
            {filter}
          </Button>
        ))}
      </div>

      <div className="relative">
        {/* Central Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2" aria-hidden="true"></div>

        {filteredEvents.map((event, index) => {
          const showYear = event.year !== lastYear;
          lastYear = event.year;
          const isLeft = index % 2 === 0;

          return (
            <div key={`${event.nome}-${index}`}>
              {showYear && (
                <div className="relative my-8" style={{ zIndex: 2 }}>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border-4 border-white">
                    <span className="text-white text-sm font-bold">
                      {event.yearLabel === String(event.year) ? event.year : event.yearLabel}
                    </span>
                  </div>
                </div>
              )}
              
              <div className={`relative mb-8 flex items-center w-full ${isLeft ? 'flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-5/12"></div> {/* Spacer */}
                <div className="z-10 absolute left-1/2 transform -translate-x-1/2 md:relative">
                  <div className="w-4 h-4 bg-white border-2 border-gray-500 rounded-full"></div>
                </div>
                <div className="w-full md:w-5/12">
                  <TimelineEventCard event={event} isLeft={isLeft} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;