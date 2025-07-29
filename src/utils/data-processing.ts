import { ScandalEvent, ScandalCategory } from '@/types';
import escandalosBrasil from '@/data/escandalos-brasil.json';
import justicaBrasil from '@/data/justica.json';
import sistemaFinanceiro from '@/data/sistema-financeiro.json';

export const categorizeScandal = (title: string, description: string): ScandalCategory => {
  const text = `${title.toLowerCase()} ${description.toLowerCase()}`;

  if (text.includes('venda de sentença') || text.includes('venda de liminares')) return 'Venda de Sentença';
  if (text.includes('grilagem')) return 'Grilagem de Terras';
  if (text.includes('pirâmide') || text.includes('ponzi')) return 'Esquema de Pirâmide';
  if (text.includes('lavagem de dinheiro') || text.includes('lavagem')) return 'Lavagem de Dinheiro';
  if (text.includes('evasão de divisas') || text.includes('banestado')) return 'Evasão de Divisas';
  if (text.includes('fraude contábil') || text.includes('fraude') || text.includes('bolha') || text.includes('rombo contábil')) return 'Fraude Financeira';
  if (text.includes('abuso de poder') || text.includes('impeachment') || text.includes('vaza jato')) return 'Abuso de Poder';
  if (text.includes('corrupção') || text.includes('mensalão') || text.includes('petrolão') || text.includes('desvio') || text.includes('propina')) return 'Corrupção';
  
  return 'Outros';
};

export const normalizeGovernmentName = (name: string): string => {
  if (!name) return 'Não especificado';
  let normalized = name.replace(/Governo\s*/i, '').trim();
  if (normalized.includes('Lula')) return 'Governo Lula (2003-2014)';
  if (normalized.includes('Dilma')) return 'Governo Dilma (2014-2016)';
  if (normalized.includes('Fernando Henrique')) return 'Governo Fernando Henrique (1995-2003)';
  if (normalized.includes('Itamar Franco')) return 'Governo Itamar Franco (1992-1995)';
  if (normalized.includes('Fernando Collor')) return 'Governo Fernando Collor (1990-1992)';
  if (normalized.includes('Sarney')) return 'Governo Sarney (1985-1990)';
  if (normalized.includes('João Figueiredo')) return 'Governo João Figueiredo (1979-1985)';
  return normalized;
};

const processData = (dataSet: any, type: 'politico' | 'justica' | 'financeiro'): ScandalEvent[] => {
  const allEvents: ScandalEvent[] = [];
  const parseYear = (yearKey: string): number => {
    if (yearKey === "Não especificado") return 9999;
    return parseInt(yearKey, 10);
  };

  for (const key in dataSet) {
    const year = parseYear(key);
    dataSet[key].forEach((event: any) => {
      const category = categorizeScandal(event.titulo, event.descricao);
      allEvents.push({
        nome: event.titulo,
        descricao: event.descricao,
        envolvidos: Array.isArray(event.envolvidos) ? event.envolvidos.join(', ') : (event.envolvidos || ''),
        governo: type === 'politico' ? normalizeGovernmentName(event.governo) : (event.estado || 'Não especificado'),
        consequencias: Array.isArray(event.consequencias) ? event.consequencias.join(', ') : (event.consequencias || ''),
        year: year,
        yearLabel: key,
        category: category,
      });
    });
  }
  const uniqueEvents = Array.from(new Map(allEvents.map(e => [e.nome, e])).values());
  return uniqueEvents.sort((a, b) => b.year - a.year);
};

export const processScandalsData = (): ScandalEvent[] => {
  try {
    return processData(escandalosBrasil, 'politico');
  } catch (error) {
    console.error("Error processing scandal data:", error);
    return [];
  }
};

export const processJusticaData = (): ScandalEvent[] => {
  try {
    return processData(justicaBrasil, 'justica');
  } catch (error) {
    console.error("Error processing justice data:", error);
    return [];
  }
};

export const processFinanceiroData = (): ScandalEvent[] => {
  try {
    return processData(sistemaFinanceiro, 'financeiro');
  } catch (error) {
    console.error("Error processing financial data:", error);
    return [];
  }
};