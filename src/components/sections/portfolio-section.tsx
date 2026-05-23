'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

export function PortfolioSection() {
  const projects = [
    { name: 'Silicon Valley Hub', category: 'Tech Lab' },
    { name: 'Mumbai Express Corridor', category: 'Infrastructure' },
    { name: 'Dubai Smart Tower', category: 'Commercial' },
    { name: 'Seoul Fab 7', category: 'Industrial' },
  ];

  return (
    <section id="infrastructure" className="section-container">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div className="max-w-xl">
          <div className="w-12 h-1 bg-brand-gold mb-6" />
          <h2 className="text-5xl uppercase mb-6 leading-tight">Precision<br />Portfolios</h2>
          <p className="text-gray-500 font-normal italic">A showcase of structural landmarks and technological frontiers we&apos;ve claimed across the globe.</p>
        </div>
        <button className="text-[10px] font-bold tracking-[0.2em] border-b-2 border-brand-gold pb-1 mt-6 md:mt-0 hover:text-brand-gold transition-colors uppercase">
          View Selected Case Studies
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 h-[700px]">
        {projects.map((proj, idx) => (
          <div 
            key={idx} 
            className={cn(
              "editorial-frame group cursor-pointer",
              idx === 0 ? "lg:col-span-2 lg:row-span-2" : "",
              idx === 1 ? "lg:col-span-2" : ""
            )}
          >
            <Image
              src={`https://picsum.photos/seed/nexbuild-${idx}/1200/800`} 
              alt={proj.name}
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10 z-10">
              <span className="text-brand-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-2">{proj.category}</span>
              <h4 className="text-white text-3xl font-serif tracking-tight leading-tight">{proj.name}</h4>
              <div className="w-8 h-0.5 bg-brand-gold mt-6" />
            </div>
            <div className="absolute top-6 left-6 p-2 bg-brand-navy text-brand-gold text-[10px] font-serif font-bold opacity-80 z-10">
              0{idx + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
