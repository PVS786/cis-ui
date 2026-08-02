'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Eye, Target, Users, FileText, Compass, ShieldCheck, Lock, ChevronLeft, ChevronRight, Leaf, TrendingUp } from 'lucide-react';

const HERO_CONTENT = {
  title: "Delivering the Groundwork\nthat Powers Growth.",
  backgroundImage: "/about_us/AboutUsHero.png",
};

export default function AboutUsPage() {
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
        <section className="relative w-full pt-14 md:pt-20 pb-4 md:pb-6 bg-transparent overflow-hidden">
          <div className="max-w-[95rem] mx-auto px-6 md:px-12 lg:px-16 w-full relative z-10">

            {/* Introductory Text Structure with Modern Motion Animation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.18, delayChildren: 0.1 }
                }
              }}
              className="text-center max-w-5xl mx-auto mb-4 md:mb-6 space-y-6 relative z-10 px-4"
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="font-poppins text-brand-navy/85 text-[17px] lg:text-lg font-medium leading-relaxed"
              >
                We know what you're dealing with. The right land is hard to find. Approvals take longer than they should.
                And somewhere in the middle of all of it, you're left managing a process that was never designed to be easy.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24, scale: 0.97 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="flex flex-col items-center gap-3"
              >
                <h3 className="text-2xl md:text-3xl font-poppins font-bold text-brand-navy max-w-4xl leading-tight">
                  We built Conservve Infra Solutions to change that experience for you.
                </h3>
                {/* Bold, radiant gold underline */}
                <div className="w-24 sm:w-32 h-[3.5px] bg-brand-gold rounded-full shadow-[0_0_12px_rgba(191,160,82,0.45)] mt-1" />
              </motion.div>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="font-poppins text-brand-navy/85 text-[17px] lg:text-lg font-medium leading-relaxed max-w-4xl mx-auto"
              >
                Based in Mumbai, we specialise in land acquisition and statutory approvals for businesses and developers
                who are done with delays and ready to move. We come in, take ownership of the complexity, and walk
                every stage alongside you with complete transparency, full compliance, and a commitment to
                getting you where you need to be, faster.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="flex flex-col items-center gap-4"
              >
                <h4 className="text-xl md:text-2xl font-poppins font-bold text-brand-navy">
                  Your project deserves that. And so do you.
                </h4>

                {/* Bold, High-Contrast Gold Emblem Divider Line */}
                <div className="flex items-center gap-3 sm:gap-4 w-full justify-center mt-1">
                  <div className="w-24 sm:w-36 h-[2.5px] bg-gradient-to-r from-transparent via-brand-gold to-brand-gold rounded-full" />
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(191,160,82,0.6)]" />
                    <div className="w-5 h-5 rounded-full border-2 border-brand-gold bg-white flex items-center justify-center shadow-[0_0_12px_rgba(191,160,82,0.5)]">
                      <div className="w-2 h-2 rounded-full bg-brand-gold" />
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(191,160,82,0.6)]" />
                  </div>
                  <div className="w-24 sm:w-36 h-[2.5px] bg-gradient-to-r from-brand-gold via-brand-gold to-transparent rounded-full" />
                </div>
              </motion.div>
            </motion.div>

            {/*
              
              Text zone analysis (% of image width):
                Left polygon body:  x = 4%  
                Connector throat:   x = 30% 
                Right polygon body: x = 63% 
                Mission nodes:      x = 88% 
            */}
            <motion.div
              className="w-full max-w-[1780px] mx-auto hidden lg:block relative select-none z-20"
              style={{ aspectRatio: '1540 / 740' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {/* Full-unit background image */}
              <div className="absolute inset-0">
                <Image
                  src="/about_us/mv_bg.png"
                  fill
                  sizes="(min-width: 1024px) 1780px, 100vw"
                  priority
                  className="object-fill"
                  alt="Vision Mission Infographic"
                />
              </div>

              {/* CENTRAL LOGO BADGE (Desktop - Precision scaled to fully cover background printed circle) */}
              <div
                className="absolute z-30 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center border-[3.5px] border-brand-gold"
                style={{
                  left: '50.4%',
                  top: '47.8%',
                  width: '12.4%',
                  aspectRatio: '1/1',
                  maxWidth: '180px',
                  minWidth: '125px',
                  background: 'radial-gradient(circle at 30% 30%, #ffffff 0%, #fdfdfd 50%, #f4f2eb 100%)',
                  boxShadow: '0 22px 45px -10px rgba(191,160,82,0.35), 0 0 0 2px rgba(191,160,82,0.2), inset 0 -6px 14px rgba(191,160,82,0.15), inset 0 6px 14px rgba(255,255,255,0.95)'
                }}
              >
                {/* Rotating dashed ring */}
                <motion.div
                  className="absolute inset-1 rounded-full border border-dashed border-brand-gold/60"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                />
                <div className="w-[66%] h-[66%] relative flex items-center justify-center">
                  <Image
                    src="/logo-dark-transparent.png"
                    alt="Conservve Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* VISION: icon + heading + text (Left aligned, vertically centered at top: 28%) */}
              <div
                className="absolute z-10 flex flex-col items-start text-left"
                style={{ left: '10.2%', top: '28%', width: '20.5%' }}
              >
                {/* Vision Icon - Left aligned above title (Slightly smaller, 100% uniform styling) */}
                <div className="relative mb-3.5 shrink-0 self-start">
                  {/* Outer pulse ring */}
                  <span className="absolute inset-0 rounded-full border border-brand-gold/40 scale-[1.3] animate-pulse" />
                  {/* Middle ring */}
                  <span className="absolute inset-0 rounded-full border border-brand-gold/60 scale-[1.14]" />
                  {/* Main icon circle - Navy background with radiant gold border */}
                  <div className="relative w-10 h-10 rounded-full border-[2px] border-brand-gold bg-[#0C2C4D] flex items-center justify-center shadow-[0_0_14px_rgba(191,160,82,0.45)]">
                    {/* Inner decorative ring */}
                    <span className="absolute inset-[2px] rounded-full border border-brand-gold/40" />
                    <Eye className="w-5 h-5 text-brand-gold" strokeWidth={2} />
                  </div>
                </div>

                {/* VISION heading */}
                <h3 className="text-2xl xl:text-3xl font-poppins font-black tracking-widest text-brand-gold leading-none drop-shadow-lg">
                  VISION
                </h3>
                {/* Gold underline accent - Left aligned beneath title */}
                <div className="w-14 h-[3.5px] bg-brand-gold mt-2.5 mb-3.5 rounded-full" />

                {/* Description paragraph - High contrast with text stroke drop shadow */}
                <p className="font-poppins text-white font-medium text-[13px] xl:text-[14.5px] leading-[1.65] drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.55)]">
                  To be a trusted leader in land acquisition and regulatory solutions, known for delivering certainty, transparency, and long-term value across every project.
                </p>
              </div>

              {/* MISSION: icon + heading + text (Right aligned, vertically centered at top: 28%, aligned with Vision) */}
              <div
                className="absolute z-10 flex flex-col items-end text-right"
                style={{ right: '11.2%', top: '28%', width: '20.5%' }}
              >
                {/* Mission Icon - High contrast Navy borders & pulse rings against gold background */}
                <div className="relative mb-3.5 shrink-0 self-end">
                  {/* Outer pulse ring */}
                  <span className="absolute inset-0 rounded-full border-2 border-brand-navy/40 scale-[1.3] animate-pulse" />
                  {/* Middle ring */}
                  <span className="absolute inset-0 rounded-full border border-brand-navy/70 scale-[1.14]" />
                  {/* Main icon circle - Navy background with 2.5px Navy border */}
                  <div className="relative w-10 h-10 rounded-full border-[2.5px] border-brand-navy bg-[#0C2C4D] flex items-center justify-center shadow-[0_0_16px_rgba(12,44,77,0.45)]">
                    {/* Inner decorative ring */}
                    <span className="absolute inset-[2px] rounded-full border border-white/30" />
                    <Target className="w-5 h-5 text-brand-gold" strokeWidth={2} />
                  </div>
                </div>

                {/* MISSION heading */}
                <h3 className="text-2xl xl:text-3xl font-poppins font-black tracking-widest text-brand-navy leading-none drop-shadow-lg">
                  MISSION
                </h3>
                {/* Navy underline accent - Right aligned beneath title */}
                <div className="w-14 h-[3.5px] bg-brand-navy mt-2.5 mb-3.5 rounded-full" />

                {/* Description paragraph - High contrast with text stroke drop shadow clearing circuit pattern */}
                <p className="font-poppins text-white font-medium text-[13px] xl:text-[14.5px] leading-[1.65] drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.55)]">
                  To simplify land acquisition and approval processes through deep expertise, strong institutional networks, and efficient execution, empowering clients to move forward with confidence.
                </p>
              </div>

            </motion.div>

            {/* MOBILE & TABLET LAYOUT: CLEAN LUXURY STACKED PANELS */}
            <div className="w-full flex flex-col items-center justify-center gap-6 mt-6 relative z-20 select-none lg:hidden px-4">

              {/* MOBILE: VISION CARD */}
              <div className="w-full max-w-[480px] bg-[#0C2C4D] border-2 border-brand-gold/60 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-left">
                {/* Subtle background glow */}
                <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-brand-gold/10 blur-xl pointer-events-none" />

                {/* Vision Icon */}
                <div className="relative mb-3 shrink-0 self-start">
                  <div className="w-12 h-12 rounded-full border-2 border-brand-gold bg-brand-navy flex items-center justify-center shadow-[0_0_16px_rgba(191,160,82,0.4)]">
                    <Eye className="w-6 h-6 text-brand-gold" strokeWidth={1.75} />
                  </div>
                </div>

                {/* VISION Heading */}
                <h3 className="text-2xl sm:text-3xl font-poppins font-black tracking-widest text-brand-gold leading-none">
                  VISION
                </h3>
                {/* Gold Underline */}
                <div className="w-12 h-[3px] bg-brand-gold mt-2.5 mb-4 rounded-full" />

                {/* Description */}
                <p className="font-poppins text-white/95 text-sm sm:text-base font-normal leading-relaxed">
                  To be a trusted leader in land acquisition and regulatory solutions, known for delivering certainty, transparency, and long-term value across every project.
                </p>
              </div>

              {/* MOBILE: CENTRAL CIS BRAND BADGE */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white flex items-center justify-center shadow-xl border-[3px] border-brand-gold z-10 shrink-0 my-1">
                <motion.div
                  className="absolute inset-1 rounded-full border border-dashed border-brand-gold/60"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                />
                <div className="w-[62%] h-[62%] relative flex items-center justify-center">
                  <Image
                    src="/logo-dark-transparent.png"
                    alt="Conservve Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* MOBILE: MISSION CARD */}
              <div className="w-full max-w-[480px] bg-gradient-to-br from-[#CBB06A] to-[#BFA052] text-brand-navy rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-right flex flex-col items-end">
                {/* Subtle background glow */}
                <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-brand-navy/10 blur-xl pointer-events-none" />

                {/* Mission Icon */}
                <div className="relative mb-3 shrink-0 self-end">
                  <div className="w-12 h-12 rounded-full border-2 border-brand-gold bg-[#0C2C4D] flex items-center justify-center shadow-[0_0_16px_rgba(12,44,77,0.4)]">
                    <Target className="w-6 h-6 text-brand-gold" strokeWidth={1.75} />
                  </div>
                </div>

                {/* MISSION Heading */}
                <h3 className="text-2xl sm:text-3xl font-poppins font-black tracking-widest text-brand-navy leading-none">
                  MISSION
                </h3>
                {/* Navy Underline */}
                <div className="w-12 h-[3px] bg-brand-navy mt-2.5 mb-4 rounded-full" />

                {/* Description */}
                <p className="font-poppins text-white/95 text-sm sm:text-base font-normal leading-relaxed">
                  To simplify land acquisition and approval processes through deep expertise, strong institutional networks, and efficient execution, empowering clients to move forward with confidence.
                </p>
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
  const [mounted, setMounted] = useState(false);

  const svgContainerRef = useRef<HTMLDivElement>(null);
  const [svgW, setSvgW] = useState(1200);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Symmetrical x coordinates derived from the exact peaks/troughs of the 7-lobe sine wave
  const getXNodes = (width: number) => {
    return [
      (1 / 12) * width,
      (3 / 12) * width,
      (5 / 12) * width,
      (7 / 12) * width,
      (9 / 12) * width,
      (11 / 12) * width
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
    {
      id: 'val6',
      num: '6',
      title: 'Reserved Placeholder',
      description: 'Keep a sixth DNA node visible as a future placeholder for an upcoming core value.',
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
  const frequency = (Math.PI * 6) / width; // 3 complete wave cycles across the dynamic width (6 lobes)


  // Returns the fixed x position (aligned to nearest DNA grid point) and ALWAYS the vertical center
  // of the DNA helix (centerY) so icon circles sit at the midpoint of each DNA 'eye' lobe.
  const getActiveNodeCoordinates = (index: number) => {
    const xRaw = xNodes[index] !== undefined ? xNodes[index] : (index * width) / 6;
    const pointsCount = 120;
    const step = width / pointsCount;
    const nearestI = Math.round(xRaw / step / 2) * 2;
    const x = Math.min(width, Math.max(0, nearestI * step));
    // y is ALWAYS the DNA center-line so circles are fixed at the midpoint between both strands
    return { x, y: centerY, nearestI };
  };

  // Depth-Sorted 3D Painter's Algorithm for physical intertwined look matching the reference image
  const renderDnaStructure = () => {
    const r = (val: number) => Math.round(val * 100) / 100;
    const pointsCount = 120;
    const drawList: any[] = [];

    for (let i = 0; i < pointsCount; i++) {
      const x1 = r((i / pointsCount) * width);
      const x2 = r(((i + 1) / pointsCount) * width);

      const angle1 = (i / pointsCount) * width * frequency + phase;
      const angle2 = ((i + 1) / pointsCount) * width * frequency + phase;

      const y1_A = r(centerY + Math.sin(angle1) * amplitude);
      const y2_A = r(centerY + Math.sin(angle2) * amplitude);

      const y1_B = r(centerY - Math.sin(angle1) * amplitude);
      const y2_B = r(centerY - Math.sin(angle2) * amplitude);

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
            strokeWidth={r(6.5 + z_A * 2.2)} // Thicker strand for high visual weight
            strokeLinecap="round"
            opacity={r(0.88 + (z_A + 1) * 0.06)}
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
            strokeWidth={r(6.5 + z_B * 2.2)} // Thicker strand for high visual weight
            strokeLinecap="round"
            opacity={r(0.88 + (z_B + 1) * 0.06)}
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
            <g key={`rung-group-${i}`} opacity={r(0.7 + z_rung * 0.15)}>
              {/* Dual-color physical rungs meeting seamlessly in the center */}
              <line
                x1={x1}
                y1={y1_A}
                x2={x1}
                y2={centerY}
                stroke="#0C2C4D"
                strokeWidth={r(3 + z_rung * 0.8)}
              />
              <line
                x1={x1}
                y1={y1_B}
                x2={x1}
                y2={centerY}
                stroke="#BFA052"
                strokeWidth={r(3 + z_rung * 0.8)}
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
              r={r(7.5 + z_A * 2.4)} // Larger, more prominent beads
              fill="url(#navy-bead-grad)"
              stroke="#ffffff"
              strokeWidth={1.25}
              opacity={r(0.92 + z_A * 0.08)}
            />
          )
        });

        // Strand B Node 
        drawList.push({
          type: 'nodeB',
          z: z_B,
          render: (
            <circle
              key={`nb-${i}`}
              cx={x1}
              cy={y1_B}
              r={r(7.5 + z_B * 2.4)}
              fill="url(#gold-bead-grad)"
              stroke="#ffffff"
              strokeWidth={1.25}
              opacity={r(0.92 + z_B * 0.08)}
            />
          )
        });
      }
    }

    // Sort complete draw list by depth coordinate Z
    drawList.sort((a, b) => a.z - b.z);
    return drawList.map((item) => item.render);
  };

  if (!mounted) {
    return (
      <section className="bg-transparent text-navy font-body flex flex-col justify-start items-center pt-10 md:pt-14 pb-12 md:pb-16 border-t border-brand-gold/10 overflow-x-hidden relative select-none">
        <div className="w-full max-w-[1280px] px-6 md:px-12 lg:px-16 mx-auto text-left mb-6 md:mb-8">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-widest text-navy uppercase">
            Our <span className="text-brand-gold">Core</span> Values
          </h2>
          <div className="w-24 h-[3px] bg-gold mt-4 rounded-full" />
        </div>
        <div className="w-full h-[650px]" />
      </section>
    );
  }

  return (
    <section className="bg-transparent text-navy font-body flex flex-col justify-start items-center pt-10 md:pt-14 pb-12 md:pb-16 border-t border-brand-gold/10 overflow-x-hidden relative select-none">

      {/* ==================== MAIN HEADING SECTION ==================== */}
      <div className="w-full max-w-[1280px] px-6 md:px-12 lg:px-16 mx-auto text-left mb-6 md:mb-8">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-widest text-navy uppercase">
          Our <span className="text-brand-gold">Core</span> Values
        </h2>
        <div className="w-24 h-[3px] bg-gold mt-4 rounded-full" />
      </div>

      {/* ==================== DESKTOP & TABLET LAYOUT ==================== */}
      <div className="hidden md:block w-full">

        {/* ---- DNA + Icon Circles + Cards all in one unified relative container ---- */}
        <motion.div
          ref={svgContainerRef}
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full relative"
          style={{ height: '650px' }}
        >
          {/* SVG DNA Layer */}
          <svg
            suppressHydrationWarning
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
              const nodePos = getActiveNodeCoordinates(idx);
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

                  {/* Connector line extending down to top of cards (y2 = 240) */}
                  <line
                    x1={nodePos.x}
                    y1={nodePos.y + circleR}
                    x2={nodePos.x}
                    y2={240}
                    stroke={isHovered ? '#BFA052' : 'rgba(12,44,77,0.22)'}
                    strokeWidth={isHovered ? 2 : 1.5}
                    strokeDasharray={isHovered ? 'none' : '3,3'}
                  />
                </g>
              );
            })}
          </svg>

          {/* ---- HTML interactive columns (combines icon circles and full cards in a single hover block) ---- */}
          <div
            className="absolute left-0 right-0 pointer-events-none"
            style={{ top: 0, height: '650px' }}
          >
            {coreValues.map((val, idx) => {
              const nodePos = getActiveNodeCoordinates(idx);
              const isHovered = activeIndex === idx;
              const leftPercent = (nodePos.x / width) * 100;
              const IconComponent = val.icon;
              const colWidth = width / 6;

              return (
                <div
                  key={`column-${val.id}`}
                  className="absolute pointer-events-auto flex flex-col items-center"
                  style={{
                    left: `${leftPercent}%`,
                    top: 0,
                    width: `${colWidth}px`,
                    height: '630px',
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

                  {/* 2. Permanent Card Container (positioned at top = 245px with generous space below DNA strand) */}
                  <div
                    className="absolute flex flex-col items-center w-full"
                    style={{
                      left: '50%',
                      top: '245px',
                      transform: isHovered ? 'translate(-50%, -10px)' : 'translate(-50%, 0px)',
                      transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <div
                      className={`w-[185px] min-h-[295px] rounded-[14px] p-5 text-left flex flex-col transition-all duration-300 ${isHovered
                          ? 'bg-[linear-gradient(145deg,#0d2847_0%,#0C2C4D_40%,#081e36_100%)] text-white shadow-[0_16px_36px_rgba(12,44,77,0.3),0_0_24px_rgba(191,160,82,0.25)] border-t-[4px] border-b-[4px] border-l-[1.5px] border-r-[1.5px] border-brand-gold'
                          : 'bg-white/95 backdrop-blur-sm text-navy shadow-[0_8px_24px_rgba(12,44,77,0.08)] border border-slate-200/90'
                        }`}
                    >
                      {/* Number & Gold Underline */}
                      <div className="flex flex-col items-center justify-center w-full mb-3.5">
                        <span
                          className={`font-gotham font-medium text-center transition-colors duration-300 ${isHovered ? 'text-gold' : 'text-brand-navy'
                            }`}
                          style={{ fontSize: '40px', lineHeight: 1, marginBottom: '6px' }}
                        >
                          {val.num}
                        </span>
                        <div style={{ width: '36px', height: '3px', background: '#BFA052', borderRadius: '2px' }} />
                      </div>

                      {/* Title */}
                      <h3
                        className={`font-gotham font-semibold uppercase tracking-wider text-center transition-colors duration-300 ${isHovered ? 'text-white' : val.isPlaceholder ? 'text-slate-500' : 'text-[#0C2C4D]'
                          }`}
                        style={{ fontSize: '15px', lineHeight: 1.35, marginBottom: '10px' }}
                      >
                        {val.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`font-body transition-colors duration-300 ${isHovered ? 'text-white/85' : val.isPlaceholder ? 'text-slate-400' : 'text-slate-600'
                          }`}
                        style={{ fontSize: '13px', lineHeight: 1.6 }}
                      >
                        {val.description}
                      </p>
                    </div>
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

            {/* Icon circles on mobile DNA (6 nodes, indices 0 to 5) */}
            {coreValues.map((val, idx) => {
              const nodePos = getActiveNodeCoordinates(idx);
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
    </section>
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
      tilt: "rotate(0deg)",
      overlayOffset: { paddingBottom: "10%", transform: "translateY(2px)" }
    },
    {
      id: 2,
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
      tilt: "rotate(-10deg)",
      overlayOffset: { paddingBottom: "10%", transform: "translateX(-2px)" }
    },
    {
      id: 3,
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
      tilt: "rotate(0deg)",
      overlayOffset: { paddingBottom: "10%", transform: "translateX(18px) translateY(-2px)" }
    },
    {
      id: 4,
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
      tilt: "rotate(0deg)",
      overlayOffset: { paddingBottom: "5%", transform: "translateY(16px)" }
    },
    {
      id: 5,
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
      tilt: "rotate(0deg)",
      overlayOffset: { paddingBottom: "10%", transform: "translateX(-2px)" }
    },
    {
      id: 6,
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
      tilt: "rotate(0deg)",
      overlayOffset: { paddingBottom: "9%", transform: "translateX(-2px) translateY(6px)" }
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
    <section className="relative w-full pt-10 md:pt-14 pb-12 md:pb-16 bg-transparent border-t border-brand-gold/10 select-none overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.025] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #BFA052 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

      <div className="w-full max-w-[1280px] px-6 md:px-12 lg:px-16 mx-auto text-left mb-6 md:mb-8">
        <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-widest text-brand-navy uppercase">
          ESG and <span className="text-brand-gold">Innovation</span>
        </h2>
        <div className="w-24 h-[3px] bg-brand-gold mt-6 mb-8 rounded-full" />
        <p className="font-poppins text-brand-navy/85 text-[17px] lg:text-lg font-medium leading-relaxed max-w-3xl text-left">
          At Conservve Infra Solutions, doing the right thing and doing it smarter aren't separate goals, they're the same commitment. Every project we take on is guided by responsible practices, ethical standards, and a drive to push land development forward in ways that genuinely matter.
        </p>
      </div>

      <div className="w-full max-w-[1280px] px-6 md:px-12 lg:px-16 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Left Column: Interactive Circular Map */}
          <div className="col-span-12 lg:col-span-7 flex justify-center">
            <div
              className="relative w-full aspect-square select-none"
            >
              {/* Ultra-Luxury 3D Tech Rays & Constellation Nodes */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                style={{ zIndex: 8 }}
              >
                <defs>
                  <linearGradient id="gold-ray-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0C2C4D" stopOpacity="0.4" />
                    <stop offset="40%" stopColor="#BFA052" stopOpacity="1" />
                    <stop offset="70%" stopColor="#F5E5C0" stopOpacity="1" />
                    <stop offset="100%" stopColor="#0C2C4D" stopOpacity="0.4" />
                  </linearGradient>
                  <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {PARCELS.map((parcel) => {
                  const isHovered = hoveredParcel === parcel.id;
                  return (
                    <g key={`tech-ray-${parcel.id}`}>
                      {/* Base Dark Bevel Beam (Provides High Contrast on White BG) */}
                      <line
                        x1="50%"
                        y1="48%"
                        x2={parcel.left}
                        y2={parcel.top}
                        stroke="#0C2C4D"
                        strokeWidth={isHovered ? "3.5" : "2.5"}
                        strokeLinecap="round"
                        opacity={isHovered ? 0.55 : 0.22}
                      />

                      {/* Precision Gold Laser Core Line */}
                      <line
                        x1="50%"
                        y1="48%"
                        x2={parcel.left}
                        y2={parcel.top}
                        stroke="url(#gold-ray-gradient)"
                        strokeWidth={isHovered ? "2.4" : "1.6"}
                        strokeLinecap="round"
                        opacity={isHovered ? 1 : 0.85}
                      />

                      {/* Subtle Traveling Energy Pulse */}
                      <line
                        x1="50%"
                        y1="48%"
                        x2={parcel.left}
                        y2={parcel.top}
                        stroke="#FFF4D4"
                        strokeWidth={isHovered ? "2.6" : "1.8"}
                        strokeDasharray="5,22"
                        strokeLinecap="round"
                        opacity={isHovered ? 1 : 0.75}
                        className="animate-dash-flow"
                      />

                      {/* Glowing Constellation Anchor Node at Parcel Target */}
                      <circle
                        cx={parcel.left}
                        cy={parcel.top}
                        r={isHovered ? "5" : "3.5"}
                        fill={isHovered ? "#E5C158" : "#BFA052"}
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        filter="url(#node-glow)"
                        style={{ transition: 'all 0.3s ease' }}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Central 3D CIS Brand Medallion (Sleek Proportioned 19% Size) */}
              <div
                className="medallion-float absolute top-[48%] left-[50%] z-30 flex items-center justify-center cursor-default transition-transform duration-300 hover:scale-105"
                style={{ width: '19%', aspectRatio: '1 / 1', transform: 'translate(-50%, -50%)' }}
              >
                {/* Layer 1: Ambient Floor Shadow */}
                <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle at 50% 110%, rgba(12,44,77,0.55) 0%, transparent 65%)', transform: 'translateY(6px) scaleX(0.88)', filter: 'blur(8px)' }} />

                {/* Layer 2: Gold Outer Glow */}
                <div className="absolute rounded-full pointer-events-none" style={{ inset: '-25%', background: 'radial-gradient(circle, rgba(191,160,82,0.25) 0%, rgba(191,160,82,0.07) 50%, transparent 72%)', filter: 'blur(10px)' }} />

                {/* Layer 3: Metallic Gold Outer Rim */}
                <div className="spin-ring absolute inset-0 rounded-full" style={{
                  background: 'conic-gradient(from 0deg, #7a4d16, #e8be74, #fef0d1, #BFA052, #c29242, #fae1a5, #fef0d1, #e8be74, #8c5c1e, #7a4d16)',
                  padding: '3px',
                  boxShadow: '0 0 0 1px rgba(191,160,82,0.35), 0 8px 24px rgba(12,44,77,0.25), 0 0 16px rgba(191,160,82,0.35)',
                }}>
                  <div className="w-full h-full rounded-full" style={{ background: 'rgba(250,225,165,0.18)' }} />
                </div>

                {/* Layer 4: Inner Metallic Bezel */}
                <div className="absolute rounded-full" style={{
                  inset: '4px',
                  background: 'transparent',
                  border: '1.5px solid rgba(191,160,82,0.4)',
                  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.18)',
                }} />

                {/* Layer 5: Porcelain Coin Surface */}
                <div className="absolute rounded-full" style={{
                  inset: '6px',
                  background: 'radial-gradient(circle at 35% 30%, #ffffff 0%, #f6f3eb 45%, #e8e1d3 100%)',
                  boxShadow: 'inset 0 3.5px 8px rgba(255,255,255,0.95), inset 0 -3.5px 7px rgba(12,44,77,0.14)',
                }} />

                {/* Layer 6: Glass Specular Highlight */}
                <div className="absolute rounded-full pointer-events-none" style={{
                  inset: '6px',
                  background: 'linear-gradient(155deg, rgba(255,255,255,0.75) 0%, transparent 46%)',
                }} />

                {/* Layer 7: CIS Brand Logo */}
                <img
                  src="/logo-dark-transparent.png"
                  alt="Conservve Infra Solutions"
                  className="relative z-10 select-none"
                  style={{ width: '68%', height: '68%', objectFit: 'contain' }}
                  draggable={false}
                />
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

                    {/* Overlaid Icon + High-Readability Frosted Glass Label */}
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center px-3 pointer-events-none z-10"
                      style={{
                        paddingBottom: parcel.overlayOffset?.paddingBottom || '10%',
                        transform: parcel.overlayOffset?.transform || 'none',
                      }}
                    >
                      {/* Icon Badge */}
                      <div
                        className={`w-[26px] h-[26px] sm:w-[34px] sm:h-[34px] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 mb-1.5 ${
                          isHovered
                            ? 'bg-[#0C2C4D] text-[#BFA052] border border-[#BFA052]'
                            : 'bg-white text-[#0C2C4D] border border-slate-100'
                        }`}
                        style={{
                          boxShadow: isHovered
                            ? '0 0 20px rgba(191,160,82,0.6), 0 4px 12px rgba(12,44,77,0.25)'
                            : '0 4px 10px rgba(12,44,77,0.14)',
                        }}
                      >
                        <IconComponent className={`w-[12px] h-[12px] sm:w-[16px] sm:h-[16px] transition-colors duration-300 ${isHovered ? 'text-brand-gold' : 'text-[#0C2C4D]'}`} />
                      </div>

                      {/* High-Readability Frosted Backdrop Pill for Parcel Text */}
                      <div
                        className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg sm:rounded-xl backdrop-blur-md transition-all duration-300 ${
                          isHovered
                            ? 'bg-[#0C2C4D]/94 text-white border border-[#BFA052]/70 shadow-[0_6px_20px_rgba(12,44,77,0.4)]'
                            : 'bg-white/92 backdrop-blur-sm text-[#0C2C4D] border border-white/90 shadow-[0_4px_14px_rgba(12,44,77,0.16)]'
                        }`}
                      >
                        <div className="font-poppins font-extrabold text-[8.5px] sm:text-[10px] md:text-[11.5px] uppercase tracking-wider leading-[1.15] text-center select-none">
                          {parcel.shortTitle.split('\n').map((line, idx) => (
                            <div key={idx} className="font-extrabold whitespace-nowrap">{line}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>


          {/* Right Column: Sleek Portrait ESG Card & Genie Dock Navigator */}
          <div className="col-span-12 lg:col-span-5 flex flex-col items-center justify-center gap-6" style={{ minHeight: '460px' }}>
            {/* Card Display Container */}
            <div className="relative w-full max-w-[365px] flex items-center justify-center" style={{ height: '400px' }}>
              <AnimatePresence mode="wait">
                {(() => {
                  const activeIdx = hoveredParcel != null
                    ? PARCELS.findIndex(p => p.id === hoveredParcel)
                    : 0;
                  const currentIdx = activeIdx < 0 ? 0 : activeIdx;
                  const parcel = PARCELS[currentIdx];
                  const Icon = parcel.Icon;
                  // Exact pixel-aligned X percentage of dock item relative to 365px card width (18.5% -> 81.5%)
                  const dockXPercent = 18.5 + (currentIdx / (PARCELS.length - 1)) * 63;

                  return (
                    <motion.div
                      key={parcel.id}
                      initial={{ opacity: 0, scaleX: 0.12, scaleY: 0.04, y: 55, filter: 'blur(12px)' }}
                      animate={{ opacity: 1, scaleX: 1, scaleY: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, scaleX: 0.12, scaleY: 0.04, y: 55, filter: 'blur(12px)' }}
                      transition={{
                        duration: 0.48,
                        ease: [0.175, 0.885, 0.32, 1.2],
                      }}
                      style={{
                        transformOrigin: `${dockXPercent}% calc(100% + 36px)`,
                      }}
                      className="absolute inset-0 rounded-2xl bg-[#0C2C4D] border border-[#BFA052]/35 select-none overflow-hidden"
                    >
                      {/* Top Gold Bar: Thicker, Left → Right */}
                      <motion.div
                        key={`top-bar-${parcel.id}`}
                        initial={{ scaleX: 0, opacity: 1 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        exit={{ scaleX: 0, opacity: 0 }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        style={{ transformOrigin: 'left center' }}
                        className="absolute top-0 left-0 right-0 h-[6px] bg-[#BFA052] z-20 shadow-[0_3px_12px_rgba(191,160,82,0.55)]"
                      />

                      {/* Bottom Gold Bar: Thicker, Right → Left */}
                      <motion.div
                        key={`bot-bar-${parcel.id}`}
                        initial={{ scaleX: 0, opacity: 1 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        exit={{ scaleX: 0, opacity: 0 }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        style={{ transformOrigin: 'right center' }}
                        className="absolute bottom-0 left-0 right-0 h-[6px] bg-[#BFA052] z-20 shadow-[0_-3px_12px_rgba(191,160,82,0.55)]"
                      />

                      {/* Card Body Content: Perfectly centered vertically & horizontally for uniform balance */}
                      <div className="w-full h-full flex flex-col items-center justify-center text-center px-7 py-6 gap-4 relative z-10">
                        {/* Icon Badge */}
                        <motion.div
                          key={`icon-${parcel.id}`}
                          initial={{ scale: 0.4, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: 'spring', stiffness: 360, damping: 22, delay: 0.12 }}
                          className="w-16 h-16 rounded-full bg-[#0C2C4D] border-2 border-[#BFA052] flex items-center justify-center shadow-[0_0_22px_rgba(191,160,82,0.32)] shrink-0 mb-1"
                        >
                          <Icon className="w-8 h-8 text-[#BFA052]" />
                        </motion.div>

                        {/* Title + 2 Equal Dimension Parallel Lines */}
                        <div className="flex flex-col items-center gap-2 w-full">
                          <motion.h3
                            key={`title-${parcel.id}`}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.28, ease: 'easeOut', delay: 0.15 }}
                            className="font-gotham font-extrabold text-lg sm:text-xl uppercase tracking-wider text-white leading-snug"
                          >
                            {parcel.title}
                          </motion.h3>

                          {/* 2 Equal Parallel Golden Lines */}
                          <motion.div
                            key={`emblem-${parcel.id}`}
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
                            className="flex flex-col items-center gap-[4px] my-0.5"
                          >
                            <div className="w-11 h-[2px] bg-[#BFA052] rounded-full" />
                            <div className="w-11 h-[2px] bg-[#BFA052] rounded-full" />
                          </motion.div>
                        </div>

                        {/* Description */}
                        <motion.p
                          key={`para-${parcel.id}`}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.32, ease: 'easeOut', delay: 0.22 }}
                          className="font-poppins font-normal text-sm sm:text-[15px] text-slate-100 leading-relaxed text-center max-w-[315px]"
                        >
                          {parcel.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>

            {/* Luxury Dock Selector below the card */}
            <div className="flex items-center justify-center gap-2 sm:gap-2.5 px-4 py-2.5 rounded-full bg-[#0C2C4D] border border-[#BFA052]/40 shadow-xl backdrop-blur-md">
              {PARCELS.map((parcel, i) => {
                const isActive = (hoveredParcel === parcel.id) || (hoveredParcel == null && i === 0);
                const IconComp = parcel.Icon;
                return (
                  <button
                    key={parcel.id}
                    onClick={() => setHoveredParcel(parcel.id)}
                    onMouseEnter={() => setHoveredParcel(parcel.id)}
                    aria-label={`Select ${parcel.title}`}
                    className={`relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 ${isActive ? 'text-[#0C2C4D]' : 'text-[#BFA052] hover:bg-[#BFA052]/12 hover:scale-110'}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeDockPill"
                        className="absolute inset-0 rounded-full bg-[#BFA052] shadow-[0_0_18px_rgba(191,160,82,0.65)]"
                        transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center justify-center">
                      <IconComp className={`w-4 h-4 ${isActive ? 'text-[#0C2C4D]' : 'text-[#BFA052]'}`} />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
