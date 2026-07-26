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

interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  angle: number; // Clock position angle in degrees (-90 = 12h, -30 = 2h, 30 = 4h, 90 = 6h, 150 = 8h, -150 = 10h)
  side: 'left' | 'right';
  cardTopPx: number; // Y offset for desktop card
}

const BENEFIT_ITEMS: BenefitItem[] = [
  {
    id: "01",
    title: "Career Growth and Development",
    description: "Access structured learning, mentorship, and clear paths for professional progression.",
    icon: GrowthChartIcon,
    angle: -90, // 12 o'clock (Top)
    side: "right",
    cardTopPx: 90,
  },
  {
    id: "02",
    title: "Innovative Work",
    description: "Lead high-impact projects, solve complex challenges, and grow your skills across diverse teams.",
    icon: InnovativeWorkIcon,
    angle: -30, // 2 o'clock (Top-Right)
    side: "right",
    cardTopPx: 360, // Shifted down for 135px uniform vertical spacing between cards 1, 2 & 3
  },
  {
    id: "03",
    title: "Flexible Work Environment",
    description: "We prioritize outcomes over clocked hours, giving you the freedom to work in a way that drives real results.",
    icon: FlexibleWorkIcon,
    angle: 30, // 4 o'clock (Bottom-Right)
    side: "right",
    cardTopPx: 630,
  },
  {
    id: "04",
    title: "Competitive Rewards",
    description: "Benefits that reflect your value and contribution.",
    icon: Trophy,
    angle: 90, // 6 o'clock (Bottom)
    side: "left",
    cardTopPx: 710,
  },
  {
    id: "05",
    title: "Make a Difference",
    description: "Your ideas matter from day one contribute, influence, and see tangible results.",
    icon: Star,
    angle: 150, // 8 o'clock (Bottom-Left)
    side: "left",
    cardTopPx: 507.5, // Card center y = 547.5px (perfect straight horizontal line matching pos.y)
  },
  {
    id: "06",
    title: "Your Health Matters Here",
    description: "We prioritize your health by offering resources and initiatives that nurture both your physical fitness and emotional well-being.",
    icon: HealthPulseIcon,
    angle: -150, // 10 o'clock (Top-Left)
    side: "left",
    cardTopPx: 312.5, // Card center y = 352.5px (perfect straight horizontal line matching pos.y)
  },
];

// Target center coordinates for 1200x900 system
const CX = 600;
const CY = 450;

