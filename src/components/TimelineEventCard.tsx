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

interface TimelineEventCardProps {
  event: ScandalEvent;
  isLeft: boolean;
}

const TimelineEventCard: React.FC<TimelineEventCardProps> = ({ event, isLeft }) => {
  const chatGptQuery = `https://chat.openai.com/?q=Me%20conte%20mais%20sobre%20o%20escândalo%20${encodeURIComponent(event.nome)}`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="block cursor-pointer transition-transform transform hover:scale-105">
          <div className={`p-4 rounded-lg shadow-lg ${isLeft ? 'bg-blue-100 hover:bg-blue-200' : 'bg-green-100 hover:bg-green-200'}`}>
            <h3 className="font-bold text-base md:text-lg mb-1 text-gray-900">{event.nome}</h3>
            <p className="text-sm text-gray-700 mb-2">{event.descricao}</p>
            <p className="text-xs text-gray-500"><strong>Data:</strong> {event.yearLabel}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">{event.nome}</DialogTitle>
          <DialogDescription className="text-gray-700">
            {event.descricao}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-gray-800">
          <p><strong>Envolvidos:</strong> {event.envolvidos}</p>
          <p><strong>Governo:</strong> {event.governo}</p>
          <p><strong>Consequências:</strong> {event.consequencias}</p>
          <p><strong>Ano:</strong> {event.yearLabel}</p>
        </div>
        <div className="flex justify-end">
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