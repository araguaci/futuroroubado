"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ReadMoreProps {
  text: string;
  maxLength?: number;
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxLength = 150 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  const displayedText = isExpanded ? text : `${text.substring(0, maxLength)}...`;

  return (
    <div>
      <p>{displayedText}</p>
      <Button
        variant="link"
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-0 h-auto text-blue-600 hover:text-blue-800"
      >
        {isExpanded ? 'Ler menos' : 'Ler mais'}
      </Button>
    </div>
  );
};

export default ReadMore;