// Thinner rings with uniform white spacing gaps
// Bullseye radius: 38px (proportional match to ring dimensions)
// Gap 1: 38-62px (24px gap)
// Ring 1 (Inner Navy): mid = 79px, width = 34px (covers 62-96px)
// Gap 2: 96-120px (24px gap)
// Ring 2 (Middle Gold): mid = 137px, width = 34px (covers 120-154px)
// Gap 3: 154-178px (24px gap)
// Ring 3 (Outer Navy): mid = 195px, width = 34px (covers 178-212px)
const BADGE_RADIUS_DIST = 195; // Radial distance to badge centers (centered right on Outer Navy Ring)

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

  // Calculate Badge (X, Y) coordinates on SVG canvas
  const getBadgePos = (angleDeg: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return {
      x: CX + BADGE_RADIUS_DIST * Math.cos(rad),
      y: CY + BADGE_RADIUS_DIST * Math.sin(rad),
    };
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
        className="w-full flex-1 py-16 md:py-24"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url('/Logo_Distort_BG.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '300px'
        }}
      >
        {/* ========================================================================= */}
        {/* WHY JOIN US SECTION                                                       */}
        {/* ========================================================================= */}
        <section className="max-w-[94rem] mx-auto px-4 sm:px-6 md:px-12 w-full flex flex-col items-center">

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

              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0C2C4D] tracking-[0.08em] uppercase">
                WHY JOIN US
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
          {/* DESKTOP TARGET BOARD SHOWCASE (Visible on lg screens)                     */}
          {/* ========================================================================= */}
          <div className="hidden lg:block w-full max-w-6xl relative select-none -mt-4">
            <div className="relative w-full aspect-[1200/900] mx-auto filter drop-shadow-[0_20px_40px_rgba(12,44,77,0.18)]">

              {/* SVG Canvas for Concentric Rings + Connecting Lines */}
              <svg viewBox="0 0 1200 900" className="absolute inset-0 w-full h-full overflow-visible">
                <defs>
                  {/* Metallic 3D Gradients */}
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

                  {/* Pure Neutral Shadow Filter without blue bleed */}
                  <filter id="neutralShadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="18" stdDeviation="20" floodColor="#000000" floodOpacity="0.16" />
                  </filter>
                </defs>

                {/* TARGET CONCENTRIC RINGS (PURE WHITE BASE, PROPORTIONAL RINGS & GAPS) */}
                <g filter="url(#neutralShadow)">
                  {/* Pure Solid White Base Disk under Target (eliminates all blue bleed between rings) */}
                  <circle cx={CX} cy={CY} r={212} fill="#ffffff" stroke="rgba(0,0,0,0.06)" strokeWidth={1} />

                  {/* Outer Navy Ring 3 (midRadius: 195px, width: 34px) */}
                  <circle cx={CX} cy={CY} r={195} fill="none" stroke="url(#navy3DGrad)" strokeWidth={34} />
                  <circle cx={CX} cy={CY} r={212} fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth={1.2} />
                  <circle cx={CX} cy={CY} r={178} fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth={1.2} />

                  {/* Middle Gold Ring 2 (midRadius: 137px, width: 34px) */}
                  <circle cx={CX} cy={CY} r={137} fill="none" stroke="url(#gold3DGrad)" strokeWidth={34} />
                  <circle cx={CX} cy={CY} r={154} fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth={1.2} />
                  <circle cx={CX} cy={CY} r={120} fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth={1.2} />

                  {/* Inner Navy Ring 1 (midRadius: 79px, width: 34px) */}
                  <circle cx={CX} cy={CY} r={79} fill="none" stroke="url(#navy3DGrad)" strokeWidth={34} />
                  <circle cx={CX} cy={CY} r={96} fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth={1.2} />
                  <circle cx={CX} cy={CY} r={62} fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth={1.2} />

                  {/* Bullseye Center SMALL GOLDEN CIRCLE (radius: 38px, matching ring dimensions) */}
                  <circle cx={CX} cy={CY} r={38} fill="url(#gold3DGrad)" stroke="#0C2C4D" strokeWidth={3.5} />
                  <circle cx={CX} cy={CY} r={35} fill="none" stroke="#ffffff" strokeWidth={1.5} strokeOpacity={0.6} />
                </g>

                {/* CONNECTOR LINES WITH CIRCLE ENDPOINTS FROM BADGES TO CARDS */}
                {BENEFIT_ITEMS.map((item) => {
                  const pos = getBadgePos(item.angle);
                  const cardX = item.side === 'right' ? 920 : 280;
                  const isHovered = activeId === item.id;

                  let pathD = "";
                  let cardPinY = item.cardTopPx + 40;

                  if (item.id === "06" || item.id === "05") {
                    // img1 (Your Health Matters) & img2 (Make a Difference): 100% straight horizontal line (no bend)
                    pathD = `M ${pos.x} ${pos.y} L ${cardX} ${pos.y}`;
                    cardPinY = pos.y;
                  } else if (item.id === "02") {
                    // img3 (Innovative Work): Inverted bend on top (rises up-right to kneeY=315, extends right, then connects to cardPinY=400)
                    const kneeY = 315;
                    pathD = `M ${pos.x} ${pos.y} L ${pos.x + 40} ${kneeY} L ${cardX - 55} ${kneeY} L ${cardX} ${cardPinY}`;
                  } else {
                    // Standard stepped line for remaining cards
                    pathD = `M ${pos.x} ${pos.y} L ${item.side === 'right' ? pos.x + 40 : pos.x - 40} ${cardPinY} L ${cardX} ${cardPinY}`;
                  }

                  return (
                    <g key={`line-${item.id}`}>
                      {/* Connector Line */}
                      <path
                        d={pathD}
                        fill="none"
                        stroke={isHovered ? "#BFA052" : "#0C2C4D"}
                        strokeWidth={isHovered ? 2.8 : 1.8}
                        style={{ transition: 'all 0.3s' }}
                      />
                      {/* Endpoint Circle Pin at Badge */}
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={5.5}
                        fill="#0C2C4D"
                        stroke="#BFA052"
                        strokeWidth={2}
                      />
                      {/* Endpoint Circle Pin at Card */}
                      <circle
                        cx={cardX}
                        cy={cardPinY}
                        r={4.5}
                        fill="#0C2C4D"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* DART ARROW (public/career/Dart_Arrow.png) pointing diagonally with arrowhead landing DEAD CENTER at (600, 450) */}
              <div
                className="absolute z-30 pointer-events-none"
                style={{
                  top: '18.8%',
                  left: '26.6%',
                  width: '320px',
                  height: '320px',
                }}
              >
                <motion.div
                  initial={{ x: -280, y: -280, opacity: 0, scale: 0.8 }}
                  animate={arrowTrigger ? { x: 0, y: 0, opacity: 1, scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 100, damping: 14, mass: 1.1 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src="/career/Dart_Arrow.png"
                    alt="Dart Arrow"
                    fill
                    className="object-contain filter drop-shadow-[0_16px_30px_rgba(12,44,77,0.4)]"
                    priority
                  />
                </motion.div>
              </div>

              {/* LARGER RADIAL NODE BADGES (w-16 h-16 / 64px centered on outer navy ring) */}
              {BENEFIT_ITEMS.map((item) => {
                const pos = getBadgePos(item.angle);
                const IconComp = item.icon;
                const isHovered = activeId === item.id;

                return (
                  <div
                    key={`badge-dom-${item.id}`}
                    style={{
                      position: 'absolute',
                      left: `${(pos.x / 1200) * 100}%`,
                      top: `${(pos.y / 900) * 100}%`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: 40,
                    }}
                    onMouseEnter={() => setActiveId(item.id)}
                    onMouseLeave={() => setActiveId(null)}
                    className="cursor-pointer"
                  >
                    <motion.div
                      animate={{
                        scale: isHovered ? 1.18 : 1.0,
                        boxShadow: isHovered
                          ? '0 0 28px rgba(191,160,82,0.85), 0 10px 24px rgba(12,44,77,0.35)'
                          : '0 8px 20px rgba(12,44,77,0.25)',
                      }}
                      transition={{ type: "spring", stiffness: 350, damping: 22 }}
                      className="w-16 h-16 bg-gradient-to-br from-[#E2C075] via-[#BFA052] to-[#987C38] rounded-full flex items-center justify-center border-[3.5px] border-[#0C2C4D] relative"
                    >
                      {/* Inner Crisp White Border Ring matching img1 */}
                      <div className="absolute inset-[2px] rounded-full border-[1.5px] border-white/90 pointer-events-none" />
                      <IconComp className="w-8 h-8 text-white filter drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.3)] relative z-10" />
                    </motion.div>
                  </div>
                );
              })}

              {/* HTML FEATURE CARDS (Positioned on Left & Right Sides) */}
              {BENEFIT_ITEMS.map((item) => {
                const isHovered = activeId === item.id;

                const cardStyle: React.CSSProperties = {
                  position: 'absolute',
                  top: `${(item.cardTopPx / 900) * 100}%`,
                  width: '285px',
                  zIndex: 35,
                };

                if (item.side === 'right') {
                  cardStyle.left = '77%';
                } else {
                  cardStyle.right = '77%';
                }

                return (
                  <div
                    key={`card-dom-${item.id}`}
                    style={cardStyle}
                    onMouseEnter={() => setActiveId(item.id)}
                    onMouseLeave={() => setActiveId(null)}
                    className="cursor-pointer"
                  >
                    <motion.div
                      animate={{
                        scale: isHovered ? 1.04 : 1.0,
                        boxShadow: isHovered
                          ? "0 20px 40px rgba(12,44,77,0.16), 0 0 16px rgba(191,160,82,0.3)"
                          : "0 8px 25px rgba(12,44,77,0.08)",
                        borderColor: isHovered ? "#BFA052" : "#e2e8f0",
                      }}
                      transition={{ type: "spring", stiffness: 350, damping: 24 }}
                      className="bg-white p-5 rounded-2xl border border-slate-200 text-left relative overflow-hidden backdrop-blur-md"
                    >
                      {/* Left Gold Accent Bar */}
                      <div className="absolute left-0 top-0 bottom-0 w-[4.5px] bg-[#BFA052]" />

                      <h3 className="font-poppins font-extrabold text-[16px] text-[#0C2C4D] leading-snug mb-2 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="font-poppins text-[12px] text-slate-700 font-bold leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                );
              })}

            </div>
          </div>

          {/* ========================================================================= */}
          {/* MOBILE & TABLET RESPONSIVE CARDS (Below lg screens)                       */}
          {/* ========================================================================= */}
          <div className="w-full flex flex-col items-center lg:hidden mt-8 gap-4 max-w-xl">
            {/* Target Board Mobile Badge Circle */}
            <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] select-none mb-6">
              <svg viewBox="0 0 600 600" className="w-full h-full overflow-visible">
                <circle cx="300" cy="300" r="220" fill="none" stroke="url(#navy3DGrad)" strokeWidth={24} />
                <circle cx="300" cy="300" r="165" fill="none" stroke="url(#gold3DGrad)" strokeWidth={24} />
                <circle cx="300" cy="300" r="110" fill="none" stroke="url(#navy3DGrad)" strokeWidth={24} />
                <circle cx="300" cy="300" r="65" fill="url(#navy3DGrad)" stroke="#092642" strokeWidth={2} />

                {/* Bullseye text mobile */}
                <g className="pointer-events-none select-none font-tibere text-[24px] uppercase tracking-[0.14em]" textAnchor="middle">
                  <text x="300" y="276" fill="#ffffff" fontWeight="800">WHY</text>
                  <text x="300" y="303" fill="#ffffff" fontWeight="800">JOIN</text>
                  <text x="300" y="330" fill="#ffffff" fontWeight="800">US</text>
                </g>
              </svg>

              {/* Mobile Dart Overlay */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <Image
                  src="/career/Dart_Arrow.png"
                  alt="Dart Arrow"
                  width={220}
                  height={220}
                  className="object-contain transform -rotate-12 translate-x-3 -translate-y-3 filter drop-shadow-lg"
                />
              </div>
            </div>

            {/* Mobile Feature Cards Stack */}
            <div className="w-full space-y-4">
              {BENEFIT_ITEMS.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={`mobile-card-${item.id}`}
                    className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md text-left flex gap-4 items-start relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-[4.5px] bg-[#BFA052]" />
                    <div className="w-12 h-12 bg-gradient-to-br from-[#F0D695] via-[#BFA052] to-[#8A6E2B] rounded-full flex items-center justify-center border-2 border-[#0C2C4D] shrink-0">
                      <IconComp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-poppins font-extrabold text-[17.5px] text-[#0C2C4D] mb-1.5 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="font-poppins text-xs text-slate-700 font-bold leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
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
