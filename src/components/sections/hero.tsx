'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.1 }
            }
          }}
          className="relative max-w-4xl text-left flex flex-col items-start"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 1, scaleX: 1, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="w-16 h-1 bg-brand-gold mb-6 origin-left"
          />

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-tibere font-black leading-[1.1] mb-8 tracking-[0.05em] text-white uppercase drop-shadow-lg"
          >
            Building Global <br />
            <span className="text-brand-gold italic">Legacy</span>
          </motion.h1>

          {/* Circular Read More Button linking to About Us */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            <Link
              href="/about"
              className="group relative flex items-center gap-4 text-white font-gotham font-medium text-sm sm:text-base tracking-wider uppercase transition-all duration-300"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-brand-gold/70 bg-[#0C2C4D]/80 backdrop-blur-md flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-300 shadow-[0_0_20px_rgba(191,160,82,0.3)] group-hover:shadow-[0_0_25px_rgba(191,160,82,0.6)]">
                {/* Rotating dashed outer accent ring */}
                <span className="absolute inset-[-4px] rounded-full border border-dashed border-brand-gold/50 group-hover:border-white/80 animate-spin transition-colors duration-300" style={{ animationDuration: '16s' }} />
                <ArrowRight className="w-5 h-5 text-brand-gold group-hover:text-brand-navy transition-all duration-300 group-hover:translate-x-0.5" strokeWidth={2.2} />
              </div>
              <span className="font-poppins font-semibold text-white group-hover:text-brand-gold transition-colors duration-300">
                Read More
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

