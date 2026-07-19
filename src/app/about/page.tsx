'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Eye, Target, FileText, Users, Landmark, Check, MapPin, Compass, ShieldCheck, Lock, ChevronLeft, ChevronRight, Leaf, TrendingUp } from 'lucide-react';

const HERO_CONTENT = {
  title: "Delivering the Groundwork\nthat Powers Growth.",
  backgroundImage: "/about_us/AboutUsHero.png",
};

export default function AboutUsPage() {
  // States for interactive tooltips
  const [activePin, setActivePin] = useState<number | null>(null);
  const [activeNode, setActiveNode] = useState<number | null>(null);

  // Mobile coordinates
  const visionPinsMobile = [
    { id: 1, name: "Panvel Logistic Hub", coord: "18.989ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â° N, 73.117ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â° E", left: "12.5%", top: "60%" },
    { id: 2, name: "Bhiwandi Warehousing Corridor", coord: "19.283ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â° N, 73.048ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â° E", left: "24%", top: "68.75%" },
    { id: 3, name: "JNPT Logistics Sector", coord: "18.895ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â° N, 72.946ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â° E", left: "22.1%", top: "42.5%" },
    { id: 4, name: "Thane Industrial Zone", coord: "19.218ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â° N, 72.980ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â° E", left: "35.5%", top: "32.5%" },
    { id: 5, name: "Navi Mumbai Commercial Hub", coord: "19.030ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â° N, 73.020ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â° E", left: "51%", top: "46.25%" },
    { id: 6, name: "Pune Infrastructure Corridor", coord: "18.520ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â° N, 73.856ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â° E", left: "56.7%", top: "72.5%" },
  ];

  const missionNodesMobile = [
    { id: 1, title: "Land Identification", desc: "Sourcing strategic locations and conducting exhaustive legal title verifications.", left: "80%", top: "27.5%", color: "#0d411f", icon: FileText },
    { id: 2, title: "Stakeholder Alignment", desc: "Facilitating transparent joint ventures and structured developer agreements.", left: "84%", top: "42.5%", color: "#0d59b3", icon: Users },
    { id: 3, title: "Regulatory Approvals", desc: "Navigating local statutory compliances and securing administrative clearances.", left: "84%", top: "61.25%", color: "#5939a3", icon: Landmark },
    { id: 4, title: "Groundwork Execution", desc: "Commencing basic site civil works and handing over ready-to-build sites.", left: "80%", top: "76.25%", color: "#136c3e", icon: Check },
  ];

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
          <pattern id="about-hexes" x="0" y="0" width="10" height="17.3" patternUnits="userSpaceOnUse">
            <path d="M5 0 L10 2.8 L10 8.5 L5 11.3 L0 8.5 L0 2.8 Z" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#about-hexes)" />
        </svg>
      </div>

      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#1e5c94]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Hero Section */}
      <div className="relative w-full h-[450px] xs:h-[520px] md:h-[620px] lg:h-[700px] flex items-center bg-brand-navy overflow-hidden pt-[60px] md:pt-[80px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.80 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            <Image
              src={HERO_CONTENT.backgroundImage}
              alt="About Us Background"
              fill
              priority
              className="object-cover object-center filter brightness-90 contrast-110"
            />
          </motion.div>
          {/* Navy gradient overlay for readable contrast and premium depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/45 to-brand-navy/5"></div>
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
              Delivering the Groundwork
            </motion.span>
            <motion.span variants={itemVariants} className="block font-tibere">
              that <span className="text-brand-gold">Powers Growth.</span>
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Golden Ribbon Section Break */}
      <div className="w-full h-[4px] bg-brand-gold relative z-20 shadow-[0_2px_10px_rgba(0,0,0,0.15)]" />

      {/* Main Content Area */}
      <div
        className="w-full flex-1"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.90)), url('/Logo_Distort_BG.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '300px'
        }}
      >
        <section className="relative w-full pt-10 md:pt-12 pb-8 md:pb-12 bg-transparent overflow-hidden">
          <div className="max-w-[95rem] mx-auto px-6 md:px-12 lg:px-16 w-full relative z-10">

            {/* Introductory Text Structure matching design sheet */}
            <div className="text-center max-w-5xl mx-auto mb-1 md:mb-2 space-y-8 relative z-10 px-4">
              <p className="font-poppins text-brand-navy/80 text-[17px] lg:text-lg font-medium leading-relaxed">
                We know what you're dealing with. The right land is hard to find. Approvals take longer than they should.
                And somewhere in the middle of all of it, you're left managing a process that was never designed to be easy.
              </p>

              <div className="flex flex-col items-center gap-4">
                <h3 className="text-2xl md:text-3xl font-poppins font-bold text-brand-navy max-w-4xl leading-tight">
                  We built Conservve Infra Solutions to change that experience for you.
                </h3>
                <div className="w-16 h-[2px] bg-brand-gold" />
              </div>

              <p className="font-poppins text-brand-navy/80 text-[17px] lg:text-lg font-medium leading-relaxed max-w-4xl mx-auto">
                Based in Mumbai, we specialise in land acquisition and statutory approvals for businesses and developers
                who are done with delays and ready to move. We come in, take ownership of the complexity, and walk
                every stage alongside you with complete transparency, full compliance, and a commitment to
                getting you where you need to be, faster.
              </p>

              <div className="flex flex-col items-center gap-6">
                <h4 className="text-xl md:text-2xl font-poppins font-bold text-brand-navy">
                  Your project deserves that. And so do you.
                </h4>

                {/* Gold blueprint symbol divider line */}
                <div className="flex items-center gap-4 w-full justify-center opacity-70">
                  <div className="w-24 h-[1px] bg-brand-gold/60" />
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <div className="w-3.5 h-3.5 rounded-full border border-brand-gold flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  </div>
                  <div className="w-24 h-[1px] bg-brand-gold/60" />
                </div>
              </div>
            </div>

            {/*
              ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ DESKTOP INFOGRAPHIC: mv_bg.png (1540ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â740) full-unit image ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬
              Text zone analysis (% of image width):
                Left polygon body:  x = 4%  ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ 30%   (28% wide)
                Connector throat:   x = 30% ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ 63%   (graphical only)
                Right polygon body: x = 63% ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ 90%   (27% wide)
                Mission nodes:      x = 88% ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ 100%  (icons, no text)
            */}
            <motion.div
              className="w-full max-w-[1660px] mx-auto hidden lg:block relative select-none z-20"
              style={{ aspectRatio: '1540 / 740' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {/* ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ Full-unit background image ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ */}
              <div className="absolute inset-0">
                <Image
                  src="/about_us/mv_bg.png"
                  fill
                  sizes="(min-width: 1024px) 1660px, 100vw"
                  priority
                  className="object-fill"
                  alt="Vision Mission Infographic"
                />
              </div>

              {/* ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ CENTRAL LOGO BADGE (Desktop) ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ */}
              <div
                className="absolute z-30 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center border-[3px] border-brand-gold"
                style={{
                  left: '50.45%',
                  top: '47.8%',
                  width: '9.3%',
                  aspectRatio: '1/1',
                  maxWidth: '135px',
                  minWidth: '100px',
                  background: 'radial-gradient(circle at 30% 30%, #ffffff 0%, #fdfdfd 50%, #f4f2eb 100%)',
                  boxShadow: '0 20px 40px -10px rgba(191,160,82,0.25), 0 0 0 1px rgba(191,160,82,0.15), inset 0 -6px 12px rgba(191,160,82,0.1), inset 0 6px 12px rgba(255,255,255,0.9)'
                }}
              >
                {/* Rotating dashed ring */}
                <motion.div
                  className="absolute inset-1 rounded-full border border-dashed border-brand-gold/60"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                />
                <div className="w-[64%] h-[64%] relative flex items-center justify-center">
                  <Image
                    src="/logo-dark-transparent.png"
                    alt="Conservve Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ VISION: icon + heading + text ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â left polygon body ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ */}
              <div
                className="absolute z-10 flex flex-col items-start text-left"
                style={{ left: '9%', top: '25%', width: '21.5%' }}
              >
                {/* Vision Icon ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â decorative eye centered above left-aligned title */}
                <div className="relative mb-5 shrink-0 self-start">
                  {/* Outer pulse ring */}
                  <span className="absolute inset-0 rounded-full border-2 border-brand-gold/25 scale-[1.4] animate-pulse" />
                  {/* Middle ring */}
                  <span className="absolute inset-0 rounded-full border border-brand-gold/40 scale-[1.18]" />
                  {/* Main icon circle */}
                  <div className="relative w-14 h-14 rounded-full border-2 border-brand-gold bg-brand-navy/70 backdrop-blur-sm flex items-center justify-center shadow-[0_0_18px_rgba(191,160,82,0.35)]">
                    {/* Inner decorative ring */}
                    <span className="absolute inset-[3px] rounded-full border border-brand-gold/40" />
                    <Eye className="w-7 h-7 text-brand-gold" strokeWidth={1.5} />
                  </div>
                </div>

                {/* VISION heading ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â brand gold */}
                <h3 className="text-3xl xl:text-4xl font-poppins font-black tracking-widest text-brand-gold leading-none drop-shadow-lg">
                  VISION
                </h3>
                {/* Gold underline accent */}
                <div className="w-16 h-[4.5px] bg-brand-gold mt-3 mb-5 rounded-full" />
                {/* Description paragraph */}
                <p className="font-poppins text-white/90 text-[15px] xl:text-[16px] font-normal leading-[1.65] drop-shadow">
                  To be a trusted leader in<br className="hidden xl:inline" /> land acquisition and regulatory<br className="hidden xl:inline" /> solutions, known for delivering<br className="hidden xl:inline" /> certainty, transparency, and<br className="hidden xl:inline" /> long-term value across every project.
                </p>
              </div>

              {/* ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ MISSION: icon + heading + text ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â right polygon body ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ */}
              {/* Changed to items-end and text-right to prevent overlap with the center throat/arrow */}
              <div
                className="absolute z-10 flex flex-col items-end text-right"
                style={{ right: '12%', top: '25%', width: '23.5%' }}
              >
                {/* Mission Icon ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â decorative target centered above right-aligned title */}
                <div className="relative mb-5 shrink-0 self-end">
                  {/* Outer pulse ring */}
                  <span className="absolute inset-0 rounded-full border-2 border-brand-navy/30 scale-[1.4] animate-pulse" />
                  {/* Middle ring */}
                  <span className="absolute inset-0 rounded-full border border-brand-navy/50 scale-[1.18]" />
                  {/* Main icon circle */}
                  <div className="relative w-14 h-14 rounded-full border-2 border-brand-navy bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-[0_0_18px_rgba(4,22,42,0.4)]">
                    {/* Inner decorative ring */}
                    <span className="absolute inset-[3px] rounded-full border border-brand-navy/50" />
                    <Target className="w-7 h-7 text-brand-navy" strokeWidth={1.5} />
                  </div>
                </div>

                {/* MISSION heading ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â brand navy */}
                <h3 className="text-3xl xl:text-4xl font-poppins font-black tracking-widest text-brand-navy leading-none drop-shadow-lg">
                  MISSION
                </h3>
                {/* Navy underline accent */}
                <div className="w-16 h-[4.5px] bg-brand-navy mt-3 mb-5 rounded-full" />
                {/* Description paragraph */}
                <p className="font-poppins text-white/90 text-[15px] xl:text-[16px] font-normal leading-[1.65] drop-shadow">
                  To simplify land acquisition and<br className="hidden xl:inline" /> approval processes through deep<br className="hidden xl:inline" /> expertise, strong institutional networks,<br className="hidden xl:inline" /> and efficient execution, empowering<br className="hidden xl:inline" /> clients to move forward with confidence.
                </p>
              </div>

            </motion.div>

            {/* ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ MOBILE & TABLET LAYOUT: RESPONSIVE STACKED BLOCKS ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ */}
            <div className="w-full flex flex-col items-center justify-center gap-8 mt-8 relative z-20 select-none lg:hidden">

              {/* MOBILE: VISION PANEL */}
              <div className="relative w-full max-w-[500px] aspect-[520/400] flex-shrink-0 group">
                {/* SVG Background Layer */}
                <svg viewBox="0 0 520 400" className="w-full h-full absolute inset-0 select-none pointer-events-none drop-shadow-2xl">
                  {/* Symmetrical polygonal envelope */}
                  <path
                    d="M 40,50 L 320,50 L 490,160 L 520,160 L 520,240 L 490,240 L 320,350 L 40,350 L 10,320 L 10,80 Z"
                    fill="url(#vision-gradient)"
                    stroke="#BFA052"
                    strokeWidth="1.5"
                  />

                  {/* Coordinate GPS text labels */}
                  <text x="-225" y="24" fill="#BFA052" fontSize="9.5" letterSpacing="0.18em" transform="rotate(-90)" opacity="0.8" fontFamily="monospace">
                    N 19ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â° 04' 28.3"
                  </text>
                  <text x="45" y="372" fill="#BFA052" fontSize="9.5" letterSpacing="0.18em" opacity="0.8" fontFamily="monospace">
                    E 72ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â° 52' 11.7"
                  </text>

                  {/* Topography map contour lines */}
                  <path d="M 20,95 C 130,65 240,165 370,95" stroke="#1e4d7d" strokeWidth="0.8" opacity="0.4" fill="none" />
                  <path d="M 20,145 C 160,115 270,225 410,145" stroke="#1e4d7d" strokeWidth="0.8" opacity="0.4" fill="none" />
                  <path d="M 30,195 C 180,165 290,285 440,195" stroke="#1e4d7d" strokeWidth="0.8" opacity="0.3" fill="none" />
                  <path d="M 40,245 C 200,215 310,335 460,245" stroke="#1e4d7d" strokeWidth="0.8" opacity="0.2" fill="none" />

                  {/* Network paths linking coordinate map points */}
                  <path d="M 65,240 L 125,275 L 115,170 L 185,130 L 265,185 L 295,290" stroke="#BFA052" strokeWidth="1" strokeDasharray="3,3" fill="none" opacity="0.5" />
                </svg>

                {/* Animated Pulsing Location pins overlay */}
                <div className="absolute inset-0 pointer-events-none z-10">
                  {visionPinsMobile.map((pin) => (
                    <motion.div
                      key={pin.id}
                      className="absolute pointer-events-auto cursor-pointer"
                      style={{ left: pin.left, top: pin.top, transform: 'translate(-50%, -50%)' }}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ repeat: Infinity, duration: 3, delay: 0.1 * pin.id }}
                      onClick={() => setActivePin(activePin === pin.id ? null : pin.id)}
                    >
                      <MapPin className="w-5 h-5 text-sky-400 filter drop-shadow-md" />
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Pin Tooltip (Simple overlay type) */}
                <AnimatePresence>
                  {activePin !== null && (
                    <div className="absolute left-[38%] top-[10%] z-30 bg-[#04162a] text-white border border-brand-gold/40 px-3 py-2 rounded shadow-xl max-w-[200px]">
                      <h5 className="font-poppins font-bold text-xs text-brand-gold leading-tight">
                        {visionPinsMobile.find(p => p.id === activePin)?.name}
                      </h5>
                      <span className="block font-mono text-[8.5px] text-white/60 mt-1">
                        {visionPinsMobile.find(p => p.id === activePin)?.coord}
                      </span>
                    </div>
                  )}
                </AnimatePresence>

                {/* HTML content overlays */}
                <div className="absolute inset-0 flex flex-col justify-center pl-10 pr-24 sm:pl-14 sm:pr-32 text-left z-20">
                  {/* Eye Target Icon */}
                  <div className="w-14 h-14 rounded-full border border-brand-gold/60 flex items-center justify-center mb-4 bg-brand-navy/60 backdrop-blur-sm shadow-inner relative shrink-0">
                    <div className="absolute inset-0.5 rounded-full border border-dashed border-brand-gold/30" />
                    <Eye className="w-7 h-7 text-brand-gold" />
                  </div>

                  {/* Vision Header */}
                  <h3 className="text-3xl font-poppins font-black tracking-widest text-white leading-none">VISION</h3>
                  <div className="w-12 h-[3px] bg-brand-gold mt-3 mb-4" />

                  {/* Description */}
                  <p className="font-poppins text-white/80 text-sm sm:text-[14.5px] font-normal leading-relaxed max-w-[285px]">
                    To be a trusted leader in land acquisition and regulatory solutions, known for delivering certainty,
                    transparency, and long-term value across every project.
                  </p>
                </div>
              </div>

              {/* MOBILE: TRANSMITTER NEXUS HUB */}
              <div className="relative w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-xl border-2 border-brand-gold z-10 shrink-0">
                <motion.div
                  className="absolute inset-1 rounded-full border border-dashed border-brand-gold/60"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                />
                <div className="w-16 h-16 relative flex items-center justify-center shrink-0">
                  <div className="absolute inset-0 w-full h-full scale-110">
                    <Image
                      src="/logo-dark-transparent.png"
                      alt="Conservve Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* MOBILE: MISSION PANEL */}
              <div className="relative w-full max-w-[500px] aspect-[520/400] flex-shrink-0 group">
                {/* SVG Background Layer */}
                <svg viewBox="0 0 520 400" className="w-full h-full absolute inset-0 select-none pointer-events-none drop-shadow-2xl">
                  {/* Symmetrical polygonal envelope (mirrored) */}
                  <path
                    d="M 200,50 L 480,50 L 510,80 L 510,320 L 480,350 L 200,350 L 30,240 L 0,240 L 0,160 L 30,160 Z"
                    fill="url(#mission-gradient)"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />

                  {/* Coordinate GPS text labels */}
                  <text x="-225" y="513" fill="#ffffff" fontSize="9.5" letterSpacing="0.18em" transform="rotate(-90)" opacity="0.8" fontFamily="monospace">
                    N 19ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â° 04' 23.1"
                  </text>
                  <text x="380" y="372" fill="#ffffff" fontSize="9.5" letterSpacing="0.18em" opacity="0.8" fontFamily="monospace">
                    E 72ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â° 52' 24.4"
                  </text>

                  {/* Topography map contour lines */}
                  <path d="M 150,95 C 280,65 390,165 500,95" stroke="#ffffff" strokeWidth="0.8" opacity="0.25" fill="none" />
                  <path d="M 110,145 C 250,115 360,225 500,145" stroke="#ffffff" strokeWidth="0.8" opacity="0.25" fill="none" />
                  <path d="M 80,195 C 230,165 340,285 500,195" stroke="#ffffff" strokeWidth="0.8" opacity="0.2" fill="none" />

                  {/* Dashed node route track */}
                  <path d="M 425,120 L 448,180 L 448,255 L 425,315" stroke="#ffffff" strokeWidth="1.6" strokeDasharray="4,4" fill="none" opacity="0.65" />

                  {/* Pine Forest silhouette cluster in bottom-right corner */}
                  <g transform="translate(425, 260) scale(0.65)">
                    <path d="M 50,20 L 70,70 L 63,70 L 73,95 L 60,95 L 77,130 L 23,130 L 40,95 L 27,95 L 37,70 L 30,70 Z" fill="#0b381a" />
                    <path d="M 80,45 L 96,85 L 90,85 L 101,110 L 89,110 L 103,135 L 57,135 L 71,110 L 59,110 L 70,85 L 64,85 Z" fill="#093016" />
                  </g>
                </svg>

                {/* SVG path node symbols */}
                <div className="absolute pointer-events-none z-10">
                  {missionNodesMobile.map((node) => {
                    const NodeIcon = node.icon;
                    return (
                      <div
                        key={node.id}
                        className="absolute pointer-events-auto cursor-pointer"
                        style={{ left: node.left, top: node.top, transform: 'translate(-50%, -50%)' }}
                        onClick={() => setActiveNode(node.id)}
                      >
                        <div
                          className="w-8 h-8 rounded-full border border-white flex items-center justify-center shadow"
                          style={{ backgroundColor: node.color }}
                        >
                          <NodeIcon className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Mobile Mission Node Tooltip */}
                <AnimatePresence>
                  {activeNode !== null && (
                    <div className="absolute left-[38%] top-[10%] z-30 bg-white text-brand-navy border-2 border-brand-gold px-3 py-2 rounded shadow-xl max-w-[220px]">
                      <h5 className="font-poppins font-bold text-xs text-brand-navy leading-tight">
                        {missionNodesMobile.find(n => n.id === activeNode)?.title}
                      </h5>
                      <p className="text-[10px] text-brand-navy/80 mt-1 leading-normal">
                        {missionNodesMobile.find(n => n.id === activeNode)?.desc}
                      </p>
                    </div>
                  )}
                </AnimatePresence>

                {/* HTML content overlays */}
                <div className="absolute inset-0 flex flex-col justify-center pl-10 pr-24 sm:pl-14 sm:pr-32 text-left z-20">
                  {/* Target bullseye Icon */}
                  <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center mb-4 bg-white/10 backdrop-blur-sm shadow-inner relative shrink-0">
                    <div className="absolute inset-0.5 rounded-full border border-dashed border-white/20" />
                    <Target className="w-7 h-7 text-white" />
                  </div>

                  {/* Mission Header */}
                  <h3 className="text-3xl font-poppins font-black tracking-widest text-white leading-none">MISSION</h3>
                  <div className="w-12 h-[3px] bg-white mt-3 mb-4" />

                  {/* Description */}
                  <p className="font-poppins text-white/90 text-sm sm:text-[14.5px] font-normal leading-relaxed max-w-[285px]">
                    To simplify land acquisition and approval processes through deep expertise, strong institutional networks,
                    and efficient execution, empowering clients to move forward with confidence.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        <CoreValuesSection />
        <EsgInnovationSection />
      </div>
    </div>
  );
}

// ==================== CORE VALUES SECTION COMPONENT ====================
function CoreValuesSection() {
  const [phase, setPhase] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);



  const svgContainerRef = useRef<HTMLDivElement>(null);
  const [svgW, setSvgW] = useState(1200);

  // Symmetrical x coordinates derived from the exact peaks/troughs of the 7-lobe sine wave
  const getXNodes = (width: number) => {
    return [
      (1 / 14) * width,
      (3 / 14) * width,
      (5 / 14) * width,
      (7 / 14) * width,
      (9 / 14) * width,
      (11 / 14) * width,
      (13 / 14) * width
    ];
  };

  const xNodes = getXNodes(svgW);

  interface CoreValue {
    id: string;
    num: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    isPlaceholder?: boolean;
  }

  const coreValues: CoreValue[] = [
    {
      id: 'val1',
      num: '1',
      title: 'Clarity in Every Deal',
      description: 'We ensure complete visibility across every stage, titles, processes, and transactions, eliminating ambiguity and building client confidence.',
      icon: Eye,
    },
    {
      id: 'val2',
      num: '2',
      title: 'Execution with Ownership',
      description: 'We take end-to-end responsibility, driving every mandate with commitment and result-oriented focus.',
      icon: Compass,
    },
    {
      id: 'val3',
      num: '3',
      title: 'Regulatory Expertise with Responsibility',
      description: 'We navigate complex statutory frameworks with precision and accountability, ensuring every approval is secured the right way.',
      icon: ShieldCheck,
    },
    {
      id: 'val4',
      num: '4',
      title: 'Relationship-Driven Approach',
      description: 'Strong, long-standing networks with stakeholders and authorities enable smoother coordination and dependable outcomes.',
      icon: Users,
    },
    {
      id: 'val5',
      num: '5',
      title: 'Reserved Placeholder',
      description: 'Keep a fifth DNA node visible as a future placeholder for an upcoming core value.',
      icon: Lock,
      isPlaceholder: true,
    },
  ];

  // Track actual SVG container dimensions so viewBox matches exactly
  useEffect(() => {
    const el = svgContainerRef.current;
    if (!el) return;
    const sync = () => {
      setSvgW(el.clientWidth || 1200);
    };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Fluid continuous gentle movement of DNA strands (slower and more majestic)
  useEffect(() => {
    let animationFrameId: number;
    const tick = () => {
      setPhase((prev) => (prev + 0.003) % (Math.PI * 2));
      animationFrameId = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);




  const scrollMobileTo = (index: number) => {
    setMobileActiveIndex(index);
    setActiveIndex(index);
  };

  // Mathematical parameters for the horizontal double helix
  const width = svgW || 1200;
  const centerY = 135; // Centered inside a taller 270px canvas
  const amplitude = 58; // Highly pronounced loops for elegant authority
  const frequency = (Math.PI * 7) / width; // 3.5 complete wave cycles across the dynamic width (7 lobes)


  // Returns the fixed x position (aligned to nearest DNA grid point) and ALWAYS the vertical center
  // of the DNA helix (centerY) so icon circles sit at the midpoint of each DNA 'eye' lobe.
  const getActiveNodeCoordinates = (index: number) => {
    const xRaw = xNodes[index] !== undefined ? xNodes[index] : (index * width) / 4;
    const pointsCount = 120;
    const step = width / pointsCount;
    const nearestI = Math.round(xRaw / step / 2) * 2;
    const x = Math.min(width, Math.max(0, nearestI * step));
    // y is ALWAYS the DNA center-line so circles are fixed at the midpoint between both strands
    return { x, y: centerY, nearestI };
  };

  // Depth-Sorted 3D Painter's Algorithm for physical intertwined look matching the reference image
  const renderDnaStructure = () => {
    const pointsCount = 120;
    const drawList: any[] = [];

    for (let i = 0; i < pointsCount; i++) {
      const x1 = (i / pointsCount) * width;
      const x2 = ((i + 1) / pointsCount) * width;

      const angle1 = x1 * frequency + phase;
      const angle2 = x2 * frequency + phase;

      const y1_A = centerY + Math.sin(angle1) * amplitude;
      const y2_A = centerY + Math.sin(angle2) * amplitude;

      const y1_B = centerY - Math.sin(angle1) * amplitude;
      const y2_B = centerY - Math.sin(angle2) * amplitude;

      const z_A = Math.cos((angle1 + angle2) / 2);
      const z_B = -z_A;

      // Render Strand A Segment (Navy #0C2C4D)
      drawList.push({
        type: 'strandA',
        z: z_A,
        render: (
          <path
            key={`sa-${i}`}
            d={`M ${x1} ${y1_A} L ${x2} ${y2_A}`}
            stroke="url(#navy-strand-grad)"
            strokeWidth={6.5 + z_A * 2.2} // Thicker strand for high visual weight
            strokeLinecap="round"
            opacity={0.88 + (z_A + 1) * 0.06}
          />
        )
      });

      // Render Strand B Segment (Gold #BFA052)
      drawList.push({
        type: 'strandB',
        z: z_B,
        render: (
          <path
            key={`sb-${i}`}
            d={`M ${x1} ${y1_B} L ${x2} ${y2_B}`}
            stroke="url(#gold-strand-grad)"
            strokeWidth={6.5 + z_B * 2.2} // Thicker strand for high visual weight
            strokeLinecap="round"
            opacity={0.88 + (z_B + 1) * 0.06}
          />
        )
      });

      // Regular vertical rungs (Connecting base pairs) drawn at regular intervals
      if (i % 3 === 0) {
        const z_rung = Math.min(z_A, z_B);
        drawList.push({
          type: 'rung',
          z: z_rung - 0.1, // Render slightly behind the strands for realistic overlap
          render: (
            <g key={`rung-group-${i}`} opacity={0.7 + z_rung * 0.15}>
              {/* Dual-color physical rungs meeting seamlessly in the center */}
              <line
                x1={x1}
                y1={y1_A}
                x2={x1}
                y2={centerY}
                stroke="#0C2C4D"
                strokeWidth={3 + z_rung * 0.8}
              />
              <line
                x1={x1}
                y1={y1_B}
                x2={x1}
                y2={centerY}
                stroke="#BFA052"
                strokeWidth={3 + z_rung * 0.8}
              />
              {/* Central small joint bead */}
              <circle
                cx={x1}
                cy={centerY}
                r={2}
                fill="#ffffff"
                stroke="#0C2C4D"
                strokeWidth={1}
              />
            </g>
          )
        });
      }

      // Add physical circular beads along both strands to replicate the reference image
      if (i % 2 === 0) {
        // Strand A Node
        drawList.push({
          type: 'nodeA',
          z: z_A,
          render: (
            <circle
              key={`na-${i}`}
              cx={x1}
              cy={y1_A}
              r={7.5 + z_A * 2.4} // Larger, more prominent beads
              fill="url(#navy-bead-grad)"
              stroke="#ffffff"
              strokeWidth={1.25}
              opacity={0.92 + z_A * 0.08}
            />
          )
        });

        // Strand B Node ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â always a regular gold bead (icon circles are overlaid separately at centerY)
        drawList.push({
          type: 'nodeB',
          z: z_B,
          render: (
            <circle
              key={`nb-${i}`}
              cx={x1}
              cy={y1_B}
              r={7.5 + z_B * 2.4}
              fill="url(#gold-bead-grad)"
              stroke="#ffffff"
              strokeWidth={1.25}
              opacity={0.92 + z_B * 0.08}
            />
          )
        });
      }
    }

    // Sort complete draw list by depth coordinate Z
    drawList.sort((a, b) => a.z - b.z);
    return drawList.map((item) => item.render);
  };

  return (
    <div className="bg-transparent text-navy font-body flex flex-col justify-start items-center pt-0 pb-16 md:pb-24 overflow-x-hidden relative select-none">

      {/* ==================== MAIN HEADING SECTION ==================== */}
      <div className="w-full max-w-[1240px] px-4 mx-auto text-left mb-10 md:mb-12">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-widest text-navy uppercase">
          Our <span className="text-brand-gold">Core</span> Values
        </h2>
        <div className="w-24 h-[3px] bg-gold mt-6 rounded-full" />
      </div>

      {/* ==================== DESKTOP & TABLET LAYOUT ==================== */}
      <div className="hidden md:block w-full">

        {/* ---- DNA + Icon Circles + Labels all in one unified relative container ---- */}
        <motion.div
          ref={svgContainerRef}
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full relative"
          style={{ height: '580px' }}
        >
          {/* SVG DNA Layer */}
          <svg
            width="100%"
            height="280"
            viewBox={`0 0 ${width} 280`}
            className="absolute top-0 left-0 overflow-visible"
            style={{ filter: "url(#dna-shadow)" }}
          >
            <defs>
              <radialGradient id="navy-bead-grad" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#4174a3" />
                <stop offset="35%" stopColor="#153d63" />
                <stop offset="100%" stopColor="#051526" />
              </radialGradient>
              <radialGradient id="gold-bead-grad" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#ffe49e" />
                <stop offset="35%" stopColor="#cca141" />
                <stop offset="100%" stopColor="#785917" />
              </radialGradient>
              <linearGradient id="navy-strand-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#081b30" />
                <stop offset="50%" stopColor="#1c4d7d" />
                <stop offset="100%" stopColor="#081b30" />
              </linearGradient>
              <linearGradient id="gold-strand-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#755615" />
                <stop offset="50%" stopColor="#d6b35c" />
                <stop offset="100%" stopColor="#755615" />
              </linearGradient>
              <filter id="dna-shadow" x="-5%" y="-15%" width="110%" height="140%">
                <feDropShadow dx="0" dy="16" stdDeviation="12" floodColor="#0C2C4D" floodOpacity="0.14" />
              </filter>
              <filter id="glow-highlight" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="10" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="icon-glow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* DNA Double Helix */}
            {renderDnaStructure()}

            {coreValues.map((val, idx) => {
              const nodePos = getActiveNodeCoordinates(idx + 1);
              const isHovered = activeIndex === idx;
              const circleR = 36;

              return (
                <g key={`icon-node-${val.id}`}>
                  {/* Outer hover glow rings */}
                  {isHovered && (
                    <>
                      <circle
                        cx={nodePos.x}
                        cy={nodePos.y}
                        r="62"
                        fill="url(#gold-bead-grad)"
                        fillOpacity="0.10"
                        filter="url(#glow-highlight)"
                      />
                      <circle
                        cx={nodePos.x}
                        cy={nodePos.y}
                        r="52"
                        fill="none"
                        stroke="#BFA052"
                        strokeWidth="1.5"
                        strokeOpacity="0.45"
                        className="animate-ping"
                        style={{ animationDuration: '1.8s' }}
                      />
                      <circle
                        cx={nodePos.x}
                        cy={nodePos.y}
                        r="46"
                        fill="none"
                        stroke="#BFA052"
                        strokeWidth="2"
                        strokeOpacity="0.65"
                      />
                    </>
                  )}

                  {/* Thin connector line from circle bottom down to the label row */}
                  <line
                    x1={nodePos.x}
                    y1={nodePos.y + circleR}
                    x2={nodePos.x}
                    y2={275}
                    stroke={isHovered ? '#BFA052' : 'rgba(12,44,77,0.22)'}
                    strokeWidth={isHovered ? 2 : 1.5}
                    strokeDasharray={isHovered ? 'none' : '3,3'}
                  />
                </g>
              );
            })}
          </svg>

          {/* ---- HTML interactive columns (combines icon circles and labels/cards in a single hover block) ---- */}
          <div
            className="absolute left-0 right-0 pointer-events-none"
            style={{ top: 0, height: '580px' }}
          >
            {coreValues.map((val, idx) => {
              const nodePos = getActiveNodeCoordinates(idx + 1);
              const isHovered = activeIndex === idx;
              const leftPercent = (nodePos.x / width) * 100;
              const IconComponent = val.icon;
              const colWidth = width / 7;

              return (
                <div
                  key={`column-${val.id}`}
                  className="absolute pointer-events-auto flex flex-col items-center"
                  style={{
                    left: `${leftPercent}%`,
                    top: 0,
                    width: `${colWidth}px`, // Edge-to-edge column width
                    height: '560px',
                    transform: 'translateX(-50%)',
                    zIndex: isHovered ? 40 : 10,
                  }}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* 1. Icon Badge (centered at nodePos.y = 135px) */}
                  <div
                    className="absolute flex items-center justify-center rounded-full transition-all duration-300 shadow-md"
                    style={{
                      left: '50%',
                      top: '135px',
                      transform: 'translate(-50%, -50%)',
                      width: isHovered ? '78px' : '72px',
                      height: isHovered ? '78px' : '72px',
                      background: isHovered ? '#0C2C4D' : '#ffffff',
                      border: isHovered ? '3px solid #BFA052' : '2px solid #d4c9a8',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ width: '22px', height: '22px', flexShrink: 0 }}>
                      <IconComponent
                        className={`w-full h-full transition-colors duration-300 ${isHovered
                          ? 'text-gold'
                          : val.isPlaceholder
                            ? 'text-slate-400'
                            : 'text-navy'
                          }`}
                      />
                    </div>
                  </div>

                  {/* 2. Card / Label (positioned at top = 284px) */}
                  <div
                    className="absolute flex flex-col items-center"
                    style={{
                      left: '50%',
                      transform: 'translateX(-50%)',
                      top: '284px',
                    }}
                  >
                    {isHovered && !val.isPlaceholder ? (
                      <motion.div
                        key="hover-card"
                        initial={{ opacity: 0, y: 12, scale: 0.94 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        style={{
                          width: '220px',
                          minHeight: '270px',
                          background: 'linear-gradient(145deg, #0d2847 0%, #0C2C4D 40%, #081e36 100%)',
                          borderTop: '4.5px solid #BFA052',
                          borderBottom: '4.5px solid #BFA052',
                          borderLeft: '1.5px solid #BFA052',
                          borderRight: '1.5px solid #BFA052',
                          borderRadius: '14px',
                          padding: '28px 20px 24px',
                          boxShadow: '0 20px 50px rgba(12,44,77,0.35), 0 0 24px rgba(191,160,82,0.12)',
                          textAlign: 'left',
                          color: '#ffffff',
                          cursor: 'default',
                        }}
                      >
                        {/* Number & Underline */}
                        <div className="flex flex-col items-center justify-center w-full mb-4">
                          <span
                            className="font-gotham font-medium text-gold text-center"
                            style={{ fontSize: '44px', lineHeight: 1, marginBottom: '6px' }}
                          >
                            {val.num}
                          </span>
                          <div style={{ width: '36px', height: '3px', background: '#BFA052', borderRadius: '2px' }} />
                        </div>

                        {/* Title */}
                        <h3
                          className="font-gotham font-medium uppercase tracking-wider text-white text-center"
                          style={{ fontSize: '18px', lineHeight: 1.35, marginBottom: '12px' }}
                        >
                          {val.title}
                        </h3>

                        {/* Description */}
                        <p
                          className="font-body text-white/80"
                          style={{ fontSize: '13.5px', lineHeight: 1.65 }}
                        >
                          {val.description}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="default-label"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center"
                      >
                        {/* Number row with side tick marks */}
                        <div className="flex items-center gap-3 mt-1">
                          <div
                            className="transition-all duration-300"
                            style={{
                              width: '3px',
                              height: '26px',
                              background: isHovered ? '#BFA052' : 'rgba(12,44,77,0.4)',
                            }}
                          />
                          <span
                            className="font-gotham font-medium transition-all duration-300"
                            style={{
                              fontSize: isHovered ? '54px' : '44px',
                              color: isHovered ? '#BFA052' : '#0C2C4D',
                              lineHeight: 1,
                              transition: 'all 0.3s ease',
                            }}
                          >
                            {val.num}
                          </span>
                          <div
                            className="transition-all duration-300"
                            style={{
                              width: '3px',
                              height: '26px',
                              background: isHovered ? '#BFA052' : 'rgba(12,44,77,0.4)',
                            }}
                          />
                        </div>

                        {/* Title label */}
                        <p
                          className="font-gotham font-medium uppercase tracking-wider text-center mt-3 transition-all duration-300"
                          style={{
                            fontSize: '15px',
                            lineHeight: 1.4,
                            maxWidth: '150px',
                            color: isHovered
                              ? '#BFA052'
                              : val.isPlaceholder
                                ? 'rgba(12,44,77,0.35)'
                                : 'rgba(12,44,77,0.85)',
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {val.title}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* ==================== MOBILE LAYOUT ==================== */}
      <div className="flex md:hidden flex-col items-center w-full px-4">

        {/* DNA Canvas */}
        <div className="w-full h-[200px] relative overflow-visible select-none mb-0">
          <svg
            width="100%"
            height="100%"
            viewBox={`0 0 ${width} 280`}
            className="overflow-visible"
            style={{ filter: "url(#dna-shadow)" }}
          >
            <defs>
              <radialGradient id="navy-bead-grad-m" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#4174a3" />
                <stop offset="35%" stopColor="#153d63" />
                <stop offset="100%" stopColor="#051526" />
              </radialGradient>
              <radialGradient id="gold-bead-grad-m" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#ffe49e" />
                <stop offset="35%" stopColor="#cca141" />
                <stop offset="100%" stopColor="#785917" />
              </radialGradient>
              <linearGradient id="navy-strand-grad-m" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#081b30" />
                <stop offset="50%" stopColor="#1c4d7d" />
                <stop offset="100%" stopColor="#081b30" />
              </linearGradient>
              <linearGradient id="gold-strand-grad-m" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#755615" />
                <stop offset="50%" stopColor="#d6b35c" />
                <stop offset="100%" stopColor="#755615" />
              </linearGradient>
            </defs>
            {renderDnaStructure()}

            {/* Icon circles on mobile DNA (central 5 blocks, indices 1 to 5) */}
            {coreValues.map((val, idx) => {
              const nodePos = getActiveNodeCoordinates(idx + 1);
              const isCurrent = idx === mobileActiveIndex;
              const r = 24;
              return (
                <g key={`mob-icon-${val.id}`}>
                  <circle
                    cx={nodePos.x}
                    cy={nodePos.y}
                    r={r}
                    fill={isCurrent ? '#0C2C4D' : '#ffffff'}
                    stroke={isCurrent ? '#BFA052' : '#e8e0cc'}
                    strokeWidth={isCurrent ? 2.5 : 1.5}
                    onClick={() => scrollMobileTo(idx)}
                    style={{ cursor: 'pointer' }}
                  />
                  {isCurrent && (
                    <circle
                      cx={nodePos.x}
                      cy={nodePos.y}
                      r="36"
                      fill="none"
                      stroke="#BFA052"
                      strokeWidth="1.5"
                      strokeOpacity="0.45"
                      className="animate-ping"
                      style={{ animationDuration: '2s' }}
                    />
                  )}
                  <foreignObject
                    x={nodePos.x - r}
                    y={nodePos.y - r}
                    width={r * 2}
                    height={r * 2}
                    style={{ pointerEvents: 'none' }}
                  >
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {React.createElement(val.icon, {
                        className: isCurrent ? 'text-gold' : val.isPlaceholder ? 'text-slate-400' : 'text-navy',
                        style: undefined
                      } as { className?: string })}
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Mobile active card */}
        <AnimatePresence mode="wait">
          {coreValues.map((val, idx) => {
            const isCurrent = idx === mobileActiveIndex;
            if (!isCurrent) return null;
            const IconComponent = val.icon;
            return (
              <motion.div
                key={`mob-active-${val.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="w-full max-w-sm mx-auto mt-4"
                style={{
                  background: 'linear-gradient(145deg, #0d2847 0%, #0C2C4D 40%, #081e36 100%)',
                  borderTop: '4.5px solid #BFA052',
                  borderBottom: '4.5px solid #BFA052',
                  borderLeft: '1.5px solid #BFA052',
                  borderRight: '1.5px solid #BFA052',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: '0 16px 48px rgba(12,44,77,0.4), 0 0 24px rgba(191,160,82,0.12)',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-heading font-bold text-gold" style={{ fontSize: '30px', lineHeight: 1 }}>{val.num}</span>
                  <div className="w-px h-6 bg-gold/30" />
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center border ${val.isPlaceholder ? 'border-dashed border-slate-500 bg-slate-700' : 'border-gold/40 bg-white/10'}`}>
                    <IconComponent className="w-4 h-4 text-gold" />
                  </div>
                </div>
                <div className="w-7 h-[2px] bg-gold rounded mb-3" />
                <h3 className="font-heading font-extrabold uppercase tracking-wider text-white mb-3" style={{ fontSize: '15px', lineHeight: 1.35 }}>
                  {val.title}
                </h3>
                {!val.isPlaceholder && (
                  <p className="font-body text-white/70" style={{ fontSize: '13.5px', lineHeight: 1.65 }}>
                    {val.description}
                  </p>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Swipe Controls and dots */}
        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={() => scrollMobileTo(Math.max(0, mobileActiveIndex - 1))}
            disabled={mobileActiveIndex === 0}
            className="p-2 rounded-full border border-slate-200 text-navy disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {coreValues.map((_, idx) => (
              <button
                key={`dot-${idx}`}
                onClick={() => scrollMobileTo(idx)}
                className="h-2 rounded-full transition-all duration-300"
                style={{ width: idx === mobileActiveIndex ? '20px' : '8px', background: idx === mobileActiveIndex ? '#BFA052' : '#e2e8f0' }}
              />
            ))}
          </div>
          <button
            onClick={() => scrollMobileTo(Math.min(coreValues.length - 1, mobileActiveIndex + 1))}
            disabled={mobileActiveIndex === coreValues.length - 1}
            className="p-2 rounded-full border border-slate-200 text-navy disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}

// ==================== ESG AND INNOVATION SECTION ====================
function EsgInnovationSection() {
  const [hoveredParcel, setHoveredParcel] = useState<number | null>(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const PARCELS = [
    {
      id: 1,
      title: "Eco-Assessed Land Acquisition",
      shortTitle: "ECO-ASSESSED\nLAND ACQUISITION",
      subtext: "Environmental lens for responsible acquisition.",
      description: "Every land parcel we evaluate goes through an environmental lens. We identify ecological sensitivities early, so your acquisition is responsible, sustainable, and never a liability down the road.",
      Icon: Leaf,
      image: "/about_us/esg/lp_2.png",
      left: "50%",
      top: "19%",
      width: "45%",
      cardPosition: "top",
      tilt: "rotate(0deg)"
    },
    {
      id: 2,
      title: "Community Before Contract",
      shortTitle: "COMMUNITY\nBEFORE CONTRACT",
      subtext: "We build trust and create positive impact.",
      description: "We earn community trust before we close any deal. Working alongside local stakeholders ensures sustainable, mutually beneficial alignments for every development projects.",
      Icon: Users,
      image: "/about_us/esg/lp_1.png",
      left: "24%",
      top: "33.5%",
      width: "45%",
      cardPosition: "left",
      tilt: "rotate(0deg)"
    },
    {
      id: 3,
      title: "Paperless Approvals",
      shortTitle: "PAPERLESS\nAPPROVALS",
      subtext: "Digitized approvals for speed and transparency.",
      description: "We have digitised our approvals process end to end, reducing paperwork, accelerating timelines, and building a cleaner, more transparent workflow that works better for everyone involved.",
      Icon: FileText,
      image: "/about_us/esg/lp_3.png",
      left: "76%",
      top: "33.5%",
      width: "45%",
      cardPosition: "right",
      tilt: "rotate(-10deg)"
    },
    {
      id: 4,
      title: "Zero-Tolerance Compliance",
      shortTitle: "ZERO-TOLERANCE\nCOMPLIANCE",
      subtext: "Highest legal and regulatory standards.",
      description: "There are no shortcuts here. Every project we touch is held to the highest legal and regulatory standards because your reputation and ours depend on doing this exactly right.",
      Icon: ShieldCheck,
      image: "/about_us/esg/lp_6.png",
      left: "24%",
      top: "66.5%",
      width: "45%",
      cardPosition: "left",
      tilt: "rotate(0deg)"
    },
    {
      id: 5,
      title: "Measurable Commitments",
      shortTitle: "MEASURABLE\nCOMMITMENTS",
      subtext: "Real ESG targets, third-party audits and open reporting.",
      description: "We set real ESG targets, back them with third-party audits, and report progress openly to every stakeholder, establishing true public transparency.",
      Icon: Target,
      image: "/about_us/esg/lp_5.png",
      left: "50%",
      top: "81%",
      width: "45%",
      cardPosition: "bottom",
      tilt: "rotate(0deg)"
    },
    {
      id: 6,
      title: "Tech-Driven Land Intelligence",
      shortTitle: "TECH-DRIVEN\nLAND INTELLIGENCE",
      subtext: "Data, location analytics and market intelligence.",
      description: "We use data, location analytics, and market intelligence to identify the right opportunities faster and smarter, giving you an edge that instinct alone can't provide.",
      Icon: TrendingUp,
      image: "/about_us/esg/lp_4.png",
      left: "76%",
      top: "66.5%",
      width: "45%",
      cardPosition: "right",
      tilt: "rotate(0deg)"
    }
  ];

  if (!mounted) {
    return (
      <section className="relative w-full py-16 md:py-24 bg-transparent border-t border-brand-gold/10 select-none">
        <div className="w-full max-w-[1240px] px-6 md:px-12 lg:px-16 mx-auto text-left mb-10 md:mb-12">
          <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-widest text-brand-navy uppercase">
            ESG and <span className="text-brand-gold">Innovation</span>
          </h2>
          <div className="w-24 h-[3px] bg-brand-gold mt-6 rounded-full" />
        </div>
        <div className="w-full max-w-[660px] mx-auto aspect-square" />
      </section>
    );
  }

  return (
    <section className="relative w-full py-16 md:py-24 bg-transparent border-t border-brand-gold/10 select-none overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.025] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #BFA052 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

      <div className="w-full max-w-[1280px] px-6 md:px-12 lg:px-16 mx-auto text-left mb-14">
        <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-widest text-brand-navy uppercase">
          ESG and <span className="text-brand-gold">Innovation</span>
        </h2>
        <div className="w-24 h-[3px] bg-brand-gold mt-6 mb-8 rounded-full" />
        <p className="font-poppins text-brand-navy/70 text-[16px] md:text-lg leading-relaxed max-w-3xl text-left">
          At Conservve Infra Solutions, doing the right thing and doing it smarter aren't separate goals, they're the same commitment. Every project we take on is guided by responsible practices, ethical standards, and a drive to push land development forward in ways that genuinely matter.
        </p>
      </div>

      <div className="w-full max-w-[1280px] px-6 md:px-12 lg:px-16 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Left Column: Interactive Circular Map ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â wider column */}
          <div className="col-span-12 lg:col-span-7 flex justify-center">
            <div
              className="relative w-full aspect-square select-none"
            >
              {/* Golden Dotted Connector Lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 8 }}
              >
                {PARCELS.map((parcel) => (
                  <line
                    key={parcel.id}
                    x1="50%"
                    y1="50%"
                    x2={parcel.left}
                    y2={parcel.top}
                    stroke="#BFA052"
                    strokeWidth="1.5"
                    strokeDasharray="3,6"
                    strokeLinecap="round"
                    opacity={hoveredParcel === parcel.id ? 1 : 0.45}
                  />
                ))}
              </svg>

              {/* Central ESG Hexagon */}
              <div
                className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center transition-transform duration-300 hover:scale-[1.03]"
                style={{ width: '24%', height: '27.6%' }}
              >
                <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-2xl">
                  <defs>
                    <linearGradient id="esg-gold-frame" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8c5c1e" />
                      <stop offset="15%" stopColor="#e8be74" />
                      <stop offset="35%" stopColor="#fef0d1" />
                      <stop offset="55%" stopColor="#c29242" />
                      <stop offset="75%" stopColor="#fae1a5" />
                      <stop offset="100%" stopColor="#7a4d16" />
                    </linearGradient>
                    <linearGradient id="esg-gold-frame-rev" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#7a4d16" />
                      <stop offset="25%" stopColor="#fae1a5" />
                      <stop offset="50%" stopColor="#c29242" />
                      <stop offset="75%" stopColor="#fef0d1" />
                      <stop offset="90%" stopColor="#e8be74" />
                      <stop offset="100%" stopColor="#8c5c1e" />
                    </linearGradient>
                    <radialGradient id="esg-navy-vignette" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#14345c" />
                      <stop offset="60%" stopColor="#08182b" />
                      <stop offset="100%" stopColor="#020a14" />
                    </radialGradient>
                    <filter id="esg-leather" x="0%" y="0%" width="100%" height="100%">
                      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.05 0" result="colorNoise" />
                      <feComposite operator="in" in2="SourceGraphic" />
                      <feBlend mode="multiply" in="SourceGraphic" />
                    </filter>
                  </defs>
                  <polygon points="50,3 97,30 97,85 50,112 3,85 3,30" fill="url(#esg-gold-frame)" />
                  <polygon points="50,4.5 95.5,30.5 95.5,84.5 50,110.5 4.5,84.5 4.5,30.5" fill="url(#esg-gold-frame-rev)" />
                  <polygon points="50,6 94,31.5 94,83.5 50,109 6,83.5 6,31.5" fill="#030c17" />
                  <polygon points="50,7 93,32 93,83 50,108 7,83 7,32" fill="url(#esg-navy-vignette)" filter="url(#esg-leather)" />
                  <polygon points="50,10 90,33 90,82 50,105 10,82 10,33" fill="none" stroke="url(#esg-gold-frame)" strokeWidth="0.8" opacity="0.65" />
                  <text x="50.6" y="58.6" textAnchor="middle" dominantBaseline="central" fill="#221301" fontFamily="var(--font-tibere, serif)" fontWeight="bold" fontSize="25" letterSpacing="1.4" opacity="0.9">ESG</text>
                  <text x="49.4" y="56.6" textAnchor="middle" dominantBaseline="central" fill="#ffffff" fontFamily="var(--font-tibere, serif)" fontWeight="bold" fontSize="25" letterSpacing="1.4" opacity="0.3">ESG</text>
                  <text x="50" y="57.5" textAnchor="middle" dominantBaseline="central" fill="url(#esg-gold-frame)" fontFamily="var(--font-tibere, serif)" fontWeight="bold" fontSize="25" letterSpacing="1.4">ESG</text>
                </svg>
              </div>

              {/* Interactive Land Parcel Overlays */}
              {PARCELS.map((parcel) => {
                const IconComponent = parcel.Icon;
                const isHovered = hoveredParcel === parcel.id;

                return (
                  <div
                    key={parcel.id}
                    className={`absolute z-20 flex flex-col items-center justify-center text-center group cursor-pointer`}
                    style={{
                      left: parcel.left,
                      top: parcel.top,
                      width: parcel.width,
                      aspectRatio: "1.15 / 1",
                      transform: `translate(-50%, -50%) ${isHovered ? 'translateY(-14px) scale(1.07)' : 'translateY(0px) scale(1)'}`,
                      transition: 'transform 0.38s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                    onMouseEnter={() => setHoveredParcel(parcel.id)}
                    onMouseLeave={() => setHoveredParcel(null)}
                  >
                    {/* Land Parcel Image */}
                    <img
                      src={parcel.image}
                      alt={parcel.title}
                      style={{
                        transform: `${parcel.tilt}`,
                        transformOrigin: 'center center',
                        filter: isHovered
                          ? 'drop-shadow(0 20px 28px rgba(12,44,77,0.45)) drop-shadow(0 0 16px rgba(191,160,82,0.5)) brightness(1.06)'
                          : 'drop-shadow(0 6px 10px rgba(12,44,77,0.22))',
                        transition: 'filter 0.35s ease',
                      }}
                      className="w-full h-full object-contain"
                    />

                    {/* Overlaid Icon + Label */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pb-[18%] sm:pb-[22%] px-3 pointer-events-none">
                      <div
                        className="w-[26px] h-[26px] sm:w-[34px] sm:h-[34px] rounded-full bg-white flex items-center justify-center shadow-lg border border-slate-100 mb-1.5"
                        style={{
                          boxShadow: isHovered
                            ? '0 0 20px rgba(191,160,82,0.6), 0 4px 12px rgba(12,44,77,0.15)'
                            : '0 4px 10px rgba(12,44,77,0.12)',
                          transition: 'box-shadow 0.3s ease',
                        }}
                      >
                        <IconComponent className="w-[12px] h-[12px] sm:w-[16px] sm:h-[16px] text-[#0C2C4D]" />
                      </div>
                      <div className={`font-poppins font-extrabold text-[7.5px] sm:text-[10px] md:text-[11.5px] uppercase tracking-wider leading-[1.1] max-w-[135px] mx-auto text-center select-none transition-colors duration-300 ${isHovered ? 'text-[#0C2C4D]' : 'text-brand-navy'}`}>
                        {parcel.shortTitle.split('\n').map((line, idx) => (
                          <div key={idx} className="font-extrabold">{line}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>


          {/* Right Column: Flat Horizontal Sliding Card Carousel */}
          <div className="col-span-12 lg:col-span-5 flex flex-col items-center justify-center" style={{ minHeight: '440px' }}>
            {/* Overflow-hidden container clips prev/next cards cleanly */}
            <div
              className="relative w-full overflow-hidden"
              style={{ height: '380px' }}
            >
              {(() => {
                const activeIdx = hoveredParcel != null
                  ? PARCELS.findIndex(p => p.id === hoveredParcel)
                  : 0;

                return PARCELS.map((parcel, i) => {
                  // Shortest-path offset relative to active
                  let offset = i - activeIdx;
                  if (offset > PARCELS.length / 2) offset -= PARCELS.length;
                  if (offset < -PARCELS.length / 2) offset += PARCELS.length;

                  // Only render prev (-1), active (0), next (+1)
                  if (Math.abs(offset) > 1) return null;

                  const isActive = offset === 0;
                  const Icon = parcel.Icon;

                  // Card width and center-to-center gap in px
                  const CARD_W = 240;
                  const CENTER_GAP = 260;

                  return (
                    <motion.div
                      key={parcel.id}
                      animate={{
                        x: offset * CENTER_GAP,
                        scale: isActive ? 1 : 0.84,
                        opacity: isActive ? 1 : 0.5,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        width: `${CARD_W}px`,
                        marginLeft: `-${CARD_W / 2}px`,
                        zIndex: isActive ? 10 : 5,
                        cursor: 'pointer',
                        willChange: 'transform, opacity',
                      }}
                      onMouseEnter={() => setHoveredParcel(parcel.id)}
                    >
                      {/* Portrait card */}
                      <div
                        style={{
                          width: '100%',
                          height: '360px',
                          borderRadius: '20px',
                          background: isActive
                            ? 'linear-gradient(160deg, #0C2C4D 0%, #0f3d6e 45%, #061828 100%)'
                            : 'linear-gradient(160deg, #091f38 0%, #060f1e 100%)',
                          border: isActive
                            ? '1.5px solid rgba(191,160,82,0.55)'
                            : '1px solid rgba(191,160,82,0.14)',
                          boxShadow: isActive
                            ? '0 24px 64px rgba(12,44,77,0.6), inset 0 1px 0 rgba(191,160,82,0.18)'
                            : '0 6px 20px rgba(12,44,77,0.28)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          padding: '30px 22px 26px',
                          gap: '14px',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        {/* Gold top shimmer â€” active only */}
                        {isActive && (
                          <div style={{
                            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                            background: 'linear-gradient(90deg, transparent 0%, #BFA052 35%, #fef0d1 50%, #BFA052 65%, transparent 100%)',
                          }} />
                        )}

                        {/* Icon circle */}
                        <div style={{
                          width: '70px',
                          height: '70px',
                          borderRadius: '50%',
                          flexShrink: 0,
                          background: isActive
                            ? 'linear-gradient(135deg, #BFA052 0%, #c9a14a 50%, #8c5c1e 100%)'
                            : 'rgba(191,160,82,0.1)',
                          border: isActive
                            ? '2px solid rgba(255,240,180,0.35)'
                            : '1.5px solid rgba(191,160,82,0.22)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: isActive
                            ? '0 0 28px rgba(191,160,82,0.3), 0 6px 18px rgba(12,44,77,0.5)'
                            : 'none',
                        }}>
                          <Icon style={{
                            width: isActive ? '30px' : '26px',
                            height: isActive ? '30px' : '26px',
                            color: isActive ? '#fff' : 'rgba(191,160,82,0.55)',
                          }} />
                        </div>

                        {/* Title */}
                        <p style={{
                          fontFamily: 'var(--font-poppins, sans-serif)',
                          fontWeight: 800,
                          fontSize: isActive ? '12px' : '10.5px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: isActive ? '#BFA052' : 'rgba(191,160,82,0.45)',
                          textAlign: 'center',
                          lineHeight: 1.3,
                          margin: 0,
                        }}>
                          {parcel.title}
                        </p>

                        {/* Gold divider */}
                        <div style={{
                          width: isActive ? '44px' : '20px',
                          height: '1.5px',
                          background: isActive
                            ? 'linear-gradient(90deg, transparent, #BFA052, transparent)'
                            : 'rgba(191,160,82,0.18)',
                          borderRadius: '2px',
                          flexShrink: 0,
                          transition: 'width 0.4s ease',
                        }} />

                        {/* Subtext tag */}
                        <p style={{
                          fontFamily: 'var(--font-poppins, sans-serif)',
                          fontWeight: 600,
                          fontSize: '9.5px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.14em',
                          color: isActive ? 'rgba(191,160,82,0.75)' : 'rgba(191,160,82,0.28)',
                          textAlign: 'center',
                          lineHeight: 1.4,
                          margin: 0,
                        }}>
                          {parcel.subtext}
                        </p>

                        {/* Description â€” active card only */}
                        {isActive && (
                          <p style={{
                            fontFamily: 'var(--font-poppins, sans-serif)',
                            fontWeight: 400,
                            fontSize: '12px',
                            color: 'rgba(203,213,225,0.85)',
                            lineHeight: 1.7,
                            textAlign: 'center',
                            margin: 0,
                          }}>
                            {parcel.description}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  );
                });
              })()}
            </div>

            {/* Pill dot indicators */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '20px', alignItems: 'center' }}>
              {PARCELS.map((parcel, i) => {
                const isActive = hoveredParcel === parcel.id || (hoveredParcel == null && i === 0);
                return (
                  <div
                    key={parcel.id}
                    onClick={() => setHoveredParcel(parcel.id)}
                    style={{
                      width: isActive ? '28px' : '7px',
                      height: '7px',
                      borderRadius: '4px',
                      background: isActive ? '#BFA052' : 'rgba(12,44,77,0.22)',
                      cursor: 'pointer',
                      transition: 'all 0.38s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  />
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
