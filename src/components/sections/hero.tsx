'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end bg-[#020c18] overflow-hidden pb-8 md:pb-12">
      {/* Background Video */}
      <video
        src="/hero-section-vid.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content wrapper - horizontally centered at the bottom of the section */}
      <div className="max-w-7xl mx-auto px-8 md:px-14 xl:px-16 w-full relative z-20 flex items-end justify-center pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl text-center flex flex-col items-center"
        >
          <div className="w-16 h-1 bg-brand-gold mb-4 mx-auto" />
          <h1 className="text-5xl md:text-6xl font-tibere font-black leading-[1.15] mb-0 tracking-tight text-white lg:whitespace-nowrap uppercase">
            Building Global Legacy.
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
