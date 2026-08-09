'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Trophy,
  Star,
  ChevronRight
} from 'lucide-react';
import TeamDnaSection from './components/TeamDnaSection';
import JoinOurTeamSection from './components/JoinOurTeamSection';

const HERO_CONTENT = {
  backgroundImage: "/career/career-hero.png",
};

// Custom Growth Chart Icon matching img1 precisely (3 bars + straight diagonal growth arrow with 4.0px clear space above all bars)
const GrowthChartIcon = ({ className = "w-7.5 h-7.5 text-white" }: { className?: string }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className}>
    {/* Bar 1 */}
    <rect x="8.5" y="22" width="4" height="7" rx="0.8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    {/* Bar 2 */}
    <rect x="15.5" y="17" width="4" height="12" rx="0.8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    {/* Bar 3 */}
    <rect x="22.5" y="13.5" width="4" height="15.5" rx="0.8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    {/* Baseline */}
    <line x1="6" y1="29" x2="30" y2="29" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    {/* Straight diagonal growth arrow floating with large clearance */}
    <path d="M 7.5,14.5 L 26.5,4.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    {/* Arrowhead cap ending at y=9.5 (4.0px clear space above Bar 3 at y=13.5) */}
    <path d="M 21.5,4.5 L 26.5,4.5 L 26.5,9.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Custom Innovative Work Icon matching img1 precisely (Bold Enlarged Lightbulb + Top-Right Gear + Radial Glow Rays)
const InnovativeWorkIcon = ({ className = "w-8.5 h-8.5 text-white" }: { className?: string }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className}>
    {/* Radial Glow Rays */}
    <line x1="13" y1="3" x2="13" y2="5.8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="6.5" y1="6.5" x2="8.8" y2="8.8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="3.5" y1="15.5" x2="6.2" y2="15.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="6.5" y1="24" x2="8.8" y2="21.7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="21.5" y1="23.5" x2="23.8" y2="25.8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

    {/* Lightbulb Outer Shell */}
    <path
      d="M 9.5,17.5 C 8,14.5 8.4,10.8 11,8.5 C 13,6.8 15.8,6.4 18.2,7.2"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M 9.5,17.5 C 10.3,19.2 11.8,20.8 11.8,22.8 L 19.2,22.8 C 19.2,20.8 20.7,19.2 21.5,17.5 C 22,16.5 22.1,15.3 22,14.2"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />

    {/* Bulb Base Threads */}
    <line x1="12" y1="25.2" x2="19" y2="25.2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="12.8" y1="27.8" x2="18.2" y2="27.8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M 14,28 C 14,29.8 17,29.8 17,28" stroke="currentColor" strokeWidth="2" fill="currentColor" />

    {/* Inner Filament Arc */}
    <path d="M 12.2,14 C 12.2,16.5 13.5,18 15.5,18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity={0.9} />

    {/* Top-Right Gear Wheel */}
    <g transform="translate(23.2, 9.8)">
      {/* 8-Tooth Gear Outline */}
      <path
        d="M -1.2,-5.5 L 1.2,-5.5 L 1.5,-3.8 C 2.3,-3.5 3,-3 3.6,-2.4 L 5.3,-3.1 L 6.8,-1.6 L 6.1,0.1 C 6.7,0.7 7.2,1.4 7.5,2.2 L 9.2,2.5 L 9.2,4.9 L 7.5,5.2 C 7.2,6 6.7,6.7 6.1,7.3 L 6.8,9 L 5.3,10.5 L 3.6,9.8 C 3,10.4 2.3,10.9 1.5,11.2 L 1.2,12.9 L -1.2,12.9 L -1.5,11.2 C -2.3,10.9 -3,10.4 -3.6,9.8 L -5.3,10.5 L -6.8,9 L -6.1,7.3 C -6.7,6.7 -7.2,6 -7.5,5.2 L -9.2,4.9 L -9.2,2.5 L -7.5,2.2 C -7.2,1.4 -6.7,0.7 -6.1,0.1 L -6.8,-1.6 L -5.3,-3.1 L -3.6,-2.4 C -3,-3 -2.3,-3.5 -1.5,-3.8 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Gear Center Hole */}
      <circle cx="0" cy="3.7" r="2.2" stroke="currentColor" strokeWidth="1.8" fill="none" />
    </g>
  </svg>
);

