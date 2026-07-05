'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Eye, Target, FileText, Users, Landmark, Check, MapPin } from 'lucide-react';

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
        <section className="relative w-full py-16 md:py-24 bg-transparent overflow-hidden">
          <div className="max-w-[95rem] mx-auto px-6 md:px-12 lg:px-16 w-full relative z-10">

            {/* Introductory Text Structure matching design sheet */}
            <div className="text-center max-w-5xl mx-auto mb-16 space-y-8 relative z-10 px-4">
              <p className="text-brand-navy/70 text-lg md:text-xl font-normal leading-relaxed">
                We know what you're dealing with. The right land is hard to find. Approvals take longer than they should.
                And somewhere in the middle of all of it, you're left managing a process that was never designed to be easy.
              </p>

              <div className="flex flex-col items-center gap-4">
                <h3 className="text-2xl md:text-3xl font-poppins font-bold text-brand-navy max-w-4xl leading-tight">
                  We built Conservve Infra Solutions to change that experience for you.
                </h3>
                <div className="w-16 h-[2px] bg-brand-gold" />
              </div>

              <p className="text-brand-navy/70 text-base md:text-lg font-normal leading-relaxed max-w-4xl mx-auto">
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
              style={{ aspectRatio: '1540 / 840' }}
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

              {/* ── VISION: icon + heading + text — left polygon body ── */}
              <div
                className="absolute z-10 flex flex-col items-start text-left"
                style={{ left: '9%', top: '30%', width: '23%' }}
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
                <div className="w-10 h-[3px] bg-brand-gold mt-2 mb-4 rounded-full opacity-90" />
                {/* Description paragraph */}
                <p className="text-white/90 text-[15px] xl:text-[16px] font-normal leading-[1.65] drop-shadow">
                  To be a trusted leader in land acquisition and regulatory solutions, known for delivering certainty,
                  transparency, and long-term value across every project.
                </p>
              </div>

              {/* ── MISSION: icon + heading + text — right polygon body ── */}
              {/* Changed to items-end and text-right to prevent overlap with the center throat/arrow */}
              <div
                className="absolute z-10 flex flex-col items-end text-right"
                style={{ right: '12%', top: '30%', width: '25%' }}
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
                <div className="w-10 h-[3px] bg-brand-navy mt-2 mb-4 rounded-full opacity-90" />
                {/* Description paragraph */}
                <p className="text-white/90 text-[15px] xl:text-[16px] font-normal leading-[1.65] drop-shadow">
                  To simplify land acquisition and approval processes through deep expertise, strong institutional
                  networks, and efficient execution, empowering clients to move forward with confidence.
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
                  <p className="text-white/80 text-sm sm:text-[14.5px] font-normal leading-relaxed max-w-[285px]">
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
                  <p className="text-white/90 text-sm sm:text-[14.5px] font-normal leading-relaxed max-w-[285px]">
                    To simplify land acquisition and approval processes through deep expertise, strong institutional networks,
                    and efficient execution, empowering clients to move forward with confidence.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
