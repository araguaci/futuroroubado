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
      "relative z-10 shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white",
    )}>
      {!isMobile && ( // Only show pointer on desktop
        <div className={cn(
          "absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-[8px] border-solid border-transparent",
          { "right-[-8px] border-l-[8px] border-l-white": isLeft }, // Pointer for left-aligned card (points right)
          { "left-[-8px] border-r-[8px] border-r-white": !isLeft }  // Pointer for right-aligned card (points left)
        )} />
      )}
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