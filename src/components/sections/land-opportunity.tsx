'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function LandOpportunitySection() {
  return (
    <section 
      className="pt-16 lg:pt-24 pb-4 lg:pb-6 relative overflow-hidden"
    >

      <div className="max-w-[105rem] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
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
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-navy leading-[1.1] mb-6 tracking-tight"
            >
              Turning <span className="text-brand-gold">Land</span><br />
              Into Opportunity
            </motion.h2>

            <div className="space-y-4 text-gray-500 font-sans font-medium leading-relaxed text-[15px] md:text-base">
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
                Land development is full of promise and full of obstacles nobody warns you about. The right land is hard to find. 
                Approvals take longer than they should. And somewhere between the opportunity and the outcome, 
                things get complicated in ways that cost you time, money, and momentum.
              </motion.p>

              {/* Highlight Box */}
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }} className="bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-xl py-4 px-6 md:px-8 border-l-4 border-l-brand-gold my-6 ml-[-2px]">
                <p className="text-brand-navy font-bold text-lg md:text-xl m-0 leading-snug">
                  That&apos;s exactly the gap we exist to close, with you.
                </p>
              </motion.div>

              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }}>
                At Conservve Infra Solutions, we partner with landowners, aggregators, investors, and foreign institutional funds across India, 
                to handle everything from land acquisition to statutory approvals, turning fragmented processes into a clear, 
                confident path forward.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}>
                We bring clarity, speed, and complete accountability to every stage, from the first site visit to the final approval stamp. 
                Not just as experts, but as a partner who walks every step alongside you.
              </motion.p>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} viewport={{ once: true }} className="mt-8 pt-8 border-t border-gray-100/80">
              <h4 className="text-xl md:text-2xl font-serif font-bold text-brand-navy leading-snug tracking-tight">
                Your project deserves to move.<br />
                <span className="text-brand-gold">Let&apos;s move it together.</span>
              </h4>
            </motion.div>
          </div>

          {/* Right Image Area */}
          <div className="lg:w-[40%] relative min-h-[400px] lg:min-h-[500px] flex items-stretch p-2 md:p-3 lg:p-4">
            <motion.div 
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border-[8px] border-[#BFA052]"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
