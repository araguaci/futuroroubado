import Timeline from '@/components/Timeline';
import React, { useState, useEffect } from 'react';
import { ScandalEvent } from '@/types';
import { processScandalsData } from '@/utils/data-processing'; // Importar a função do arquivo de utilitários

const Index = () => {
  const [events, setEvents] = useState<ScandalEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const processedEvents = processScandalsData();
      setEvents(processedEvents);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Timeline events={events} isLoading={isLoading} />
    </div>
  );
};

export default Index;