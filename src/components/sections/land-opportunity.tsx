'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function LandOpportunitySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        });
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const w = dimensions.width;
  const h = dimensions.height;
  const r = 16;
  const inset = -3; // 3px outside the image container to sit exactly as a border covering the image
  const leftX = inset;
  const rightX = w - inset;
  const topY = inset;
  const bottomY = h - inset;
  const innerR = r - inset;

  const P = w && h ? Math.round((w + h) * 2) : 1800;
  const H = w && h ? Math.round(w + h) : 900;

  const pathD = w && h ? `
    M ${leftX + innerR} ${topY}
    L ${rightX - innerR} ${topY}
    A ${innerR} ${innerR} 0 0 1 ${rightX} ${topY + innerR}
    L ${rightX} ${bottomY - innerR}
    A ${innerR} ${innerR} 0 0 1 ${rightX - innerR} ${bottomY}
    L ${leftX + innerR} ${bottomY}
    A ${innerR} ${innerR} 0 0 1 ${leftX} ${bottomY - innerR}
    L ${leftX} ${topY + innerR}
    A ${innerR} ${innerR} 0 0 1 ${leftX + innerR} ${topY}
    Z
  `.replace(/\s+/g, ' ').trim() : '';
  return (
    <section
      className="pt-16 lg:pt-24 pb-4 lg:pb-6 relative overflow-hidden"
    >

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(12,44,77,0.06)] flex flex-col lg:flex-row overflow-hidden relative"
        >
          {/* Unique Left Border Accent from Image 2 */}
          <div className="absolute left-0 top-0 bottom-0 w-2 z-20">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '40%' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 right-0 bg-brand-gold"
            />
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '60%' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-0 right-0 bg-brand-navy"
            />
          </div>

          {/* Left Content Area */}
          <div className="lg:w-[60%] p-8 md:p-12 lg:p-14 pl-10 md:pl-16 xl:pl-20 flex flex-col justify-center">



            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-tibere font-black text-brand-navy leading-[1.1] mb-6 tracking-tight"
            >
              TURNING <span className="text-brand-gold">LAND</span><br />
              INTO <span className="text-brand-gold">OPPORTUNITY</span>
            </motion.h2>

            <div className="space-y-6 text-brand-navy/80 leading-relaxed text-lg">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="font-poppins font-medium"
              >
                Land development is full of promise and full of obstacles nobody warns you about. The right land is hard to find.
                Approvals take longer than they should. And somewhere between the opportunity and the outcome,
                things get complicated in ways that cost you time, money, and momentum.
              </motion.p>

              {/* Highlight Box */}
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }} className="bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-xl py-4 px-6 md:px-8 border-l-4 border-l-brand-gold my-6 ml-[-2px]">
                <p className="text-brand-navy font-gotham font-bold text-lg md:text-xl m-0 leading-snug">
                  That&apos;s exactly the gap we exist to close, with you.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="font-poppins font-medium"
              >
                At Conservve Infra Solutions, we partner with landowners, aggregators, investors, and foreign institutional funds across India,
                to handle everything from land acquisition to statutory approvals, turning fragmented processes into a clear,
                confident path forward.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="font-poppins font-medium"
              >
                We bring clarity, speed, and complete accountability to every stage, from the first site visit to the final approval stamp.
                Not just as experts, but as a partner who walks every step alongside you.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.7 }} 
              viewport={{ once: true }} 
              className="mt-10 pt-8 border-t-2 border-brand-navy"
            >
              <h4 className="text-xl md:text-2xl font-tibere font-bold text-brand-navy leading-snug tracking-tight">
                Your project deserves to move.<br />
                <span className="text-brand-gold">Let&apos;s move it together.</span>
              </h4>
            </motion.div>
          </div>

          {/* Right Image Area */}
          <div className="lg:w-[40%] relative min-h-[400px] lg:min-h-[500px] flex items-stretch p-2 md:p-3 lg:p-4">
            <motion.div
              ref={containerRef}
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border border-[#BFA052]/15"
            >
              <Image
                src="/turn-into-land-opp.png"
                alt="Strategic Land Development"
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              {/* Soft gradient overlay on image to match the refined corporate feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent opacity-80 mix-blend-multiply pointer-events-none z-10" />
            </motion.div>

            {/* Animated Snake Border Overlay - Rendered outside overflow-hidden */}
            {w > 0 && h > 0 && (
              <svg
                className="absolute top-2 left-2 right-2 bottom-2 md:top-3 md:left-3 md:right-3 md:bottom-3 lg:top-4 lg:left-4 lg:right-4 lg:bottom-4 pointer-events-none z-20"
                style={{ overflow: 'visible' }}
              >
                <defs>
                  <filter id="border-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <style>{`
                  @keyframes snake-clockwise {
                    0% {
                      stroke-dasharray: 0 ${P};
                      stroke-dashoffset: 0;
                      opacity: 0;
                    }
                    2% {
                      opacity: 1;
                    }
                    8% {
                      stroke-dasharray: 50 ${P};
                      stroke-dashoffset: 0;
                      opacity: 1;
                    }
                    15% {
                      stroke-dasharray: 80 ${P};
                      stroke-dashoffset: -30;
                      opacity: 1;
                    }
                    50% {
                      stroke-dasharray: 80 ${P};
                      stroke-dashoffset: -${P - 110};
                      opacity: 1;
                    }
                    55% {
                      stroke-dasharray: 50 ${P};
                      stroke-dashoffset: -${P - 50};
                      opacity: 1;
                    }
                    58% {
                      opacity: 1;
                    }
                    60% {
                      stroke-dasharray: 0 ${P};
                      stroke-dashoffset: -${P};
                      opacity: 0;
                    }
                    100% {
                      stroke-dasharray: 0 ${P};
                      stroke-dashoffset: -${P};
                      opacity: 0;
                    }
                  }
                  @keyframes snake-counter {
                    0% {
                      stroke-dasharray: 0 ${P};
                      stroke-dashoffset: -${H};
                      opacity: 0;
                    }
                    2% {
                      opacity: 1;
                    }
                    8% {
                      stroke-dasharray: 50 ${P};
                      stroke-dashoffset: -${H - 50};
                      opacity: 1;
                    }
                    15% {
                      stroke-dasharray: 80 ${P};
                      stroke-dashoffset: -${H - 110};
                      opacity: 1;
                    }
                    50% {
                      stroke-dasharray: 80 ${P};
                      stroke-dashoffset: -${H - P + 30};
                      opacity: 1;
                    }
                    55% {
                      stroke-dasharray: 50 ${P};
                      stroke-dashoffset: -${H - P};
                      opacity: 1;
                    }
                    58% {
                      opacity: 1;
                    }
                    60% {
                      stroke-dasharray: 0 ${P};
                      stroke-dashoffset: -${H - P};
                      opacity: 0;
                    }
                    100% {
                      stroke-dasharray: 0 ${P};
                      stroke-dashoffset: -${H - P};
                      opacity: 0;
                    }
                  }
                  .snake-line-1 {
                    animation: snake-clockwise 5s linear infinite;
                  }
                  .snake-line-2 {
                    animation: snake-counter 5s linear infinite;
                  }
                `}</style>
                <path
                  d={pathD}
                  fill="none"
                  stroke="#BFA052"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#border-glow)"
                  className="snake-line-1"
                />
                <path
                  d={pathD}
                  fill="none"
                  stroke="#BFA052"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#border-glow)"
                  className="snake-line-2"
                />
              </svg>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
