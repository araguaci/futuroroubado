"use client";

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ScandalEvent } from '@/types';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import CategoryIcon from './CategoryIcon';

interface EventDetailDialogProps {
  event: ScandalEvent | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const EventDetailDialog: React.FC<EventDetailDialogProps> = ({ event, isOpen, onOpenChange }) => {
  if (!event) {
    return null;
  }

  const chatGptQuery = `Resuma escândalo brasileiro em 5 parágrafos com fontes, explicando o que foi, os principais envolvidos e as consequências: (título: ${event.nome}, descrição: ${event.descricao})`;
  const chatGptUrl = `https://chat.openai.com/?q=${encodeURIComponent(chatGptQuery)}`;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-4">
            <CategoryIcon category={event.category} className="text-gray-700 mt-1.5 flex-shrink-0 h-7 w-7" />
            <div className="flex-grow">
              <DialogTitle className="text-2xl font-bold">{event.nome}</DialogTitle>
              <DialogDescription className="text-md text-gray-600">
                {event.governo} - {event.yearLabel}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-1">Descrição:</h3>
            <p className="text-gray-800">{event.descricao}</p>
          </div>
          {event.envolvidos && (
            <div>
              <h3 className="font-semibold text-lg mb-1">Envolvidos:</h3>
              <p className="text-gray-800">{event.envolvidos}</p>
            </div>
          )}
          {event.consequencias && (
            <div>
              <h3 className="font-semibold text-lg mb-1">Consequências:</h3>
              <p className="text-gray-800">{event.consequencias}</p>
            </div>
          )}
        </div>
        <div className="flex justify-end pt-4 border-t">
          <Button asChild variant="outline">
            <span
              className="inline-flex items-center justify-center gap-2"
              onClick={() => window.open(chatGptUrl, '_blank', 'noopener noreferrer')}
            >
              Analisar com IA <ExternalLink className="h-4 w-4" />
            </span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailDialog;