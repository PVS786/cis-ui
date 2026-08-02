'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ArchitecturalLines from './ArchitecturalLines';
import GeometricEmblem from './GeometricEmblem';

const INTRO_PARAGRAPHS = [
  "Land acquisition is a layered process, and every layer carries risk if not handled with precision. Every successful development starts long before construction, it starts with the land. Choosing the right location, understanding its potential, and navigating the regulatory landscape are critical steps that define the outcome of your project.",
  "We guide you through every stage of acquisition, from market analysis and opportunity evaluation to title searches, encumbrance checks, ownership verification, and flagging easements, restrictions, or litigation histories, so you walk away with clean, uncontested assets. Because development viability is shaped as much by what surrounds a parcel as by the parcel itself, we assess infrastructure connectivity, road access, drainage, utilities, and water availability with the same rigour we apply to the land. Where rezoning, change of land use, or planning authority approvals are required, we map the full regulatory pathway upfront, covering timelines, environmental clearances, compliance requirements, and stakeholder engagements that directly affect your project schedule and capital planning. We then align your acquisition strategy with your end objective, whether that means maximizing FSI utilization, securing land at pre-approval value, structuring phased acquisitions, or accelerating time-to-market.",
  "Whether you are a developer sourcing your next project site, an investor building a land portfolio, an aggregator consolidating parcels for large-scale development, or a buyer entering the market for the first time, the fundamentals remain the same. Location must align with intent, due diligence must be exhaustive, and approvals must be secured before capital is committed. What changes is the scale, the strategy, and the specific criteria that define success for your position. That is precisely where our process adapts to you. Every engagement is built around your goals, backed by data, and executed with the rigour that land decisions demand. Nothing is left to assumption.",
  "You don't just get a list of options, you get thoroughly vetted opportunities, clear recommendations, and actionable insights. Every step is designed to minimize risk, streamline approvals, and secure land that supports your project."
];

const CONCLUSION_TITLE = "The right start doesn't happen by chance.";
const CONCLUSION_PARAGRAPH = "It happens with structured processes, expert analysis, and a partner who handles the complexity of land acquisition and approvals so you can focus on building.";

const CAROUSEL_IMAGES = [
  { src: "/Services/lapv_1.png", alt: "Land Acquisition Process Step 1" },
  { src: "/Services/lapv_2.png", alt: "Land Acquisition Process Step 2" },
  { src: "/Services/lapv_3.png", alt: "Land Acquisition Process Step 3" },
  { src: "/Services/lapv_4.png", alt: "Land Acquisition Process Step 4" },
];

