export type ScandalCategory =
  | 'Corrupção'
  | 'Fraude Financeira'
  | 'Abuso de Poder'
  | 'Esquema de Pirâmide'
  | 'Lavagem de Dinheiro'
  | 'Venda de Sentença'
  | 'Grilagem de Terras'
  | 'Evasão de Divisas'
  | 'Outros';

export interface ScandalEvent {
  nome: string;
  descricao: string;
  envolvidos: string;
  governo: string;
  consequencias: string;
  year: number;
  yearLabel: string;
  category: ScandalCategory;
}