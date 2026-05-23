'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, Building2, FileText, Handshake, Map, Search, Target } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export function InteractiveProcessMapSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const steps = [
    {
      id: 1, 
      title: "Identification & Strategic Aggregation of Land Parcels", 
      desc: "We identify and consolidate high-potential land opportunities aligned with your project vision, location strategy, and long-term value.", 
      icon: Map,
      pos: { left: "20%", top: "45%" }, 
      cardPos: "right-full mr-4 lg:mr-8 top-1/2 -translate-y-1/2"
    },
    {
      id: 2, 
      title: "Comprehensive Technical Due Diligence", 
      desc: "Every parcel undergoes rigorous legal scrutiny to ensure clear titles, compliance, and zero-risk acquisition.", 
      icon: Search,
      pos: { left: "35%", top: "25%" }, 
      cardPos: "bottom-full mb-4 lg:mb-8 left-1/2 -translate-x-1/2"
    },
    {
      id: 3, 
      title: "Commercial Structuring & Transaction Closure", 
      desc: "We manage negotiations with a focus on transparency, optimal value, and secure deal finalization.", 
      icon: Handshake,
      pos: { left: "30%", top: "70%" }, 
      cardPos: "right-full mr-4 lg:mr-8 top-1/2 -translate-y-1/2"
    },
    {
      id: 4, 
      title: "Land Registration & Documentation Excellence", 
      desc: "Accurate and timely execution of all legal documentation and registration processes.", 
      icon: FileText,
      pos: { left: "50%", top: "85%" }, 
      cardPos: "top-full mt-4 lg:mt-8 left-1/2 -translate-x-1/2"
    },
    {
      id: 5, 
      title: "Regulatory Approvals & Clearance Management", 
      desc: "Seamless coordination with authorities to secure all statutory approvals efficiently and compliantly.", 
      icon: BadgeCheck,
      pos: { left: "65%", top: "25%" }, 
      cardPos: "bottom-full mb-4 lg:mb-8 left-1/2 -translate-x-1/2"
    },
    {
      id: 6, 
      title: "End-to-End Post-Acquisition & Approval Support", 
      desc: "Ongoing assistance to ensure a smooth transition from land acquisition to project readiness.", 
      icon: Target,
      pos: { left: "70%", top: "70%" }, 
      cardPos: "left-full ml-4 lg:ml-8 top-1/2 -translate-y-1/2"
    },
    {
      id: 7, 
      title: "Beyond Land - Complete Project Execution", 
      desc: "Through our associate company Conservve Buildcon, we deliver fully integrated commercial project execution from land acquisition to final construction.", 
      icon: Building2,
      pos: { left: "80%", top: "45%" }, 
      cardPos: "left-full ml-4 lg:ml-8 top-1/2 -translate-y-1/2"
    }
  ];

  return (
    <section className="bg-brand-navy relative overflow-hidden py-24 select-none">
      {/* Soft central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Abstract Blueprint Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #BFA052 1px, transparent 1px),
            linear-gradient(to bottom, #BFA052 1px, transparent 1px)
          `,
          backgroundSize: '3rem 3rem'
        }}
      />

      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24 relative z-40 max-w-4xl mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-brand-gold" />
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-brand-gold">The Process</span>
              <div className="w-12 h-[2px] bg-brand-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-serif font-bold text-white tracking-tight leading-[1.1]">
              Land Acquisition <span className="text-brand-gold italic font-light">&amp; Strategy</span>
            </h2>
          </motion.div>
        </div>

        {/* --- DESKTOP ISOMETRIC MAP (Hidden on Mobile) --- */}
        <div className="hidden lg:block relative w-full h-[900px] xl:h-[1000px]">
           
           {/* SVG Connecting Lines */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 transition-opacity duration-500">
             {steps.map(step => {
                const isActive = hoveredId === step.id;
                const isDimmed = hoveredId !== null && !isActive;
                return (
                   <line
                      key={`line-${step.id}`}
                      x1="50%" y1="50%"
                      x2={step.pos.left} y2={step.pos.top}
                      stroke={isActive ? "#BFA052" : "rgba(255,255,255,0.1)"}
                      strokeWidth={isActive ? 3 : 1}
                      className={cn("transition-all duration-500", isDimmed ? "opacity-20" : "opacity-100")}
                   />
                )
             })}
           </svg>

           {/* Central Hub Building */}
           <div className={cn(
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500",
              hoveredId !== null ? "opacity-30 grayscale blur-[2px]" : "opacity-100"
           )}>
              <div className="relative w-48 h-48 group">
                 <div className="absolute inset-0 bg-[#0C2C4D]/90 backdrop-blur-md border-4 border-brand-gold/60 rounded-[2.5rem] transform [transform:rotateX(60deg)_rotateZ(-45deg)] shadow-[0_40px_80px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(191,160,82,0.3)] flex items-center justify-center">
                    <div className="w-[65%] h-[65%] border-2 border-brand-gold/30 bg-[#061526] rounded-2xl shadow-inner flex flex-col items-center justify-center">
                       <Building2 className="w-14 h-14 text-brand-gold transform [transform:rotateZ(45deg)_rotateX(-60deg)] drop-shadow-[0_0_20px_rgba(191,160,82,0.6)]" />
                    </div>
                 </div>
              </div>
           </div>

           {/* The 7 Nodes */}
           {steps.map(step => {
              const isActive = hoveredId === step.id;
              const isDimmed = hoveredId !== null && !isActive;

              return (
                 <div
                    key={step.id}
                    className={cn(
                       "absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
                       isActive ? "scale-110 z-50" : "z-30",
                       isDimmed ? "opacity-30 grayscale blur-[3px]" : "opacity-100"
                    )}
                    style={{ left: step.pos.left, top: step.pos.top }}
                    onMouseEnter={() => setHoveredId(step.id)}
                    onMouseLeave={() => setHoveredId(null)}
                 >
                    {/* Isometric Platform Area (Hover Target) */}
                    <div className="relative w-36 h-36 xl:w-40 xl:h-40 cursor-pointer group">
                       <div className={cn(
                          "absolute inset-0 backdrop-blur-md rounded-2xl transform [transform:rotateX(60deg)_rotateZ(-45deg)] flex items-center justify-center overflow-hidden transition-all duration-500",
                          isActive 
                            ? "bg-[#112a46] border-[3px] border-brand-gold -translate-y-6 shadow-[20px_40px_50px_rgba(0,0,0,0.6),0_0_40px_rgba(191,160,82,0.4)]" 
                            : "bg-[#0A1C32]/80 border-[2px] border-white/10 shadow-[10px_20px_30px_rgba(0,0,0,0.4)] hover:bg-[#0C2C4D]"
                       )}>
                          <div className={cn(
                              "w-[75%] h-[75%] rounded-xl shadow-inner flex items-center justify-center transition-all duration-500",
                              isActive ? "bg-[#061526] border border-brand-gold/50" : "bg-transparent border border-white/5 group-hover:bg-[#061526]"
                          )}>
                             <step.icon className={cn(
                                "w-10 h-10 xl:w-12 xl:h-12 transform [transform:rotateZ(45deg)_rotateX(-60deg)] transition-all duration-500",
                                isActive ? "text-brand-gold drop-shadow-lg scale-110" : "text-white/60 group-hover:text-brand-gold/80"
                             )} strokeWidth={1.5} />
                          </div>
                       </div>
                    </div>

                    {/* Floating Description Card (Always visible, but highlights on hover) */}
                    <div className={cn(
                       "absolute w-[22rem] p-6 rounded-2xl bg-[#061526]/90 backdrop-blur-xl border shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-500 pointer-events-none",
                       step.cardPos,
                       isActive ? "border-brand-gold/50 translate-y-0" : "border-white/10 opacity-80"
                    )}>
                       <div className="flex items-center gap-3 mb-4">
                          <div className={cn("w-8 h-[2px] transition-colors duration-500", isActive ? "bg-brand-gold" : "bg-white/20")} />
                          <span className={cn("text-xs font-bold uppercase tracking-widest transition-colors duration-500", isActive ? "text-brand-gold" : "text-white/40")}>
                             Step 0{step.id}
                          </span>
                       </div>
                       <h4 className={cn("font-serif font-bold text-xl leading-snug mb-3 transition-colors duration-500", isActive ? "text-white" : "text-white/80")}>
                          {step.title}
                       </h4>
                       <p className={cn("font-sans text-sm leading-relaxed transition-colors duration-500", isActive ? "text-white/80" : "text-white/50")}>
                          {step.desc}
                       </p>
                    </div>
                 </div>
              )
           })}
        </div>

        {/* --- MOBILE/TABLET LIST VIEW (Hidden on Desktop) --- */}
        <div className="block lg:hidden space-y-6">
           {steps.map((step, idx) => (
              <motion.div
                 key={step.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: idx * 0.1 }}
                 viewport={{ once: true }}
                 className="bg-[#0C2C4D]/50 border border-white/10 rounded-2xl p-6 relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-[40px] rounded-full pointer-events-none" />
                 
                 <div className="flex items-start gap-5 relative z-10">
                    <div className="w-14 h-14 shrink-0 bg-[#061526] border border-brand-gold/30 rounded-xl flex items-center justify-center shadow-inner">
                       <step.icon className="w-7 h-7 text-brand-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                       <div className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2">
                          Step 0{step.id}
                       </div>
                       <h4 className="font-serif font-bold text-white text-[1.35rem] leading-snug mb-3">
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
    </section>
  );
}
