'use client';

import Link from 'next/link';

export function ServicesGrid() {
  const services = [
    {
      title: 'Structural Design',
      category: 'Precision',
      desc: 'Advanced CAD modeling and seismic-resistant frameworks for massive scale industrial hubs.',
    },
    {
      title: 'Silicon Labs',
      category: 'Intelligence',
      desc: 'Integrating smart-building technology and specialized lab environments for tech giants.',
    },
    {
      title: 'Global Logistics',
      category: 'Integrity',
      desc: 'End-to-end project management ensuring timelines and safety benchmarks are exceeded.',
    }
  ];

  return (
    <section id="solutions" className="bg-brand-gray-medium gap-[1px] grid lg:grid-cols-3 border-y border-brand-gray-medium">
      {services.map((service, idx) => (
        <div key={idx} className="group bg-brand-white p-16 min-h-[400px] flex flex-col justify-between relative hover:bg-brand-gray-light transition-colors duration-500 overflow-hidden">
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-6">{service.category}</h3>
            <h2 className="text-3xl font-bold mb-6 tracking-tight leading-tight uppercase">{service.title}</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{service.desc}</p>
          </div>
          
          <div className="mt-12">
             <Link href="#" className="inline-block text-[10px] font-bold uppercase tracking-widest text-brand-navy border-b border-brand-navy pb-1 hover:text-brand-gold hover:border-brand-gold transition-all">
                Learn More
              </Link>
          </div>

          <div className="absolute right-8 bottom-4 text-[8rem] font-serif font-black text-brand-navy opacity-[0.03] select-none group-hover:opacity-10 transition-opacity">
            0{idx + 1}
          </div>
        </div>
      ))}
    </section>
  );
}