// Custom Flexible Work Icon matching img1 precisely (House + Overlapping Clock at Bottom-Right)
const FlexibleWorkIcon = ({ className = "w-8.5 h-8.5 text-white" }: { className?: string }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className}>
    {/* Roof Peak with Overhang */}
    <path
      d="M 6.5,16 L 17.5,7 L 28.5,16"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* House Left Wall & Door Outline */}
    <path
      d="M 9.5,15.5 L 9.5,28 M 13.5,28 L 13.5,23.5 L 16.5,23.5"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* House Bottom Baseline */}
    <line x1="7" y1="28" x2="29" y2="28" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />

    {/* Overlapping Clock (Bottom-Right of House) */}
    <circle cx="22.5" cy="22" r="5.8" stroke="currentColor" strokeWidth="2.2" fill="#BFA052" />

    {/* Clock Hands (10 o'clock and 4 o'clock) */}
    <path
      d="M 20.8,19.8 L 22.5,22 L 24.5,24"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Custom Your Health Matters Icon matching img1 precisely (Heart + ECG Lifeline Pulse)
const HealthPulseIcon = ({ className = "w-8.5 h-8.5 text-white" }: { className?: string }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className}>
    {/* Heart Outer Shell */}
    <path
      d="M 18,28.5 L 9.5,20 C 6.8,17.3 6.8,12.8 9.5,10 C 12.2,7.2 16.5,7.5 18,10.2 C 19.5,7.5 23.8,7.2 26.5,10 C 29.2,12.8 29.2,17.3 26.5,20 L 18,28.5 Z"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* ECG Pulse Lifeline Superimposed across Center */}
    <path
      d="M 5.5,19.5 L 12,19.5 L 14,23 L 16.5,14 L 19.5,22 L 21.5,18.5 L 23,19.5 L 30.5,19.5"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  ringRadius: number;       // Radius of full 360° concentric target layer (195, 166, 137, 108, 79, 44)
  ringStrokeWidth: number;  // Stroke width of full 360° concentric target layer
}

export const LEFT_BENEFITS: BenefitItem[] = [
  {
    id: "01",
    title: "Your Health Matters Here",
    description: "We prioritize your health by offering resources and initiatives that nurture both your physical fitness and emotional well-being.",
    icon: HealthPulseIcon,
    ringRadius: 195, // Layer 1: Outer Navy Ring 3
    ringStrokeWidth: 32,
  },
  {
    id: "02",
    title: "Make a Difference",
    description: "Your ideas matter from day one—contribute, influence, and see tangible results.",
    icon: Star,
    ringRadius: 166, // Layer 2: Outer White Spacer Ring
    ringStrokeWidth: 24,
  },
  {
    id: "03",
    title: "Competitive Rewards",
    description: "Benefits that reflect your value and contribution.",
    icon: Trophy,
    ringRadius: 137, // Layer 3: Middle Gold Ring 2
    ringStrokeWidth: 32,
  },
];

export const RIGHT_BENEFITS: BenefitItem[] = [
  {
    id: "04",
    title: "Career Growth and Development",
    description: "Access structured learning, mentorship, and clear paths for professional progression.",
    icon: GrowthChartIcon,
    ringRadius: 44,  // Layer 6: Center Golden Bullseye Core (Right Top!)
    ringStrokeWidth: 88,
  },
  {
    id: "05",
    title: "Innovative Work",
    description: "Lead high-impact projects, solve complex challenges, and grow your skills across diverse teams.",
    icon: InnovativeWorkIcon,
    ringRadius: 79,  // Layer 5: Inner Navy Ring 1 (Right Middle!)
    ringStrokeWidth: 32,
  },
  {
    id: "06",
    title: "Flexible Work Environment",
    description: "We prioritize outcomes over clocked hours, giving you the freedom to work in a way that drives real results.",
    icon: FlexibleWorkIcon,
    ringRadius: 108, // Layer 4: Inner White Spacer Ring (Right Bottom!)
    ringStrokeWidth: 24,
  },
];

const ALL_BENEFITS = [...LEFT_BENEFITS, ...RIGHT_BENEFITS];

