'use client';

import { useState, useEffect, useRef } from 'react';
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

        <CoreValuesSection />
      </div>
    </div>
  );
}

// ==================== CORE VALUES SECTION COMPONENT ====================
function CoreValuesSection() {
  interface CoreValue {
    id: string;
    num: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    bgImg: string;
    isPlaceholder?: boolean;
  }

  const [phase, setPhase] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const svgRef = useRef<SVGSVGElement>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);

  // Dynamic SVG dimensions — tracked in real pixels so viewBox always matches,
  // eliminating any squeezing/distortion on resize.
  const [svgW, setSvgW] = useState(1920);
  const [svgH, setSvgH] = useState(340);

  // Dynamic state for horizontally aligning DNA timeline beads above grid cards
  const [xNodes, setXNodes] = useState<number[]>([192, 576, 960, 1344, 1728]);

  // Refs for smooth LERP mouse coordinates (prevents wiggles and lag)
  const targetMouseX = useRef(0);
  const targetMouseY = useRef(0);
  const currentMouseX = useRef(0);
  const currentMouseY = useRef(0);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    targetMouseX.current = mouseX;
    targetMouseY.current = mouseY;
    setIsMouseOver(true);

    // Map mouseX pixels → SVG coordinate space (svgW == actual pixel width, so ratio is just mouseX)
    const svgMouseX = mouseX; // viewBox matches real pixels — no scaling needed

    // Track the horizontally closest active node
    let closestIdx = 0;
    let minD = Infinity;
    xNodes.forEach((x, idx) => {
      const d = Math.abs(x - svgMouseX);
      if (d < minD) {
        minD = d;
        closestIdx = idx;
      }
    });

    // Node locking: threshold scales with viewport width
    const threshold = svgW * 0.09;
    if (minD < threshold) {
      setActiveIndex(closestIdx);
    } else {
      setActiveIndex(null);
    }
  };

  const handleMouseLeaveSvg = () => {
    targetMouseX.current = 0;
    targetMouseY.current = 0;
    setIsMouseOver(false);
    setActiveIndex(null);
  };

  const coreValues: CoreValue[] = [
    {
      id: 'val1',
      num: '1',
      title: 'Clarity in Every Deal',
      description: 'We ensure complete visibility across every stage, titles, processes, and transactions, eliminating ambiguity and building client confidence.',
      icon: Eye,
      bgImg: '/about_us/value_clarity.png',
    },
    {
      id: 'val2',
      num: '2',
      title: 'Execution with Ownership',
      description: 'We take end-to-end responsibility, driving every mandate with commitment and result-oriented focus.',
      icon: Compass,
      bgImg: '/about_us/value_ownership.png',
    },
    {
      id: 'val3',
      num: '3',
      title: 'Regulatory Expertise with Responsibility',
      description: 'We navigate complex statutory frameworks with precision and accountability, ensuring every approval is secured the right way.',
      icon: ShieldCheck,
      bgImg: '/about_us/value_regulatory.png',
    },
    {
      id: 'val4',
      num: '4',
      title: 'Relationship-Driven Approach',
      description: 'Strong, long-standing networks with stakeholders and authorities enable smoother coordination and dependable outcomes.',
      icon: Users,
      bgImg: '/about_us/value_relationship.png',
    },
    {
      id: 'val5',
      num: '5',
      title: 'Reserved Placeholder',
      description: 'Keep a fifth DNA node visible as a future placeholder for an upcoming core value.',
      icon: Lock,
      bgImg: '/about_us/value_placeholder.png',
      isPlaceholder: true,
    },
  ];

  // Track actual SVG container dimensions so viewBox == real pixels (no distortion)
  useEffect(() => {
    const el = svgContainerRef.current;
    if (!el) return;
    const sync = () => {
      setSvgW(el.clientWidth || 1920);
      setSvgH(el.clientHeight || 340);
    };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Calibrate xNodes to align with card column centers
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updatePositions = () => {
      if (!svgRef.current) return;
      const svgRect = svgRef.current.getBoundingClientRect();

      if (window.innerWidth >= 768) {
        const cardElements = document.querySelectorAll('.core-value-card-desktop');
        if (cardElements.length === 5) {
          const newXNodes = Array.from(cardElements).map((cardEl) => {
            const cardRect = cardEl.getBoundingClientRect();
            // cardCenter in SVG pixel space (viewBox == real pixels)
            return cardRect.left - svgRect.left + cardRect.width / 2;
          });
          if (newXNodes.every(x => x > 0)) setXNodes(newXNodes);
        }
      } else {
        setXNodes([192, 576, 960, 1344, 1728]);
      }
    };

    updatePositions();
    const observer = new ResizeObserver(updatePositions);
    if (svgRef.current) observer.observe(svgRef.current);
    window.addEventListener('resize', updatePositions);
    const ids = [setTimeout(updatePositions, 200), setTimeout(updatePositions, 800), setTimeout(updatePositions, 2000)];
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updatePositions);
      ids.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    const tick = () => {
      // Smoothly interpolate current coordinates towards target values (LERP)
      currentMouseX.current += (targetMouseX.current - currentMouseX.current) * 0.08;
      currentMouseY.current += (targetMouseY.current - currentMouseY.current) * 0.08;

      setPhase((prev) => (prev + 0.012) % (Math.PI * 2));
      animationFrameId = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const { scrollLeft, clientWidth } = mobileScrollRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    if (index !== mobileActiveIndex) {
      setMobileActiveIndex(index);
      setActiveIndex(index);
    }
  };

  const scrollMobileTo = (index: number) => {
    if (!mobileScrollRef.current) return;
    const { clientWidth } = mobileScrollRef.current;
    mobileScrollRef.current.scrollTo({
      left: index * clientWidth,
      behavior: 'smooth',
    });
    setMobileActiveIndex(index);
    setActiveIndex(index);
  };

  // ── DNA RENDER ─────────────────────────────────────────────────────────────
  // Smooth-path double helix:
  //   • Splits the helix at each cos=0 crossing boundary
  //   • Each crossing segment is ONE filled polygon from 200 sample points
  //     → eliminates all trapezoid stepping / pixelation artifacts
  //   • Beads sit precisely on inner strand edges (rung junction points)
  //   • Perfect left/right symmetry via sin / -sin geometry
  const renderDnaStructure = () => {
    const W = svgW;
    const H = svgH;
    if (W < 10 || H < 10) return null;

    const cY = H / 2;
    const amp = H * 0.36;          // amplitude from centre to strand peak
    const nT = 2.5;               // 2.5 turns = 5 DNA eyes, one per card
    const rHW = H * 0.060;         // ribbon half-height
    const bR = H * 0.024;         // base bead radius
    const PTS = 220;               // sample points for smooth polygon construction

    // Build a closed polygon path: forward along top points, reverse along bottom points
    const makePath = (top: [number, number][], bot: [number, number][]): string => {
      const fwd = top.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join('');
      const rev = [...bot].reverse().map(p => `L${p[0].toFixed(1)},${p[1].toFixed(1)}`).join('');
      return `${fwd}${rev}Z`;
    };

    // ── Find crossing boundaries where cos(angle) = 0 ─────────────────
    // angle(t) = t * 2π * nT + phase  →  crossing when angle = π/2 + k*π
    // t_k = (π/2 + k*π - phase) / (2π * nT)
    const raw: number[] = [0, 1];
    for (let k = -2; k <= Math.ceil(nT * 2) + 2; k++) {
      const tk = (Math.PI / 2 + k * Math.PI - phase) / (Math.PI * 2 * nT);
      if (tk > 0.001 && tk < 0.999) raw.push(tk);
    }
    raw.sort((a, b) => a - b);
    // Deduplicate values that are very close together
    const bounds: number[] = [raw[0]];
    for (let i = 1; i < raw.length; i++) {
      if (raw[i] - bounds[bounds.length - 1] > 0.008) bounds.push(raw[i]);
    }

    const drawList: { z: number; el: React.ReactNode }[] = [];

    // ── Per-segment smooth ribbon paths ──────────────────────────────
    for (let si = 0; si < bounds.length - 1; si++) {
      const t0 = bounds[si];
      const t1 = bounds[si + 1];
      const tMid = (t0 + t1) / 2;
      const zA = Math.cos(tMid * Math.PI * 2 * nT + phase); // strand-A depth at mid

      const cnt = Math.max(4, Math.round((t1 - t0) * PTS));
      const pAt: [number, number][] = [], pAb: [number, number][] = [];
      const pBt: [number, number][] = [], pBb: [number, number][] = [];

      for (let j = 0; j <= cnt; j++) {
        const t = t0 + (j / cnt) * (t1 - t0);
        const ang = t * Math.PI * 2 * nT + phase;
        const sx = Math.sin(ang);
        const cx = Math.cos(ang);
        const x = t * W;
        // Symmetric strands: A = +sin, B = -sin
        const yA = cY + sx * amp;
        const yB = cY - sx * amp;
        // Foreshorten ribbon at crossing (edge-on = thin; face-on = full width)
        const hw = rHW * (0.06 + 0.94 * Math.abs(cx));

        pAt.push([x, yA - hw]); pAb.push([x, yA + hw]);
        pBt.push([x, yB - hw]); pBb.push([x, yB + hw]);
      }

      const dA = makePath(pAt, pAb);
      const dB = makePath(pBt, pBb);

      // Strand A (navy)
      drawList.push({
        z: zA,
        el: (
          <path
            key={`sA-${si}`}
            d={dA}
            fill={zA >= 0 ? 'url(#navy-ribbon-front)' : 'url(#navy-ribbon-back)'}
            opacity={zA >= 0 ? 0.94 : 0.68}
          />
        ),
      });

      // Strand B (gold)
      drawList.push({
        z: -zA,
        el: (
          <path
            key={`sB-${si}`}
            d={dB}
            fill={-zA >= 0 ? 'url(#gold-ribbon-front)' : 'url(#gold-ribbon-back)'}
            opacity={-zA >= 0 ? 0.94 : 0.68}
          />
        ),
      });
    }

    // ── Rungs + beads at evenly-spaced t positions ────────────────────
    // 10 rungs per DNA eye × 5 eyes = 50 total
    // Key fix: always pick whichever strand is visually ABOVE (smaller y) and
    // BELOW (larger y) so rungs appear in BOTH loops, not just one half-cycle.
    const RUNGS = 50;
    const rungStroke = Math.max(1.5, H * 0.005);

    for (let ri = 0; ri <= RUNGS; ri++) {
      const t = ri / RUNGS;
      const ang = t * Math.PI * 2 * nT + phase;
      const sx = Math.sin(ang);
      const cx = Math.cos(ang);
      const x = t * W;
      const zA = cx;

      const yA = cY + sx * amp;
      const yB = cY - sx * amp;
      const hw = rHW * (0.06 + 0.94 * Math.abs(cx));

      // Identify upper and lower strand based on actual screen position
      const isAAbove = yA <= yB;
      const yAbove = isAAbove ? yA : yB;   // centre of whichever strand is on top
      const yBelow = isAAbove ? yB : yA;   // centre of whichever strand is on bottom

      // Rung connects inner (bottom) edge of upper strand → inner (top) edge of lower strand
      const rungTop = yAbove + hw;
      const rungBot = yBelow - hw;

      // Skip only at real crossing points where the gap is negligible
      if (rungBot <= rungTop + 2) continue;

      // Bead colour tracks the strand, not a fixed navy-top / gold-bottom rule
      const topGrad = isAAbove ? 'url(#navy-bead-grad)' : 'url(#gold-bead-grad)';
      const botGrad = isAAbove ? 'url(#gold-bead-grad)' : 'url(#navy-bead-grad)';
      // Z-depth of each bead follows the strand's own depth
      const topBeadZ = isAAbove ? zA + 0.015 : -zA + 0.015;
      const botBeadZ = isAAbove ? -zA + 0.015 : zA + 0.015;

      const bRad = bR * (0.42 + 0.58 * Math.abs(cx));

      // Rung stem
      drawList.push({
        z: Math.min(Math.abs(zA) * 0.5, 0.4),
        el: (
          <line
            key={`rg-${ri}`}
            x1={x} y1={rungTop}
            x2={x} y2={rungBot}
            stroke="rgba(18,44,74,0.68)"
            strokeWidth={rungStroke + Math.abs(cx) * rungStroke}
          />
        ),
      });

      // Bead at top of rung (upper strand inner edge)
      drawList.push({
        z: topBeadZ,
        el: (
          <circle
            key={`bTop-${ri}`}
            cx={x} cy={rungTop}
            r={bRad}
            fill={topGrad}
            stroke="rgba(255,255,255,0.45)"
            strokeWidth={0.7}
          />
        ),
      });

      // Bead at bottom of rung (lower strand inner edge)
      drawList.push({
        z: botBeadZ,
        el: (
          <circle
            key={`bBot-${ri}`}
            cx={x} cy={rungBot}
            r={bRad}
            fill={botGrad}
            stroke="rgba(255,255,255,0.45)"
            strokeWidth={0.7}
          />
        ),
      });
    }

    drawList.sort((a, b) => a.z - b.z);
    return drawList.map(d => d.el);
  };

  // Returns the inner-top edge of the gold strand at a given xNode:
  // this is the bead position where the rung meets strand B — used as the
  // anchor for the vertical connector line going from DNA down to the cards.
  const getActiveNodeCoordinates = (index: number) => {
    const W = svgW;
    const H = svgH;
    const cY = H / 2;
    const amp = H * 0.36;
    const nT = 2.5;
    const rHW = H * 0.060;

    const x = xNodes[index];
    const t = x / W;
    const ang = t * Math.PI * 2 * nT + phase;
    const sx = Math.sin(ang);
    const cx = Math.cos(ang);

    // Gold strand (B) inner-top edge = where the gold bead sits
    const yB = cY - sx * amp;
    const hw = rHW * (0.06 + 0.94 * Math.abs(cx));
    return { x, y: yB - hw };
  };

  return (
    <section className="relative w-full py-20 md:py-28 bg-transparent border-t border-brand-gold/10 overflow-hidden select-none">
      {/* Heading Block */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="w-full max-w-[90rem] mx-auto text-left mb-14 md:mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-black tracking-widest text-brand-navy uppercase">
            Our Core Values
          </h2>
          <div className="w-20 h-[3px] bg-brand-gold mt-4 rounded-full" />
        </div>
      </div>

      {/* DESKTOP & TABLET LAYOUT */}
      <div className="hidden md:flex flex-col items-center w-full">
        {/* Continuous Wide Horizontal DNA Timeline Canvas - Full screen width */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-[360px] relative mb-8"
          ref={svgContainerRef}
        >
          <svg
            ref={svgRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeaveSvg}
            width="100%"
            height="100%"
            viewBox={`0 0 ${svgW} ${svgH}`}
            className="overflow-visible cursor-crosshair"
            style={{ filter: 'url(#dna-glow)' }}
          >
            <defs>
              {/* ── Bead radial gradients (3-D sphere illusion) ── */}
              <radialGradient id="navy-bead-grad" cx="32%" cy="28%" r="68%">
                <stop offset="0%" stopColor="#6899c8" />
                <stop offset="40%" stopColor="#1c4d7d" />
                <stop offset="100%" stopColor="#061627" />
              </radialGradient>
              <radialGradient id="gold-bead-grad" cx="32%" cy="28%" r="68%">
                <stop offset="0%" stopColor="#ffe9a8" />
                <stop offset="40%" stopColor="#c9973a" />
                <stop offset="100%" stopColor="#6b4910" />
              </radialGradient>

              {/* ── Ribbon face gradients — top-lit shading ── */}
              {/* Navy ribbon facing camera (brighter top edge) */}
              <linearGradient id="navy-ribbon-front" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2e6faa" />
                <stop offset="40%" stopColor="#0e3560" />
                <stop offset="100%" stopColor="#07233e" />
              </linearGradient>
              {/* Navy ribbon facing away (darker) */}
              <linearGradient id="navy-ribbon-back" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0a2540" />
                <stop offset="100%" stopColor="#041222" />
              </linearGradient>
              {/* Gold ribbon facing camera */}
              <linearGradient id="gold-ribbon-front" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e8c56a" />
                <stop offset="40%" stopColor="#a87828" />
                <stop offset="100%" stopColor="#6b4910" />
              </linearGradient>
              {/* Gold ribbon facing away */}
              <linearGradient id="gold-ribbon-back" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7a540f" />
                <stop offset="100%" stopColor="#3e2908" />
              </linearGradient>

              {/* ── Ambient glow filter for the whole helix ── */}
              <filter id="dna-glow" x="-4%" y="-20%" width="108%" height="140%">
                <feGaussianBlur stdDeviation="4" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Render Depth-Sorted Physical Double Helix */}
            {renderDnaStructure()}

            {/* Precision hairline — no numbers, just a clean tracking line */}
            {isMouseOver && (
              <line
                x1={currentMouseX.current}
                y1={0}
                x2={currentMouseX.current}
                y2={svgH}
                stroke="#BFA052"
                strokeWidth="0.8"
                strokeDasharray="5,5"
                opacity="0.35"
                pointerEvents="none"
              />
            )}

            {/* Interactive Connector Lines & Highlighted Key Nodes */}
            {coreValues.map((val, idx) => {
              const nodePos = getActiveNodeCoordinates(idx);
              const isHoveredOrActive = activeIndex === idx;

              return (
                <g key={`interactive-${val.id}`}>
                  {/* Clean HUD reticle — no text, professional lock indicator */}
                  {isHoveredOrActive && (
                    <g>
                      {/* Outermost rotating dashed ring */}
                      <circle
                        cx={nodePos.x}
                        cy={nodePos.y}
                        r={svgH * 0.09}
                        fill="none"
                        stroke="#BFA052"
                        strokeWidth="0.7"
                        strokeDasharray="4,5"
                        strokeOpacity="0.45"
                        transform={`rotate(${(phase * 180 / Math.PI) * 0.5}, ${nodePos.x}, ${nodePos.y})`}
                      />
                      {/* Middle pulsing ring */}
                      <circle
                        cx={nodePos.x}
                        cy={nodePos.y}
                        r={svgH * 0.062}
                        fill="none"
                        stroke="#BFA052"
                        strokeWidth="1"
                        strokeOpacity="0.6"
                        className="animate-pulse"
                      />
                      {/* Inner lock ring */}
                      <circle
                        cx={nodePos.x}
                        cy={nodePos.y}
                        r={svgH * 0.038}
                        fill="none"
                        stroke="#BFA052"
                        strokeWidth="1.5"
                        strokeOpacity="0.85"
                      />
                      {/* Crosshair ticks (no label) */}
                      {[[-1, 0], [1, 0], [0, -1], [0, 1]].map(([dx, dy], ti) => (
                        <line key={`tick-${idx}-${ti}`}
                          x1={nodePos.x + dx * svgH * 0.105}
                          y1={nodePos.y + dy * svgH * 0.105}
                          x2={nodePos.x + dx * svgH * 0.075}
                          y2={nodePos.y + dy * svgH * 0.075}
                          stroke="#BFA052" strokeWidth="0.9" strokeOpacity="0.7"
                        />
                      ))}
                    </g>
                  )}

                  {/* Vertical connector: DNA bead → top of card */}
                  <motion.path
                    d={`M ${nodePos.x} ${nodePos.y} L ${nodePos.x} ${svgH}`}
                    fill="none"
                    stroke={isHoveredOrActive ? '#BFA052' : 'rgba(12, 44, 77, 0.07)'}
                    strokeWidth={isHoveredOrActive ? 1.5 : 0.6}
                    strokeDasharray={isHoveredOrActive ? 'none' : '3,4'}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="transition-all duration-300"
                  />

                  {/* On-hover anchor bead — only rendered when active, sits on the DNA */}
                  {isHoveredOrActive && (
                    <circle
                      cx={nodePos.x}
                      cy={nodePos.y}
                      r={svgH * 0.040}
                      fill="#ffffff"
                      stroke="#BFA052"
                      strokeWidth={3}
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveIndex(idx)}
                      onMouseLeave={() => setActiveIndex(null)}
                    />
                  )}

                  {/* Invisible hit-area on DNA so the whole segment is hoverable */}
                  {!isHoveredOrActive && (
                    <rect
                      x={nodePos.x - svgW * 0.085}
                      y={0}
                      width={svgW * 0.17}
                      height={svgH}
                      fill="transparent"
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveIndex(idx)}
                      onMouseLeave={() => setActiveIndex(null)}
                    />
                  )}

                  {/* Fixed bottom-edge dot — always at the card entry point, properly aligned */}
                  <circle
                    cx={nodePos.x}
                    cy={svgH - 2}
                    r={isHoveredOrActive ? 5 : 3}
                    fill={isHoveredOrActive ? '#BFA052' : 'rgba(12,44,77,0.18)'}
                    className="transition-all duration-300"
                  />
                </g>
              );
            })}
          </svg>
        </motion.div>

        {/* Cards Container */}
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          {/* Five Pillars-style Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 bg-transparent max-w-[90rem] mx-auto group/grid w-full">
            {coreValues.map((val, idx) => {
              const isHoveredOrActive = activeIndex === idx;

              return (
                <div
                  key={val.id}
                  className="core-value-card-desktop bg-transparent hover:bg-brand-gold transition-colors duration-300 relative"
                  onMouseEnter={() => setActiveIndex(idx)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <motion.div
                    className={`bg-brand-white relative h-[520px] lg:h-[600px] flex flex-col p-6 lg:p-8 xl:p-10 transition-all duration-500 ease-in-out overflow-hidden cursor-pointer z-10 ${isHoveredOrActive
                      ? '-translate-y-[6px] shadow-[0_20px_50px_rgba(12,44,77,0.14)] z-20'
                      : 'hover:-translate-y-[6px] hover:shadow-[0_20px_50px_rgba(12,44,77,0.12)] hover:z-20'
                      }`}
                    style={{ transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}
                  >
                    {/* Background Image Layer (Grayscale contrast) */}
                    <div className="absolute inset-0 z-0 transition-all duration-500 ease-out">
                      <Image
                        src={val.bgImg}
                        className={`object-cover transform transition-all duration-500 filter grayscale contrast-[118%] brightness-[88%] ${isHoveredOrActive ? 'scale-108 contrast-[110%] brightness-[95%]' : 'scale-100 group-hover:scale-108 group-hover:contrast-[110%] group-hover:brightness-[95%]'
                          }`}
                        alt={val.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 20vw"
                      />
                    </div>

                    {/* Translucent overlay veils for readability */}
                    <div className={`absolute inset-0 bg-brand-white/10 transition-opacity duration-300 z-10 pointer-events-none ${isHoveredOrActive ? 'opacity-0' : 'group-hover:opacity-0'
                      }`} />

                    <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-brand-white/90 via-brand-white/45 to-transparent transition-opacity duration-300 z-10 pointer-events-none ${isHoveredOrActive ? 'opacity-0' : 'group-hover:opacity-0'
                      }`} />

                    <div className={`absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-brand-white via-brand-white/90 to-transparent transition-opacity duration-300 z-10 pointer-events-none ${isHoveredOrActive ? 'opacity-0' : 'group-hover:opacity-0'
                      }`} />

                    {/* Hover Premium Navy Overlay */}
                    <div className={`absolute inset-0 bg-brand-navy/85 transition-opacity duration-500 z-10 pointer-events-none ${isHoveredOrActive ? 'opacity-100' : 'opacity-0'
                      }`} />

                    {/* Top Number Block */}
                    <div className="relative z-20 flex flex-col items-center mb-6">
                      <span className={`font-tibere font-black text-4xl lg:text-5xl transition-colors duration-300 leading-none ${isHoveredOrActive ? 'text-brand-gold' : 'text-brand-navy'
                        }`}>
                        0{idx + 1}
                      </span>
                      <div className={`h-[1px] w-12 transition-colors duration-300 mt-4 ${isHoveredOrActive ? 'bg-brand-gold' : 'bg-brand-navy/20'
                        }`} />
                    </div>

                    {/* Title & Description Stack at Bottom */}
                    <div className="relative z-20 mt-auto text-center flex flex-col items-center">
                      <h3 className={`text-base lg:text-[17px] font-tibere font-bold uppercase leading-tight tracking-tight transition-colors duration-500 ${isHoveredOrActive ? 'text-brand-white' : 'text-brand-navy'
                        }`}>
                        {val.title}
                      </h3>

                      {/* Double Gold Line Divider */}
                      <div className={`flex flex-col gap-[3px] mt-4 transition-all duration-500 transform ${isHoveredOrActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                        }`}>
                        <div className="h-[2.5px] w-10 bg-brand-gold" />
                        <div className="h-[2.5px] w-10 bg-brand-gold" />
                      </div>

                      {/* Description text sliding in */}
                      <div className={`transition-all duration-500 ease-in-out transform overflow-hidden ${isHoveredOrActive ? 'opacity-100 max-h-[140px] mt-4 translate-y-0' : 'opacity-0 max-h-0 translate-y-2'
                        }`}>
                        <p className="font-poppins text-xs lg:text-[13px] leading-relaxed text-brand-white/80">
                          {val.description}
                        </p>
                      </div>
                    </div>

                    {/* Inner frame border box */}
                    <div className={`absolute inset-5 border transition-all duration-500 pointer-events-none z-20 ${isHoveredOrActive ? 'border-brand-gold/30' : 'border-brand-gold/0'
                      }`} />

                    {/* Top Accent Gold Bar */}
                    <div className={`absolute top-0 left-0 w-full h-[6px] bg-brand-gold transform transition-transform duration-500 origin-left z-20 ${isHoveredOrActive ? 'scale-x-100' : 'scale-x-0'
                      }`} />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* MOBILE LAYOUT */}
      <div className="flex md:hidden flex-col items-center w-full max-w-[1440px] mx-auto px-6">
        {/* Continuous Wide Horizontal DNA Canvas */}
        <div className="w-full h-[200px] relative overflow-visible select-none mb-6">
          <svg
            width="100%"
            height="100%"
            viewBox={`0 0 ${svgW} ${svgH}`}
            className="overflow-visible"
            style={{ filter: 'url(#dna-glow)' }}
          >
            <defs>
              <radialGradient id="navy-bead-grad-m" cx="32%" cy="28%" r="68%">
                <stop offset="0%" stopColor="#6899c8" />
                <stop offset="40%" stopColor="#1c4d7d" />
                <stop offset="100%" stopColor="#061627" />
              </radialGradient>
              <radialGradient id="gold-bead-grad-m" cx="32%" cy="28%" r="68%">
                <stop offset="0%" stopColor="#ffe9a8" />
                <stop offset="40%" stopColor="#c9973a" />
                <stop offset="100%" stopColor="#6b4910" />
              </radialGradient>
              <linearGradient id="navy-ribbon-front-m" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2e6faa" />
                <stop offset="40%" stopColor="#0e3560" />
                <stop offset="100%" stopColor="#07233e" />
              </linearGradient>
              <linearGradient id="navy-ribbon-back-m" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0a2540" />
                <stop offset="100%" stopColor="#041222" />
              </linearGradient>
              <linearGradient id="gold-ribbon-front-m" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e8c56a" />
                <stop offset="40%" stopColor="#a87828" />
                <stop offset="100%" stopColor="#6b4910" />
              </linearGradient>
              <linearGradient id="gold-ribbon-back-m" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7a540f" />
                <stop offset="100%" stopColor="#3e2908" />
              </linearGradient>
              <filter id="dna-glow-m" x="-4%" y="-20%" width="108%" height="140%">
                <feGaussianBlur stdDeviation="4" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Depth-Sorted Physical Double Helix */}
            {renderDnaStructure()}

            {/* Active Mobile Connector & Node highlights */}
            {coreValues.map((val, idx) => {
              const nodePos = getActiveNodeCoordinates(idx);
              const isCurrentActive = idx === mobileActiveIndex;
              if (!isCurrentActive) return null;

              return (
                <g key={`leader-mobile-${val.id}`}>
                  <circle
                    cx={nodePos.x}
                    cy={nodePos.y}
                    r={svgH * 0.065}
                    fill="none"
                    stroke="#BFA052"
                    strokeWidth="1.2"
                    className="animate-pulse"
                  />
                  <line
                    x1={nodePos.x}
                    y1={nodePos.y}
                    x2={nodePos.x}
                    y2={svgH}
                    stroke="#BFA052"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx={nodePos.x}
                    cy={nodePos.y}
                    r={svgH * 0.036}
                    fill="#ffffff"
                    stroke="#BFA052"
                    strokeWidth="3"
                  />
                  <circle
                    cx={nodePos.x}
                    cy={svgH}
                    r="5"
                    fill="#BFA052"
                  />
                </g>
              );
            })}

            {/* Dot targets on mobile DNA for simple tap connection */}
            {xNodes.map((xVal, idx) => (
              <g key={`mobile-target-group-${idx}`} className="cursor-pointer" onClick={() => scrollMobileTo(idx)}>
                <circle
                  cx={xVal}
                  cy={svgH}
                  r="5"
                  fill={idx === mobileActiveIndex ? '#BFA052' : '#0C2C4D'}
                  fillOpacity={idx === mobileActiveIndex ? 1 : 0.3}
                />
                <circle
                  cx={xVal}
                  cy={svgH}
                  r="25"
                  fill="transparent"
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Premium Card Swipe Slider */}
        <div
          ref={mobileScrollRef}
          onScroll={handleMobileScroll}
          className="w-full flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-6 px-4 pb-4"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {coreValues.map((val, idx) => {
            const isCurrent = idx === mobileActiveIndex;

            return (
              <div
                id={`value-card-mobile-${val.num}`}
                key={`mob-card-${val.id}`}
                className="w-full min-w-[88%] shrink-0 snap-center bg-transparent relative"
                onClick={() => scrollMobileTo(idx)}
              >
                <div
                  className={`bg-brand-white relative h-[480px] flex flex-col p-8 transition-all duration-300 overflow-hidden ${isCurrent
                    ? 'shadow-[0_15px_40px_rgba(12,44,77,0.14)] z-10 border border-brand-gold/80'
                    : 'shadow-sm border border-brand-gold/10'
                    }`}
                >
                  {/* Background Image Layer (Grayscale contrast) */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={val.bgImg}
                      className={`object-cover transform transition-all duration-300 filter grayscale contrast-[118%] brightness-[88%] ${isCurrent ? 'scale-105' : 'scale-100'
                        }`}
                      alt={val.title}
                      fill
                      sizes="88vw"
                    />
                  </div>

                  {/* Translucent overlay veils for readability */}
                  <div className={`absolute inset-0 bg-brand-white/10 transition-opacity duration-300 z-10 pointer-events-none ${isCurrent ? 'opacity-0' : 'opacity-100'
                    }`} />

                  <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand-white/90 via-brand-white/45 to-transparent transition-opacity duration-300 z-10 pointer-events-none ${isCurrent ? 'opacity-0' : 'opacity-100'
                    }`} />

                  <div className={`absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-brand-white via-brand-white/90 to-transparent transition-opacity duration-300 z-10 pointer-events-none ${isCurrent ? 'opacity-0' : 'opacity-100'
                    }`} />

                  {/* Hover Premium Navy Overlay */}
                  <div className={`absolute inset-0 bg-brand-navy/85 transition-opacity duration-300 z-10 pointer-events-none ${isCurrent ? 'opacity-100' : 'opacity-0'
                    }`} />

                  {/* Top Number Block */}
                  <div className="relative z-20 flex flex-col items-center mb-4">
                    <span className={`font-tibere font-black text-3xl transition-colors duration-300 leading-none ${isCurrent ? 'text-brand-gold' : 'text-brand-navy'
                      }`}>
                      0{idx + 1}
                    </span>
                    <div className={`h-[1px] w-10 transition-colors duration-300 mt-3 ${isCurrent ? 'bg-brand-gold' : 'bg-brand-navy/20'
                      }`} />
                  </div>

                  {/* Title & Description Stack at Bottom */}
                  <div className="relative z-20 mt-auto text-center flex flex-col items-center">
                    <h3 className={`text-base font-tibere font-bold uppercase leading-tight tracking-tight transition-colors duration-300 ${isCurrent ? 'text-brand-white' : 'text-brand-navy'
                      }`}>
                      {val.title}
                    </h3>

                    {/* Double Gold Line Divider */}
                    <div className={`flex flex-col gap-[3px] mt-3 transition-all duration-300 transform ${isCurrent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}>
                      <div className="h-[2.5px] w-10 bg-brand-gold" />
                      <div className="h-[2.5px] w-10 bg-brand-gold" />
                    </div>

                    {/* Description text sliding in */}
                    <div className={`transition-all duration-300 ease-in-out transform overflow-hidden ${isCurrent ? 'opacity-100 max-h-[140px] mt-3 translate-y-0' : 'opacity-0 max-h-0 translate-y-2'
                      }`}>
                      <p className="font-poppins text-xs leading-relaxed text-brand-white/80">
                        {val.description}
                      </p>
                    </div>
                  </div>

                  {/* Inner frame border box */}
                  <div className={`absolute inset-4 border transition-all duration-300 pointer-events-none z-20 ${isCurrent ? 'border-brand-gold/30' : 'border-brand-gold/0'
                    }`} />

                  {/* Top Accent Gold Bar */}
                  <div className={`absolute top-0 left-0 w-full h-[5px] bg-brand-gold transform transition-transform duration-300 origin-left z-20 ${isCurrent ? 'scale-x-100' : 'scale-x-0'
                    }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Swipe Controls and Indicator dots */}
        <div className="flex items-center gap-4 mt-3">
          <button
            onClick={() => scrollMobileTo(Math.max(0, mobileActiveIndex - 1))}
            disabled={mobileActiveIndex === 0}
            className="p-2 rounded-full border border-slate-100 text-brand-navy disabled:opacity-30 disabled:pointer-events-none active:bg-slate-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {coreValues.map((_, idx) => (
              <button
                key={`dot-${idx}`}
                onClick={() => scrollMobileTo(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${idx === mobileActiveIndex ? 'w-5 bg-brand-gold' : 'w-2 bg-slate-200'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={() => scrollMobileTo(Math.min(coreValues.length - 1, mobileActiveIndex + 1))}
            disabled={mobileActiveIndex === coreValues.length - 1}
            className="p-2 rounded-full border border-slate-100 text-brand-navy disabled:opacity-30 disabled:pointer-events-none active:bg-slate-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
