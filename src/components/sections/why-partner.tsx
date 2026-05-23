'use client';

import { motion } from 'framer-motion';
import { Award, Box, Building2, Handshake, Target, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

export function WhyPartnerSection() {
  const reasons = [
    {
      title: "Experienced Leadership",
      desc: "Led by industry professionals with deep expertise in land acquisition and regulatory processes, we bring strategic direction, informed decision-making, and execution confidence to every project.",
      icon: Award
    },
    {
      title: "Deal Structuring & Negotiation",
      desc: "We help structure financially sound deals that align with your strategic goals, ensuring optimal value and mitigated risks from the very first handshake.",
      icon: Handshake
    },
    {
      title: "On-Ground Execution Support",
      desc: "From site visits to complex local coordination, our physical presence ensures nothing is left to chance where it matters most—on the ground.",
      icon: Box
    },
    {
      title: "Tailored, Client-Centric Solutions",
      desc: "Every requirement is unique. We deliver customized land and approval strategies aligned with your business goals, risk appetite, and long-term vision.",
      icon: Target
    },
    {
      title: "End-to-End Development Capability",
      desc: "From land acquisition to final construction, we deliver fully integrated project execution through our associate entity, Conservve Buildcon.",
      icon: Building2
    },
    {
      title: "Long-Term Partnership Approach",
      desc: "We focus on building lasting relationships, supporting you not just for one transaction but across multiple growth phases and future assets.",
      icon: Users
    }
  ];

  return (
    <section className="bg-brand-navy py-24 md:py-32 relative overflow-hidden">
      {/* Abstract Glowing Background Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[40rem] h-[40rem] bg-[#1a4a7f]/20 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Blueprint grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem'
        }}
      />

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-12 h-[2px] bg-brand-gold" />
            <span className="text-sm font-sans font-bold uppercase tracking-[0.2em] text-brand-gold">The Distinction</span>
            <div className="w-12 h-[2px] bg-brand-gold" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-8"
          >
            Why Partner <span className="text-brand-gold italic font-light">With Us</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/70 text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto"
          >
            We manage uncertainty with foresight, turning complex compliance and execution challenges into confident, well-informed choices for the future.
          </motion.p>
        </div>

        {/* Custom Staggered Flow Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-12 lg:pb-32">
          {reasons.map((item, idx) => {
             // Calculate staggered margins for desktop
             const mtClass = idx === 1 || idx === 4 ? 'lg:mt-16' : idx === 2 || idx === 5 ? 'lg:mt-32' : '';
             
             return (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: (idx % 3) * 0.15 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className={cn("relative group h-full flex flex-col", mtClass)}
               >
                 {/* The Glowing Orb behind the card - Image 3 inspiration */}
                 <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/0 via-brand-gold/0 to-brand-gold/0 group-hover:from-brand-gold/20 group-hover:via-brand-gold/5 group-hover:to-transparent rounded-3xl blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100" />
                 
                 {/* Card Container */}
                 <div className="relative h-full bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm border border-white/10 group-hover:border-brand-gold/40 rounded-3xl p-8 md:p-10 transition-all duration-500 overflow-hidden flex flex-col z-10 shadow-2xl">
                    
                    {/* Top Accent Line inspired by Image 2 path */}
                    <div className="absolute top-0 left-0 w-0 h-[2px] bg-brand-gold group-hover:w-full transition-all duration-700 ease-out" />
                    
                    <div className="flex justify-between items-start mb-12">
                       {/* Icon */}
                       <div className="relative">
                         <div className="absolute inset-0 bg-brand-gold blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                         <item.icon className="relative w-10 h-10 text-brand-gold/80 group-hover:text-brand-gold transition-colors duration-500" />
                       </div>
                       
                       {/* Number */}
                       <div className="text-4xl lg:text-5xl font-serif font-black text-white/5 group-hover:text-brand-gold/20 transition-colors duration-500 select-none">
                         0{idx + 1}
                       </div>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-white mb-6 leading-snug group-hover:text-brand-gold transition-colors duration-500">
                      {item.title}
                    </h3>

                    <p className="text-white/60 font-sans text-base leading-relaxed flex-grow group-hover:text-white/80 transition-colors duration-500">
                      {item.desc}
                    </p>

                    {/* Bottom connecting dots / path continuation */}
                    <div className="mt-10 flex gap-2 overflow-hidden">
                       <div className="h-[2px] w-8 bg-brand-gold/30 group-hover:bg-brand-gold group-hover:w-16 transition-all duration-500 rounded-full" />
                       <div className="h-[2px] w-2 bg-brand-gold/20 group-hover:bg-brand-gold/60 transition-colors duration-500 delay-100 rounded-full" />
                       <div className="h-[2px] w-2 bg-brand-gold/10 group-hover:bg-brand-gold/40 transition-colors duration-500 delay-200 rounded-full" />
                    </div>
                 </div>
               </motion.div>
             )
          })}
        </div>
      </div>
    </section>
  );
}
