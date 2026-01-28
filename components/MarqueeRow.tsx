
import React from 'react';
import { ItemType, MarqueeItem, RowConfig } from '../types';
import { Word, ImageChip, Dot } from './Elements';

interface MarqueeRowProps {
  config: RowConfig;
  className?: string;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ config, className = '' }) => {
  // We duplicate the items enough times to ensure smooth looping across very wide screens.
  const duplicatedItems = [...config.items, ...config.items, ...config.items, ...config.items];

  const renderItem = (item: MarqueeItem, index: number) => {
    const key = `${item.id}-${index}`;
    
    switch (item.type) {
      case ItemType.WORD:
        return <Word key={key} text={item.value} />;
      case ItemType.IMAGE:
        return <ImageChip key={key} src={item.value} />;
      case ItemType.DOT:
        return <Dot key={key} color={item.value || '#fff'} />;
      default:
        return null;
    }
  };

  const animationClass = config.direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';
  
  const durationMap = {
      slow: '50s',
      medium: '40s',
      fast: '30s'
  };

  return (
    <div className={`w-full overflow-visible whitespace-nowrap group flex items-center py-8 ${className}`}>
      <div 
        className={`inline-flex items-center ${animationClass} will-change-transform`}
        style={{ animationDuration: durationMap[config.speed] }}
      >
        {duplicatedItems.map((item, idx) => renderItem(item, idx))}
      </div>
    </div>
  );
};

export default MarqueeRow;
