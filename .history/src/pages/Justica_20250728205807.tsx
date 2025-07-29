import Timeline from '@/components/Timeline';
import React, { useState, useEffect } from 'react';
import { ScandalEvent } from '@/types';
import { processJusticaData } from '@/utils/data-processing';
import { StopWar } from '@/components/StopWar';

const Justica = () => {
  const [events, setEvents] = useState<ScandalEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const processedEvents = processJusticaData();
      setEvents(processedEvents);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#fafafa] relative text-gray-900">
      <div className="absolute inset-0 z-0 pointer-events-none bg-grid-pattern" />
      <div className="relative z-10">
        <Timeline events={events} isLoading={isLoading} pageType="justica" />
      </div>
      <StopWar />
    </div>
  );
};

export default Justica;