import React from 'react';
import { ScandalEvent } from '@/types';

interface TimelineEventCardProps {
  event: ScandalEvent;
  isLeft: boolean;
}

const TimelineEventCard: React.FC<TimelineEventCardProps> = ({ event, isLeft }) => {
  const chatGptQuery = `https://chat.openai.com/?q=Me%20conte%20mais%20sobre%20o%20escândalo%20${encodeURIComponent(event.nome)}`;

  return (
    <a href={chatGptQuery} target="_blank" rel="noopener noreferrer" className="block transition-transform transform hover:scale-105">
      <div className={`p-4 rounded-lg shadow-lg ${isLeft ? 'bg-blue-100 hover:bg-blue-200' : 'bg-green-100 hover:bg-green-200'}`}>
        <h3 className="font-bold text-base md:text-lg mb-1 text-gray-900">{event.nome}</h3>
        <p className="text-sm text-gray-700 mb-2">{event.descricao}</p>
        <p className="text-xs text-gray-500"><strong>Data:</strong> {event.yearLabel}</p>
      </div>
    </a>
  );
};

export default TimelineEventCard;