export default function LandApprovalSection() {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  // Auto-rotate carousel images every 2.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-transparent pt-6 md:pt-10 pb-8 md:pb-12 overflow-hidden">
      
      {/* Background Architectural Drawings Overlay */}
      <ArchitecturalLines />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header / Title Group (Single Line with Matching Font Sizes) */}
        <div className="space-y-3 mb-8 lg:mb-10">
          <h1 className="font-display leading-none select-none tracking-tight flex flex-wrap items-center gap-x-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-tibere uppercase">
            <span className="text-brand-navy">
              LAND
            </span>
            <span className="text-[#BFA052]">
              ACQUISITION
            </span>
          </h1>
          
          {/* Elegant Gold Underline with Dot Accent */}
          <div className="relative h-[2px] bg-[#BFA052] w-36 mt-3">
            <div className="absolute -right-3 -top-[3px] w-2 h-2 rounded-full bg-[#BFA052]" />
          </div>
        </div>

        {/* Content Card & 3D Block Carousel Row (Rolled back to previous 3D block version) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Paragraph Content Card */}
          <div className="lg:col-span-7 relative group">
            
            {/* Overlapping background architectural frames */}
            <div className="absolute -inset-3 border border-[#BFA052]/10 -z-10 rounded-xl" />
            <div className="absolute -inset-1.5 border border-brand-navy/5 -z-10 rounded-xl rotate-1" />
            
            {/* Soft White Floating Card styled with Editorial Theme precise shadow and border */}
            <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-r-xl shadow-[0_20px_50px_-15px_rgba(12,44,77,0.1)] border-l-4 border-[#BFA052] relative overflow-hidden">
              
              {/* Detailed Paragraphs formatted with Poppins font */}
              <div className="font-poppins text-brand-navy/95 text-xs md:text-[13px] leading-relaxed text-justify space-y-3 font-normal">
                {INTRO_PARAGRAPHS.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: 3D Solid Metallic Block & Auto-Rotating Carousel */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* 3D Rectangle Metallic Block Container */}
            <div className="relative w-full max-w-[420px] xl:max-w-[440px] mx-auto lg:ml-auto lg:mr-0 px-4 sm:px-0 mb-6 lg:mb-0">
              
              {/* 3D Solid Metallic Extruded Side Wall & Bottom Slab */}
              <div 
                className="absolute inset-0 rounded-[2.5rem] translate-x-5 translate-y-5 bg-gradient-to-br from-[#1C456F] via-[#0C2C4D] via-[#071B30] to-[#020A14] border-r-[3px] border-b-[3px] border-[#D4AF37]/70 shadow-[18px_35px_60px_rgba(4,16,29,0.7)]"
              />

              {/* 3D Metallic Connection Bevel Fill (Solid 3D Extrusion) */}
              <div className="absolute inset-0 rounded-[2.5rem] z-0 pointer-events-none"
                style={{
                  boxShadow: `
                    1px 1px 0px #1c456f,
                    2px 2px 0px #1a4067,
                    3px 3px 0px #173b60,
                    4px 4px 0px #153658,
                    5px 5px 0px #123150,
                    6px 6px 0px #102c48,
                    7px 7px 0px #0e2741,
                    8px 8px 0px #0c2239,
                    9px 9px 0px #0a1d31,
                    10px 10px 0px #08182a,
                    11px 11px 0px #061322,
                    12px 12px 0px #050e1a,
                    13px 13px 0px #040912,
                    14px 14px 0px #02040a,
                    15px 15px 0px #010205,
                    16px 16px 0px #010205,
                    17px 17px 0px #010205,
                    18px 18px 0px #010205,
                    19px 19px 0px #010205,
                    20px 20px 0px #010205
                  `
                }}
              />

              {/* Polished Metallic Gold Outer Bevel Frame */}
              <div className="relative p-[2.5px] rounded-[2.5rem] bg-gradient-to-br from-[#FFF3CA] via-[#D4AF37] via-[#AA8820] to-[#5C4505] shadow-[0_12px_30px_rgba(0,0,0,0.4)] z-10">
                
                {/* Metallic Inner Surface */}
                <div className="relative w-full h-[480px] md:h-[520px] lg:h-[560px] xl:h-[580px] bg-[#0C2C4D] rounded-[2.35rem] overflow-hidden">
                  
                  {/* Full-bleed crossfade image stack */}
                  {CAROUSEL_IMAGES.map((img, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                        idx === currentImageIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        priority={idx === 0}
                        className="object-cover object-center"
                      />
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* FLOATING LAYERED NAVY CARD */}
        <div className="mt-12 lg:mt-14 relative z-20 max-w-[850px]">
          <div className="bg-brand-navy text-white p-6 md:p-8 rounded-2xl border border-[#BFA052]/20 relative overflow-hidden group">
            
            {/* Subtly animated decorative lines inside navy card */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
              <svg className="w-full h-full text-white" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>

            {/* Card Content Grid */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
              
              {/* Custom SVG Geometric Circle Emblem */}
              <div className="flex-shrink-0 transition-transform duration-500 group-hover:rotate-12">
                <GeometricEmblem className="w-14 h-14 md:w-16 md:h-16" />
              </div>

              {/* Text Side */}
              <div className="space-y-2.5">
                <h3 className="font-tibere italic text-lg md:text-xl text-[#BFA052] tracking-wide leading-tight font-medium">
                  {CONCLUSION_TITLE}
                </h3>
                <p className="font-poppins text-white/85 text-xs md:text-sm leading-relaxed text-justify font-normal">
                  {CONCLUSION_PARAGRAPH}
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
