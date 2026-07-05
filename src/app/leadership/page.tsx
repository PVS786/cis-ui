'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const HERO_CONTENT = {
  title: "Our Leadership",
  subtitle: "Building the Future Through Visionary Leadership",
  backgroundImage: "/leadership/leadership-hero.png",
};

const INTRODUCTION_CONTENT = {
  subtitle: "OUR LEADERSHIP",
  title: "Guided by Experience,\nDriven by Vision.",
  paragraph: "Our leaders bring decades of expertise in land acquisition, approvals, infrastructure development, and sustainable growth.",
};

const LEADERS = [
  {
    id: "kiran-shetty",
    name: "Kiran Shetty",
    role: "Founder and MD",
    isImageLeft: true,
    image: "/leadership/kiran.png",
    imagePosition: "object-top",
    bio: [
      "Mr. Kiran Shetty is a seasoned infrastructure development leader with over three decades of experience, including significant contributions to real estate. He holds a Bachelor's degree in Civil Engineering from Veermata Jijabai Technological Institute (VJTI), Mumbai, and an Executive MBA from Narsee Monjee Institute of Management Studies (NMIMS). He has independently led an EPC firm with pan-India presence, specializing in industrial and warehousing infrastructure and land acquisition and statutory approvals. His balanced leadership style, strategic thinking, and governance-led mindset bring immense value to Conservve's journey.",
      "Mr. Shetty also serves as a key member of the Infrastructure Advisory Committee at IIM Mumbai, actively shaping the future of campus development. His deep ties to community initiatives, ranging from educational infrastructure to environment and housing, reinforce his commitment to CSR and nation-building.",
      "Mr. Shetty is deeply committed to social responsibility, with key initiatives including the Maitree Tree Plantation for environmental sustainability and the Disha Scholarship Program supporting underprivileged students. He has also played a pivotal role in developing educational infrastructure for Bunts Sangha's International School. These efforts reflect his belief in building not just infrastructure, but a better, more inclusive society."
    ],
  },
  {
    id: "aditya-shetty",
    name: "Aditya Shetty",
    role: "Co-founder",
    isImageLeft: false,
    image: "/leadership/aditya.png",
    imagePosition: "object-[center_35%]",
    bio: [
      "Aditya Shetty brings the rare ability to understand both people and problems, systems and stories, making him a true all-rounder in the business world. Driven by curiosity, an engineering graduate from an esteemed university with a strong foundation in quantitative abilities and an equally strong passion for people management, Aditya's professional journey is defined by rapid, merit-driven growth, from intern to senior business analyst in a leading-edge tech unicorn, and now a key leadership figure at Conservve.",
      "Aditya has successfully led GTM initiatives across geographies, including the US, Canada, and APAC regions, demonstrating his unique capability to build, lead, and scale critical business functions. Whether crafting high-value commercial strategies and proposals, driving sales & GTM initiatives, or leading demand generation & negotiations, his efforts have translated into tangible business outcomes, including a 40% spike in pipeline growth and over $5 million for strategic accounts in a condensed timeframe.",
      "As Co founder, Aditya plays a pivotal role in identifying growth opportunities within the real estate sector and its aligned domains, leading cross-functional teams, and shaping strategic direction across the organization. He continues to drive innovation and excellence, building ecosystems where business strategy and execution go hand in hand."
    ],
  }
];

interface CFrameProps {
  imageSrc: string;
  altText: string;
  isImageLeft: boolean;
  imagePosition?: string;
}

