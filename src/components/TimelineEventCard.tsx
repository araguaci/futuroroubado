import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ScandalEvent } from '@/types';
import { cn } from '@/lib/utils';
import ReadMore from '@/components/ReadMore';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import CategoryIcon from './CategoryIcon';

interface TimelineEventCardProps {
  event: ScandalEvent;
  isLeft: boolean;
  isMobile: boolean;
  onClick: (event: ScandalEvent) => void;
}

const TimelineEventCard: React.FC<TimelineEventCardProps> = ({ event, isLeft, isMobile, onClick }) => {
  const chatGptQuery = `Resuma escândalo brasileiro em 5 parágrafos com fontes, explicando o que foi, os principais envolvidos e as consequências: (título: ${event.nome}, descrição: ${event.descricao})`;
  const chatGptUrl = `https://chat.openai.com/?q=${encodeURIComponent(chatGptQuery)}`;

  return (
    <Card
      className={cn(
        "relative z-10 shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white flex flex-col h-full cursor-pointer",
      )}
      onClick={() => onClick(event)}
    >
      {!isMobile && (
        <div className={cn(
          "absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-[8px] border-solid border-transparent",
          { "right-[-8px] border-l-[8px] border-l-white": isLeft },
          { "left-[-8px] border-r-[8px] border-r-white": !isLeft }
        )} />
      )}
      <CardHeader>
        <div className="flex items-start gap-3">
          <CategoryIcon category={event.category} className="text-gray-500 mt-1 flex-shrink-0" />
          <div className="flex-grow">
            <CardTitle className="text-lg md:text-xl">{event.nome}</CardTitle>
            <CardDescription className="text-sm text-gray-600">
              {event.governo} - {event.yearLabel}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ReadMore text={event.descricao} maxLength={150} />
        {event.envolvidos && (
          <p className="text-gray-800 text-sm md:text-base font-medium mt-3">
            <span className="font-semibold">Envolvidos:</span> {event.envolvidos}
          </p>
        )}
        {event.consequencias && (
          <div className="text-gray-800 text-sm md:text-base font-medium mt-2">
            <span className="font-semibold">Consequências:</span>{' '}
            <ReadMore text={event.consequencias} maxLength={100} />
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" size="sm" className="w-full" onClick={(e) => e.stopPropagation()}>
          <span
            className="inline-flex items-center justify-center gap-2"
            onClick={() => window.open(chatGptUrl, '_blank', 'noopener noreferrer')}
          >
            Analisar com IA <ExternalLink className="h-4 w-4" />
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TimelineEventCard;