'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ExecutionPillars() {
  const pillars = [
    {
      title: "Land Identification & Acquisition",
      img: "/Land Identification & Acquisition - 5_pillar.jpg"
    },
    {
      title: "Statutory Approvals & Compliance",
      img: "/Statutory Approvals & Compliance - 5_pillar.jpg"
    },
    {
      title: "Deep-Rooted Public-Sector and Administrative Networks",
      img: "/Deep-Rooted Public-Sector and Administrative Networks - 5_pillar_v4.jpg"
    },
    {
      title: "Transparent Transactions",
      img: "/Transparent Transactions - 5_pillar.jpg"
    },
    {
      title: "Fast & Efficient Execution",
      img: "/Fast & Efficient Execution - 5_pillar_v3.jpg"
    }
  ];

  return (
    <section 
      className="overflow-hidden"
    >
      {/* Header Area Wrapper */}
      <div className="pt-16 pb-10">
        <div className="max-w-[95rem] mx-auto px-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:gap-16 gap-8">
            {/* Heading Column */}
            <div className="max-w-2xl">
              <h2 className="text-6xl md:text-7xl font-serif text-brand-navy leading-[0.85] tracking-tighter uppercase">
                The Five Pillars <br />
                Of <span className="text-brand-gold italic">Execution.</span>
              </h2>
            </div>
            {/* Divider and Paragraph Column */}
            <div className="relative flex items-center self-stretch">
              {/* The vertical line - styled as the logo's vertical navy bar */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-navy/30 origin-top"
              />
              {/* The text container */}
              <div className="overflow-hidden pl-12 py-2 max-w-[680px]">
                <motion.p
                  initial={{ x: '-100%', opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-brand-navy font-gotham italic uppercase text-sm md:text-base tracking-wider leading-relaxed"
                >
                  AN UNCOMPROMISING FRAMEWORK DESIGNED TO TURN <br className="hidden md:inline" /> FRAGMENTED PROCESSES INTO A CONFIDENT PATH FORWARD.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Area Wrapper */}
      <div className="pt-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[1px] bg-brand-gray-medium max-w-[95rem] mx-auto border-x border-brand-gray-medium group/grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-transparent hover:bg-brand-gold transition-colors duration-300 relative">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-brand-white relative h-[500px] lg:h-[600px] flex flex-col p-6 lg:p-8 xl:p-10 transition-all duration-300 ease-in-out hover:-translate-y-[6px] hover:shadow-[0_20px_50px_rgba(12,44,77,0.12)] group overflow-hidden cursor-pointer z-10 hover:z-20"
              >
                {/* Background Image Layer (Grayscale texture, highly visible) */}
                <div className="absolute inset-0 z-0 transition-all duration-300 ease-in-out">
                  <Image
                    src={pillar.img} 
                    className="object-cover transform scale-100 filter grayscale contrast-[118%] brightness-[88%] group-hover:contrast-[110%] group-hover:brightness-[95%] transition-all duration-300" 
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                </div>

                {/* Default White/Gray Veil Overlay */}
                <div className="absolute inset-0 bg-brand-white/10 group-hover:opacity-0 transition-opacity duration-300 z-10 pointer-events-none" />

                {/* Default Top white gradient for number readability */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-brand-white/90 via-brand-white/45 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10 pointer-events-none" />

                {/* Default Bottom white gradient for title readability (lower transparency for contrast) */}
                <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-brand-white via-brand-white/90 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10 pointer-events-none" />

                {/* Hover Premium Navy Overlay */}
                <div className="absolute inset-0 bg-brand-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

                {/* Content Container (Top-level z-index to stay above overlays) */}
                <div className="relative z-20 flex-1 flex flex-col">
                  <div className="flex flex-col items-center mb-12">
                    <span className="text-brand-navy font-tibere font-black text-4xl xl:text-5xl leading-none group-hover:text-brand-gold transition-colors duration-300 ease-in-out">
                      0{idx + 1}
                    </span>
                    <div className="h-px w-16 bg-transparent group-hover:bg-brand-gold transition-colors duration-300 ease-in-out mt-4" />
                  </div>

                  <div className="mt-auto text-center flex flex-col items-center">
                    <h3 className="text-lg lg:text-xl xl:text-2xl font-tibere font-bold uppercase leading-tight tracking-tight text-brand-navy group-hover:text-brand-white transition-colors duration-300 ease-in-out drop-shadow-sm">
                      {pillar.title}
                    </h3>
                    {/* Logo-inspired double gold bars below the title */}
                    <div className="flex flex-col gap-[3px] mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="h-[3px] w-10 bg-brand-gold" />
                      <div className="h-[3px] w-10 bg-brand-gold" />
                    </div>
                  </div>
                </div>

                {/* Logo-inspired Inner Border Frame */}
                <div className="absolute inset-5 border border-brand-gold/0 group-hover:border-brand-gold/30 transition-all duration-500 pointer-events-none z-20" />
                
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-2 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
