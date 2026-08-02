'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ArchitecturalLines from './ArchitecturalLines';
import GeometricEmblem from './GeometricEmblem';

const INTRO_PARAGRAPHS = [
  "We navigate bureaucracy so you don't have to. From the first document submitted to the final stamp of approval, we own the entire process, so your project never stalls waiting on a window, a signature, or a follow-up that never came.",
  "Every approval your project is required to obtain is within our scope. On the pre-construction side, we manage Title Verification, NA Orders, Land Use Conversion, Zone Change Permissions, Layout Sanction, Development Permission, Environmental Clearance, Allied NOCs, Fire and Safety NOCs, NOCs from water, electricity, aviation and forest departments, High-Power Committee Approvals, Soil Investigation Clearance, TDR Applications, and Building Plan Approval. Towards completion, we secure stage-wise completion certificates, Part Occupancy clearances, the final Occupancy Certificate, utility connection approvals, and safety certifications. Every prerequisite handled, in the right sequence, before it becomes a problem.",
  "Sequence is everything. A Building Plan Approval cannot be pursued without a sanctioned layout. An Occupancy Certificate cannot be issued without stage-wise completion certificates aligned to approved drawings. Environmental Clearance thresholds shift by project type, built-up area, and land classification, and triggering the wrong category midway resets timelines entirely. Our team prepares and submits applications in the precise order that regulatory frameworks demand, manages the full documentation architecture behind every submission, and intervenes at the right moment to keep files moving through authority desks without accumulating in queues.",
  "Delayed approvals are never just an administrative inconvenience. For a developer, they translate into cost overruns and lost sales velocity. For an investor, stalled clearances directly cut into your returns. For an aggregator or buyer, gaps in compliance history create title risk that surfaces at the worst moment, at the point of transaction. We track policy amendments, revised FSI norms, updated building bylaws, and changes to environmental notification thresholds so your project is always structured around current regulations. Every clearance is documented and every approval obtained in a form that withstands scrutiny at the bank, at the registration office, and in court if it ever comes to that. Because approvals are not bureaucratic milestones. They are the legal foundation your entire project stands on."
];

const CONCLUSION_TITLE = "Approvals are the legal foundation your project stands on.";

const CAROUSEL_IMAGES = [
  { src: "/Services/land-approval/lapr-1.png", alt: "Land Approval Step 1" },
  { src: "/Services/land-approval/lapr-2.png", alt: "Land Approval Step 2" },
  { src: "/Services/land-approval/lapr-3.png", alt: "Land Approval Step 3" },
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
        
        {/* Header / Title Group */}
        <div className="space-y-3 mb-8 lg:mb-10">
          <h1 className="font-display leading-none select-none tracking-tight flex flex-wrap items-center gap-x-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-tibere uppercase">
            <span className="text-brand-navy">
              LAND
            </span>
            <span className="text-[#BFA052]">
              APPROVAL
            </span>
          </h1>
          
          {/* Elegant Gold Underline with Dot Accent */}
          <div className="relative h-[2px] bg-[#BFA052] w-36 mt-3">
            <div className="absolute -right-3 -top-[3px] w-2 h-2 rounded-full bg-[#BFA052]" />
          </div>
        </div>

        {/* Content Card & 3D Block Carousel Row */}
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
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
