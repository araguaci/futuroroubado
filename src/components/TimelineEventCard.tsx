import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScandalEvent } from '@/types';
import { cn } from '@/lib/utils';

interface TimelineEventCardProps {
  event: ScandalEvent;
  isLeft: boolean;
  isMobile: boolean;
}

const TimelineEventCard: React.FC<TimelineEventCardProps> = ({ event, isLeft, isMobile }) => {
  return (
    <Card className={cn(
      "relative z-10 shadow-lg transition-all duration-300 hover:scale-[1.02]",
      // Removidas as translações que causavam sobreposição
      // { "md:translate-x-4": !isMobile && isLeft }, 
      // { "md:-translate-x-4": !isMobile && !isLeft } 
    )}>
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">{event.nome}</CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {event.governo} - {event.yearLabel}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 text-sm md:text-base">{event.descricao}</p>
      </CardContent>
    </Card>
  );
};

export default TimelineEventCard;