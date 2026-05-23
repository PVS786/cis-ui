/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  Globe, 
  Menu, 
  X,
  Construction,
  Microchip,
  Layers,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  Search,
  Box,
  CornerRightUp,
  Award,
  Briefcase,
  Target,
  Handshake,
  Users,
  Map,
  Scale,
  FileText,
  BadgeCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper for tailwind class merging
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#enterprise' },
    { name: 'Services', href: '#solutions' },
    { name: 'Get in Touch', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-8"
    )}>
      <div className="max-w-7xl mx-auto px-16 flex justify-between items-center">
        <div className="flex items-center gap-1 cursor-pointer group">
          <span className={cn(
            "font-sans text-4xl font-black tracking-tighter transition-colors duration-300",
            isScrolled ? "text-brand-navy" : "text-white"
          )}>
            CONSERVVE
          </span>
          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-4 ml-0.5" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={cn(
                "text-sm font-bold tracking-tight transition-colors duration-300 hover:text-brand-gold",
                isScrolled ? "text-brand-navy" : "text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <div className={cn(
            "w-px h-6 mx-2 transition-colors",
            isScrolled ? "bg-gray-200" : "bg-white/20"
          )} />
          <button 
            className={cn(
              "transition-colors",
              isScrolled ? "text-brand-navy" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "md:hidden transition-colors",
            isScrolled ? "text-brand-navy" : "text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-8 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-black uppercase tracking-[0.1em] text-brand-navy hover:text-brand-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-brand-gray-light pt-20">
      <div className="section-container grid lg:grid-cols-[1.2fr_1fr] gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-16 h-1 bg-brand-gold mb-10" />
          <h1 className="text-7xl md:text-[7rem] leading-[0.9] mb-10 font-bold tracking-tighter">
            Building<br />
            <span className="text-brand-gold">Global</span><br />
            Legacy.
          </h1>
          <p className="text-lg text-gray-500 max-w-lg leading-relaxed font-normal italic">
            Pioneering high-precision engineering and structural excellence for the next generation of industrial and commercial landscapes.
          </p>
          <div className="mt-12 flex gap-6">
            <button className="btn-editorial text-sm px-10 py-5">
              EXPLORE OUR EXPERTISE
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="editorial-frame h-[500px]"
        >
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Project Apex"
            className="w-full h-full object-cover animate-slow-zoom"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10 text-brand-white">
            <h3 className="text-2xl font-serif mb-1">Project Apex</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-80">Structural Engineering | 2024</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const LandOpportunitySection = () => {
  return (
    <section className="bg-[#fcfbf9] py-16 lg:py-24 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(12, 44, 77, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(12, 44, 77, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/50 pointer-events-none" />

      <div className="max-w-[105rem] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(12,44,77,0.06)] flex flex-col lg:flex-row overflow-hidden relative"
        >
          {/* Unique Left Border Accent from Image 2 */}
          <div className="absolute left-0 top-0 bottom-0 w-2 flex flex-col z-20">
             <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex-[0.4] bg-brand-gold origin-top" />
             <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex-[0.6] bg-brand-navy origin-bottom" />
          </div>

          {/* Left Content Area */}
          <div className="lg:w-[60%] p-8 md:p-12 lg:p-14 pl-10 md:pl-16 xl:pl-20 flex flex-col justify-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-10 h-[2px] bg-brand-gold" />
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-brand-navy">Our Mission</span>
            </motion.div>

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
                  That's exactly the gap we exist to close, with you.
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
                <span className="text-brand-gold">Let's move it together.</span>
              </h4>
            </motion.div>
          </div>

          {/* Right Image Area */}
          <div className="lg:w-[40%] relative min-h-[400px] lg:min-h-auto overflow-hidden">
            <motion.img 
              initial={{ scale: 1.15, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
              alt="Strategic Land Development"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Soft gradient overlay on image to match the refined corporate feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent opacity-80 mix-blend-multiply pointer-events-none" />
            
            {/* Decorative bottom text (from Image 1 "BUILDING FUTURES") */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 0.9, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute bottom-8 left-8 flex items-center gap-4 z-10"
            >
               <div className="w-8 h-[2px] bg-brand-gold" />
               <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white drop-shadow-md">
                 Building Futures
               </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatsSection = () => {
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
};

const AboutSection = () => {
  return (
    <section id="enterprise" className="section-container">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="editorial-frame aspect-[4/5] h-[600px]">
          <img 
            src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop" 
            alt="Silicon Lab Office"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-0 right-0 p-8 bg-brand-gold text-brand-navy font-bold text-xs uppercase tracking-widest">
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
};

const ServicesGrid = () => {
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
             <a href="#" className="inline-block text-[10px] font-bold uppercase tracking-widest text-brand-navy border-b border-brand-navy pb-1 hover:text-brand-gold hover:border-brand-gold transition-all">
                Learn More
              </a>
          </div>

          <div className="absolute right-8 bottom-4 text-[8rem] font-serif font-black text-brand-navy opacity-[0.03] select-none group-hover:opacity-10 transition-opacity">
            0{idx + 1}
          </div>
        </div>
      ))}
    </section>
  );
};

const PortfolioSection = () => {
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
          <p className="text-gray-500 font-normal italic">A showcase of structural landmarks and technological frontiers we've claimed across the globe.</p>
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
            <img 
              src={`https://picsum.photos/seed/nexbuild-${idx}/1200/800`} 
              alt={proj.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
              <span className="text-brand-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-2">{proj.category}</span>
              <h4 className="text-white text-3xl font-serif tracking-tight leading-tight">{proj.name}</h4>
              <div className="w-8 h-0.5 bg-brand-gold mt-6" />
            </div>
            <div className="absolute top-6 left-6 p-2 bg-brand-navy text-brand-gold text-[10px] font-serif font-bold opacity-80">
              0{idx + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ContactCTA = () => {
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
};

const Footer = () => {
  return (
    <footer className="bg-brand-gray-light pt-24 pb-12 text-brand-navy border-t border-brand-gray-medium">
      <div className="max-w-7xl mx-auto px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-navy flex items-center justify-center rounded-sm text-brand-gold font-serif font-black text-lg">
                N
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">CONSERVVE</span>
            </div>
            <p className="text-gray-500 text-[13px] leading-relaxed max-w-xs italic">
              Global leaders in hybrid infrastructure and advanced technology park development. We build the foundations of the future.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-brand-gray-medium flex items-center justify-center hover:bg-brand-navy hover:text-brand-gold transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-10 text-brand-gold">Divisions</h4>
            <ul className="space-y-4 text-gray-400 text-[13px] font-medium">
              <li><a href="#" className="hover:text-brand-navy transition-colors">Residential Infrastructure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Semiconductor Labs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Logistics & Supply Chain</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Energy Grid Systems</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-10 text-brand-gold">Experience</h4>
            <ul className="space-y-4 text-gray-500 text-[13px] font-medium">
              <li><a href="#" className="hover:text-brand-navy transition-colors">Case Portfolios</a></li>
              <li><a href="#" className="hover:text-brand-navy transition-colors">Innovation Hub</a></li>
              <li><a href="#" className="hover:text-brand-navy transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-brand-navy transition-colors">News & Media</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-10 text-brand-gold">Global Headquarters</h4>
            <ul className="space-y-5 text-gray-500 text-[13px] font-medium">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="leading-relaxed">1200 Silicon Avenue, Innovation District, CA 94043</span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <span>contact@conservve.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-gray-medium flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">
          <p>© 2024 CONSERVVE ENTERPRISE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-brand-navy transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-navy transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-navy transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const ExecutionPillars = () => {
  const pillars = [
    {
      title: "Land Identification & Acquisition",
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Statutory Approvals & Compliance",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Deep-Rooted Public-Sector and Administrative Networks",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Transparent Transactions",
      img: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Fast & Efficient Execution",
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-brand-white py-32 overflow-hidden border-t border-brand-gray-medium">
      <div className="max-w-7xl mx-auto px-16 mb-24">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="max-w-2xl">
            <div className="w-16 h-1 bg-brand-gold mb-10" />
            <h2 className="text-6xl md:text-7xl font-serif text-brand-navy leading-[0.85] tracking-tighter uppercase">
              The Five Pillars <br />
              Of <span className="text-brand-gold italic">Execution.</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm italic text-lg leading-relaxed border-l-2 border-brand-gray-medium pl-8 py-2">
            An uncompromising framework designed to turn fragmented processes into a confident path forward.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-[1px] bg-brand-gray-medium max-w-[95rem] mx-auto border-x border-brand-gray-medium group/grid">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-brand-white relative h-[500px] lg:h-[600px] flex flex-col p-6 lg:p-8 xl:p-10 transition-all duration-700 ease-in-out hover:bg-brand-navy group overflow-hidden"
          >
            {/* Background Image Layer (Always active but subtle) */}
            <div className="absolute inset-0 z-0 opacity-[0.05] group-hover:opacity-20 transition-opacity duration-700 grayscale">
              <img 
                src={pillar.img} 
                className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" 
                alt={pillar.title}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-12">
                <span className="text-brand-gold font-serif font-black text-4xl xl:text-5xl leading-none opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                  0{idx + 1}
                </span>
                <div className="h-px flex-1 bg-brand-gray-medium group-hover:bg-brand-gold transition-colors duration-500" />
              </div>

              <div className="mt-auto pb-4">
                <h3 className="text-lg lg:text-xl xl:text-2xl font-bold uppercase leading-tight tracking-tight text-brand-navy group-hover:text-brand-white transition-colors duration-500 drop-shadow-sm pr-2">
                  {pillar.title}
                </h3>
              </div>
            </div>

            {/* Blueprint Decorative Lines (SVG-like feel) */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
              <div className="w-full h-full border-r border-t border-brand-white m-8" />
            </div>
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const IntegratedSolutionsSection = () => {
  const solutions = [
    {
      title: "Strategic Land Acquisition",
      content: [
        "You shouldn't have to choose between speed and strategy. We work alongside you to identify, evaluate, and secure the right land for your development project, aligned with your long-term vision, investment goals, and the locations that actually makes business sense. Every acquisition we lead is future-ready and risk-mitigated, so you move forward with complete confidence.",
        "We handle everything from market scanning and site feasibility to technical due diligence and deal structuring, so you stay focused on building, not searching. Our ground-level insight combined with data-backed analysis means no blind spots, no missed opportunities, and no surprises at the table."
      ],
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Regulatory Approvals & Clearance Management",
      content: [
        "From NOC to OC, every approval, handled end to end. We take full ownership of the regulatory process, managing every submission, clearance, and compliance requirement on your behalf, with precision and care. From environmental clearances and layout sanctions to building plan approvals and occupancy sign-offs, we navigate every stage, stay present at every window, and make sure nothing gets delayed, duplicated, or missed.",
        "This includes title verification, land use conversions, NA orders, TDR applications, and zoning compliance checks — every technical prerequisite handled before a single brick is laid. Your project keeps moving, your timelines stay intact, and nothing falls through the cracks."
      ],
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-[#F5F7FA] py-32 border-t border-brand-gray-medium overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-16">
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-sans font-black text-brand-navy tracking-tight mb-8">
              Integrated Land Solutions
            </h2>
            <div className="text-xl text-brand-navy font-medium leading-relaxed border-l-4 border-brand-gold pl-6 max-w-3xl">
              Two things define every successful development, the right land, and a clear path to build on it. 
              <br/><span className="text-brand-gray-medium/80 text-gray-500 font-normal">This is how we make that real.</span>
            </div>
          </motion.div>
        </div>

        <div className="space-y-40">
          {solutions.map((item, idx) => (
            <div key={idx} className={cn(
              "flex flex-col gap-16 lg:gap-24 items-center group",
              idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            )}>
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 1 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-1 space-y-8 relative z-10 w-full"
              >
                <div className="absolute -top-12 -left-8 text-[12rem] font-serif font-black text-brand-navy opacity-[0.02] pointer-events-none select-none leading-none z-0">
                  0{idx + 1}
                </div>
                <div className="relative z-10 space-y-8">
                  <h3 className="text-4xl lg:text-5xl font-sans font-bold text-brand-navy leading-[1.1] tracking-tight">
                    {item.title}
                  </h3>
                  <div className="w-16 h-1 bg-brand-gold shadow-[0_0_15px_rgba(191,160,82,0.4)]" />
                  <div className="space-y-6 text-brand-navy/80 font-medium leading-relaxed text-lg max-w-xl xl:pl-6 xl:border-l-2 border-brand-gray-medium">
                    {item.content.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-1 relative w-full h-[500px] lg:h-[700px]"
              >
                {/* Architectural Offset Block */}
                <div className={cn(
                  "absolute top-8 bottom-8 w-[80%] bg-brand-navy transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.02]",
                  idx % 2 === 1 ? "right-0 lg:-right-12" : "left-0 lg:-left-12"
                )} />
                
                {/* Main Image Container */}
                <div className={cn(
                  "absolute inset-0 lg:inset-y-0 z-10 shadow-2xl overflow-hidden bg-brand-gray-medium",
                  idx % 2 === 1 ? "mr-6 lg:mr-16" : "ml-6 lg:ml-16"
                )}>
                  <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-transparent transition-colors duration-700 z-20" />
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-brand-navy/10 to-transparent opacity-80 mix-blend-multiply pointer-events-none z-10" />
                </div>

                {/* Technical / Drafting Blueprint Frame Corner Accent */}
                <div className={cn(
                  "absolute w-32 h-32 lg:w-48 lg:h-48 border-brand-gold z-20 transition-all duration-700 pointer-events-none",
                  idx % 2 === 1 
                    ? "-top-4 -left-4 lg:-top-8 lg:-left-8 border-t-[3px] border-l-[3px] group-hover:top-0 group-hover:left-0" 
                    : "-bottom-4 -right-4 lg:-bottom-8 lg:-right-8 border-b-[3px] border-r-[3px] group-hover:bottom-0 group-hover:right-0"
                )}>
                  {/* Technical Nodes */}
                  <div className="absolute w-2 h-2 bg-brand-gold top-0 left-0 -translate-x-[1.5px] -translate-y-[1.5px]" />
                  <div className={cn(
                    "absolute w-2 h-2 bg-brand-gold",
                    idx % 2 === 1 ? "bottom-0 left-0 -translate-x-[1.5px] translate-y-1/2" : "top-0 right-0 translate-x-1/2 -translate-y-[1.5px]"
                  )} />
                  <div className={cn(
                    "absolute w-2 h-2 bg-brand-gold",
                    idx % 2 === 1 ? "top-0 right-0 translate-x-1/2 -translate-y-[1.5px]" : "bottom-0 left-0 -translate-x-[1.5px] translate-y-1/2"
                  )} />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyPartnerSection = () => {
  const reasons = [
    {
      title: "Experienced Leadership",
      desc: "Led by industry professionals with deep expertise in land acquisition and regulatory processes, we bring strategic direction, informed decision-making, and execution confidence to every project.",
      icon: Award
    },
    {
      title: "Deal Structuring & Negotiation",
      desc: "We help structure financially sound deals that align with your strategic goals, ensuring optimal value and mitigated risks from the very first handshake.",
      icon: Handshake
    },
    {
      title: "On-Ground Execution Support",
      desc: "From site visits to complex local coordination, our physical presence ensures nothing is left to chance where it matters most—on the ground.",
      icon: Box
    },
    {
      title: "Tailored, Client-Centric Solutions",
      desc: "Every requirement is unique. We deliver customized land and approval strategies aligned with your business goals, risk appetite, and long-term vision.",
      icon: Target
    },
    {
      title: "End-to-End Development Capability",
      desc: "From land acquisition to final construction, we deliver fully integrated project execution through our associate entity, Conservve Buildcon.",
      icon: Building2
    },
    {
      title: "Long-Term Partnership Approach",
      desc: "We focus on building lasting relationships, supporting you not just for one transaction but across multiple growth phases and future assets.",
      icon: Users
    }
  ];

  return (
    <section className="bg-brand-navy py-24 md:py-32 relative overflow-hidden">
      {/* Abstract Glowing Background Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[40rem] h-[40rem] bg-[#1a4a7f]/20 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Blueprint grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem'
        }}
      />

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-12 h-[2px] bg-brand-gold" />
            <span className="text-sm font-sans font-bold uppercase tracking-[0.2em] text-brand-gold">The Distinction</span>
            <div className="w-12 h-[2px] bg-brand-gold" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-8"
          >
            Why Partner <span className="text-brand-gold italic font-light">With Us</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/70 text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto"
          >
            We manage uncertainty with foresight, turning complex compliance and execution challenges into confident, well-informed choices for the future.
          </motion.p>
        </div>

        {/* Custom Staggered Flow Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-12 lg:pb-32">
          {reasons.map((item, idx) => {
             // Calculate staggered margins for desktop
             const mtClass = idx === 1 || idx === 4 ? 'lg:mt-16' : idx === 2 || idx === 5 ? 'lg:mt-32' : '';
             
             return (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: (idx % 3) * 0.15 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className={cn("relative group h-full flex flex-col", mtClass)}
               >
                 {/* The Glowing Orb behind the card - Image 3 inspiration */}
                 <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/0 via-brand-gold/0 to-brand-gold/0 group-hover:from-brand-gold/20 group-hover:via-brand-gold/5 group-hover:to-transparent rounded-3xl blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100" />
                 
                 {/* Card Container */}
                 <div className="relative h-full bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm border border-white/10 group-hover:border-brand-gold/40 rounded-3xl p-8 md:p-10 transition-all duration-500 overflow-hidden flex flex-col z-10 shadow-2xl">
                    
                    {/* Top Accent Line inspired by Image 2 path */}
                    <div className="absolute top-0 left-0 w-0 h-[2px] bg-brand-gold group-hover:w-full transition-all duration-700 ease-out" />
                    
                    <div className="flex justify-between items-start mb-12">
                       {/* Icon */}
                       <div className="relative">
                         <div className="absolute inset-0 bg-brand-gold blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                         <item.icon className="relative w-10 h-10 text-brand-gold/80 group-hover:text-brand-gold transition-colors duration-500" />
                       </div>
                       
                       {/* Number */}
                       <div className="text-4xl lg:text-5xl font-serif font-black text-white/5 group-hover:text-brand-gold/20 transition-colors duration-500 select-none">
                         0{idx + 1}
                       </div>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-white mb-6 leading-snug group-hover:text-brand-gold transition-colors duration-500">
                      {item.title}
                    </h3>

                    <p className="text-white/60 font-sans text-base leading-relaxed flex-grow group-hover:text-white/80 transition-colors duration-500">
                      {item.desc}
                    </p>

                    {/* Bottom connecting dots / path continuation */}
                    <div className="mt-10 flex gap-2 overflow-hidden">
                       <div className="h-[2px] w-8 bg-brand-gold/30 group-hover:bg-brand-gold group-hover:w-16 transition-all duration-500 rounded-full" />
                       <div className="h-[2px] w-2 bg-brand-gold/20 group-hover:bg-brand-gold/60 transition-colors duration-500 delay-100 rounded-full" />
                       <div className="h-[2px] w-2 bg-brand-gold/10 group-hover:bg-brand-gold/40 transition-colors duration-500 delay-200 rounded-full" />
                    </div>
                 </div>
               </motion.div>
             )
          })}
        </div>
      </div>
    </section>
  );
};

const InteractiveProcessMapSection = () => {
  const [hoveredId, setHoveredId] = React.useState<number | null>(null);

  const steps = [
    {
      id: 1, 
      title: "Identification & Strategic Aggregation of Land Parcels", 
      desc: "We identify and consolidate high-potential land opportunities aligned with your project vision, location strategy, and long-term value.", 
      icon: Map,
      pos: { left: "20%", top: "45%" }, 
      cardPos: "right-full mr-4 lg:mr-8 top-1/2 -translate-y-1/2"
    },
    {
      id: 2, 
      title: "Comprehensive Technical Due Diligence", 
      desc: "Every parcel undergoes rigorous legal scrutiny to ensure clear titles, compliance, and zero-risk acquisition.", 
      icon: Search,
      pos: { left: "35%", top: "25%" }, 
      cardPos: "bottom-full mb-4 lg:mb-8 left-1/2 -translate-x-1/2"
    },
    {
      id: 3, 
      title: "Commercial Structuring & Transaction Closure", 
      desc: "We manage negotiations with a focus on transparency, optimal value, and secure deal finalization.", 
      icon: Handshake,
      pos: { left: "30%", top: "70%" }, 
      cardPos: "right-full mr-4 lg:mr-8 top-1/2 -translate-y-1/2"
    },
    {
      id: 4, 
      title: "Land Registration & Documentation Excellence", 
      desc: "Accurate and timely execution of all legal documentation and registration processes.", 
      icon: FileText,
      pos: { left: "50%", top: "85%" }, 
      cardPos: "top-full mt-4 lg:mt-8 left-1/2 -translate-x-1/2"
    },
    {
      id: 5, 
      title: "Regulatory Approvals & Clearance Management", 
      desc: "Seamless coordination with authorities to secure all statutory approvals efficiently and compliantly.", 
      icon: BadgeCheck,
      pos: { left: "65%", top: "25%" }, 
      cardPos: "bottom-full mb-4 lg:mb-8 left-1/2 -translate-x-1/2"
    },
    {
      id: 6, 
      title: "End-to-End Post-Acquisition & Approval Support", 
      desc: "Ongoing assistance to ensure a smooth transition from land acquisition to project readiness.", 
      icon: Target,
      pos: { left: "70%", top: "70%" }, 
      cardPos: "left-full ml-4 lg:ml-8 top-1/2 -translate-y-1/2"
    },
    {
      id: 7, 
      title: "Beyond Land - Complete Project Execution", 
      desc: "Through our associate company Conservve Buildcon, we deliver fully integrated commercial project execution from land acquisition to final construction.", 
      icon: Building2,
      pos: { left: "80%", top: "45%" }, 
      cardPos: "left-full ml-4 lg:ml-8 top-1/2 -translate-y-1/2"
    }
  ];

  return (
    <section className="bg-brand-navy relative overflow-hidden py-24 select-none">
      {/* Soft central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Abstract Blueprint Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #BFA052 1px, transparent 1px),
            linear-gradient(to bottom, #BFA052 1px, transparent 1px)
          `,
          backgroundSize: '3rem 3rem'
        }}
      />

      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24 relative z-40 max-w-4xl mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-brand-gold" />
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-brand-gold">The Process</span>
              <div className="w-12 h-[2px] bg-brand-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-serif font-bold text-white tracking-tight leading-[1.1]">
              Land Acquisition <span className="text-brand-gold italic font-light">&amp; Strategy</span>
            </h2>
          </motion.div>
        </div>

        {/* --- DESKTOP ISOMETRIC MAP (Hidden on Mobile) --- */}
        <div className="hidden lg:block relative w-full h-[900px] xl:h-[1000px]">
           
           {/* SVG Connecting Lines */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 transition-opacity duration-500">
             {steps.map(step => {
                const isActive = hoveredId === step.id;
                const isDimmed = hoveredId !== null && !isActive;
                return (
                   <line
                      key={`line-${step.id}`}
                      x1="50%" y1="50%"
                      x2={step.pos.left} y2={step.pos.top}
                      stroke={isActive ? "#BFA052" : "rgba(255,255,255,0.1)"}
                      strokeWidth={isActive ? 3 : 1}
                      className={cn("transition-all duration-500", isDimmed ? "opacity-20" : "opacity-100")}
                   />
                )
             })}
           </svg>

           {/* Central Hub Building */}
           <div className={cn(
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500",
              hoveredId !== null ? "opacity-30 grayscale blur-[2px]" : "opacity-100"
           )}>
              <div className="relative w-48 h-48 group">
                 <div className="absolute inset-0 bg-[#0C2C4D]/90 backdrop-blur-md border-4 border-brand-gold/60 rounded-[2.5rem] transform [transform:rotateX(60deg)_rotateZ(-45deg)] shadow-[0_40px_80px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(191,160,82,0.3)] flex items-center justify-center">
                    <div className="w-[65%] h-[65%] border-2 border-brand-gold/30 bg-[#061526] rounded-2xl shadow-inner flex flex-col items-center justify-center">
                       <Building2 className="w-14 h-14 text-brand-gold transform [transform:rotateZ(45deg)_rotateX(-60deg)] drop-shadow-[0_0_20px_rgba(191,160,82,0.6)]" />
                    </div>
                 </div>
              </div>
           </div>

           {/* The 7 Nodes */}
           {steps.map(step => {
              const isActive = hoveredId === step.id;
              const isDimmed = hoveredId !== null && !isActive;

              return (
                 <div
                    key={step.id}
                    className={cn(
                       "absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
                       isActive ? "scale-110 z-50" : "z-30",
                       isDimmed ? "opacity-30 grayscale blur-[3px]" : "opacity-100"
                    )}
                    style={{ left: step.pos.left, top: step.pos.top }}
                    onMouseEnter={() => setHoveredId(step.id)}
                    onMouseLeave={() => setHoveredId(null)}
                 >
                    {/* Isometric Platform Area (Hover Target) */}
                    <div className="relative w-36 h-36 xl:w-40 xl:h-40 cursor-pointer group">
                       <div className={cn(
                          "absolute inset-0 backdrop-blur-md rounded-2xl transform [transform:rotateX(60deg)_rotateZ(-45deg)] flex items-center justify-center overflow-hidden transition-all duration-500",
                          isActive 
                            ? "bg-[#112a46] border-[3px] border-brand-gold -translate-y-6 shadow-[20px_40px_50px_rgba(0,0,0,0.6),0_0_40px_rgba(191,160,82,0.4)]" 
                            : "bg-[#0A1C32]/80 border-[2px] border-white/10 shadow-[10px_20px_30px_rgba(0,0,0,0.4)] hover:bg-[#0C2C4D]"
                       )}>
                          <div className={cn(
                              "w-[75%] h-[75%] rounded-xl shadow-inner flex items-center justify-center transition-all duration-500",
                              isActive ? "bg-[#061526] border border-brand-gold/50" : "bg-transparent border border-white/5 group-hover:bg-[#061526]"
                          )}>
                             <step.icon className={cn(
                                "w-10 h-10 xl:w-12 xl:h-12 transform [transform:rotateZ(45deg)_rotateX(-60deg)] transition-all duration-500",
                                isActive ? "text-brand-gold drop-shadow-lg scale-110" : "text-white/60 group-hover:text-brand-gold/80"
                             )} strokeWidth={1.5} />
                          </div>
                       </div>
                    </div>

                    {/* Floating Description Card (Always visible, but highlights on hover) */}
                    <div className={cn(
                       "absolute w-[22rem] p-6 rounded-2xl bg-[#061526]/90 backdrop-blur-xl border shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-500 pointer-events-none",
                       step.cardPos,
                       isActive ? "border-brand-gold/50 translate-y-0" : "border-white/10 opacity-80"
                    )}>
                       <div className="flex items-center gap-3 mb-4">
                          <div className={cn("w-8 h-[2px] transition-colors duration-500", isActive ? "bg-brand-gold" : "bg-white/20")} />
                          <span className={cn("text-xs font-bold uppercase tracking-widest transition-colors duration-500", isActive ? "text-brand-gold" : "text-white/40")}>
                             Step 0{step.id}
                          </span>
                       </div>
                       <h4 className={cn("font-serif font-bold text-xl leading-snug mb-3 transition-colors duration-500", isActive ? "text-white" : "text-white/80")}>
                          {step.title}
                       </h4>
                       <p className={cn("font-sans text-sm leading-relaxed transition-colors duration-500", isActive ? "text-white/80" : "text-white/50")}>
                          {step.desc}
                       </p>
                    </div>
                 </div>
              )
           })}
        </div>

        {/* --- MOBILE/TABLET LIST VIEW (Hidden on Desktop) --- */}
        <div className="block lg:hidden space-y-6">
           {steps.map((step, idx) => (
              <motion.div
                 key={step.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: idx * 0.1 }}
                 viewport={{ once: true }}
                 className="bg-[#0C2C4D]/50 border border-white/10 rounded-2xl p-6 relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-[40px] rounded-full pointer-events-none" />
                 
                 <div className="flex items-start gap-5 relative z-10">
                    <div className="w-14 h-14 shrink-0 bg-[#061526] border border-brand-gold/30 rounded-xl flex items-center justify-center shadow-inner">
                       <step.icon className="w-7 h-7 text-brand-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                       <div className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2">
                          Step 0{step.id}
                       </div>
                       <h4 className="font-serif font-bold text-white text-[1.35rem] leading-snug mb-3">
                          {step.title}
                       </h4>
                       <p className="font-sans text-white/60 text-sm leading-relaxed">
                          {step.desc}
                       </p>
                    </div>
                 </div>
              </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <LandOpportunitySection />
        <ExecutionPillars />
        <IntegratedSolutionsSection />
        <InteractiveProcessMapSection />
        <WhyPartnerSection />
        <StatsSection />
        <AboutSection />
        <ServicesGrid />
        <PortfolioSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
