'use client';

import { useState, useEffect } from 'react';
import RibbonBanner, { BenefitItem } from './RibbonBanner';

const BENEFITS: BenefitItem[] = [
  {
    id: 'benefit-1',
    index: 0,
    title: 'Accelerated Project Timelines',
    description: 'Approvals managed efficiently to avoid delays.',
    iconName: 'timer',
    type: 'navy'
  },
  {
    id: 'benefit-2',
    index: 1,
    title: 'Regulatory Compliance',
    description: 'Minimize risks of penalties or legal issues.',
    iconName: 'shield',
    type: 'gold'
  },
  {
    id: 'benefit-3',
    index: 2,
    title: 'Single-Point Accountability',
    description: 'You have one partner managing all approvals.',
    iconName: 'handshake',
    type: 'navy'
  },
  {
    id: 'benefit-4',
    index: 3,
    title: 'Hassle-Free Land Approval',
    description: 'Focus on your project while we handle the bureaucracy.',
    iconName: 'award',
    type: 'gold'
  }
];

export default function KeyBenefitsSection() {
  const [activeBenefitIdx, setActiveBenefitIdx] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto-rotate key benefits expansion every 2.5 seconds when not hovered
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveBenefitIdx((prev) => (prev + 1) % BENEFITS.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section className="w-full pt-2 md:pt-4 pb-12 md:pb-16 relative overflow-hidden bg-transparent text-[#0C2C4D]">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 z-10 flex flex-col justify-start">
        
        {/* Top Header Row: Side-by-side Title & Subheading with Vertical Navy Line */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 lg:gap-16 w-full mb-8 lg:mb-12">
          {/* Title */}
          <div className="shrink-0">
            <h2 className="font-tibere text-brand-navy text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight uppercase whitespace-nowrap">
              KEY <span className="text-[#BFA052] italic">BENEFITS</span>
            </h2>
          </div>

          {/* Subheading with Vertical Divider Line */}
          <div className="relative flex items-center self-stretch">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#0C2C4D]" />
            <div className="pl-6 md:pl-8 py-1 max-w-2xl">
              <p className="font-poppins font-normal text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
                Delivering hassle-free land approvals and regulatory success.
              </p>
            </div>
          </div>
        </div>

        {/* CONNECTED LINE & CARD LAYOUT */}
        <div className="relative pt-28 px-2">
          {/* Connected Line Behind the Ribbons */}
          <div className="absolute top-[48%] left-[10%] right-[10%] h-[1.5px] bg-[#BFA052]/50 z-0 hidden lg:block" />

          {/* Banners Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-20 justify-items-center items-start relative z-10 max-w-7xl lg:max-w-[84rem] mx-auto">
            {BENEFITS.map((benefit, idx) => (
              <RibbonBanner
                key={benefit.id}
                benefit={benefit}
                show3DFolds={true}
                isExpandedControlled={idx === activeBenefitIdx}
                onHover={() => {
                  setIsHovered(true);
                  setActiveBenefitIdx(idx);
                }}
                onLeave={() => {
                  setIsHovered(false);
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
