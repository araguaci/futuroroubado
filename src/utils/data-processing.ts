import { ScandalEvent } from '@/types';
import escandalosBrasil from '@/data/escandalos-brasil.json';

export const normalizeGovernmentName = (name: string): string => {
  if (!name) return 'Não especificado';
  // Remove "Governo" prefix and trim whitespace
  let normalized = name.replace(/Governo\s*/i, '').trim();

  // Handle specific cases for better grouping
  if (normalized.includes('Lula')) {
    return 'Governo Lula (2003-2014)';
  }
  if (normalized.includes('Dilma')) {
    return 'Governo Dilma (2014-2016)';
  }
  if (normalized.includes('Fernando Henrique')) {
    return 'Governo Fernando Henrique (1995-2003)';
  }
  if (normalized.includes('Itamar Franco')) {
    return 'Governo Itamar Franco (1992-1995)';
  }
  if (normalized.includes('Fernando Collor')) {
    return 'Governo Fernando Collor (1990-1992)';
  }
  if (normalized.includes('Sarney')) {
    return 'Governo Sarney (1985-1990)';
  }
  if (normalized.includes('João Figueiredo')) {
    return 'Governo João Figueiredo (1979-1985)';
  }

  return normalized;
};

export const processScandalsData = (): ScandalEvent[] => {
  try {
    const allEvents: ScandalEvent[] = [];

    const parseYear = (yearKey: string): number => {
      if (yearKey === "Não especificado") {
        return 9999; // Assign a very high year to place it at the end
      }
      // For "1990s", "1995-2002", etc., parseInt will correctly extract the starting year
      return parseInt(yearKey, 10);
    };

    for (const key in escandalosBrasil) {
      const year = parseYear(key);

      (escandalosBrasil as any)[key].forEach((event: any) => {
        allEvents.push({
          nome: event.titulo,
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