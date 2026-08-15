import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Layers, 
  CheckCircle, 
  PhoneCall, 
  X,
  FileCheck,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { Challenge } from '../types';

interface ChallengeDetailPanelProps {
  challenge: Challenge | null;
  onClose: () => void;
  isHeroInserted: boolean;
}

export default function ChallengeDetailPanel({
  challenge,
  onClose,
  isHeroInserted
}: ChallengeDetailPanelProps) {
  if (!challenge) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-8 border border-dashed border-[#0C2C4D]/10 rounded-2xl bg-[#0C2C4D]/[0.01]">
        <div className="w-16 h-16 rounded-full bg-[#0C2C4D]/[0.03] border border-[#0C2C4D]/5 flex items-center justify-center mb-4">
          <Compass className="w-8 h-8 text-[#0C2C4D]/40 stroke-1 animate-spin-slow" />
        </div>
        <h4 className="text-sm font-serif font-semibold tracking-wider text-[#0C2C4D] uppercase">
          No Node Selected
        </h4>
        <p className="text-xs text-slate-500 max-w-[240px] mt-2 leading-relaxed">
          Select any challenge node from the land acquisition puzzle to access legal audits, structural solutions, and case studies.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      key={challenge.id}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="h-full flex flex-col justify-between p-8 rounded-2xl bg-white border border-[#0C2C4D]/10 shadow-xl relative overflow-hidden"
    >
      {/* Decorative architectural grid overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
      
      {/* Top right corner lines */}
      <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#0C2C4D]/10 opacity-30 pointer-events-none m-4" />

      <div>
        {/* Header section with Close Button */}
        <div className="flex items-start justify-between relative z-10 mb-6">
          <div className="flex items-center space-x-4">
            <span className="text-5xl font-mono font-bold text-gold-gradient leading-none">
              {challenge.number}
            </span>
            <div className="h-8 w-[1px] bg-slate-200" />
            <span className="text-[10px] font-mono tracking-widest text-[#BFA052] uppercase font-semibold">
              Legal Node &amp; Risk Profile
            </span>
          </div>
          <button
            id="close-panel-btn"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Challenge Name & Long Description */}
        <div className="relative z-10 mb-6">
          <h3 className="text-2xl font-serif font-bold text-[#0C2C4D] tracking-wide mb-3">
            {challenge.title}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed font-light">
            {challenge.longDesc}
          </p>
        </div>

        {/* Our Solution (The connect-every-piece logic) */}
        <div className="relative z-10 p-5 bg-gradient-to-br from-[#0C2C4D]/[0.02] to-[#0C2C4D]/[0.05] border-l-2 border-[#BFA052] rounded-r-xl mb-6">
          <div className="flex items-center space-x-2 text-[#0C2C4D] mb-2">
            <CheckCircle className="w-4 h-4 text-[#BFA052]" />
            <h4 className="text-sm font-serif font-bold tracking-wide">
              {challenge.solutionTitle}
            </h4>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-light">
            {challenge.solutionDesc}
          </p>
          
          {isHeroInserted && (
            <div className="mt-3.5 pt-3.5 border-t border-slate-200/50 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#BFA052] animate-ping" />
              <span className="text-[10px] font-mono tracking-wider text-[#0C2C4D] uppercase font-bold">
                Connected with Acquisition Solution
              </span>
            </div>
          )}
        </div>

        {/* Case Study Module */}
        <div className="relative z-10 border border-slate-100 rounded-xl p-5 bg-slate-50/50">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
              Archival Case Study
            </span>
            <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-mono tracking-wider uppercase rounded-full font-semibold border border-emerald-100">
              Validated Outcome
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-3.5">
            <div className="flex items-center space-x-2.5">
              <MapPin className="w-4 h-4 text-[#BFA052] shrink-0" />
              <div>
                <p className="text-[9px] text-slate-400 font-mono uppercase leading-none">Location</p>
                <p className="text-xs font-semibold text-[#0C2C4D] mt-0.5">{challenge.caseStudy.location}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2.5">
              <Layers className="w-4 h-4 text-[#BFA052] shrink-0" />
              <div>
                <p className="text-[9px] text-slate-400 font-mono uppercase leading-none">Asset Scale</p>
                <p className="text-xs font-semibold text-[#0C2C4D] mt-0.5">{challenge.caseStudy.size}</p>
              </div>
            </div>
          </div>

          <div className="pt-3.5 border-t border-slate-200/60">
            <p className="text-[9px] text-slate-400 font-mono uppercase leading-none mb-1">Commercial Resolution</p>
            <p className="text-xs text-slate-700 italic font-medium leading-relaxed">
              &ldquo;{challenge.caseStudy.outcome}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Footer Call to Action */}
      <div className="relative z-10 mt-6 pt-6 border-t border-slate-100">
        <a
          id="cta-consult-link"
          href="#consultation"
          className="w-full flex items-center justify-center space-x-2.5 py-3.5 px-4 bg-[#0C2C4D] hover:bg-[#143D66] text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 shadow-lg shadow-blue-950/10 hover:shadow-xl group"
        >
          <PhoneCall className="w-4 h-4 text-[#BFA052]" />
          <span>Discuss Node Strategy</span>
          <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </a>
      </div>
    </motion.div>
  );
}
