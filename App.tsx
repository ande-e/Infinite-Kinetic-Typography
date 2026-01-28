import React from 'react';
import { ROW_DATA } from './constants';
import MarqueeRow from './components/MarqueeRow';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-center">
      {/* Background radial gradient for subtle depth, optional but enhances aesthetic */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/20 via-black to-black pointer-events-none" />

      <main className="z-10 flex flex-col gap-12 md:gap-20 lg:gap-32 w-full py-20">
        {ROW_DATA.map((rowConfig, index) => (
          <MarqueeRow 
            key={rowConfig.id} 
            config={rowConfig} 
            // Stagger negative margins or transforms to create a more dynamic 'chaos'
            className={index % 2 === 0 ? '-rotate-1 scale-105' : 'rotate-1 scale-105'} 
          />
        ))}
      </main>

      {/* Optional: Interactive overlay or branding */}
      <div className="absolute bottom-8 right-8 text-white/20 font-sans text-sm pointer-events-none">
        SCROLL . INFINITE . LOOP
      </div>
    </div>
  );
};

export default App;