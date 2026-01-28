export enum ItemType {
  WORD = 'WORD',
  IMAGE = 'IMAGE',
  DOT = 'DOT',
}

export interface MarqueeItem {
  id: string;
  type: ItemType;
  value: string; // Text content or Image URL or Color hex
  color?: string; // Specific for dots or text accents
}

export interface RowConfig {
  id: string;
  items: MarqueeItem[];
  direction: 'left' | 'right';
  speed: 'fast' | 'medium' | 'slow';
}