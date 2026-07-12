'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Eye, Target, FileText, Users, Landmark, Check, MapPin, Compass, ShieldCheck, Lock, ChevronLeft, ChevronRight } from 'lucide-react';

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
    { id: 1, name: "Panvel Logistic Hub", coord: "18.989° N, 73.117° E", left: "12.5%", top: "60%" },
    { id: 2, name: "Bhiwandi Warehousing Corridor", coord: "19.283° N, 73.048° E", left: "24%", top: "68.75%" },
    { id: 3, name: "JNPT Logistics Sector", coord: "18.895° N, 72.946° E", left: "22.1%", top: "42.5%" },
    { id: 4, name: "Thane Industrial Zone", coord: "19.218° N, 72.980° E", left: "35.5%", top: "32.5%" },
    { id: 5, name: "Navi Mumbai Commercial Hub", coord: "19.030° N, 73.020° E", left: "51%", top: "46.25%" },
    { id: 6, name: "Pune Infrastructure Corridor", coord: "18.520° N, 73.856° E", left: "56.7%", top: "72.5%" },
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
              ─── DESKTOP INFOGRAPHIC: mv_bg.png (1540×740) full-unit image ───
              Text zone analysis (% of image width):
                Left polygon body:  x = 4%  → 30%   (28% wide)
                Connector throat:   x = 30% → 63%   (graphical only)
                Right polygon body: x = 63% → 90%   (27% wide)
                Mission nodes:      x = 88% → 100%  (icons, no text)
            */}
            <motion.div
              className="w-full max-w-[1660px] mx-auto hidden lg:block relative select-none z-20"
              style={{ aspectRatio: '1540 / 740' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {/* ── Full-unit background image ── */}
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

              {/* ── CENTRAL LOGO BADGE (Desktop) ── */}
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

              {/* ── VISION: icon + heading + text — left polygon body ── */}
              <div
                className="absolute z-10 flex flex-col items-start text-left"
                style={{ left: '9%', top: '25%', width: '21.5%' }}
              >
                {/* Vision Icon — decorative eye centered above left-aligned title */}
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

                {/* VISION heading — brand gold */}
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

              {/* ── MISSION: icon + heading + text — right polygon body ── */}
              {/* Changed to items-end and text-right to prevent overlap with the center throat/arrow */}
              <div
                className="absolute z-10 flex flex-col items-end text-right"
                style={{ right: '12%', top: '25%', width: '23.5%' }}
              >
                {/* Mission Icon — decorative target centered above right-aligned title */}
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

                {/* MISSION heading — brand navy */}
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

            {/* ─── MOBILE & TABLET LAYOUT: RESPONSIVE STACKED BLOCKS ─── */}
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
                    N 19° 04' 28.3"
                  </text>
                  <text x="45" y="372" fill="#BFA052" fontSize="9.5" letterSpacing="0.18em" opacity="0.8" fontFamily="monospace">
                    E 72° 52' 11.7"
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
                    N 19° 04' 23.1"
                  </text>
                  <text x="380" y="372" fill="#ffffff" fontSize="9.5" letterSpacing="0.18em" opacity="0.8" fontFamily="monospace">
                    E 72° 52' 24.4"
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

        // Strand B Node — always a regular gold bead (icon circles are overlaid separately at centerY)
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
