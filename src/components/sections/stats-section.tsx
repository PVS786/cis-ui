'use client';

export function StatsSection() {
  const stats = [
    { label: 'Infrastructure Projects', value: '450+' },
    { label: 'Technology Patents', value: '98' },
    { label: 'Global Clients', value: '25' },
    { label: 'Square Feet Delivered', value: '12M' },
  ];

  return (
    <section className="bg-brand-navy py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center lg:items-start">
              <span className="text-4xl md:text-5xl font-serif text-brand-gold mb-2">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
