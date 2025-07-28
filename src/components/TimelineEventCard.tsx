import React from 'react';
import { ScandalEvent } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react'; // Importar o ícone
import { cn } from '@/lib/utils'; // Importar cn para classes condicionais

interface TimelineEventCardProps {
  event: ScandalEvent;
  isLeft: boolean;
  isMobile: boolean; // Nova prop para indicar se está em mobile
}

const TimelineEventCard: React.FC<TimelineEventCardProps> = ({ event, isLeft, isMobile }) => {
  // Atualiza a query para incluir o nome e a descrição do escândalo
  const chatGptQuery = `https://chat.openai.com/?q=Me%20conte%20mais%20sobre%20o%20escândalo%20${encodeURIComponent(event.nome)}:%20${encodeURIComponent(event.descricao)}`;

  // Define as cores do cartão e do ponteiro
  const cardColors = {
    mobile: { bg: 'bg-gray-100', hover: 'hover:bg-gray-200', pointerBorder: 'border-gray-100' },
    left: { bg: 'bg-blue-100', hover: 'hover:bg-blue-200', pointerBorder: 'border-blue-100' },
    right: { bg: 'bg-green-100', hover: 'hover:bg-green-200', pointerBorder: 'border-green-100' },
  };

  const currentColors = isMobile
    ? cardColors.mobile
    : (isLeft ? cardColors.left : cardColors.right);

  // Determina as classes de estilo do cartão com base em isMobile e isLeft
  const cardClasses = cn(
    'p-4 rounded-lg shadow-lg relative', // Adicionado 'relative' para posicionamento do ponteiro
    currentColors.bg,
    currentColors.hover
  );

  // Determina as classes de estilo do ponteiro
  const pointerClasses = cn(
    'absolute w-0 h-0 border-t-8 border-b-8 border-solid',
    {
      [`border-l-8 ${currentColors.pointerBorder} -right-4`]: !isMobile && isLeft, // Ponteiro para a direita (cartão na esquerda)
      [`border-r-8 ${currentColors.pointerBorder} -left-4`]: !isMobile && !isLeft, // Ponteiro para a esquerda (cartão na direita)
      'top-1/2 -translate-y-1/2': !isMobile, // Centraliza verticalmente no desktop
    }
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="block cursor-pointer transition-transform transform hover:scale-105">
          <div className={cardClasses}>
            {!isMobile && ( // Renderiza o ponteiro apenas no desktop
              <div className={pointerClasses}></div>
            )}
            <h3 className="font-bold text-base md:text-lg mb-1 text-gray-900">{event.nome}</h3>
            <p className="text-sm text-gray-700 mb-2">{event.descricao}</p>
            <p className="text-xs text-gray-500"><strong>Data:</strong> {event.yearLabel}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-2xl overflow-y-auto max-h-[80vh]">
        <DialogHeader className="pb-4"> {/* Added pb-4 for spacing */}
          <DialogTitle className="text-2xl font-bold text-gray-900">{event.nome}</DialogTitle>
          <DialogDescription className="text-gray-700">
            {event.descricao}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 py-2 text-gray-800 text-sm"> {/* Adjusted gap and text size */}
          <p><strong>Envolvidos:</strong> {event.envolvidos}</p>
          <p><strong>Governo:</strong> {event.governo}</p>
          <p><strong>Consequências:</strong> {event.consequencias}</p>
          <p><strong>Ano:</strong> {event.yearLabel}</p>
        </div>
        <div className="flex justify-end pt-4"> {/* Added pt-4 for spacing */}
          <Button asChild>
            <a href={chatGptQuery} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> Perguntar ao ChatGPT
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TimelineEventCard;