import Timeline from '@/components/Timeline';
import React from 'react';
import { ScandalEvent } from '@/types';
import scandalsPart1 from '@/data/scandals_part1.json';
import scandalsPart2 from '@/data/scandals_part2.json';
import { normalizeGovernmentName } from '@/utils/data-processing'; // Importar a nova função

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

    // Processar scandalsPart1
    for (const key in scandalsPart1) {
      const year = parseYear(key);

      (scandalsPart1 as any)[key].forEach((event: any) => {
        allEvents.push({
          nome: event.nome,
          descricao: event.descricao,
          envolvidos: event.envolvidos,
          governo: normalizeGovernmentName(event.governo), // Normalizar o nome do governo
          consequencias: event.consequencias || '',
          year: year,
          yearLabel: key,
        });
      });
    }

    // Processar scandalsPart2
    for (const key in scandalsPart2) {
      const year = parseYear(key);

      (scandalsPart2 as any)[key].forEach((event: any) => {
        allEvents.push({
          nome: event.titulo,
          descricao: event.descricao,
          envolvidos: event.envolvidos,
          governo: normalizeGovernmentName(event.governo), // Normalizar o nome do governo
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
  const events = processScandalsData();

  return (
    <div className="bg-gray-50 min-h-screen">
      <Timeline events={events} />
    </div>
  );
};

export default Index;