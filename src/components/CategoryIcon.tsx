import React from 'react';
import {
  Scale,
  Landmark,
  Gavel,
  TrendingDown,
  Users,
  Recycle,
  ArrowRightLeft,
  AlertTriangle,
  ShieldOff,
  Map,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScandalCategory } from '@/types';

interface CategoryIconProps {
  category: ScandalCategory | string;
  className?: string;
}

const iconMap: Record<ScandalCategory, React.ElementType> = {
  'Corrupção': Landmark,
  'Fraude Financeira': TrendingDown,
  'Abuso de Poder': ShieldOff,
  'Esquema de Pirâmide': Users,
  'Lavagem de Dinheiro': Recycle,
  'Venda de Sentença': Gavel,
  'Grilagem de Terras': Map,
  'Evasão de Divisas': ArrowRightLeft,
  'Outros': AlertTriangle,
};

const CategoryIcon: React.FC<CategoryIconProps> = ({ category, className }) => {
  const IconComponent = iconMap[category as ScandalCategory] || iconMap['Outros'];
  return <IconComponent className={cn("h-5 w-5", className)} />;
};

export default CategoryIcon;