function CFrame({ imageSrc, altText, imagePosition = "object-top" }: CFrameProps) {

  const BarBorderGlow = ({ barIndex }: { barIndex: number }) => {
    return (
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
      >
        <defs>
          <linearGradient id={`bar-glow-beam-${barIndex}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BFA052" stopOpacity="0" />
            <stop offset="40%" stopColor="#FFF5D6" stopOpacity="1" />
            <stop offset="60%" stopColor="#BFA052" stopOpacity="1" />
            <stop offset="100%" stopColor="#BFA052" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect
          x="0.5"
          y="0.5"
          width="99"
          height="99"
          rx="3"
          fill="none"
          stroke={`url(#bar-glow-beam-${barIndex})`}
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
          strokeDasharray="40 420"
          style={{ animation: `shine-loop-bar${barIndex} 12s linear infinite` }}
        />
      </svg>
    );
  };

  const glowPath = "M 99.5,0.5 L 20,0.5 A 19.5,19.5 0 0 0 0.5,20 L 0.5,100 A 19.5,19.5 0 0 0 20,119.5 L 99.5,119.5";

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center p-6 select-none cursor-pointer"
      whileHover="hover"
      initial="initial"
    >
      {/* CSS Keyframes for slow, single browser-synchronized loop shine */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shine-loop-c {
          0% { stroke-dashoffset: 0; opacity: 1; }
          25% { stroke-dashoffset: -370; opacity: 1; }
          25.01% { stroke-dashoffset: -370; opacity: 0; }
          100% { stroke-dashoffset: -370; opacity: 0; }
        }
        @keyframes shine-loop-bar1 {
          0% { stroke-dashoffset: 0; opacity: 0; }
          24.99% { stroke-dashoffset: 0; opacity: 0; }
          25% { stroke-dashoffset: 0; opacity: 1; }
          50% { stroke-dashoffset: -460; opacity: 1; }
          50.01% { stroke-dashoffset: -460; opacity: 0; }
          100% { stroke-dashoffset: -460; opacity: 0; }
        }
        @keyframes shine-loop-bar2 {
          0% { stroke-dashoffset: 0; opacity: 0; }
          49.99% { stroke-dashoffset: 0; opacity: 0; }
          50% { stroke-dashoffset: 0; opacity: 1; }
          75% { stroke-dashoffset: -460; opacity: 1; }
          75.01% { stroke-dashoffset: -460; opacity: 0; }
          100% { stroke-dashoffset: -460; opacity: 0; }
        }
        @keyframes shine-loop-bar3 {
          0% { stroke-dashoffset: 0; opacity: 0; }
          74.99% { stroke-dashoffset: 0; opacity: 0; }
          75% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: -460; opacity: 1; }
        }
      `}} />



      {/* Row 1: Curved C-Frame + Vertical Pill Bar (Unified Alignment to match logo CI shape) */}
      <div className="flex items-center justify-center gap-[8px] sm:gap-[10px] md:gap-[12px] lg:gap-[14px]">

        {/* Navy C-Shape Frame (Curves are always on the left, open on the right to resemble the Logo C) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-[240px] h-[280px] sm:w-[310px] sm:h-[360px] md:w-[340px] sm:md:h-[400px] lg:w-[370px] lg:h-[440px] flex-shrink-0 bg-[linear-gradient(135deg,#0C2C4D_0%,#12365A_40%,#0C2C4D_75%,#09213B_100%)] shadow-[0_8px_30px_rgba(12,44,77,0.12)] border border-brand-navy/30 rounded-tl-[32px] rounded-bl-[32px] sm:rounded-tl-[48px] sm:rounded-bl-[48px] md:rounded-tl-[64px] md:rounded-bl-[64px] lg:rounded-tl-[80px] lg:rounded-bl-[80px]"
        >
          {/* Continuous Moving SVG Border Glow Accent (Directly on the frame boundary) */}
          <svg
            viewBox="0 0 100 120"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
          >
            <defs>
              <linearGradient id="gold-glow-beam" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#BFA052" stopOpacity="0" />
                <stop offset="40%" stopColor="#FFF5D6" stopOpacity="1" />
                <stop offset="60%" stopColor="#BFA052" stopOpacity="1" />
                <stop offset="100%" stopColor="#BFA052" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Moving Glow Beam Accent (Active 0s to 3s of the 12s CSS loop) */}
            <path
              d={glowPath}
              fill="none"
              stroke="url(#gold-glow-beam)"
              strokeWidth="3.5"
              strokeDasharray="50 320"
              vectorEffect="non-scaling-stroke"
              style={{ animation: 'shine-loop-c 12s linear infinite' }}
            />
          </svg>

          {/* Portrait Image Container */}
          <div
            className="absolute overflow-hidden bg-slate-900 flex items-center justify-center transition-all duration-300 border border-brand-navy/10 top-6 bottom-6 left-6 right-0 sm:top-8 sm:bottom-8 sm:left-8 sm:right-0 md:top-10 md:bottom-10 md:left-10 md:right-0 lg:top-12 lg:bottom-12 lg:left-12 lg:right-0 rounded-l-[12px] sm:rounded-l-[16px] md:rounded-l-[20px] lg:rounded-l-[24px]"
          >
            <div className="relative w-full h-full overflow-hidden">
              <motion.div
                variants={{
                  hover: {
                    scale: 1.05,
                    transition: { duration: 0.6, ease: "easeOut" }
                  }
                }}
                className="w-full h-full relative"
              >
                <Image
                  src={imageSrc}
                  alt={altText}
                  fill
                  className={`object-cover ${imagePosition}`}
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 310px, (max-width: 1024px) 340px, 370px"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Navy Vertical Pill Bar (Always on the right, matching logo letter thickness. Slides out from behind C-shape) */}
        <motion.div
          initial={{ opacity: 0, x: -160 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative z-0 w-[32px] sm:w-[42px] md:w-[48px] lg:w-[54px] h-[280px] sm:h-[360px] md:h-[400px] lg:h-[440px] bg-[linear-gradient(135deg,#0C2C4D_0%,#12365A_40%,#0C2C4D_75%,#09213B_100%)] rounded-[3px] shadow-md border border-brand-navy/30 flex-shrink-0 overflow-hidden"
        >
          {/* Moving Border Glow Trace (Synchronized sequential loop index 1) */}
          <BarBorderGlow barIndex={1} />
        </motion.div>
      </div>

      {/* Row 2: Underneath the main frame - Double horizontal bars (Thicker flat shapes matching logo) */}
      <div className="w-[280px] sm:w-[362px] md:w-[400px] lg:w-[438px] flex flex-col mt-[12px] sm:mt-[16px] md:mt-[20px] overflow-hidden">
        {/* Top Horizontal Bar (Gold) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="relative h-[22px] sm:h-[28px] md:h-[34px] lg:h-[38px] bg-[linear-gradient(135deg,#BFA052_0%,#CBB06D_40%,#BFA052_75%,#A88A40_100%)] rounded-[3px] shadow-md border border-brand-gold/25 w-full overflow-hidden"
        >
          {/* Moving Border Glow Trace (Synchronized sequential loop index 2) */}
          <BarBorderGlow barIndex={2} />
        </motion.div>

        {/* Bottom Horizontal Bar (Gold) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.75 }}
          className="relative h-[22px] sm:h-[28px] md:h-[34px] lg:h-[38px] bg-[linear-gradient(135deg,#BFA052_0%,#CBB06D_40%,#BFA052_75%,#A88A40_100%)] rounded-[3px] shadow-md border border-brand-gold/25 w-full mt-[8px] sm:mt-[10px] md:mt-[12px] overflow-hidden"
        >
          {/* Moving Border Glow Trace (Synchronized sequential loop index 3) */}
          <BarBorderGlow barIndex={3} />
        </motion.div>
      </div>


    </motion.div>
  );
}

export default function LeadershipPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: "60px", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-brand-gray-light flex flex-col relative overflow-hidden">
      {/* Blueprint fine aesthetic network vector grid lines */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="h-full w-full stroke-brand-gold/35 fill-none stroke-[0.06]">
          <pattern id="leadership-hexes" x="0" y="0" width="10" height="17.3" patternUnits="userSpaceOnUse">
            <path d="M5 0 L10 2.8 L10 8.5 L5 11.3 L0 8.5 L0 2.8 Z" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#leadership-hexes)" />
        </svg>
      </div>

      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#1e5c94]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Hero Section (dimensions match contact us page) */}
      <div className="relative w-full h-[450px] xs:h-[520px] md:h-[620px] lg:h-[700px] flex items-start bg-brand-navy overflow-hidden pt-[90px] xs:pt-[110px] sm:pt-[140px] md:pt-[160px] lg:pt-[180px]">
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
              alt="Infrastructure Background"
              fill
              priority
              className="object-cover object-center filter brightness-90 contrast-110"
            />
          </motion.div>
          {/* Navy gradient overlay for readable contrast and premium depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/45 to-brand-navy/5"></div>
        </div>

        {/* Text overlay Container */}
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-16 w-full relative z-20 text-left pt-0 md:pt-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-poppins text-white text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.25] max-w-5xl"
          >
            <div className="overflow-hidden py-1">
              <motion.span variants={itemVariants} className="block">
                Experience that understands
              </motion.span>
            </div>
            <div className="overflow-hidden py-1 mt-1 sm:mt-2">
              <motion.span variants={itemVariants} className="block">
                <span className="text-brand-gold">every layer</span> before it unfolds.
              </motion.span>
            </div>
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
        <section className="relative w-full pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14 overflow-hidden bg-transparent">
          {/* Left Side margin graphic removed per request */}

          <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-16 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
              {/* Left Column: Heading text & Paragraph */}
              <div className="text-left max-w-3xl relative z-10">
                {/* Large Elegant Title matching image2 */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-tibere text-brand-navy font-bold leading-[1.15] uppercase tracking-wide"
                >
                  Guided by <span className="text-brand-gold">Experience</span>,<br />
                  Driven by <span className="text-brand-gold">Vision</span>.
                </motion.h2>

                {/* Description Paragraph matching image2 style */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="text-base sm:text-lg md:text-xl font-poppins text-slate-700 font-normal leading-relaxed mt-6 max-w-2xl"
                >
                  {INTRODUCTION_CONTENT.paragraph}
                </motion.p>
              </div>

              {/* Right Column: Custom Compass Graphic matching image1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:flex justify-center items-center relative w-[320px] h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] shrink-0 z-10"
              >
                <svg viewBox="0 0 200 200" className="w-full h-full select-none" fill="none">
                  {/* Unified Float Group to prevent any drift/separation over time */}
                  <motion.g
                    animate={{
                      y: [-3, 3, -3],
                      x: [-1.5, 1.5, -1.5]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut"
                    }}
                    style={{ transformOrigin: "100px 100px" }}
                  >
                    {/* Halftone Dot Grid - Top Left */}
                    <g fill="#BFA052" opacity="0.3">
                      <circle cx="20" cy="40" r="1.5" />
                      <circle cx="32" cy="40" r="1.5" />
                      <circle cx="44" cy="40" r="1.5" />
                      <circle cx="20" cy="52" r="1.5" />
                      <circle cx="32" cy="52" r="1.5" />
                      <circle cx="44" cy="52" r="1.5" />
                      <circle cx="20" cy="64" r="1.5" />
                      <circle cx="32" cy="64" r="1.5" />
                      <circle cx="44" cy="64" r="1.5" />
                      <circle cx="20" cy="76" r="1.5" />
                      <circle cx="32" cy="76" r="1.5" />
                      <circle cx="44" cy="76" r="1.5" />
                    </g>

                    {/* Halftone Dot Grid - Bottom Right */}
                    <g fill="#BFA052" opacity="0.3">
                      <circle cx="156" cy="124" r="1.5" />
                      <circle cx="168" cy="124" r="1.5" />
                      <circle cx="180" cy="124" r="1.5" />
                      <circle cx="156" cy="136" r="1.5" />
                      <circle cx="168" cy="136" r="1.5" />
                      <circle cx="180" cy="136" r="1.5" />
                      <circle cx="156" cy="148" r="1.5" />
                      <circle cx="168" cy="148" r="1.5" />
                      <circle cx="180" cy="148" r="1.5" />
                      <circle cx="156" cy="160" r="1.5" />
                      <circle cx="168" cy="160" r="1.5" />
                      <circle cx="180" cy="160" r="1.5" />
                    </g>

                    {/* FOUR STAGGERED STRIPES (Navy and Gold, 45-degree angle, matching 26px thickness, staggered horizontal cuts) */}

                    {/* Top Group (Above Compass) */}
                    {/* Top Navy Stripe (Left, 26 units thick) */}
                    <motion.g
                      initial={{ x: 50, y: -50, opacity: 0 }}
                      whileInView={{ x: 0, y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <polygon
                        points="100,70 126,70 181,15 151,15"
                        fill="#0C2C4D"
                      />
                    </motion.g>

                    {/* Top Gold Stripe (Right, 26 units thick, staggered top edge) */}
                    <motion.g
                      initial={{ x: 50, y: -50, opacity: 0 }}
                      whileInView={{ x: 0, y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                    >
                      <polygon
                        points="134,70 160,70 190,40 164,40"
                        fill="#BFA052"
                      />
                    </motion.g>

                    {/* Bottom Group (Below Compass) */}
                    {/* Bottom Navy Stripe (Left, 26 units thick) */}
                    <motion.g
                      initial={{ x: -50, y: 50, opacity: 0 }}
                      whileInView={{ x: 0, y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <polygon
                        points="-15,185 11,185 66,130 36,130"
                        fill="#0C2C4D"
                      />
                    </motion.g>

                    {/* Bottom Gold Stripe (Right, 26 units thick, staggered bottom edge) */}
                    <motion.g
                      initial={{ x: -50, y: 50, opacity: 0 }}
                      whileInView={{ x: 0, y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                    >
                      <polygon
                        points="44,160 70,160 100,130 74,130"
                        fill="#BFA052"
                      />
                    </motion.g>

                    {/* Solid White Backdrop to cleanly cover lines underneath the compass dial */}
                    <circle cx="100" cy="100" r="52" fill="#FFFFFF" />

                    {/* Background thin lines (flanking and extended beyond the main lines at 45 degrees, color-interchanged) */}
                    <g opacity="0.8">
                      {/* Left gold thin line with dot marker (color-interchanged next to blue stripe) */}
                      <line x1="5" y1="150" x2="145" y2="10" stroke="#BFA052" strokeWidth="1" />
                      <circle cx="145" cy="10" r="2.5" fill="#BFA052" />
                      <circle cx="5" cy="150" r="2.5" fill="#BFA052" />

                      {/* Right navy thin line with dot marker (color-interchanged next to gold stripe) */}
                      <line x1="54" y1="190" x2="194" y2="50" stroke="#0C2C4D" strokeWidth="1" />
                      <circle cx="194" cy="50" r="3" fill="#0C2C4D" />
                      <circle cx="54" cy="190" r="3" fill="#0C2C4D" />

                      {/* Extra architectural thin lines */}
                      <line x1="30" y1="185" x2="90" y2="70" stroke="#0C2C4D" strokeWidth="0.75" opacity="0.3" />
                      <line x1="125" y1="185" x2="148" y2="145" stroke="#0C2C4D" strokeWidth="0.75" opacity="0.3" />
                    </g>

                    {/* 1. COMPASS OUTER DIAL (Scale & Spin Inception + Continuous Slow Spin on rims only) */}
                    <motion.g
                      initial={{ scale: 0.4, opacity: 0, rotate: -150 }}
                      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                      style={{ transformOrigin: "100px 100px" }}
                    >
                      {/* Rims Sub-group rotating continuously (rims and orbit dots only) */}
                      <motion.g
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: 65, ease: "linear" }}
                        style={{ transformOrigin: "100px 100px" }}
                      >
                        {/* Concentric rims */}
                        <circle cx="100" cy="100" r="52" stroke="#BFA052" strokeWidth="2.5" fill="none" />
                        <circle cx="100" cy="100" r="47" stroke="#BFA052" strokeWidth="0.75" strokeDasharray="2, 3" fill="none" />
                        <circle cx="100" cy="100" r="42" stroke="#BFA052" strokeWidth="0.75" fill="none" />

                        {/* Orbiting points/ticks */}
                        <circle cx="63" cy="63" r="3.5" fill="#BFA052" />
                        <circle cx="137" cy="63" r="2" fill="#BFA052" />
                        <circle cx="130" cy="115" r="2.5" fill="#BFA052" />
                      </motion.g>

                      {/* Static Cardinal Direction Markers (placed completely outside the outer rim r=52 to prevent needle overlap) */}
                      <g style={{ pointerEvents: 'none' }}>
                        <text x="100" y="40" fill="#BFA052" fontSize="8.5" fontWeight="bold" textAnchor="middle" style={{ fontFamily: 'sans-serif' }}>N</text>
                        <text x="100" y="165" fill="#BFA052" fontSize="8.5" fontWeight="bold" textAnchor="middle" style={{ fontFamily: 'sans-serif' }}>S</text>
                        <text x="160" y="103" fill="#BFA052" fontSize="8.5" fontWeight="bold" textAnchor="middle" style={{ fontFamily: 'sans-serif' }}>E</text>
                        <text x="40" y="103" fill="#BFA052" fontSize="8.5" fontWeight="bold" textAnchor="middle" style={{ fontFamily: 'sans-serif' }}>W</text>
                      </g>
                    </motion.g>

                    {/* 2. INNER 16-POINT COMPASS NEEDLE (Spring Drop-in Inception + Continuous Magnetic Jitter with both Navy/Gold brand colors) */}
                    <motion.g
                      initial={{ scale: 0.1, opacity: 0, rotate: 120 }}
                      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.8, type: "spring", stiffness: 80, damping: 11, delay: 0.45 }}
                      style={{ transformOrigin: "100px 100px" }}
                    >
                      <motion.g
                        animate={{ rotate: [0, 6, -4, 5, -5, 3, 0] }}
                        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                        style={{ transformOrigin: "100px 100px" }}
                      >
                        {/* Secondary 8-point needle accents (thin lines for technical blueprint detail) */}
                        <g stroke="#BFA052" strokeWidth="0.75" opacity="0.6">
                          <line x1="100" y1="100" x2="114.5" y2="65" />
                          <line x1="100" y1="100" x2="85.5" y2="65" />
                          <line x1="100" y1="100" x2="114.5" y2="135" />
                          <line x1="100" y1="100" x2="85.5" y2="135" />
                          <line x1="100" y1="100" x2="135" y2="85.5" />
                          <line x1="100" y1="100" x2="65" y2="85.5" />
                          <line x1="100" y1="100" x2="135" y2="114.5" />
                          <line x1="100" y1="100" x2="65" y2="114.5" />
                        </g>

                        {/* North Point (Navy/Gold Split Accent) */}
                        <polygon points="100,100 100,54 93,100" fill="#0C2C4D" />
                        <polygon points="100,100 100,54 107,100" fill="#BFA052" />

                        {/* South Point (Gold/Navy Split Accent) */}
                        <polygon points="100,100 100,146 93,100" fill="#BFA052" />
                        <polygon points="100,100 100,146 107,100" fill="#0C2C4D" />

                        {/* East Point (Gold/Navy Split Accent) */}
                        <polygon points="100,100 146,100 100,93" fill="#BFA052" />
                        <polygon points="100,100 146,100 100,107" fill="#0C2C4D" />

                        {/* West Point (Navy/Gold Split Accent) */}
                        <polygon points="100,100 54,100 100,93" fill="#0C2C4D" />
                        <polygon points="100,100 54,100 100,107" fill="#BFA052" />

                        {/* Secondary NW/NE/SE/SW Points */}
                        {/* NE */}
                        <polygon points="100,100 126,74 110,81" fill="#0C2C4D" />
                        <polygon points="100,100 126,74 119,90" fill="#BFA052" />

                        {/* SE */}
                        <polygon points="100,100 126,126 119,110" fill="#BFA052" />
                        <polygon points="100,100 126,126 110,119" fill="#0C2C4D" />

                        {/* SW */}
                        <polygon points="100,100 74,126 90,119" fill="#BFA052" />
                        <polygon points="100,100 74,126 81,110" fill="#0C2C4D" />

                        {/* NW */}
                        <polygon points="100,100 74,74 81,90" fill="#BFA052" />
                        <polygon points="100,100 74,74 90,81" fill="#0C2C4D" />
                      </motion.g>
                    </motion.g>


                    {/* Center Hub */}
                    <circle cx="100" cy="100" r="5" fill="#0C2C4D" />
                    <circle cx="100" cy="100" r="2" fill="#FFF5D6" />
                  </motion.g>
                </svg>
              </motion.div>
            </div>

            {/* Skyscraper outline graphic matching bottom-right of image2 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 0.15, y: -16 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute bottom-[-16px] right-0 pointer-events-none select-none z-0 hidden md:block"
            >
              <svg viewBox="0 0 150 100" className="w-[150px] h-[100px] stroke-brand-gold stroke-[1] fill-none">
                {/* Building 1 */}
                <path d="M10,100 L10,50 L30,50 L30,100" />
                <line x1="15" y1="60" x2="25" y2="60" />
                <line x1="15" y1="70" x2="25" y2="70" />
                <line x1="15" y1="80" x2="25" y2="80" />
                <line x1="15" y1="90" x2="25" y2="90" />
                {/* Building 2 */}
                <path d="M35,100 L35,30 L60,30 L60,100" />
                <line x1="42" y1="40" x2="53" y2="40" />
                <line x1="42" y1="50" x2="53" y2="50" />
                <line x1="42" y1="60" x2="53" y2="60" />
                <line x1="42" y1="70" x2="53" y2="70" />
                <line x1="42" y1="80" x2="53" y2="80" />
                <line x1="42" y1="90" x2="53" y2="90" />
                {/* Building 3 (tall skyscraper spire) */}
                <path d="M65,100 L65,15 L72,5 L79,15 L79,100" />
                <line x1="72" y1="15" x2="72" y2="5" />
                {/* Building 4 */}
                <path d="M84,100 L84,40 L104,40 L104,100" />
                <line x1="89" y1="50" x2="99" y2="50" />
                <line x1="89" y1="60" x2="99" y2="60" />
                <line x1="89" y1="70" x2="99" y2="70" />
                <line x1="89" y1="80" x2="99" y2="80" />
                <line x1="89" y1="90" x2="99" y2="90" />
                {/* Building 5 */}
                <path d="M109,100 L109,60 L124,60 L124,100" />
                {/* Diagonal ground lines */}
                <path d="M5,95 Q70,85 145,95" />
                <path d="M5,100 Q70,92 145,100" />
              </svg>
            </motion.div>
          </div>
        </section>

        {/* Alternate Leadership Profiles */}
        <div className="w-full bg-transparent relative">
          {LEADERS.map((leader) => {
            const isTinted = true; // Both founders are tinted with warm champagne & pattern background

            return (
              <div key={leader.id} className="relative w-full">
                <section
                  className="w-full py-10 sm:py-12 lg:py-14 transition-all duration-300 relative bg-transparent"
                  style={isTinted ? {
                    backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(250, 246, 238, 0.18) 15%, rgba(250, 246, 238, 0.18) 85%, rgba(255, 255, 255, 0) 100%)",
                  } : undefined}
                >
                  {isTinted && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.04 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.0 }}
                      className="absolute inset-0 pointer-events-none z-0"
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full stroke-brand-gold fill-none stroke-[0.1]">
                        <pattern id={`founder-mesh-${leader.id}`} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" />
                        </pattern>
                        <rect width="100%" height="100%" fill={`url(#founder-mesh-${leader.id})`} />
                      </svg>
                    </motion.div>
                  )}

                  {/* Subtle Founder-Specific Technical Graphics at Placeholders (Top-Left & Bottom-Right) */}
                  {leader.id === "kiran-shetty" && (
                    <>
                      {/* Top-Left: Business Growth Analytics Trend (Commercial Growth Reference) */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 0.60, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="absolute left-6 top-8 w-[130px] h-[130px] pointer-events-none select-none z-0 hidden sm:block"
                      >
                        <svg viewBox="0 0 100 100" className="w-full h-full stroke-brand-navy fill-none stroke-[1.2]">
                          {/* Rising smooth spline representing business growth velocity */}
                          <path d="M10,80 C30,75 40,40 60,35 C75,30 80,15 90,10" strokeWidth="1.6" />

                          {/* Standard boundary line helpers */}
                          <line x1="10" y1="90" x2="90" y2="90" strokeWidth="0.8" />
                          <line x1="10" y1="80" x2="10" y2="90" strokeWidth="0.8" />

                          {/* Trend coordinate nodes */}
                          <circle cx="53" cy="36" r="2.5" fill="#0C2C4D" stroke="none" />
                          <circle cx="90" cy="10" r="3" fill="#0C2C4D" stroke="none" />

                          {/* Dotted indicator projections */}
                          <line x1="53" y1="36" x2="53" y2="90" strokeWidth="0.8" strokeDasharray="2,2" />
                          <line x1="90" y1="10" x2="90" y2="90" strokeWidth="0.8" strokeDasharray="2,2" />
                        </svg>
                      </motion.div>

                      {/* Bottom-Right: Gyroscopic Equilibrium (Governance & Balanced Leadership Reference) */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 0.60, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="absolute right-6 bottom-8 w-[130px] h-[130px] pointer-events-none select-none z-0 hidden sm:block"
                      >
                        <svg viewBox="0 0 100 100" className="w-full h-full stroke-brand-navy fill-none stroke-[1.2]">
                          {/* Outer gyroscopic balance alignment rings */}
                          <circle cx="50" cy="50" r="36" />
                          <circle cx="50" cy="50" r="30" strokeDasharray="2,2" opacity="0.7" />

                          {/* Horizontal equilibrium beam */}
                          <line x1="14" y1="50" x2="86" y2="50" strokeWidth="1.6" />

                          {/* Vertical gravity orientation axis */}
                          <line x1="50" y1="20" x2="50" y2="80" strokeWidth="0.8" />

                          {/* Balance pivot nodes */}
                          <circle cx="50" cy="50" r="3.5" fill="#0C2C4D" stroke="none" />
                          <circle cx="14" cy="50" r="2.5" fill="#0C2C4D" stroke="none" />
                          <circle cx="86" cy="50" r="2.5" fill="#0C2C4D" stroke="none" />
                          <circle cx="50" cy="20" r="2" fill="#0C2C4D" stroke="none" />
                          <circle cx="50" cy="80" r="2" fill="#0C2C4D" stroke="none" />
                        </svg>
                      </motion.div>
                    </>
                  )}

                  {leader.id === "aditya-shetty" && (
                    <>
                      {/* Top-Left: Fibonacci Golden Ratio Spiral (Strategic Design Proportion / Real Estate Reference) */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 0.60, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="absolute left-6 top-8 w-[130px] h-[130px] pointer-events-none select-none z-0 hidden sm:block"
                      >
                        <svg viewBox="0 0 100 100" className="w-full h-full stroke-brand-navy fill-none stroke-[1.2]">
                          {/* Nested structural concentric arcs centered at top-left origin (20,20) */}
                          <path d="M 20,60 A 40,40 0 0,0 60,20" strokeWidth="1.4" />
                          <path d="M 20,70 A 50,50 0 0,0 70,20" strokeDasharray="2,2" opacity="0.6" />
                          <path d="M 20,80 A 60,60 0 0,0 80,20" strokeWidth="1.0" />

                          {/* Radiating truss support struts from origin (20,20) */}
                          <line x1="20" y1="20" x2="20" y2="80" strokeWidth="1.5" />
                          <line x1="20" y1="20" x2="80" y2="20" strokeWidth="1.5" />
                          <line x1="20" y1="20" x2="62" y2="62" strokeWidth="1.0" />
                          <line x1="20" y1="20" x2="75" y2="42" strokeWidth="0.8" />
                          <line x1="20" y1="20" x2="42" y2="75" strokeWidth="0.8" />

                          {/* Node connector pins on the arcs */}
                          <circle cx="62" cy="62" r="2.5" fill="#0C2C4D" stroke="none" />
                          <circle cx="75" cy="42" r="2" fill="#0C2C4D" stroke="none" />
                          <circle cx="42" cy="75" r="2" fill="#0C2C4D" stroke="none" />
                          <circle cx="20" cy="20" r="3.5" fill="#0C2C4D" stroke="none" />
                        </svg>
                      </motion.div>

                      {/* Bottom-Right: Global Market Arcs & Trajectories (APAC/US GTM Scaling Reference) */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 0.60, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="absolute right-6 bottom-8 w-[130px] h-[130px] pointer-events-none select-none z-0 hidden sm:block"
                      >
                        <svg viewBox="0 0 100 100" className="w-full h-full stroke-brand-navy fill-none stroke-[1.2]">
                          {/* Global trajectory paths linking node hubs */}
                          <path d="M15,85 C35,65 65,65 85,85" strokeWidth="1.0" />
                          <path d="M15,85 C35,45 65,45 85,85" strokeWidth="1.4" />
                          <path d="M15,85 C35,25 65,25 85,85" strokeWidth="0.8" strokeDasharray="3,3" />

                          {/* Vertical alignment line through hubs */}
                          <line x1="50" y1="15" x2="50" y2="85" strokeWidth="0.8" opacity="0.5" />

                          {/* Nodes */}
                          <circle cx="50" cy="45" r="2.5" fill="#0C2C4D" stroke="none" />
                          <circle cx="50" cy="65" r="2" fill="#0C2C4D" stroke="none" />
                          <circle cx="15" cy="85" r="3.5" fill="#0C2C4D" stroke="none" />
                          <circle cx="85" cy="85" r="3.5" fill="#0C2C4D" stroke="none" />
                        </svg>
                      </motion.div>
                    </>
                  )}

                  <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-16 w-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

                      {/* Column for Image Frame */}
                      <div
                        className={`lg:col-span-5 flex justify-center ${leader.isImageLeft ? "lg:order-1" : "lg:order-2"
                          }`}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        >
                          <CFrame
                            imageSrc={leader.image}
                            altText={`${leader.name} - ${leader.role}`}
                            isImageLeft={leader.isImageLeft}
                            imagePosition={leader.imagePosition}
                          />
                        </motion.div>
                      </div>

                      {/* Column for Content (Name, Role, Biography paragraphs) */}
                      <div
                        className={`lg:col-span-7 flex flex-col justify-center text-left ${leader.isImageLeft
                          ? "lg:order-2 pr-[10%] pl-0 lg:pl-8"
                          : "lg:order-1 pl-[10%] pr-[10%] lg:pr-8"
                          }`}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        >
                          {/* Restructured Name Header Container */}
                          <div className="mb-6 flex flex-col items-start w-full">
                            {/* Row 1: Name and Vertical Navy Bar (Horizontally aligned with end of gold lines below it) */}
                            <div className="flex items-end justify-between w-full relative">
                              {/* Leader Name */}
                              <h3 className="text-4xl sm:text-5xl font-gotham font-black tracking-wide uppercase text-brand-navy leading-[1.05]">
                                {leader.name}
                              </h3>

                              {/* Navy vertical line, aligned exactly with the end of the gold lines */}
                              <div className="absolute right-0 bottom-[2px] sm:bottom-[3px]">
                                <motion.div
                                  initial={{ scaleY: 0 }}
                                  whileInView={{ scaleY: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                                  style={{ originY: 1.0 }} // Grows upwards from the baseline
                                  className="w-[3.5px] sm:w-[4.5px] h-[38px] sm:h-[50px] bg-[#0C2C4D] rounded-sm"
                                />
                              </div>
                            </div>

                            {/* Row 2: Role and Horizontal Gold Lines (Ending exactly flush under the Navy Vertical Bar) */}
                            <div className="flex items-center space-x-4 w-full relative mt-3">
                              {/* Slightly increased font size from text-xs sm:text-sm to text-sm sm:text-base */}
                              <span className="text-lg sm:text-xl font-poppins font-black tracking-[0.15em] text-brand-gold uppercase whitespace-nowrap">
                                {leader.role}
                              </span>

                              {/* Divider block wrapper extending matching the Navy vertical line above */}
                              <div className="flex-grow relative h-[12px]">
                                {/* Gold Horizontal divider lines */}
                                <motion.div
                                  initial={{ scaleX: 0 }}
                                  whileInView={{ scaleX: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                  style={{ originX: 0 }}
                                  className="flex flex-col gap-[3.5px] w-full"
                                >
                                  <div className="h-[2.2px] w-full bg-brand-gold" /> {/* Subtly thicker first line */}
                                  <div className="h-[3px] sm:h-[4px] w-[140px] bg-brand-gold rounded-sm" /> {/* Uniform shape matching Navy vertical bar */}
                                </motion.div>
                              </div>
                            </div>
                          </div>

                          {/* Biography Paragraphs */}
                          <div className="space-y-6 text-sm sm:text-base leading-relaxed font-poppins font-normal text-slate-700">
                            {leader.bio.map((paragraph, idx) => (
                              <p key={idx} className="last:mb-0">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </motion.div>
                      </div>

                    </div>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
