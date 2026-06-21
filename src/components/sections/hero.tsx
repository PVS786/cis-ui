'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#020c18] overflow-hidden">
      {/* Background Video */}
      <video
        src="/hero-section-vid.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content wrapper - horizontally left-aligned, vertically centered */}
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-16 w-full relative z-20 flex items-center justify-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl text-left flex flex-col items-start"
        >
          <div className="w-16 h-1 bg-brand-gold mb-4" />
          <h1 className="text-5xl md:text-6xl font-tibere font-black leading-[1.15] mb-0 tracking-tight text-white">
            Building Global <br />
            <span className="text-brand-gold">Legacy.</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
