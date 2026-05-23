'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { BadgeCheck, Building2, FileText, Handshake, Map, Search, Target, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function InteractiveProcessMapSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const steps = [
    {
      id: 1, 
      title: "Identification & Strategic Aggregation", 
      desc: "We identify and consolidate high-potential land opportunities aligned with your project vision, location strategy, and long-term value.", 
      icon: Map,
      pos: { x: 12, y: 45 }, 
    },
    {
      id: 2, 
      title: "Comprehensive Technical Due Diligence", 
      desc: "Every parcel undergoes rigorous legal scrutiny to ensure clear titles, compliance, and zero-risk acquisition.", 
      icon: Search,
      pos: { x: 28, y: 35 }, 
    },
    {
      id: 3, 
      title: "Commercial Structuring & Closure", 
      desc: "We manage negotiations with a focus on transparency, optimal value, and secure deal finalization.", 
      icon: Handshake,
      pos: { x: 50, y: 40 }, 
    },
    {
      id: 4, 
      title: "Land Registration & Documentation", 
      desc: "Accurate and timely execution of all legal documentation and registration processes.", 
      icon: FileText,
      pos: { x: 65, y: 38 }, 
    },
    {
      id: 5, 
      title: "Regulatory Approvals & Clearance", 
      desc: "Seamless coordination with authorities to secure all statutory approvals efficiently and compliantly.", 
      icon: BadgeCheck,
      pos: { x: 85, y: 45 }, 
    },
    {
      id: 6, 
      title: "End-to-End Post-Acquisition", 
      desc: "Ongoing assistance to ensure a smooth transition from land acquisition to project readiness.", 
      icon: Target,
      pos: { x: 68, y: 72 }, 
    },
    {
      id: 7, 
      title: "Complete Project Execution", 
      desc: "Through our associate company Conservve Buildcon, we deliver fully integrated commercial project execution.", 
      icon: Building2,
      pos: { x: 35, y: 75 }, 
    }
  ];

  return (
    <section className="bg-brand-navy relative overflow-hidden py-24 select-none">
      
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 relative z-40 max-w-4xl mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-brand-gold" />
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-brand-gold">How We Deliver</span>
              <div className="w-12 h-[2px] bg-brand-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-serif font-bold text-white tracking-tight leading-[1.1]">
              Our Execution <span className="text-brand-gold italic font-light">Ecosystem</span>
            </h2>
          </motion.div>
        </div>

        {/* --- DESKTOP INTERACTIVE IMAGE MAP --- */}
        <div className="hidden lg:block relative w-full">
          
          {/* 
            The mask-image creates a soft fade at the edges of the image so it blends perfectly
            into the navy background, rather than looking like a hard rectangle.
          */}
          <div 
            className="relative w-full mx-auto"
            style={{ 
               WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 60%, transparent 100%)',
               maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 60%, transparent 100%)'
            }}
          >
            {/* Uncropped Image */}
            <Image 
              src="/image.png" 
              alt="Process Roadmap" 
              width={1920} 
              height={1080} 
              className="w-full h-auto object-contain transition-all duration-700 opacity-90" 
              priority
            />

            {/* Dark overlay when something is hovered to draw focus */}
            <div 
              className={cn(
                "absolute inset-0 bg-brand-navy/60 backdrop-blur-[1px] transition-all duration-500 pointer-events-none",
                hoveredId !== null ? "opacity-100" : "opacity-0"
              )}
            />

            {/* Hotspots */}
            {steps.map((step) => {
               const isActive = hoveredId === step.id;
               const isDimmed = hoveredId !== null && !isActive;

               // Logic to place card left or right of the hotspot based on x-position
               const xPos = step.pos.x;
               const isRightSide = xPos > 50;
               const cardPositionClasses = isRightSide 
                  ? "right-full mr-8 top-1/2 -translate-y-1/2 origin-right" 
                  : "left-full ml-8 top-1/2 -translate-y-1/2 origin-left";

               return (
                 <div 
                   key={step.id} 
                   className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                   style={{ left: `${step.pos.x}%`, top: `${step.pos.y}%` }}
                   onMouseEnter={() => setHoveredId(step.id)}
                   onMouseLeave={() => setHoveredId(null)}
                 >
                   <div className="relative flex items-center justify-center cursor-pointer group/marker">
                      
                      {/* Pulse Ring */}
                      <div className={cn(
                        "absolute inset-0 rounded-full border border-brand-gold transition-all duration-700 ease-out",
                        isActive ? "scale-[2.5] opacity-0" : "scale-100 opacity-0 group-hover/marker:opacity-100 group-hover/marker:scale-[1.5]"
                      )} />

                      {/* Radar Scanning Ring for active state */}
                      {isActive && (
                         <div className="absolute inset-0 rounded-full border border-brand-gold/30 animate-ping" />
                      )}
                      
                      {/* Inner Core */}
                      <div className={cn(
                        "w-10 h-10 xl:w-12 xl:h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md",
                        isActive ? "bg-brand-gold border-2 border-white text-brand-navy scale-125" : "bg-brand-navy/80 border border-brand-gold/50 text-brand-gold hover:bg-brand-gold hover:text-brand-navy",
                        isDimmed ? "opacity-30 border-white/20" : "opacity-100"
                      )}>
                         <span className="font-sans font-bold text-sm xl:text-base">0{step.id}</span>
                      </div>

                      {/* Pop-out HUD Card */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: isRightSide ? 20 : -20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.9, x: isRightSide ? 20 : -20 }}
                            transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                            className={cn(
                              "absolute w-72 xl:w-80 p-6 rounded-2xl bg-[#061526]/95 backdrop-blur-xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] pointer-events-none z-30",
                              cardPositionClasses
                            )}
                          >
                            {/* SVG Connection Line */}
                            <svg className={cn("absolute top-1/2 -translate-y-1/2 w-8 h-[2px]", isRightSide ? "left-full" : "right-full")}>
                               <line x1="0" y1="1" x2="32" y2="1" stroke="#BFA052" strokeWidth="2" strokeDasharray="4 2" />
                            </svg>

                            <div className="flex items-center gap-3 mb-4">
                               <div className="w-6 h-[2px] bg-brand-gold" />
                               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                                  Phase 0{step.id}
                               </span>
                            </div>
                            <h4 className="font-serif font-bold text-xl xl:text-2xl text-white leading-tight mb-3">
                               {step.title}
                            </h4>
                            <p className="font-sans text-xs xl:text-sm text-white/70 leading-relaxed">
                               {step.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                   </div>
                 </div>
               );
            })}
          </div>
        </div>

        {/* --- MOBILE/TABLET LIST VIEW --- */}
        <div className="block lg:hidden">
           <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl border border-white/10">
              <Image 
                src="/image.png" 
                alt="Process Roadmap" 
                fill 
                className="object-cover object-center" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />
           </div>

           <div className="space-y-4">
             {steps.map((step, idx) => (
                <motion.div
                   key={step.id}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: idx * 0.1 }}
                   viewport={{ once: true, margin: "-50px" }}
                   className="bg-brand-navy/50 border border-white/5 rounded-2xl p-6 relative overflow-hidden"
                >
                   <div className="flex items-start gap-5 relative z-10">
                      <div className="w-12 h-12 shrink-0 bg-brand-gold/10 rounded-full flex items-center justify-center border border-brand-gold/20">
                         <span className="font-serif font-bold text-brand-gold text-xl">0{step.id}</span>
                      </div>
                      <div>
                         <h4 className="font-serif font-bold text-white text-lg leading-snug mb-2">
                            {step.title}
                         </h4>
                         <p className="font-sans text-white/60 text-sm leading-relaxed">
                            {step.desc}
                         </p>
                      </div>
                   </div>
                </motion.div>
             ))}
           </div>
        </div>

      </div>
    </section>
  );
}
