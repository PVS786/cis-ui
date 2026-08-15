'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-tibere font-black leading-[1.1] mb-8 tracking-[0.05em] text-white drop-shadow-lg"
          >
            Building <br />
            Global <br />
            <span className="text-brand-gold italic">Legacy</span>
          </motion.h1>

          {/* Enterprise Pill READ MORE Button linking to About Us */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 sm:px-9 sm:py-4 bg-[#BFA052] hover:bg-[#0C2C4D] text-white font-gotham font-bold text-sm sm:text-base tracking-widest uppercase rounded-full transition-colors duration-300 ease-in-out border border-[#BFA052] hover:border-[#0C2C4D]"
            >
              READ MORE
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

