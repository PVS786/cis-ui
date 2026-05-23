'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-brand-gray-light pt-20">
      <div className="section-container grid lg:grid-cols-[1.2fr_1fr] gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-16 h-1 bg-brand-gold mb-10" />
          <h1 className="text-7xl md:text-[7rem] leading-[0.9] mb-10 font-bold tracking-tighter">
            Building<br />
            <span className="text-brand-gold">Global</span><br />
            Legacy.
          </h1>
          <p className="text-lg text-gray-500 max-w-lg leading-relaxed font-normal italic">
            Pioneering high-precision engineering and structural excellence for the next generation of industrial and commercial landscapes.
          </p>
          <div className="mt-12 flex gap-6">
            <button className="btn-editorial text-sm px-10 py-5">
              EXPLORE OUR EXPERTISE
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="editorial-frame h-[500px]"
        >
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Project Apex"
            className="object-cover animate-slow-zoom"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent z-10" />
          <div className="absolute bottom-10 left-10 text-brand-white z-20">
            <h3 className="text-2xl font-serif mb-1">Project Apex</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-80">Structural Engineering | 2024</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
