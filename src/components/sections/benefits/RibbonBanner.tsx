'use client';

import React, { useState } from 'react';
import { BenefitItem } from './types';
import { Map, Timer, ShieldCheck, Handshake, Globe, Briefcase, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface RibbonBannerProps {
  benefit: BenefitItem;
  show3DFolds: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
  isExpandedControlled?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
}

const IconContainer: React.FC<{ name: string; className?: string; size?: number }> = ({ name, className, size = 54 }) => {
  switch (name) {
    case 'map':
      return (
        <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
          <Map className="text-white opacity-35" strokeWidth={1.8} size={size} />
          <div className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-[52%] z-10">
            <svg 
              className="text-white fill-current filter drop-shadow-[0_2.5px_4.5px_rgba(0,0,0,0.4)]" 
              style={{ width: size * 0.58, height: size * 0.58 }} 
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
        </div>
      );
    case 'timer':
      return <Timer className={className} strokeWidth={1.8} size={size} />;
    case 'shield':
      return <ShieldCheck className={className} strokeWidth={1.8} size={size} />;
    case 'handshake':
      return <Handshake className={className} strokeWidth={1.8} size={size} />;
    case 'globe':
      return <Globe className={className} strokeWidth={1.8} size={size} />;
    case 'briefcase':
      return <Briefcase className={className} strokeWidth={1.8} size={size} />;
    case 'award':
      return <Award className={className} strokeWidth={1.8} size={size} />;
    default:
      return <Map className={className} strokeWidth={1.8} size={size} />;
  }
};

export const RibbonBanner: React.FC<RibbonBannerProps> = ({
  benefit,
  show3DFolds,
  isSelected: _isSelected,
  onSelect: _onSelect,
  isExpandedControlled,
  onHover,
  onLeave,
}) => {
  const [internalHover, setInternalHover] = useState(false);
  const isExpanded = isExpandedControlled !== undefined ? isExpandedControlled : internalHover;
  const isNavy = benefit.type === 'navy';

  const ribbonColorClass = isNavy 
    ? 'bg-gradient-to-b from-[#184a77] via-[#0C2C4D] to-[#061a2f]' 
    : 'bg-gradient-to-b from-[#e7c775] via-[#BFA052] to-[#8d6d2b]';
  const textColorClass = 'text-white';
  const descColorClass = isNavy ? 'text-[#DCE6F1]' : 'text-white';
  const starColorClass = isNavy ? 'text-[#BFA052]' : 'text-white';

  const leftFoldStyle = {
    clipPath: 'polygon(100% 0, 0 100%, 100% 100%)',
    backgroundColor: isNavy ? '#041120' : '#6c511a',
  };

  const rightFoldStyle = {
    clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
    backgroundColor: isNavy ? '#041120' : '#6c511a',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        height: isExpanded ? 410 : 265
      }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      whileHover={{ y: isExpanded ? -3 : -6, scale: 1.01 }}
      onMouseEnter={() => {
        setInternalHover(true);
        if (onHover) onHover();
      }}
      onMouseLeave={() => {
        setInternalHover(false);
        if (onLeave) onLeave();
      }}
      className="relative w-full max-w-[310px] flex flex-col items-center justify-between select-none cursor-pointer z-10"
      style={{
        filter: isExpanded
          ? 'drop-shadow(0 24px 36px rgba(12, 44, 77, 0.25)) drop-shadow(0 6px 14px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 10px rgba(191, 160, 82, 0.18))'
          : 'drop-shadow(0 12px 20px rgba(12, 44, 77, 0.14)) drop-shadow(0 3px 8px rgba(0, 0, 0, 0.1))',
      }}
    >
      {show3DFolds && (
        <>
          <div 
            className="absolute top-14 -left-[10px] w-[10px] h-4 transition-transform duration-300" 
            style={leftFoldStyle} 
          />
          <div 
            className="absolute top-14 -right-[10px] w-[10px] h-4 transition-transform duration-300" 
            style={rightFoldStyle} 
          />
        </>
      )}

      <div
        className={`relative w-full h-full pt-24 px-6 flex flex-col justify-between items-center transition-all duration-300 ${ribbonColorClass} ${isExpanded ? 'pb-12' : 'pb-10'}`}
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 90%, 0% 100%)',
          boxShadow: isNavy
            ? 'inset 0 4px 10px rgba(255, 255, 255, 0.15), inset 0 -12px 24px rgba(0, 0, 0, 0.5)'
            : 'inset 0 4px 10px rgba(255, 255, 255, 0.3), inset 0 -12px 24px rgba(0, 0, 0, 0.4)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-black/25 pointer-events-none z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent pointer-events-none z-0" />

        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/18 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/35 via-black/10 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 left-0 w-[5px] bg-gradient-to-r from-white/10 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-[5px] bg-gradient-to-l from-black/20 to-transparent pointer-events-none z-10" />

        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-10" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <path 
            d="M 0 0 L 100 0 L 100 100 L 50 90 L 0 100 Z" 
            fill="none" 
            stroke={isNavy ? "rgba(191, 160, 82, 0.28)" : "rgba(255, 255, 255, 0.4)"} 
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="flex flex-col items-center text-center mt-2 flex-grow justify-start w-full z-10">
          <h3 className={`font-tibere font-bold text-lg sm:text-xl md:text-2xl leading-snug tracking-wide uppercase ${textColorClass}`}>
            {benefit.title}
          </h3>
          
          <motion.div
            initial={false}
            animate={{ 
              height: isExpanded ? 'auto' : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden flex flex-col items-center w-full"
          >
            <div className={`w-8 h-[2px] my-4 ${isNavy ? 'bg-[#BFA052]/60' : 'bg-white/60'}`} />
            <p className={`font-poppins text-base sm:text-[17px] font-medium leading-relaxed tracking-wide ${descColorClass}`}>
              {benefit.description}
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col items-center mt-auto mb-4 z-10">
          <div className="flex items-center gap-1.5">
            <div className={`w-1.5 h-1.5 rounded-full ${isNavy ? 'bg-[#BFA052]/40' : 'bg-white/40'}`} />
            <svg 
              className={`w-4 h-4 ${starColorClass} fill-current transition-transform duration-500`} 
              viewBox="0 0 24 24"
            >
              <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
            </svg>
            <div className={`w-1.5 h-1.5 rounded-full ${isNavy ? 'bg-[#BFA052]/40' : 'bg-white/40'}`} />
          </div>
        </div>
      </div>

      <div 
        className="absolute -top-22 left-1/2 -translate-x-1/2 z-30 transition-transform duration-300 group-hover:scale-105"
      >
        {isNavy ? (
          <div className="w-44 h-44 rounded-full bg-gradient-to-b from-[#184a77] via-[#0C2C4D] to-[#061a2f] flex items-center justify-center border-[4.5px] border-[#BFA052] shadow-[0_18px_36px_rgba(5,20,36,0.45),inset_0_4px_8px_rgba(255,255,255,0.22),inset_0_-4px_8px_rgba(0,0,0,0.4)] relative">
            <div className="absolute inset-[6px] rounded-full border border-[#BFA052]/35" />
            <div className="absolute inset-[10px] rounded-full border border-[#BFA052]/10" />
            <IconContainer name={benefit.iconName} className="text-[#BFA052]" size={66} />
          </div>
        ) : (
          <div className="w-44 h-44 rounded-full bg-gradient-to-b from-[#fad57b] via-[#BFA052] to-[#8d6d2b] flex items-center justify-center border-[4px] border-white/95 shadow-[0_18px_36px_rgba(92,72,25,0.45),inset_0_4px_8px_rgba(255,255,255,0.45),inset_0_-4px_8px_rgba(0,0,0,0.3)] relative">
            <div className="absolute inset-[-10px] rounded-full border border-[#BFA052]/15 bg-[#BFA052]/5 blur-md pointer-events-none" />
            <div className="absolute inset-[6px] rounded-full border border-white/30" />
            <IconContainer name={benefit.iconName} className="text-white" size={66} />
          </div>
        )}
      </div>
    </motion.div>
  );
};
