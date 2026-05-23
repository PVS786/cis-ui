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
      img: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=2000&auto=format&fit=crop"
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
          <p className="text-gray-500 max-w-sm italic text-lg leading-relaxed border-l-2 border-brand-gray-medium pl-8 py-2">
            An uncompromising framework designed to turn fragmented processes into a confident path forward.
          </p>
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
            className="bg-brand-white relative h-[500px] lg:h-[600px] flex flex-col p-6 lg:p-8 xl:p-10 transition-all duration-700 ease-in-out hover:bg-brand-navy group overflow-hidden"
          >
            {/* Background Image Layer (Always active but subtle) */}
            <div className="absolute inset-0 z-0 opacity-[0.05] group-hover:opacity-20 transition-opacity duration-700 grayscale">
              <Image
                src={pillar.img} 
                className="object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" 
                alt={pillar.title}
                fill
                sizes="(max-width: 768px) 100vw, 20vw"
              />
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-12">
                <span className="text-brand-gold font-serif font-black text-4xl xl:text-5xl leading-none opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                  0{idx + 1}
                </span>
                <div className="h-px flex-1 bg-brand-gray-medium group-hover:bg-brand-gold transition-colors duration-500" />
              </div>

              <div className="mt-auto pb-4">
                <h3 className="text-lg lg:text-xl xl:text-2xl font-bold uppercase leading-tight tracking-tight text-brand-navy group-hover:text-brand-white transition-colors duration-500 drop-shadow-sm pr-2">
                  {pillar.title}
                </h3>
              </div>
            </div>

            {/* Blueprint Decorative Lines (SVG-like feel) */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
              <div className="w-full h-full border-r border-t border-brand-white m-8" />
            </div>
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
