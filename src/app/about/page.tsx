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

  // Cinematic camera LERP refs for Marvel-style closeups
  const currentZoom = useRef(1.0);
  const currentPanX = useRef(0);
  const currentPanY = useRef(0);
  const currentYaw = useRef(0.35);  // default good viewing angle
  const currentPitch = useRef(0.06);
  const currentRoll = useRef(-0.12);
  const currentAmp = useRef(192);   // 40% of 480px
  const currentTurns = useRef(2.5);
  // Continuous idle-rotation accumulator
  const autoYaw = useRef(0.35);

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

  const activeIndexRef = useRef<number | null>(null);
  activeIndexRef.current = activeIndex;

  const svgWRef = useRef(1920);
  const svgHRef = useRef(340);
  svgWRef.current = svgW;
  svgHRef.current = svgH;

  const xNodesRef = useRef<number[]>([192, 576, 960, 1344, 1728]);
  xNodesRef.current = xNodes;

  useEffect(() => {
    let animationFrameId: number;
    const tick = () => {
      // Smoothly interpolate current coordinates towards target values (LERP)
      currentMouseX.current += (targetMouseX.current - currentMouseX.current) * 0.08;
      currentMouseY.current += (targetMouseY.current - currentMouseY.current) * 0.08;

      // Determine target camera values based on activeIndex
      const idx = activeIndexRef.current;
      const W = svgWRef.current || 1920;
      const H = svgHRef.current || 340;

      let tZoom = 1.0;
      let tPanX = 0;
      let tPanY = 0;
      let tYaw = autoYaw.current; // follows idle oscillation
      let tPitch = 0.06;
      let tRoll = -0.12;
      let tAmp = H * 0.40;
      let tTurns = 2.5;

      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

      if (idx !== null && xNodesRef.current[idx] !== undefined) {
        // ── FPV DRONE HOVER — each card sweeps the camera to a dramatically different angle
        // Yaw   : how much the helix SPIRALS into view (0.45–0.65 rad = 25–37° side sweep)
        // Pitch : vertical tilt of the drone camera
        // Roll  : axis-tilt of the DNA strand itself
        // Zoom  : held at 1.4 so helix fills the LEFT 60% without overflow
        const configs = [
          { yaw: 0.52, pitch: 0.14, roll: -0.08, zoom: 1.40 }, // 01 — right sweep, tilt up
          { yaw: -0.48, pitch: -0.11, roll: 0.14, zoom: 1.38 }, // 02 — left sweep, tilt down
          { yaw: 0.62, pitch: 0.18, roll: -0.18, zoom: 1.42 }, // 03 — steep right
          { yaw: -0.55, pitch: -0.14, roll: 0.10, zoom: 1.36 }, // 04 — steep left
          { yaw: 0.45, pitch: 0.10, roll: -0.12, zoom: 1.40 }, // 05 — gentle right
        ];
        const cfg = configs[idx] ?? configs[0];
        tZoom = isMobile ? Math.min(cfg.zoom, 1.1) : cfg.zoom;
        tYaw = cfg.yaw;
        tPitch = cfg.pitch;
        tRoll = cfg.roll;
        tAmp = H * 0.38;  // slightly tighter when zoomed for depth clarity
        tTurns = 2.5;        // always the same turns — visual consistency across all 5

        const nodeX = xNodesRef.current[idx];
        // Bring active node to 28% from left so DNA sits in the left 60% zone
        // The extra -W*0.22 pushes the helix firmly into the left half
        tPanX = isMobile ? 0 : -(nodeX - W / 2) * tZoom - W * 0.22;
        tPanY = 0;
      } else {
        // ── IDLE: gentle figure-8 oscillation — the DNA slowly breathes and rocks
        autoYaw.current += 0.0005;  // half a degree per second at 60fps
        tYaw = 0.35 + Math.sin(autoYaw.current) * 0.07;
        tPitch = 0.06 + Math.cos(autoYaw.current * 0.7) * 0.03;
        tRoll = -0.12 + Math.sin(autoYaw.current * 0.5) * 0.04;
        tZoom = 1.0;
        tPanX = 0;
        tPanY = 0;
      }

      // LERP factors: zoom/pan fast (snappy), angles moderate (smooth drone sweep)
      currentZoom.current += (tZoom - currentZoom.current) * 0.10;
      currentPanX.current += (tPanX - currentPanX.current) * 0.09;
      currentPanY.current += (tPanY - currentPanY.current) * 0.09;
      currentYaw.current += (tYaw - currentYaw.current) * 0.07;
      currentPitch.current += (tPitch - currentPitch.current) * 0.07;
      currentRoll.current += (tRoll - currentRoll.current) * 0.06;
      currentAmp.current += (tAmp - currentAmp.current) * 0.07;
      currentTurns.current += (tTurns - currentTurns.current) * 0.07;

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
  //   • Backbone ribbon: smooth polyline along each strand
  //   • Proper full-span rungs: line from strandA → strandB, colour-coded by depth
  //   • Depth-clamped bead scaling: always in [0.55, 1.0] so edges never distort
  //   • Z-sorted draw list for correct occlusion
  const renderDnaStructure = () => {
    const W = svgW;
    const H = svgH;
    if (W < 10 || H < 10) return null;

    const cY = H / 2;
    const amp = currentAmp.current;
    const nT = currentTurns.current;
    const bR = H * 0.026;   // backbone bead radius
    const TOTAL = 160;         // sample density

    const project = (x3d: number, y3d: number, z3d: number) => {
      const dx = x3d - W / 2;
      const dy = y3d - cY;
      const dz = z3d;

      // Roll (Z-axis tilt)
      const roll = currentRoll.current;
      const rx1 = dx * Math.cos(roll) - dy * Math.sin(roll);
      const ry1 = dx * Math.sin(roll) + dy * Math.cos(roll);
      const rz1 = dz;

      // Yaw (Y-axis)
      const rx2 = rx1 * Math.cos(currentYaw.current) + rz1 * Math.sin(currentYaw.current);
      const rz2 = -rx1 * Math.sin(currentYaw.current) + rz1 * Math.cos(currentYaw.current);

      // Pitch (X-axis)
      const ry2 = ry1 * Math.cos(currentPitch.current) - rz2 * Math.sin(currentPitch.current);
      const rz3 = ry1 * Math.sin(currentPitch.current) + rz2 * Math.cos(currentPitch.current);

      const zoom = currentZoom.current;
      return {
        x: rx2 * zoom + W / 2 + currentPanX.current,
        y: ry2 * zoom + cY + currentPanY.current,
        z: rz3
      };
    };

    // Depth scale: map z in [-amp, +amp] → [0.55, 1.0], always positive
    const depthScale = (z: number) => 0.55 + 0.45 * ((z / amp) * 0.5 + 0.5);

    const drawList: { z: number; el: React.ReactNode }[] = [];
    const zoom = currentZoom.current;

    // Pre-compute projected positions for both strands
    const posA: { x: number; y: number; z: number }[] = [];
    const posB: { x: number; y: number; z: number }[] = [];
    const rawZ: number[] = []; // un-projected z for depth clamping

    for (let i = 0; i <= TOTAL; i++) {
      const t = i / TOTAL;
      const ang = t * Math.PI * 2 * nT + phase;
      const sx = Math.sin(ang);
      const cx = Math.cos(ang);
      const x = t * W;

      posA.push(project(x, cY + sx * amp, cx * amp));
      posB.push(project(x, cY - sx * amp, -cx * amp));
      rawZ.push(cx * amp); // raw z for strand A
    }

    // ── 1. Backbone ribbon lines (thin strokes connecting consecutive bead centres)
    const pathA = posA.map((p, i) => (i === 0 ? `M` : `L`) + ` ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
    const pathB = posB.map((p, i) => (i === 0 ? `M` : `L`) + ` ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');

    // Draw backbone ribbons behind everything (z = -99999)
    drawList.push({
      z: -99999,
      el: (
        <g key="backbone-ribbons">
          <path d={pathA} fill="none" stroke="#0a2540" strokeWidth={bR * zoom * 0.55} strokeLinecap="round" strokeLinejoin="round" opacity={0.45} />
          <path d={pathB} fill="none" stroke="#4a2d08" strokeWidth={bR * zoom * 0.55} strokeLinecap="round" strokeLinejoin="round" opacity={0.45} />
        </g>
      )
    });

    // ── 2. Rungs — drawn every N steps, full span from strandA → strandB
    const RUNG_STEP = 5; // every 5 samples = ~32 rungs total
    for (let i = 0; i <= TOTAL; i += RUNG_STEP) {
      const pA = posA[i];
      const pB = posB[i];

      // Skip rungs at the crossing zones (where both strands are near canvas centre)
      // When sin(ang) ≈ 0 the strands are crossing — skip those rungs
      const t = i / TOTAL;
      const ang = t * Math.PI * 2 * nT + phase;
      if (Math.abs(Math.sin(ang)) < 0.18) continue;

      const zMid = (pA.z + pB.z) / 2;
      const scale = depthScale(rawZ[i]);
      const rungW = Math.max(1.2, H * 0.004) * scale * zoom;

      // Colour by depth: front = bright, back = dim
      const isFront = rawZ[i] >= 0;
      const rungCol = isFront
        ? `rgba(180,150,60,${0.70 + 0.25 * scale})`   // gold-ish for front
        : `rgba(10,37,64,${0.55 + 0.35 * scale})`;    // navy for back

      // Small gold junction nodes where rung meets strand
      const nodeR = H * 0.006 * scale * zoom;

      drawList.push({
        z: zMid,
        el: (
          <g key={`rung-${i}`}>
            {/* Full-width rung: strandA to strandB */}
            <line
              x1={pA.x} y1={pA.y}
              x2={pB.x} y2={pB.y}
              stroke={rungCol}
              strokeWidth={rungW}
              strokeLinecap="round"
            />
            {/* Junction nodes */}
            <circle cx={pA.x} cy={pA.y} r={nodeR}
              fill="#fff" stroke="#205c9e" strokeWidth={0.7 * zoom} opacity={0.85}
            />
            <circle cx={pB.x} cy={pB.y} r={nodeR}
              fill="#fff" stroke="#c9973a" strokeWidth={0.7 * zoom} opacity={0.85}
            />
          </g>
        )
      });
    }

    // ── 3. Backbone beads — drawn at each position, depth-sorted
    for (let i = 0; i <= TOTAL; i++) {
      const pA = posA[i];
      const pB = posB[i];
      const scA = depthScale(rawZ[i]);
      const scB = depthScale(-rawZ[i]);  // strand B is always opposite z

      const bRadA = bR * scA * zoom;
      const bRadB = bR * scB * zoom;

      // Navy bead (strand A)
      drawList.push({
        z: pA.z,
        el: (
          <circle key={`bA-${i}`}
            cx={pA.x} cy={pA.y} r={Math.max(1, bRadA)}
            fill="url(#navy-bead-grad)"
            stroke="rgba(255,255,255,0.4)" strokeWidth={0.4 * zoom}
          />
        )
      });

      // Gold bead (strand B)
      drawList.push({
        z: pB.z,
        el: (
          <circle key={`bB-${i}`}
            cx={pB.x} cy={pB.y} r={Math.max(1, bRadB)}
            fill="url(#gold-bead-grad)"
            stroke="rgba(255,255,255,0.4)" strokeWidth={0.4 * zoom}
          />
        )
      });
    }

    drawList.sort((a, b) => a.z - b.z);
    return drawList.map(d => d.el);
  };

  const getActiveNodeCoordinates = (index: number) => {
    const W = svgW;
    const H = svgH;
    const cY = H / 2;
    const amp = currentAmp.current;
    const nT = currentTurns.current;

    const x = xNodes[index];
    const t = x / W;
    const ang = t * Math.PI * 2 * nT + phase;
    const sx = Math.sin(ang);
    const cx = Math.cos(ang);

    // Gold strand (B) coordinates in 3D:
    const yB = cY - sx * amp;
    const zB = -cx * amp;

    const dx = x - W / 2;
    const dy = yB - cY;
    const dz = zB;

    // Use current LERP-ed camera parameters
    const roll = currentRoll.current;
    const yaw = currentYaw.current;
    const pitch = currentPitch.current;

    // Roll rotation (Z-axis) - this tilts/slants the DNA
    const rx1 = dx * Math.cos(roll) - dy * Math.sin(roll);
    const ry1 = dx * Math.sin(roll) + dy * Math.cos(roll);
    const rz1 = dz;

    // Yaw rotation (Y-axis)
    const rx2 = rx1 * Math.cos(yaw) + rz1 * Math.sin(yaw);
    const rz2 = -rx1 * Math.sin(yaw) + rz1 * Math.cos(yaw);

    // Pitch rotation (X-axis)
    const ry2 = ry1 * Math.cos(pitch) - rz2 * Math.sin(pitch);

    // Apply zoom & pan
    const zoom = currentZoom.current;
    const panX = currentPanX.current;
    const panY = currentPanY.current;

    return {
      x: rx2 * zoom + W / 2 + panX,
      y: ry2 * zoom + cY + panY
    };
  };

  return (
    <section className="relative w-full pt-10 pb-0 md:pt-14 md:pb-0 bg-transparent border-t border-brand-gold/10 select-none">

      {/* ── Heading ── */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 mb-6 md:mb-8">
        <div className="w-full max-w-[90rem] mx-auto text-left">
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-black tracking-widest text-brand-navy uppercase">
            Our Core Values
          </h2>
          <div className="w-20 h-[3px] bg-brand-gold mt-4 rounded-full" />
        </div>
      </div>

      {/* ════════════════════════ DESKTOP / TABLET ════════════════════════ */}
      <div className="hidden md:block w-full">

        {/* DNA Interactive Canvas — 480px, overflow-hidden so nothing bleeds */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="w-full h-[480px] relative overflow-hidden"
          ref={svgContainerRef}
        >
          {/* SVG Canvas */}
          <svg
            ref={svgRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeaveSvg}
            width="100%"
            height="100%"
            viewBox={`0 0 ${svgW} ${svgH}`}
            className="overflow-hidden cursor-crosshair"
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

              {/* ── Ribbon face gradients ── */}
              <linearGradient id="navy-ribbon-front" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2e6faa" />
                <stop offset="40%" stopColor="#0e3560" />
                <stop offset="100%" stopColor="#07233e" />
              </linearGradient>
              <linearGradient id="navy-ribbon-back" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0a2540" />
                <stop offset="100%" stopColor="#041222" />
              </linearGradient>
              <linearGradient id="gold-ribbon-front" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e8c56a" />
                <stop offset="40%" stopColor="#a87828" />
                <stop offset="100%" stopColor="#6b4910" />
              </linearGradient>
              <linearGradient id="gold-ribbon-back" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7a540f" />
                <stop offset="100%" stopColor="#3e2908" />
              </linearGradient>

              {/* ── Ambient glow filter ── */}
              <filter id="dna-glow" x="-4%" y="-20%" width="108%" height="140%">
                <feGaussianBlur stdDeviation="4" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* 3-D Double Helix */}
            {renderDnaStructure()}

            {/* Precision crosshair line */}
            {isMouseOver && (
              <line
                x1={currentMouseX.current} y1={0}
                x2={currentMouseX.current} y2={svgH}
                stroke="#BFA052" strokeWidth="0.8" strokeDasharray="5,5" opacity="0.35"
                pointerEvents="none"
              />
            )}

            {/* Interactive connector lines, reticles, hitboxes */}
            {coreValues.map((val, idx) => {
              const nodePos = getActiveNodeCoordinates(idx);
              const isActive = activeIndex === idx;

              return (
                <g key={`interactive-${val.id}`}>

                  {/* HUD reticle — only when active */}
                  {isActive && (
                    <g>
                      <circle cx={nodePos.x} cy={nodePos.y} r={svgH * 0.08}
                        fill="none" stroke="#BFA052" strokeWidth="0.7" strokeDasharray="4,5" strokeOpacity="0.45"
                        transform={`rotate(${(phase * 180 / Math.PI) * 0.5}, ${nodePos.x}, ${nodePos.y})`}
                      />
                      <circle cx={nodePos.x} cy={nodePos.y} r={svgH * 0.055}
                        fill="none" stroke="#BFA052" strokeWidth="1" strokeOpacity="0.6"
                        className="animate-pulse"
                      />
                      <circle cx={nodePos.x} cy={nodePos.y} r={svgH * 0.034}
                        fill="none" stroke="#BFA052" strokeWidth="1.5" strokeOpacity="0.85"
                      />
                      {[[-1, 0], [1, 0], [0, -1], [0, 1]].map(([dx, dy], ti) => (
                        <line key={`tick-${idx}-${ti}`}
                          x1={nodePos.x + dx * svgH * 0.095} y1={nodePos.y + dy * svgH * 0.095}
                          x2={nodePos.x + dx * svgH * 0.068} y2={nodePos.y + dy * svgH * 0.068}
                          stroke="#BFA052" strokeWidth="0.9" strokeOpacity="0.7"
                        />
                      ))}
                    </g>
                  )}

                  {/* Connector line DNA → bottom of canvas */}
                  <motion.path
                    d={isActive
                      ? `M ${nodePos.x} ${nodePos.y} L ${xNodes[idx]} ${svgH}`
                      : `M ${nodePos.x} ${nodePos.y} L ${nodePos.x} ${svgH}`}
                    fill="none"
                    stroke={isActive ? '#BFA052' : 'rgba(12, 44, 77, 0.07)'}
                    strokeWidth={isActive ? 1.5 : 0.6}
                    strokeDasharray={isActive ? 'none' : '3,4'}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="transition-all duration-300"
                  />

                  {/* Anchor bead on active DNA node */}
                  {isActive && (
                    <circle
                      cx={nodePos.x} cy={nodePos.y} r={svgH * 0.036}
                      fill="#ffffff" stroke="#BFA052" strokeWidth={3}
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveIndex(idx)}
                      onMouseLeave={() => setActiveIndex(null)}
                    />
                  )}

                  {/* Invisible hit-area for hover */}
                  {!isActive && (
                    <rect
                      x={xNodes[idx] - svgW * 0.085} y={0}
                      width={svgW * 0.17} height={svgH}
                      fill="transparent"
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveIndex(idx)}
                      onMouseLeave={() => setActiveIndex(null)}
                    />
                  )}

                  {/* Bottom edge dot */}
                  <circle
                    cx={xNodes[idx]} cy={svgH - 2}
                    r={isActive ? 5 : 3}
                    fill={isActive ? '#BFA052' : 'rgba(12,44,77,0.18)'}
                    className="transition-all duration-300"
                  />
                </g>
              );
            })}
          </svg>

          {/* Right-edge soft fade — hides DNA before it reaches the card zone */}
          <div className="absolute inset-0 pointer-events-none z-10" style={{
            background: activeIndex !== null
              ? 'linear-gradient(to right, transparent 52%, rgba(248,247,244,0.7) 66%, rgba(248,247,244,0.97) 74%)'
              : 'radial-gradient(ellipse 90% 70% at 50% 50%, transparent 45%, rgba(248,247,244,0.55) 80%, rgba(248,247,244,0.92) 100%)'
          }} />

          {/* ── Content card — lives in the absolute right panel, never overlaps DNA ── */}
          <AnimatePresence>
            {activeIndex !== null && (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 32, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 16, scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 260, damping: 26, mass: 0.45 }}
                className="absolute flex flex-col z-30 pointer-events-none select-none"
                style={{
                  // Pinned to the right 34% of the canvas, vertically centred
                  right: '2.5%',
                  width: 'min(340px, 33%)',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              >
                {/* Card shell */}
                <div style={{
                  background: 'rgba(10,28,50,0.97)',
                  border: '1px solid rgba(191,160,82,0.30)',
                  borderRadius: '16px',
                  boxShadow: '0 28px 72px rgba(6,18,34,0.75), 0 0 0 1px rgba(191,160,82,0.12), inset 0 1px 0 rgba(191,160,82,0.18)',
                  padding: '28px 32px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Subtle animated shimmer stripe at top */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                    background: 'linear-gradient(90deg, transparent, #BFA052, transparent)',
                    animation: 'shimmer 2.5s ease-in-out infinite'
                  }} />

                  {/* Badge row */}
                  <div className="flex items-center gap-2 mb-4">
                    <div style={{ width: '24px', height: '2px', background: '#BFA052', borderRadius: '1px' }} />
                    <span style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '9px',
                      letterSpacing: '0.35em',
                      color: '#BFA052',
                      fontWeight: 700,
                      textTransform: 'uppercase'
                    }}>
                      {String(activeIndex + 1).padStart(2, '0')} &mdash; Core Value
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: 'var(--font-tibere, serif)',
                    fontSize: 'clamp(15px, 1.4vw, 20px)',
                    fontWeight: 700,
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    lineHeight: 1.25,
                    marginBottom: '16px'
                  }}>
                    {coreValues[activeIndex].title}
                  </h3>

                  {/* Gold separator */}
                  <div style={{
                    width: '100%',
                    height: '1px',
                    background: 'linear-gradient(90deg, #BFA052, transparent)',
                    marginBottom: '16px'
                  }} />

                  {/* Description */}
                  <p style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 'clamp(11px, 0.85vw, 13px)',
                    color: 'rgba(255,255,255,0.78)',
                    lineHeight: 1.8,
                    margin: 0
                  }}>
                    {coreValues[activeIndex].description}
                  </p>

                  {/* Corner accents */}
                  <div style={{
                    position: 'absolute', top: '10px', right: '10px', width: '12px', height: '12px',
                    borderTop: '1px solid rgba(191,160,82,0.4)', borderRight: '1px solid rgba(191,160,82,0.4)'
                  }} />
                  <div style={{
                    position: 'absolute', bottom: '10px', left: '10px', width: '12px', height: '12px',
                    borderBottom: '1px solid rgba(191,160,82,0.4)', borderLeft: '1px solid rgba(191,160,82,0.4)'
                  }} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── Bottom Selector Strip ── */}
        <div className="w-full" style={{ background: '#f0eeea', borderTop: '2px solid rgba(12,44,77,0.08)' }}>
          <div className="flex w-full max-w-[1440px] mx-auto">
            {coreValues.map((val, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={val.id}
                  className="flex-1 relative group cursor-pointer transition-all duration-300"
                  style={{
                    background: isActive ? '#0C2C4D' : 'transparent',
                    borderRight: idx < coreValues.length - 1 ? '1px solid rgba(12,44,77,0.1)' : 'none'
                  }}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Gold progress bar at top */}
                  <div
                    className="absolute top-0 left-0 h-[3px] bg-brand-gold transition-all duration-500 ease-out"
                    style={{ width: isActive ? '100%' : '0%' }}
                  />

                  <div className="flex items-center gap-3 px-5 xl:px-6 py-4">
                    {/* Number pill */}
                    <span
                      className="font-tibere font-black text-xl xl:text-2xl flex-shrink-0 leading-none transition-colors duration-300"
                      style={{ color: isActive ? '#BFA052' : 'rgba(12,44,77,0.25)' }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    {/* Vertical divider */}
                    <div
                      className="w-px h-7 flex-shrink-0 transition-colors duration-300"
                      style={{ background: isActive ? 'rgba(191,160,82,0.45)' : 'rgba(12,44,77,0.12)' }}
                    />

                    {/* Title */}
                    <span
                      className="font-poppins text-[9.5px] xl:text-[10.5px] font-bold uppercase tracking-[0.1em] leading-tight transition-colors duration-300"
                      style={{ color: isActive ? '#ffffff' : 'rgba(12,44,77,0.5)' }}
                    >
                      {val.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ════════════════════════ MOBILE ════════════════════════ */}
      <div className="flex md:hidden flex-col items-center w-full max-w-[1440px] mx-auto px-6">
        {/* Mobile DNA Canvas */}
        <div className="w-full h-[200px] relative overflow-visible select-none mb-6">
          <svg
            width="100%" height="100%"
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

            {renderDnaStructure()}

            {coreValues.map((val, idx) => {
              const nodePos = getActiveNodeCoordinates(idx);
              const isCurrentActive = idx === mobileActiveIndex;
              if (!isCurrentActive) return null;
              return (
                <g key={`leader-mobile-${val.id}`}>
                  <circle cx={nodePos.x} cy={nodePos.y} r={svgH * 0.065}
                    fill="none" stroke="#BFA052" strokeWidth="1.2" className="animate-pulse"
                  />
                  <line x1={nodePos.x} y1={nodePos.y} x2={xNodes[idx]} y2={svgH}
                    stroke="#BFA052" strokeWidth="1.5"
                  />
                  <circle cx={nodePos.x} cy={nodePos.y} r={svgH * 0.036}
                    fill="#ffffff" stroke="#BFA052" strokeWidth="3"
                  />
                  <circle cx={xNodes[idx]} cy={svgH} r="5" fill="#BFA052" />
                </g>
              );
            })}

            {xNodes.map((xVal, idx) => (
              <g key={`mobile-target-group-${idx}`} className="cursor-pointer" onClick={() => scrollMobileTo(idx)}>
                <circle cx={xVal} cy={svgH} r="5"
                  fill={idx === mobileActiveIndex ? '#BFA052' : '#0C2C4D'}
                  fillOpacity={idx === mobileActiveIndex ? 1 : 0.3}
                />
                <circle cx={xVal} cy={svgH} r="25" fill="transparent" />
              </g>
            ))}
          </svg>
        </div>

        {/* Mobile card swipe slider */}
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
                <div className={`relative h-[360px] flex flex-col justify-between items-center p-8 transition-all duration-300 overflow-hidden ${isCurrent
                  ? 'bg-brand-navy shadow-[0_15px_40px_rgba(12,44,77,0.14)] z-10 border border-brand-gold/80'
                  : 'bg-brand-white shadow-sm border border-brand-gold/10'
                  }`}>
                  <div className="relative z-20 flex flex-col items-center mt-2">
                    <span className={`font-tibere font-black text-3xl transition-colors duration-300 leading-none ${isCurrent ? 'text-brand-gold' : 'text-brand-navy'
                      }`}>0{idx + 1}</span>
                    <div className={`h-[1px] w-10 transition-colors duration-300 mt-3 ${isCurrent ? 'bg-brand-gold' : 'bg-brand-navy/20'
                      }`} />
                  </div>

                  <div className="relative z-20 mt-auto text-center flex flex-col items-center">
                    <h3 className={`text-base font-tibere font-bold uppercase leading-tight tracking-tight transition-colors duration-300 ${isCurrent ? 'text-brand-white' : 'text-brand-navy'
                      }`}>{val.title}</h3>

                    <div className={`flex flex-col gap-[3px] mt-3 transition-all duration-300 transform ${isCurrent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}>
                      <div className="h-[2.5px] w-10 bg-brand-gold" />
                      <div className="h-[2.5px] w-10 bg-brand-gold" />
                    </div>

                    <div className={`transition-all duration-300 ease-in-out transform overflow-hidden ${isCurrent ? 'opacity-100 max-h-[140px] mt-3 translate-y-0' : 'opacity-0 max-h-0 translate-y-2'
                      }`}>
                      <p className="font-poppins text-xs leading-relaxed text-brand-white/80">{val.description}</p>
                    </div>
                  </div>

                  <div className={`absolute inset-4 border transition-all duration-300 pointer-events-none z-20 ${isCurrent ? 'border-brand-gold/30' : 'border-brand-gold/0'
                    }`} />
                  <div className={`absolute top-0 left-0 w-full h-[5px] bg-brand-gold transform transition-transform duration-300 origin-left z-20 ${isCurrent ? 'scale-x-100' : 'scale-x-0'
                    }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Swipe controls */}
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


