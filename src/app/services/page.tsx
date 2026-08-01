'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import LandApprovalSection from '@/components/sections/land-approval/LandApprovalSection';
import AcquisitionEcosystemSection from '@/components/sections/ecosystem/AcquisitionEcosystemSection';
import AcquisitionChallengesSection from '@/components/sections/challenges/AcquisitionChallengesSection';
import AcquisitionBenefitsSection from '@/components/sections/benefits/AcquisitionBenefitsSection';

const HERO_CONTENT = {
  backgroundImage: "/Services/Services_banner.png",
};

export default function ServicesPage() {
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
      {/* Blueprint fine aesthetic network vector grid lines */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="h-full w-full stroke-brand-gold/35 fill-none stroke-[0.06]">
          <pattern id="services-hexes" x="0" y="0" width="10" height="17.3" patternUnits="userSpaceOnUse">
            <path d="M5 0 L10 2.8 L10 8.5 L5 11.3 L0 8.5 L0 2.8 Z" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#services-hexes)" />
        </svg>
      </div>

      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#1e5c94]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* ─── HERO BANNER SECTION ─── */}
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
              alt="Services Banner"
              fill
              priority
              className="object-cover object-center filter brightness-90 contrast-110"
            />
          </motion.div>
          {/* Navy gradient overlay for readable contrast and premium depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/55 to-brand-navy/20 z-10" />
        </div>

        {/* Text overlay Container */}
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-16 w-full relative z-20 text-left">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-poppins text-white text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.25] max-w-5xl space-y-2 md:space-y-3"
          >
            <motion.span variants={itemVariants} className="block font-tibere">
              You bring the <span className="text-[#BFA052]">ambition</span>.
            </motion.span>
            <motion.span variants={itemVariants} className="block font-tibere">
              We bring everything it takes to <span className="text-[#BFA052]">build</span> it.
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Golden Ribbon Section Break */}
      <div className="w-full h-[4px] bg-brand-gold relative z-20 shadow-[0_2px_10px_rgba(0,0,0,0.15)]" />

      {/* ─── LAND APPROVAL, ECOSYSTEM, CHALLENGES, & BENEFITS SECTIONS ─── */}
      <div
        className="w-full flex-1"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.90)), url('/Logo_Distort_BG.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '300px'
        }}
      >
        <LandApprovalSection />
        <AcquisitionEcosystemSection />
        <AcquisitionChallengesSection />
        <AcquisitionBenefitsSection />
      </div>
    </div>
  );
}
