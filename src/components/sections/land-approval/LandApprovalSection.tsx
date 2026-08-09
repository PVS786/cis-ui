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

        {/* Content Card & 3D Block Carousel Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Paragraph Content Card */}
          <div className="lg:col-span-7 relative group">
            
            {/* Overlapping background architectural frames */}
            <div className="absolute -inset-3 border border-[#BFA052]/10 -z-10 rounded-xl" />
            <div className="absolute -inset-1.5 border border-brand-navy/5 -z-10 rounded-xl rotate-1" />
            
            {/* Soft White Floating Card styled with Editorial Theme precise shadow and border */}
            <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-2xl shadow-md border-l-4 border-[#BFA052] relative overflow-hidden">
              
              {/* Detailed Paragraphs formatted with Poppins font */}
              <div className="font-poppins text-slate-800 text-sm sm:text-base md:text-[15px] leading-[1.85] space-y-4 font-normal text-justify">
                {INTRO_PARAGRAPHS.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: 3D Solid Metallic Block & Navy Blue Box Below Image (Vertically Centered) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center w-full my-auto">
            
            {/* 3D Rectangle Metallic Block Container */}
            <div className="relative w-full max-w-[450px] xl:max-w-[480px] mx-auto lg:ml-auto lg:mr-0 px-2 sm:px-0">
              
              {/* 3D Solid Metallic Extruded Side Wall & Bottom Slab */}
              <div 
                className="absolute inset-0 rounded-[2.2rem] translate-x-3 translate-y-3 bg-gradient-to-br from-[#1C456F] via-[#0C2C4D] to-[#06182B] border-r border-b border-[#D4AF37]/50 shadow-md"
              />

              {/* Polished Metallic Gold Outer Bevel Frame */}
              <div className="relative p-[2.5px] rounded-[2.2rem] bg-gradient-to-br from-[#FFF3CA] via-[#D4AF37] via-[#AA8820] to-[#5C4505] shadow-lg z-10">
                
                {/* Metallic Inner Surface */}
                <div className="relative w-full h-[480px] sm:h-[520px] md:h-[570px] lg:h-[610px] xl:h-[640px] bg-[#0C2C4D] rounded-[2.05rem] overflow-hidden">
                  
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

            {/* NAVY BLUE BOX (Positioned Directly Below Image on Right Side) */}
            <div className="mt-7 relative z-20 w-full max-w-[450px] xl:max-w-[480px] lg:ml-auto lg:mr-0">
              <div className="bg-brand-navy text-white p-5 md:p-6 rounded-2xl border border-[#BFA052]/30 relative overflow-hidden group shadow-lg">
                
                {/* Subtly animated decorative lines inside navy card */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
                  <svg className="w-full h-full text-white" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                </div>

                {/* Card Content Grid */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center">
                  
                  {/* Custom SVG Geometric Circle Emblem */}
                  <div className="flex-shrink-0 transition-transform duration-500 group-hover:rotate-12">
                    <GeometricEmblem className="w-12 h-12 md:w-14 md:h-14 text-[#BFA052]" />
                  </div>

                  {/* Text Side */}
                  <div className="space-y-1">
                    <h3 className="font-tibere italic text-base md:text-lg text-[#BFA052] tracking-wide leading-snug font-medium">
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

        </div>

      </div>

    </section>
  );
}
