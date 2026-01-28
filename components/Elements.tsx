
import React from 'react';

// Word Component
// Typography: Large white sans-serif, very bold weight
// Interaction: Scales up 20% on hover with smooth transition
export const Word: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span className="inline-block text-white font-black text-[100px] leading-none tracking-tighter whitespace-nowrap mx-8 transition-transform duration-300 ease-out hover:scale-[1.2] cursor-default origin-center select-none">
      {text}
    </span>
  );
};

// Image Chip Component
// Small rounded-rectangle image chips (120-180px width)
// Fully pill-shaped (rounded-full)
// Interaction: Scales up 20% on hover with smooth transition
export const ImageChip: React.FC<{ src: string }> = ({ src }) => {
  return (
    <div className="relative inline-flex items-center justify-center mx-6 align-middle h-[110px] w-[180px] transition-transform duration-300 ease-out hover:scale-[1.2] cursor-default origin-center group/chip">
        <img 
            src={src} 
            alt="visual" 
            className="w-full h-full object-cover rounded-full border-2 border-white/10"
            loading="lazy"
        />
        {/* Overlay for a bit of 'tech' feel */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover/chip:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

// Dot Component
// Solid colored dots (green, orange, blue), perfect circles (60-90px)
// Interaction: Scales up 20% on hover with smooth transition
export const Dot: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div 
        className="inline-block rounded-full mx-6 align-middle h-[70px] w-[70px] transition-transform duration-300 ease-out hover:scale-[1.2] cursor-default origin-center shadow-lg"
        style={{ 
          backgroundColor: color,
          boxShadow: `0 0 20px ${color}33` // Subtle glow in the theme color
        }}
    />
  );
};
