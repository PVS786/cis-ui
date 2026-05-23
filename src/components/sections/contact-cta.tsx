'use client';

import { Mail, Phone } from 'lucide-react';

export function ContactCTA() {
  return (
    <section id="contact" className="bg-brand-navy py-32 relative overflow-hidden text-brand-white">
       <div className="max-w-7xl mx-auto px-16 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="w-12 h-1 bg-brand-gold mb-10" />
            <h2 className="text-6xl md:text-7xl mb-10 leading-[0.9] tracking-tighter">
              Ready to Build<br /> 
              Your <span className="text-brand-gold italic">Legacy?</span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-lg leading-relaxed font-normal text-lg">
              Contact our strategic planning team to discuss your next breakthrough infrastructure or tech project.
            </p>
            <button className="btn-editorial text-sm px-12 py-5">
               PARTNER WITH US
            </button>
          </div>

          <div className="bg-brand-gray-light/5 backdrop-blur-sm p-12 border-l-8 border-brand-gold">
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-sm bg-brand-gold flex items-center justify-center text-brand-navy mt-1 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-white/50 tracking-widest mb-1">Corporate Hotline</p>
                  <p className="text-xl font-bold tracking-tight text-white">+1 (800) NEX-BUILD</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-sm bg-brand-gold flex items-center justify-center text-brand-navy mt-1 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-white/50 tracking-widest mb-1">Electronic Mail</p>
                  <p className="text-xl font-bold tracking-tight text-white">strategic@conservve.com</p>
                </div>
              </div>
            </div>
          </div>
       </div>
    </section>
  );
}
