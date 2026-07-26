'use client';

import { useState } from 'react';
import { Challenge } from './types';
import { challenges } from './challengesData';
import AcquisitionPuzzle from './AcquisitionPuzzle';

export default function AcquisitionChallengesSection() {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(challenges[0]);
  const [isHeroInserted, setIsHeroInserted] = useState<boolean>(true);

  const handleSelectChallenge = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
  };

  const handleToggleHero = () => {
    setIsHeroInserted(prev => !prev);
  };

  return (
    <section className="w-full pt-2 md:pt-4 pb-6 md:pb-8 relative overflow-hidden bg-transparent text-[#0C2C4D]">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 z-10 flex flex-col items-center">
        
        {/* HEADING AND DESCRIPTION ABOVE THE PUZZLE */}
        <div className="space-y-3 mb-8 lg:mb-10 w-full text-left">
          <h2 className="font-tibere font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0C2C4D] tracking-tight leading-none uppercase">
            Challenges We Solve
          </h2>
          <p className="font-poppins font-normal text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
            Every piece of land carries potential, but identifying the right one, at the right value, with the right future, is where most fail. That’s where we step in, removing uncertainty and replacing it with clarity and confidence.
          </p>
        </div>

        {/* PUZZLE STAGE */}
        <div className="w-full max-w-5xl relative">
          <AcquisitionPuzzle
            onSelectChallenge={handleSelectChallenge}
            selectedChallengeId={selectedChallenge?.id || null}
            isHeroInserted={isHeroInserted}
            onToggleHero={handleToggleHero}
          />
        </div>

      </div>
    </section>
  );
}
