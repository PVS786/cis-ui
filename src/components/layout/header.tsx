'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function Header() {
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
      isScrolled ? "bg-white shadow-md py-3.5 md:py-4.5" : "bg-transparent py-5 md:py-7"
    )}>
      <div className="max-w-[90rem] mx-auto pl-2 md:pl-4 lg:pl-6 pr-6 md:pr-12 lg:pr-16 flex items-center justify-between">
        {/* Left: Logo & Brand Lockup */}
        <div className="flex items-center gap-[12px] cursor-pointer group">
          {/* Logo Container */}
          <div className={cn(
            "relative flex items-center justify-center shrink-0 overflow-hidden transition-all duration-300",
            isScrolled ? "w-[46px] h-[46px]" : "w-[52px] h-[52px]"
          )}>
            {/* White Logo (Unscrolled) */}
            <motion.div
              initial={false}
              animate={{
                opacity: isScrolled ? 0 : 1,
                y: isScrolled ? -15 : 1,
              }}
              style={{ scale: 1.34 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="/logo-white-transparent.png"
                alt="Conservve Logo Light"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Dark Logo (Scrolled) */}
            <motion.div
              initial={false}
              animate={{
                opacity: isScrolled ? 1 : 0,
                y: isScrolled ? 0 : 15,
              }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="/logo-dark-transparent.png"
                alt="Conservve Logo Dark"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
          
          {/* Company Name Container */}
          <div className="flex flex-col items-center justify-center text-center">
            <span className={cn(
              "block font-tibere font-bold transition-colors duration-300",
              isScrolled ? "text-brand-navy" : "text-white"
            )} style={{ 
              fontFamily: "'Tibere OT W03 Medium', 'FF Tibere Medium', 'FF Tibere Std Medium', 'FF Tibere Std-Bold', 'FFTibereStd-Bold', 'FF Tibere Std', 'FF Tibere', 'Tibere OTW03-Bold', 'TibereOTW03-Bold', 'Tibere', 'Cormorant Garamond', 'EB Garamond', 'Gelasio', 'Cinzel', Georgia, serif", 
              fontSize: isScrolled ? '24px' : '30px', 
              letterSpacing: '0.06em', 
              lineHeight: '0.9', 
              fontWeight: 700,
              color: isScrolled ? '#0C2C4D' : '#ffffff',
              textAlign: 'center',
              transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              CONSERVVE
            </span>
            <span className={cn(
              "block font-tibere font-bold mt-0.5 transition-colors duration-300",
              isScrolled ? "text-brand-navy" : "text-white"
            )} style={{ 
              fontFamily: "'Tibere OT W03 Medium', 'FF Tibere Medium', 'FF Tibere Std Medium', 'FF Tibere Std-Bold', 'FFTibereStd-Bold', 'FF Tibere Std', 'FF Tibere', 'Tibere OTW03-Bold', 'TibereOTW03-Bold', 'Tibere', 'Cormorant Garamond', 'EB Garamond', 'Gelasio', 'Cinzel', Georgia, serif", 
              fontSize: isScrolled ? '14px' : '17px', 
              letterSpacing: '0.08em', 
              lineHeight: '0.9', 
              fontWeight: 700,
              color: isScrolled ? '#0C2C4D' : '#ffffff',
              textAlign: 'center',
              transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              INFRA SOLUTIONSS
            </span>
          </div>
        </div>

        {/* Right: Desktop Nav & Mobile Toggle */}
        <div className="flex items-center gap-8">
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={cn(
                  "font-gotham text-[14px] font-normal antialiased uppercase tracking-wider transition-colors duration-300 relative group py-1.5",
                  isScrolled ? "text-brand-navy" : "text-white"
                )}
              >
                <span className="group-hover:text-brand-gold transition-colors duration-300">
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className={cn(
              "lg:hidden transition-colors duration-300",
              isScrolled ? "text-brand-navy" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-8 flex flex-col gap-6 lg:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="font-gotham text-[16px] font-normal antialiased uppercase tracking-[0.1em] text-brand-navy hover:text-brand-gold relative py-1 self-start group transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="group-hover:text-brand-gold transition-colors duration-300">
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
