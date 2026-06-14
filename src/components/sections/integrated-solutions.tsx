'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const triangleVariants = {
  hidden: { opacity: 0, scale: 0.8, x: -25 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 16,
      delay: i * 0.15,
    }
  })
};

const containerVariantsLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const }
  }
};

const containerVariantsRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const }
  }
};

function ArrowPattern({ isRight = false }: { isRight?: boolean }) {
  return (
    <div style={{ transform: isRight ? 'scaleX(-1)' : 'none' }}>
      <svg
        width="160"
        height="120"
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Navy Chevron with V-notch (points right, cutout points left) */}
        <motion.path
          d="M 20,10 L 77,45 L 50,60 L 77,75 L 20,110 Z"
          fill="#0C2C4D"
          variants={triangleVariants}
          custom={0}
        />
        {/* Gold Triangle (points left, nesting into navy notch) */}
        <motion.path
          d="M 77,45 L 50,60 L 77,75 Z"
          fill="#BFA052"
          variants={triangleVariants}
          custom={1}
        />
        {/* Cream Triangle (points right, sitting on the right of the notch) */}
        <motion.path
          d="M 75,25 L 75,95 L 130,60 Z"
          fill="#EAD8B1"
          variants={triangleVariants}
          custom={2}
        />
      </svg>
    </div>
  );
}

export function IntegratedSolutionsSection() {
  const solutions = [
    {
      title: "Strategic Land Acquisition",
      content: [
        "You shouldn't have to choose between speed and strategy. We work alongside you to identify, evaluate, and secure the right land for your development project, aligned with your long-term vision, investment goals, and the locations that actually makes business sense. Every acquisition we lead is future-ready and risk-mitigated, so you move forward with complete confidence.",
        "We handle everything from market scanning and site feasibility to technical due diligence and deal structuring, so you stay focused on building, not searching. Our ground-level insight combined with data-backed analysis means no blind spots, no missed opportunities, and no surprises at the table."
      ],
      img: "/strat-land-acq.png"
    },
    {
      title: "Regulatory Approvals & Clearance Management",
      content: [
        "From NOC to OC, every approval, handled end to end. We take full ownership of the regulatory process, managing every submission, clearance, and compliance requirement on your behalf, with precision and care. From environmental clearances and layout sanctions to building plan approvals and occupancy sign-offs, we navigate every stage, stay present at every window, and make sure nothing gets delayed, duplicated, or missed.",
        "This includes title verification, land use conversions, NA orders, TDR applications, and zoning compliance checks — every technical prerequisite handled before a single brick is laid. Your project keeps moving, your timelines stay intact, and nothing falls through the cracks."
      ],
      img: "/reg-appr.png"
    }
  ];

  return (
    <section className="bg-transparent pt-2 pb-16 overflow-hidden relative">
      <div className="max-w-[110rem] mx-auto px-4 md:px-8 lg:px-16">
        <div className="relative w-full flex items-center justify-center min-h-[220px] mb-16">
          {/* Left Arrow Accents */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariantsLeft}
            className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[220px] xl:w-[260px]"
          >
            <ArrowPattern isRight={false} />
          </motion.div>

          {/* Centered Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl xl:max-w-5xl text-center z-10 mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-tibere font-black text-brand-navy tracking-tight uppercase mb-6">
              INTEGRATED LAND SOLUTIONS
            </h2>
            <div className="text-xl text-brand-navy font-gotham font-medium leading-relaxed">
              Two things define every successful development, the right land, and a clear path to build on it.
              <br /><span className="text-[#BFA052] font-medium">This is how we make that real.</span>
            </div>
          </motion.div>

          {/* Right Arrow Accents */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariantsRight}
            className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[220px] xl:w-[260px]"
          >
            <ArrowPattern isRight={true} />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto space-y-40">
          {solutions.map((item, idx) => (
            <div key={idx} className={cn(
              "flex flex-col gap-16 md:gap-32 lg:gap-48 xl:gap-56 items-center group",
              idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            )}>
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 1 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-1 space-y-8 relative z-10 w-full"
              >
                <div className="absolute -top-12 -left-8 text-[12rem] font-tibere font-black text-brand-navy opacity-[0.02] pointer-events-none select-none leading-none z-0">
                  0{idx + 1}
                </div>
                <div className="relative z-10 space-y-8">
                  <h3 className="text-4xl lg:text-5xl font-tibere font-bold text-brand-navy leading-[1.1] tracking-tight">
                    {item.title}
                  </h3>
                  <div className="w-16 h-1 bg-brand-gold shadow-[0_0_15px_rgba(191,160,82,0.4)]" />
                  <div className="space-y-6 text-brand-navy/80 font-poppins font-medium leading-relaxed text-lg max-w-xl xl:pl-6 xl:border-l-2 border-brand-gray-medium">
                    {item.content.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-1 relative w-full h-[500px] lg:h-[700px]"
              >
                {/* Architectural Offset Block */}
                <div className={cn(
                  "absolute top-8 bottom-8 w-[80%] bg-brand-navy transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.02]",
                  idx % 2 === 1 ? "right-0 lg:-right-12" : "left-0 lg:-left-12"
                )} />

                {/* Main Image Container */}
                <div className={cn(
                  "absolute inset-0 lg:inset-y-0 z-10 shadow-2xl overflow-hidden bg-brand-gray-medium",
                  idx % 2 === 1 ? "mr-6 lg:mr-16" : "ml-6 lg:ml-16"
                )}>
                  <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-transparent transition-colors duration-700 z-20" />
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-brand-navy/10 to-transparent opacity-80 mix-blend-multiply pointer-events-none z-10" />
                </div>

                {/* Technical / Drafting Blueprint Frame Corner Accent */}
                <div className={cn(
                  "absolute w-32 h-32 lg:w-48 lg:h-48 border-brand-gold z-20 transition-all duration-700 pointer-events-none",
                  idx % 2 === 1
                    ? "-top-4 -left-4 lg:-top-8 lg:-left-8 border-t-[3px] border-l-[3px] group-hover:top-0 group-hover:left-0"
                    : "-bottom-4 -right-4 lg:-bottom-8 lg:-right-8 border-b-[3px] border-r-[3px] group-hover:bottom-0 group-hover:right-0"
                )}>
                  {/* Technical Nodes */}
                  <div className="absolute w-2 h-2 bg-brand-gold top-0 left-0 -translate-x-[1.5px] -translate-y-[1.5px]" />
                  <div className={cn(
                    "absolute w-2 h-2 bg-brand-gold",
                    idx % 2 === 1 ? "bottom-0 left-0 -translate-x-[1.5px] translate-y-1/2" : "top-0 right-0 translate-x-1/2 -translate-y-[1.5px]"
                  )} />
                  <div className={cn(
                    "absolute w-2 h-2 bg-brand-gold",
                    idx % 2 === 1 ? "top-0 right-0 translate-x-1/2 -translate-y-[1.5px]" : "bottom-0 left-0 -translate-x-[1.5px] translate-y-1/2"
                  )} />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
