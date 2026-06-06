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
      isScrolled ? "bg-white shadow-md py-2.5" : "bg-transparent py-4"
    )}>
      <div className="max-w-[90rem] mx-auto pl-2 md:pl-4 lg:pl-6 pr-6 md:pr-12 lg:pr-16 flex justify-between items-center">
        <div className="flex items-center gap-[14px] cursor-pointer group">
          {/* Logo Container */}
          <div className="w-[48px] h-[48px] relative flex items-center justify-center shrink-0 overflow-hidden">
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
              "font-tibere font-bold leading-none transition-colors duration-300",
              isScrolled ? "text-brand-navy" : "text-white"
            )} style={{ fontFamily: "'Tibere OTW03-Bold', Georgia, serif", fontSize: '32px', letterSpacing: '0.06em' }}>
              CONSERVVE
            </span>
            <span className={cn(
              "font-tibere font-bold leading-none mt-1 transition-colors duration-300",
              isScrolled ? "text-brand-navy/90" : "text-white/90"
            )} style={{ fontFamily: "'Tibere OTW03-Bold', Georgia, serif", fontSize: '15px', letterSpacing: '0.235em' }}>
              INFRA SOLUTIONSS
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={cn(
                "font-sans text-sm font-bold antialiased uppercase tracking-wide transition-colors duration-300 hover:text-brand-gold",
                isScrolled ? "text-brand-navy" : "text-white"
              )}
            >
              {link.name}
            </Link>
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
              <Link 
                key={link.name} 
                href={link.href} 
                className="font-sans text-sm font-bold antialiased uppercase tracking-[0.1em] text-brand-navy hover:text-brand-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
