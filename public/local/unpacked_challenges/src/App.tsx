import React, { useState } from 'react';
import { Challenge } from './types';
import { challenges } from './challengesData';
import AcquisitionPuzzle from './components/AcquisitionPuzzle';

export default function App() {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(challenges[0]);
  const [isHeroInserted, setIsHeroInserted] = useState<boolean>(true);

  const handleSelectChallenge = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
  };

  const handleToggleHero = () => {
    setIsHeroInserted(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative selection:bg-[#BFA052] selection:text-white overflow-x-hidden flex flex-col justify-start py-12 md:py-16">
      
      {/* BACKGROUND GRAPHICS (Subtle blueprint details and topographical maps) */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />
      
      {/* HERO SECTION CONTAINER */}
      <main className="relative w-full max-w-7xl mx-auto px-4 md:px-12 z-10 flex flex-col items-center">
        
        {/* HEADING AND DESCRIPTION ABOVE THE PUZZLE */}
        <div className="text-left w-full max-w-5xl mx-auto mb-10 md:mb-14">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0C2C4D] tracking-tight mb-6 leading-tight">
            Challenges We Solve
          </h1>
          <p className="text-base md:text-[18px] text-slate-600 font-sans leading-relaxed max-w-3xl">
            Every piece of land carries potential, but identifying the right one, at the right value, with the right future, is where most fail. That’s where we step in, removing uncertainty and replacing it with clarity and confidence.
          </p>
        </div>

        {/* PUZZLE STAGE - centered, clean, and full width without surrounding box borders/shadows */}
        <div className="w-full max-w-5xl relative">
          <AcquisitionPuzzle
            onSelectChallenge={handleSelectChallenge}
            selectedChallengeId={selectedChallenge?.id || null}
            isHeroInserted={isHeroInserted}
            onToggleHero={handleToggleHero}
          />
        </div>

      </main>
    </div>
  );
}
