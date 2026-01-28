import { ItemType, MarqueeItem, RowConfig } from './types';

export const COLORS = {
  GREEN: '#C7FF3F',
  ORANGE: '#FF7040',
  BLUE: '#2D61FF',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
};

const BASE_WORDS = [
  "interact", "chat", "earn", "engage", 
  "monetize", "discuss", "clone", "learn", 
  "scale", "create", "personalize", "educate", 
  "prompt", "influence", "train", "build"
];

// Helper to generate random items
const generateRowItems = (startIndex: number, count: number): MarqueeItem[] => {
  const items: MarqueeItem[] = [];
  for (let i = 0; i < count; i++) {
    const wordIndex = (startIndex + i) % BASE_WORDS.length;
    
    // Add Word
    items.push({
      id: `word-${startIndex}-${i}`,
      type: ItemType.WORD,
      value: BASE_WORDS[wordIndex],
    });

    // Randomly insert a visual element (Image or Dot)
    const random = Math.random();
    if (random > 0.6) {
       items.push({
        id: `img-${startIndex}-${i}`,
        type: ItemType.IMAGE,
        value: `https://picsum.photos/400/400?random=${startIndex + i}`,
      });
    } else if (random > 0.4) {
       const colors = [COLORS.GREEN, COLORS.ORANGE, COLORS.BLUE];
       items.push({
        id: `dot-${startIndex}-${i}`,
        type: ItemType.DOT,
        value: colors[Math.floor(Math.random() * colors.length)],
      });
    }
  }
  return items;
};

// Curated rows to match the aesthetic description closely
export const ROW_DATA: RowConfig[] = [
  {
    id: 'row-1',
    direction: 'left',
    speed: 'slow',
    items: [
      { id: '1-1', type: ItemType.WORD, value: 'build' },
      { id: '1-2', type: ItemType.IMAGE, value: 'https://picsum.photos/300/200?random=1' },
      { id: '1-3', type: ItemType.WORD, value: 'interact' },
      { id: '1-4', type: ItemType.DOT, value: COLORS.GREEN },
      { id: '1-5', type: ItemType.WORD, value: 'chat' },
      { id: '1-6', type: ItemType.IMAGE, value: 'https://picsum.photos/300/200?random=2' },
      { id: '1-7', type: ItemType.WORD, value: 'earn' },
      { id: '1-8', type: ItemType.WORD, value: 'engage' },
      { id: '1-9', type: ItemType.DOT, value: COLORS.ORANGE },
    ]
  },
  {
    id: 'row-2',
    direction: 'right',
    speed: 'medium',
    items: [
       { id: '2-1', type: ItemType.WORD, value: 'monetize' },
       { id: '2-2', type: ItemType.IMAGE, value: 'https://picsum.photos/300/200?random=3' },
       { id: '2-3', type: ItemType.WORD, value: 'discuss' },
       { id: '2-4', type: ItemType.IMAGE, value: 'https://picsum.photos/300/200?random=4' },
       { id: '2-5', type: ItemType.WORD, value: 'clone' },
       { id: '2-6', type: ItemType.DOT, value: COLORS.BLUE },
       { id: '2-7', type: ItemType.WORD, value: 'learn' },
    ]
  },
  {
    id: 'row-3',
    direction: 'left',
    speed: 'fast',
    items: [
       { id: '3-1', type: ItemType.DOT, value: COLORS.ORANGE },
       { id: '3-2', type: ItemType.WORD, value: 'scale' },
       { id: '3-3', type: ItemType.IMAGE, value: 'https://picsum.photos/300/200?random=5' },
       { id: '3-4', type: ItemType.WORD, value: 'create' },
       { id: '3-5', type: ItemType.WORD, value: 'personalize' },
       { id: '3-6', type: ItemType.DOT, value: COLORS.GREEN },
       { id: '3-7', type: ItemType.WORD, value: 'educate' },
       { id: '3-8', type: ItemType.IMAGE, value: 'https://picsum.photos/300/200?random=6' },
    ]
  },
    {
    id: 'row-4',
    direction: 'right',
    speed: 'medium',
    items: [
       { id: '4-1', type: ItemType.WORD, value: 'prompt' },
       { id: '4-2', type: ItemType.DOT, value: COLORS.BLUE },
       { id: '4-3', type: ItemType.WORD, value: 'influence' },
       { id: '4-4', type: ItemType.IMAGE, value: 'https://picsum.photos/300/200?random=7' },
       { id: '4-5', type: ItemType.WORD, value: 'train' },
       { id: '4-6', type: ItemType.WORD, value: 'transform' },
       { id: '4-7', type: ItemType.IMAGE, value: 'https://picsum.photos/300/200?random=8' },
    ]
  }
];