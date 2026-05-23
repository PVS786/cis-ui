'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
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
            <Link 
              key={link.name} 
              href={link.href} 
              className={cn(
                "text-sm font-bold tracking-tight transition-colors duration-300 hover:text-brand-gold",
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
                className="text-sm font-black uppercase tracking-[0.1em] text-brand-navy hover:text-brand-gold"
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
