import Timeline from '@/components/Timeline';
import React, { useState, useEffect } from 'react';
import { ScandalEvent } from '@/types';
import escandalosBrasil from '@/data/escandalos-brasil.json'; // Importar o novo arquivo de dados
import { normalizeGovernmentName } from '@/utils/data-processing';

const processScandalsData = (): ScandalEvent[] => {
  try {
    const allEvents: ScandalEvent[] = [];

    const parseYear = (yearKey: string): number => {
      if (yearKey === "Não especificado") {
        return 9999; // Assign a very high year to place it at the end
      }
      // For "1990s", "1995-2002", etc., parseInt will correctly extract the starting year
      return parseInt(yearKey, 10);
    };

    // Processar o novo arquivo escandalosBrasil
    for (const key in escandalosBrasil) {
      const year = parseYear(key);

      (escandalosBrasil as any)[key].forEach((event: any) => {
        allEvents.push({
          nome: event.titulo, // Mapear 'titulo' para 'nome'
          descricao: event.descricao,
          envolvidos: event.envolvidos,
          governo: normalizeGovernmentName(event.governo),
          consequencias: event.consequencias || '',
          year: year,
          yearLabel: key,
        });
      });
    }

    // Remover duplicatas baseadas no nome do evento
    const uniqueEvents = Array.from(new Map(allEvents.map(e => [e.nome, e])).values());
    
    // Ordenar do mais recente para o mais antigo
    return uniqueEvents.sort((a, b) => b.year - a.year);
  } catch (error) {
    console.error("Error processing scandal data:", error);
    return [];
  }
};

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