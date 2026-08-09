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
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 lg:gap-16 w-full mb-8 lg:mb-12">
          {/* Title */}
          <div className="shrink-0">
            <h2 className="font-tibere text-brand-navy text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight uppercase whitespace-nowrap">
              CHALLENGES WE <span className="text-[#BFA052] italic">SOLVE</span>
            </h2>
          </div>

          {/* Subheading with Vertical Divider Line */}
          <div className="relative flex items-center self-stretch">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#0C2C4D]" />
            <div className="pl-6 md:pl-8 py-1 max-w-2xl">
              <p className="font-poppins font-normal text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
                Every piece of land carries potential, but identifying the right one, at the right value, with the right future, is where most fail. That’s where we step in, removing uncertainty and replacing it with clarity and confidence.
              </p>
            </div>
          </div>
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
