'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ExecutionPillars() {
  const pillars = [
    {
      title: "Land Identification & Acquisition",
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Statutory Approvals & Compliance",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Deep-Rooted Public-Sector and Administrative Networks",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Transparent Transactions",
      img: "/transparent_transactions.jpg"
    },
    {
      title: "Fast & Efficient Execution",
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-brand-white py-32 overflow-hidden border-t border-brand-gray-medium">
      <div className="max-w-7xl mx-auto px-16 mb-24">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="max-w-2xl">
            <div className="w-16 h-1 bg-brand-gold mb-10" />
            <h2 className="text-6xl md:text-7xl font-serif text-brand-navy leading-[0.85] tracking-tighter uppercase">
              The Five Pillars <br />
              Of <span className="text-brand-gold italic">Execution.</span>
            </h2>
          </div>
          <div className="flex items-stretch">
            {/* The vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="w-[2px] bg-brand-gray-medium origin-top self-stretch"
            />
            {/* The text container */}
            <div className="overflow-hidden pl-8 py-2 max-w-sm">
              <motion.p
                initial={{ x: '-100%', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-500 italic text-lg leading-relaxed"
              >
                An uncompromising framework designed to turn fragmented processes into a confident path forward.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-[1px] bg-brand-gray-medium max-w-[95rem] mx-auto border-x border-brand-gray-medium group/grid">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-brand-white relative h-[500px] lg:h-[600px] flex flex-col p-6 lg:p-8 xl:p-10 transition-all duration-500 ease-in-out hover:bg-brand-navy group overflow-hidden cursor-pointer hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] hover:z-30 z-10"
          >
            {/* Background Image Layer (Grayscale texture, highly visible) */}
            <div className="absolute inset-0 z-0 opacity-70 group-hover:opacity-20 transition-opacity duration-500 grayscale">
              <Image
                src={pillar.img} 
                className="object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" 
                alt={pillar.title}
                fill
                sizes="(max-width: 768px) 100vw, 20vw"
              />
            </div>

            {/* White Overlay Layer (Light white veil) */}
            <div className="absolute inset-0 z-10 bg-brand-white opacity-25 group-hover:opacity-0 transition-opacity duration-500" />

            {/* Subtle bottom gradient to ensure text readability in default state, fades on hover */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-brand-white via-brand-white/80 to-transparent opacity-95 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10" />

            {/* Content Container (Top-level z-index to stay above overlay) */}
            <div className="relative z-20 flex-1 flex flex-col">
              <div className="flex items-center gap-4 mb-12">
                <span className="text-brand-gold font-serif font-black text-4xl xl:text-5xl leading-none opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                  0{idx + 1}
                </span>
                <div className="h-px flex-1 bg-slate-300/80 group-hover:bg-brand-gold transition-colors duration-500" />
              </div>

              <div className="mt-auto">
                <h3 className="text-lg lg:text-xl xl:text-2xl font-bold uppercase leading-tight tracking-tight text-brand-navy group-hover:text-brand-white transition-colors duration-500 drop-shadow-sm pr-2">
                  {pillar.title}
                </h3>
              </div>
            </div>

            {/* Blueprint Decorative Lines (SVG-like feel) */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-20">
              <div className="w-full h-full border-r border-t border-brand-white m-8" />
            </div>
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
          </motion.div>
        ))}
      </div>

      {/* Brand Sliding Lines Animation (Full width of the section, below the cards) */}
      <div className="w-full mt-24 overflow-hidden">
        <div className="relative flex flex-col gap-4 w-full">
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="h-[12px] bg-brand-gold w-full"
          />
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="h-[12px] bg-brand-gold w-full"
          />
        </div>
      </div>
    </section>
  );
}
