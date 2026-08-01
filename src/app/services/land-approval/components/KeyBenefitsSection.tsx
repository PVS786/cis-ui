'use client';

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
  return (
    <section className="w-full pt-2 md:pt-4 pb-12 md:pb-16 relative overflow-hidden bg-transparent text-[#0C2C4D]">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 z-10 flex flex-col justify-start">
        
        {/* Editorial Heading Column */}
        <div className="flex flex-col items-center justify-center text-center space-y-3 mb-8 lg:mb-10 w-full max-w-4xl mx-auto">
          <h2 className="font-tibere text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0C2C4D] uppercase leading-none" style={{ wordSpacing: '0.25em' }}>
            KEY BENEFITS
          </h2>
          <p className="font-poppins font-normal text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl text-center">
            Delivering hassle-free land approvals and regulatory success
          </p>
        </div>

        {/* CONNECTED LINE & CARD LAYOUT */}
        <div className="relative pt-24 px-2">
          {/* Connected Line Behind the Ribbons */}
          <div className="absolute top-[48%] left-[10%] right-[10%] h-[1.5px] bg-[#BFA052]/50 z-0 hidden lg:block" />

          {/* Banners Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 justify-items-center items-start relative z-10 max-w-6xl mx-auto">
            {BENEFITS.map((benefit) => (
              <RibbonBanner
                key={benefit.id}
                benefit={benefit}
                show3DFolds={true}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
