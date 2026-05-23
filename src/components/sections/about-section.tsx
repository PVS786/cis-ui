'use client';

import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="enterprise" className="section-container">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="editorial-frame aspect-[4/5] h-[600px] relative">
          <Image
            src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop" 
            alt="Silicon Lab Office"
            className="object-cover"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute top-0 right-0 p-8 bg-brand-gold text-brand-navy font-bold text-xs uppercase tracking-widest z-10">
            Est. 1999
          </div>
        </div>

        <div>
          <div className="w-12 h-1 bg-brand-gold mb-8" />
          <h2 className="text-5xl mb-8 leading-tight">Where Civil Engineering <br /> <span className="text-brand-gold">Meets High-Tech.</span></h2>
          <p className="text-gray-500 mb-10 leading-relaxed font-normal text-lg">
            NexBuild Enterprise is a unique conglomerate specializing in both high-end real estate construction and silicon-grade technology laboratory design. We bridge the gap between physical infrastructure and digital innovation.
          </p>
          <div className="space-y-8 mb-12">
            {[
              { title: 'Structural Integrity', desc: 'Advanced CAD modeling and seismic-resistant frameworks.' },
              { title: 'Silicon Excellence', desc: 'ISO-Certified clean room environments with precision isolation.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="text-brand-gold font-serif font-bold text-2xl">0{i+1}</div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="btn-editorial">LEARN OUR HISTORY</button>
        </div>
      </div>
    </section>
  );
}