export default function CareersPage() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [arrowTrigger, setArrowTrigger] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setArrowTrigger(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.25,
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      filter: 'blur(8px)',
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const,
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-brand-gray-light flex flex-col relative overflow-hidden">
      {/* Background vector hex grid decorative overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="h-full w-full stroke-brand-gold/35 fill-none stroke-[0.06]">
          <pattern id="career-hexes" x="0" y="0" width="10" height="17.3" patternUnits="userSpaceOnUse">
            <path d="M5 0 L10 2.8 L10 8.5 L5 11.3 L0 8.5 L0 2.8 Z" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#career-hexes)" />
        </svg>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[450px] xs:h-[520px] md:h-[620px] lg:h-[700px] flex items-center bg-brand-navy overflow-hidden pt-[60px] md:pt-[80px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.85 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            <Image
              src={HERO_CONTENT.backgroundImage}
              alt="Careers at Conservve Infra Solutions"
              fill
              priority
              className="object-cover object-center filter brightness-90 contrast-110"
            />
          </motion.div>
          {/* Navy gradient overlay for high text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/55 to-brand-navy/15"></div>
        </div>

        {/* Hero Text Content */}
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-16 w-full relative z-20 text-left">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-poppins text-white text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.25] max-w-5xl space-y-2 md:space-y-3"
          >
            <motion.span variants={itemVariants} className="block font-tibere">
              Be part of something
            </motion.span>
            <motion.span variants={itemVariants} className="block font-tibere">
              that's constantly <span className="text-brand-gold">evolving</span>,
            </motion.span>
            <motion.span variants={itemVariants} className="block font-tibere">
              where growth isn't just a <span className="text-brand-gold">goal</span>,
            </motion.span>
            <motion.span variants={itemVariants} className="block font-tibere">
              it's the <span className="text-brand-gold">culture</span>.
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Golden Ribbon Section Break */}
      <div className="w-full h-[4px] bg-brand-gold relative z-20 shadow-[0_2px_10px_rgba(0,0,0,0.15)]" />

      {/* Main Content Area — Clean Brand White Pattern Space */}
      <div
        className="w-full flex-1 pt-10 pb-16 md:pt-14 md:pb-24"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url('/Logo_Distort_BG.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '300px'
        }}
      >
        {/* ========================================================================= */}
        {/* WHY JOIN US SECTION                                                       */}
        {/* ========================================================================= */}
        <section className="max-w-[94rem] mx-auto px-4 sm:px-6 md:px-12 w-full flex flex-col items-center pt-2 pb-4">

          {/* SECTION HEADER: Title with side gold arrows + Underline + Intro Text */}
          <div className="w-full max-w-5xl flex flex-col items-center text-center mb-4">

            {/* Header Title with Gold Arrows */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-3">
              {/* Left Gold Arrow */}
              <div className="hidden sm:flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BFA052]" />
                <span className="w-12 md:w-20 h-[2px] bg-[#BFA052]" />
                <ChevronRight className="w-4 h-4 text-[#BFA052] -ml-2" />
              </div>

              {/* Title rendered strictly on ONE single line */}
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[0.06em] uppercase whitespace-nowrap flex items-center justify-center gap-2 sm:gap-3.5">
                <span className="text-[#0C2C4D]">WHY JOIN US /</span>{' '}
                <span className="text-[#BFA052]">EMPLOYEE BENEFITS</span>
              </h2>

              {/* Right Gold Arrow */}
              <div className="hidden sm:flex items-center gap-1">
                <ChevronRight className="w-4 h-4 text-[#BFA052] rotate-180 -mr-2" />
                <span className="w-12 md:w-20 h-[2px] bg-[#BFA052]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#BFA052]" />
              </div>
            </div>

            {/* Gold Underline Accent with Center Dot */}
            <div className="relative flex items-center justify-center mb-5">
              <div className="w-32 h-[3px] bg-[#BFA052] rounded-full" />
              <div className="absolute w-3 h-3 bg-[#BFA052] rounded-full border-2 border-white shadow-sm" />
            </div>

            {/* Intro Paragraph (Enlarged font size + high legibility) */}
            <p className="font-poppins text-[17px] sm:text-[19px] md:text-[20px] text-slate-800 font-normal leading-[1.85] max-w-5xl">
              Working at Conservve Infra Solutions means finding a place where your commitment is matched by the culture around you. We move fast, we hold ourselves to high standards. We move with speed and purpose, holding ourselves to high standards in everything we do. We seek people who take genuine ownership and care deeply about the outcomes they create. In return, we invest that same level of commitment and more back into the people who make it all possible. But while striving for excellence and driving results, your well-being is always a top priority because we know that sustainable performance comes from a team that is supported, balanced, and energized. If that's the kind of environment you've been looking for, you'll find it here.
            </p>
          </div>

          {/* ========================================================================= */}
          {/* 3 + 3 SYMMETRICAL CARD SHOWCASE WITH HERO CENTRAL TARGET BOARD            */}
          {/* ========================================================================= */}

          {/* DESKTOP COMPOSITION (lg+ screens) */}
          <div className="hidden lg:block w-full max-w-[1240px] mx-auto my-4 lg:my-6 select-none">
            <div className="relative w-full h-[580px] flex items-center justify-between">
                       {/* LEFT COLUMN: 3 Compact Cards (Width: ~295px) */}
              <div className="w-[285px] xl:w-[305px] h-full flex flex-col justify-between py-2 z-20">
                {LEFT_BENEFITS.map((item) => {
                  const IconComp = item.icon;
                  const isHovered = activeId === item.id;

                  return (
                    <motion.div
                      key={`card-left-${item.id}`}
                      tabIndex={0}
                      onMouseEnter={() => setActiveId(item.id)}
                      onMouseLeave={() => setActiveId(null)}
                      onFocus={() => setActiveId(item.id)}
                      onBlur={() => setActiveId(null)}
                      animate={{
                        y: isHovered ? -6 : 0,
                        scale: isHovered ? 1.025 : 1.0,
                        borderColor: isHovered ? '#BFA052' : '#e2e8f0',
                        boxShadow: isHovered
                          ? '0 20px 40px rgba(12,44,77,0.16), 0 0 22px rgba(191,160,82,0.32)'
                          : '0 6px 20px rgba(12,44,77,0.07)',
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                      className="group relative bg-white p-4.5 xl:p-5 rounded-2xl border border-slate-200 text-left overflow-visible backdrop-blur-md cursor-pointer min-h-[125px] flex flex-col justify-center focus:outline-none focus:ring-2 focus:ring-[#BFA052]"
                    >
                      {/* Left Gold Accent Bar */}
                      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#BFA052] rounded-l-2xl" />

                      {/* Left-Side Wallet Badge (Matching RHS design) */}
                      <div className="absolute -left-5 top-1/2 -translate-y-1/2 z-30">
                        <motion.div
                          animate={{
                            scale: isHovered ? 1.2 : 1.0,
                            rotate: isHovered ? 8 : 0,
                            boxShadow: isHovered
                              ? '0 0 24px rgba(191,160,82,0.95), 0 8px 16px rgba(12,44,77,0.4)'
                              : '0 4px 12px rgba(12,44,77,0.2)',
                          }}
                          transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                          className="w-12 h-12 xl:w-13 xl:h-13 bg-gradient-to-br from-[#E2C075] via-[#BFA052] to-[#987C38] rounded-full flex items-center justify-center border-2 border-[#0C2C4D] relative overflow-hidden"
                        >
                          <div className="absolute inset-[1.5px] rounded-full border border-white/80 pointer-events-none" />
                          <IconComp className="w-6 h-6 xl:w-6.5 xl:h-6.5 text-white filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] relative z-10" />
                        </motion.div>
                      </div>

                      {/* Card Content */}
                      <div className="pl-10 pr-2">
                        <h3 className="font-poppins font-extrabold text-[14.5px] xl:text-[15.5px] text-[#0C2C4D] leading-snug mb-1 tracking-tight group-hover:text-[#BFA052] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="font-poppins text-[11.5px] xl:text-[12px] text-slate-700 font-medium leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* CENTER COLUMN: DOMINANT HERO TARGET BOARD (Size: 440px - 470px) */}
              <div className="flex-1 flex items-center justify-center z-20 px-4">
                <div className="relative w-[430px] h-[430px] xl:w-[470px] xl:h-[470px] mx-auto select-none filter drop-shadow-[0_22px_45px_rgba(12,44,77,0.2)]">
                  {/* SVG Concentric Rings + Active Ring Segment Highlights */}
                  <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="navy3DGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1C436C" />
                        <stop offset="45%" stopColor="#0C2C4D" />
                        <stop offset="100%" stopColor="#05172A" />
                      </linearGradient>

                      <linearGradient id="gold3DGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F0D695" />
                        <stop offset="45%" stopColor="#BFA052" />
                        <stop offset="100%" stopColor="#8A6E2B" />
                      </linearGradient>

                      <linearGradient id="white3DGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="60%" stopColor="#F8FAFC" />
                        <stop offset="100%" stopColor="#E2E8F0" />
                      </linearGradient>

                      <filter id="neutralShadow" x="-30%" y="-30%" width="160%" height="160%">
                        <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#000000" floodOpacity="0.18" />
                      </filter>
                    </defs>

                    {/* Pure Solid White Base Disk */}
                    <circle cx="250" cy="250" r="218" fill="#ffffff" stroke="rgba(0,0,0,0.06)" strokeWidth="1" filter="url(#neutralShadow)" />

                    {/* LAYER 1 (Card 01 - Your Health Matters Here): Outer Navy Ring 3 */}
                    <motion.g
                      animate={{
                        scale: activeId === "01" ? 1.065 : 1.0,
                        filter: activeId === "01" ? "drop-shadow(0 14px 28px rgba(191,160,82,0.65)) drop-shadow(0 0 20px rgba(191,160,82,0.7))" : "drop-shadow(0 0 0 rgba(0,0,0,0))",
                      }}
                      style={{ transformOrigin: "250px 250px" }}
                      transition={{ type: "spring", stiffness: 350, damping: 24 }}
                    >
                      <circle cx="250" cy="250" r="195" fill="none" stroke="url(#navy3DGrad)" strokeWidth="32" />
                      <circle cx="250" cy="250" r="211" fill="none" stroke={activeId === "01" ? "#F5D77F" : "rgba(255,255,255,0.4)"} strokeWidth={activeId === "01" ? "3.5" : "1.2"} />
                      <circle cx="250" cy="250" r="179" fill="none" stroke={activeId === "01" ? "#F5D77F" : "rgba(0,0,0,0.2)"} strokeWidth={activeId === "01" ? "3.5" : "1.2"} />
                    </motion.g>

                    {/* LAYER 2 (Card 02 - Make a Difference): Outer White Spacer Ring */}
                    <motion.g
                      animate={{
                        scale: activeId === "02" ? 1.065 : 1.0,
                        filter: activeId === "02" ? "drop-shadow(0 14px 28px rgba(191,160,82,0.65)) drop-shadow(0 0 20px rgba(191,160,82,0.7))" : "drop-shadow(0 0 0 rgba(0,0,0,0))",
                      }}
                      style={{ transformOrigin: "250px 250px" }}
                      transition={{ type: "spring", stiffness: 350, damping: 24 }}
                    >
                      <circle cx="250" cy="250" r="166" fill="none" stroke="url(#white3DGrad)" strokeWidth="24" />
                      <circle cx="250" cy="250" r="178" fill="none" stroke={activeId === "02" ? "#F5D77F" : "rgba(0,0,0,0.12)"} strokeWidth={activeId === "02" ? "3.5" : "1"} />
                      <circle cx="250" cy="250" r="154" fill="none" stroke={activeId === "02" ? "#F5D77F" : "rgba(0,0,0,0.12)"} strokeWidth={activeId === "02" ? "3.5" : "1"} />
                    </motion.g>

                    {/* LAYER 3 (Card 03 - Competitive Rewards): Middle Gold Ring 2 */}
                    <motion.g
                      animate={{
                        scale: activeId === "03" ? 1.065 : 1.0,
                        filter: activeId === "03" ? "drop-shadow(0 14px 28px rgba(191,160,82,0.75)) drop-shadow(0 0 22px rgba(191,160,82,0.8))" : "drop-shadow(0 0 0 rgba(0,0,0,0))",
                      }}
                      style={{ transformOrigin: "250px 250px" }}
                      transition={{ type: "spring", stiffness: 350, damping: 24 }}
                    >
                      <circle cx="250" cy="250" r="137" fill="none" stroke="url(#gold3DGrad)" strokeWidth="32" />
                      <circle cx="250" cy="250" r="153" fill="none" stroke={activeId === "03" ? "#FFFFFF" : "rgba(255,255,255,0.45)"} strokeWidth={activeId === "03" ? "3.5" : "1.2"} />
                      <circle cx="250" cy="250" r="121" fill="none" stroke={activeId === "03" ? "#F5D77F" : "rgba(0,0,0,0.2)"} strokeWidth={activeId === "03" ? "3.5" : "1.2"} />
                    </motion.g>

                    {/* LAYER 4 (Card 06 - Flexible Work Environment): Inner White Spacer Ring */}
                    <motion.g
                      animate={{
                        scale: activeId === "06" ? 1.065 : 1.0,
                        filter: activeId === "06" ? "drop-shadow(0 14px 28px rgba(191,160,82,0.65)) drop-shadow(0 0 20px rgba(191,160,82,0.7))" : "drop-shadow(0 0 0 rgba(0,0,0,0))",
                      }}
                      style={{ transformOrigin: "250px 250px" }}
                      transition={{ type: "spring", stiffness: 350, damping: 24 }}
                    >
                      <circle cx="250" cy="250" r="108" fill="none" stroke="url(#white3DGrad)" strokeWidth="24" />
                      <circle cx="250" cy="250" r="120" fill="none" stroke={activeId === "06" ? "#F5D77F" : "rgba(0,0,0,0.12)"} strokeWidth={activeId === "06" ? "3.5" : "1"} />
                      <circle cx="250" cy="250" r="96" fill="none" stroke={activeId === "06" ? "#F5D77F" : "rgba(0,0,0,0.12)"} strokeWidth={activeId === "06" ? "3.5" : "1"} />
                    </motion.g>

                    {/* LAYER 5 (Card 05 - Innovative Work): Inner Navy Ring 1 */}
                    <motion.g
                      animate={{
                        scale: activeId === "05" ? 1.065 : 1.0,
                        filter: activeId === "05" ? "drop-shadow(0 14px 28px rgba(191,160,82,0.65)) drop-shadow(0 0 20px rgba(191,160,82,0.7))" : "drop-shadow(0 0 0 rgba(0,0,0,0))",
                      }}
                      style={{ transformOrigin: "250px 250px" }}
                      transition={{ type: "spring", stiffness: 350, damping: 24 }}
                    >
                      <circle cx="250" cy="250" r="79" fill="none" stroke="url(#navy3DGrad)" strokeWidth="32" />
                      <circle cx="250" cy="250" r="95" fill="none" stroke={activeId === "05" ? "#F5D77F" : "rgba(255,255,255,0.4)"} strokeWidth={activeId === "05" ? "3.5" : "1.2"} />
                      <circle cx="250" cy="250" r="63" fill="none" stroke={activeId === "05" ? "#F5D77F" : "rgba(0,0,0,0.2)"} strokeWidth={activeId === "05" ? "3.5" : "1.2"} />
                    </motion.g>

                    {/* LAYER 6 (Card 04 - Career Growth and Development): Center Bullseye Golden Core Circle */}
                    <motion.g
                      animate={{
                        scale: activeId === "04" ? 1.14 : 1.0,
                        filter: activeId === "04" ? "drop-shadow(0 14px 30px rgba(191,160,82,0.85)) drop-shadow(0 0 24px rgba(191,160,82,0.9))" : "drop-shadow(0 0 0 rgba(0,0,0,0))",
                      }}
                      style={{ transformOrigin: "250px 250px" }}
                      transition={{ type: "spring", stiffness: 350, damping: 24 }}
                    >
                      <circle cx="250" cy="250" r="44" fill="url(#gold3DGrad)" stroke="#0C2C4D" strokeWidth={activeId === "04" ? "5.5" : "3.5"} />
                      <circle cx="250" cy="250" r="40" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.85" />
                    </motion.g>

                    {/* 6 FULL 360° INVISIBLE HIT-TESTING RINGS FOR THE 6 CARDS */}
                    {ALL_BENEFITS.map((item) => (
                      <circle
                        key={`target-layer-hit-${item.id}`}
                        cx="250"
                        cy="250"
                        r={item.ringRadius}
                        fill={item.id === "04" ? "transparent" : "none"}
                        stroke={item.id === "04" ? "none" : "transparent"}
                        strokeWidth={item.ringStrokeWidth + 6}
                        className="cursor-pointer focus:outline-none"
                        onMouseEnter={() => setActiveId(item.id)}
                        onMouseLeave={() => setActiveId(null)}
                        tabIndex={0}
                        onFocus={() => setActiveId(item.id)}
                        onBlur={() => setActiveId(null)}
                        aria-label={`Select ${item.title}`}
                      />
                    ))}
                  </svg>

                  {/* DART ARROW pointing diagonally into bullseye center (TIP TERMINATES EXACTLY AT 50%, 50%) */}
                  <div className="absolute inset-0 pointer-events-none z-10">
                    <motion.div
                      initial={{ x: -140, y: -140, opacity: 0, scale: 0.8 }}
                      animate={arrowTrigger ? { x: 0, y: 0, opacity: 1, scale: 1 } : {}}
                      transition={{ type: "spring", stiffness: 110, damping: 15, mass: 1.0 }}
                      style={{
                        position: 'absolute',
                        width: '76%',
                        height: '76%',
                        left: 'calc(50% - 66.12%)',
                        top: 'calc(50% - 65.36%)',
                      }}
                    >
                      <Image
                        src="/career/Dart_Arrow.png"
                        alt="Dart Arrow"
                        width={380}
                        height={380}
                        className="w-full h-full object-contain filter drop-shadow-[0_16px_28px_rgba(12,44,77,0.38)]"
                        priority
                      />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: 3 Compact Cards (Width: ~295px) */}
              <div className="w-[285px] xl:w-[305px] h-full flex flex-col justify-between py-2 z-20">
                {RIGHT_BENEFITS.map((item) => {
                  const IconComp = item.icon;
                  const isHovered = activeId === item.id;

                  return (
                    <motion.div
                      key={`card-right-${item.id}`}
                      tabIndex={0}
                      onMouseEnter={() => setActiveId(item.id)}
                      onMouseLeave={() => setActiveId(null)}
                      onFocus={() => setActiveId(item.id)}
                      onBlur={() => setActiveId(null)}
                      animate={{
                        y: isHovered ? -6 : 0,
                        scale: isHovered ? 1.025 : 1.0,
                        borderColor: isHovered ? '#BFA052' : '#e2e8f0',
                        boxShadow: isHovered
                          ? '0 20px 40px rgba(12,44,77,0.16), 0 0 22px rgba(191,160,82,0.32)'
                          : '0 6px 20px rgba(12,44,77,0.07)',
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                      className="group relative bg-white p-4.5 xl:p-5 rounded-2xl border border-slate-200 text-left overflow-visible backdrop-blur-md cursor-pointer min-h-[125px] flex flex-col justify-center focus:outline-none focus:ring-2 focus:ring-[#BFA052]"
                    >
                      {/* Left Gold Accent Bar */}
                      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#BFA052] rounded-l-2xl" />

                      {/* Left-Side Wallet Badge (Matching RHS design) */}
                      <div className="absolute -left-5 top-1/2 -translate-y-1/2 z-30">
                        <motion.div
                          animate={{
                            scale: isHovered ? 1.2 : 1.0,
                            rotate: isHovered ? -8 : 0,
                            boxShadow: isHovered
                              ? '0 0 24px rgba(191,160,82,0.95), 0 8px 16px rgba(12,44,77,0.4)'
                              : '0 4px 12px rgba(12,44,77,0.2)',
                          }}
                          transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                          className="w-12 h-12 xl:w-13 xl:h-13 bg-gradient-to-br from-[#E2C075] via-[#BFA052] to-[#987C38] rounded-full flex items-center justify-center border-2 border-[#0C2C4D] relative overflow-hidden"
                        >
                          <div className="absolute inset-[1.5px] rounded-full border border-white/80 pointer-events-none" />
                          <IconComp className="w-6 h-6 xl:w-6.5 xl:h-6.5 text-white filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] relative z-10" />
                        </motion.div>
                      </div>

                      {/* Card Content */}
                      <div className="pl-10 pr-2">
                        <h3 className="font-poppins font-extrabold text-[14.5px] xl:text-[15.5px] text-[#0C2C4D] leading-snug mb-1 tracking-tight group-hover:text-[#BFA052] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="font-poppins text-[11.5px] xl:text-[12px] text-slate-700 font-medium leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Tablet 2-Column / Mobile 1-Column Responsive Cards Grid */}
          <div className="w-full flex flex-col items-center lg:hidden my-4 gap-6 max-w-4xl">
            {/* Target Board Hero Visual */}
            <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] select-none my-2">
              <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible filter drop-shadow-lg">
                <circle cx="250" cy="250" r="215" fill="#ffffff" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
                <circle cx="250" cy="250" r="195" fill="none" stroke="url(#navy3DGrad)" strokeWidth="34" />
                <circle cx="250" cy="250" r="137" fill="none" stroke="url(#gold3DGrad)" strokeWidth="34" />
                <circle cx="250" cy="250" r="79" fill="none" stroke="url(#navy3DGrad)" strokeWidth="34" />
                <circle cx="250" cy="250" r="38" fill="url(#gold3DGrad)" stroke="#0C2C4D" strokeWidth="3.5" />
              </svg>

              {/* Dart Overlay (Tip terminates at exact center 50%, 50%) */}
              <div className="absolute inset-0 pointer-events-none z-10">
                <div
                  style={{
                    position: 'absolute',
                    width: '76%',
                    height: '76%',
                    left: 'calc(50% - 66.12%)',
                    top: 'calc(50% - 65.36%)',
                  }}
                >
                  <Image
                    src="/career/Dart_Arrow.png"
                    alt="Dart Arrow"
                    width={260}
                    height={260}
                    className="w-full h-full object-contain filter drop-shadow-md"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Tablet 2-Column / Mobile 1-Column Responsive Cards Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              {ALL_BENEFITS.map((item) => {
                const IconComp = item.icon;
                const isHovered = activeId === item.id;

                return (
                  <motion.div
                    key={`mobile-card-${item.id}`}
                    onMouseEnter={() => setActiveId(item.id)}
                    onMouseLeave={() => setActiveId(null)}
                    animate={{
                      y: isHovered ? -4 : 0,
                      borderColor: isHovered ? '#BFA052' : '#e2e8f0',
                      boxShadow: isHovered
                        ? '0 16px 32px rgba(12,44,77,0.14), 0 0 16px rgba(191,160,82,0.25)'
                        : '0 6px 20px rgba(12,44,77,0.06)',
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className="group relative bg-white p-4.5 rounded-2xl border border-slate-200 text-left overflow-visible backdrop-blur-md cursor-pointer min-h-[120px] flex flex-col justify-center"
                  >
                    {/* Left Gold Accent Bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#BFA052] rounded-l-2xl" />

                    {/* Left-Side Wallet Badge (Matching RHS design) */}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-30">
                      <motion.div
                        animate={{
                          scale: isHovered ? 1.15 : 1.0,
                          rotate: isHovered ? -6 : 0,
                          boxShadow: isHovered
                            ? '0 0 20px rgba(191,160,82,0.85), 0 6px 14px rgba(12,44,77,0.3)'
                            : '0 3px 10px rgba(12,44,77,0.18)',
                        }}
                        transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                        className="w-11 h-11 bg-gradient-to-br from-[#E2C075] via-[#BFA052] to-[#987C38] rounded-full flex items-center justify-center border-2 border-[#0C2C4D] relative overflow-hidden"
                      >
                        <div className="absolute inset-[1.5px] rounded-full border border-white/80 pointer-events-none" />
                        <IconComp className="w-5.5 h-5.5 text-white filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] relative z-10" />
                      </motion.div>
                    </div>

                    {/* Card Content */}
                    <div className="pl-9 pr-2">
                      <h3 className="font-poppins font-extrabold text-[15px] text-[#0C2C4D] leading-snug mb-1 tracking-tight group-hover:text-[#BFA052] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="font-poppins text-[11.5px] text-slate-700 font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* THE CONSERVVE TEAM DNA SECTION                                            */}
        {/* ========================================================================= */}
        <TeamDnaSection />

        {/* ========================================================================= */}
        {/* JOIN OUR TEAM SECTION                                                     */}
        {/* ========================================================================= */}
        <JoinOurTeamSection />
      </div>
    </div>
  );
}
