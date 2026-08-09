'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

/* ─── Nav structure ──────────────────────────────────────── */
const SERVICES_CHILDREN = [
  {
    name: 'Land Acquisition',
    href: '/services/land-acquisition',
    description: 'End-to-end acquisition of land parcels',
  },
  {
    name: 'Land Approval',
    href: '/services/land-approval',
    description: 'Regulatory clearances & statutory permits',
  },
];

const ABOUT_CHILDREN = [
  {
    name: 'Our Leadership',
    href: '/leadership',
  },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const servicesTriggerRef = useRef<HTMLButtonElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);

  /* Scroll detection */
  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 50); };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close dropdowns on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        servicesOpen &&
        servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target as Node) &&
        servicesTriggerRef.current && !servicesTriggerRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
      if (
        aboutOpen &&
        aboutDropdownRef.current && !aboutDropdownRef.current.contains(e.target as Node)
      ) {
        setAboutOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [servicesOpen, aboutOpen]);

  /* Close dropdowns on route change */
  useEffect(() => {
    setServicesOpen(false);
    setAboutOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileAboutOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';
  const isServicesActive = pathname?.startsWith('/services');
  const isAboutActive = pathname === '/about' || pathname === '/leadership';

  /* Plain nav links (Home, Services & About Us are handled separately) */
  const navLinks: { name: string; href: string }[] = [
    { name: 'Careers', href: '/careers' },
    { name: 'Get in Touch', href: '/contact' },
  ];

  /* Shared text colour class based on scroll state */
  const navTextCls = isScrolled ? 'text-brand-navy' : 'text-white';

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-3.5 md:py-4.5" : "bg-transparent py-5 md:py-7"
    )}>
      <div className="max-w-[90rem] mx-auto pl-2 md:pl-4 lg:pl-6 pr-6 md:pr-12 lg:pr-16 flex items-center justify-between">

        {/* ── Logo & Brand ── */}
        <div className="flex items-center gap-[12px] cursor-pointer group">
          {/* Logo Container */}
          <div className={cn(
            "relative flex items-center justify-center shrink-0 transition-all duration-300 transform",
            isScrolled ? "w-[46px] h-[46px] -translate-y-[1px]" : "w-[52px] h-[52px] -translate-y-[4px]"
          )}>
            {/* White Logo (Unscrolled) */}
            <motion.div
              initial={false}
              animate={{ opacity: isScrolled ? 0 : 1, y: isScrolled ? -15 : 0 }}
              style={{ scale: 1.34 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <Image src="/logo-transparent-dark.png" alt="Conservve Logo Light" fill className="object-contain" sizes="52px" priority />
            </motion.div>

            {/* Dark Logo (Scrolled) */}
            <motion.div
              initial={false}
              animate={{ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : 15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <Image src="/logo-dark-transparent.png" alt="Conservve Logo Dark" fill className="object-contain" sizes="52px" priority />
            </motion.div>
          </div>

          {/* Company Name */}
          <div className="flex flex-col items-center justify-center text-center">
            <span className={cn("block font-tibere font-bold transition-colors duration-300", isScrolled ? "text-brand-navy" : "text-white")} style={{
              fontFamily: "'Tibere OT W03 Medium', 'FF Tibere Medium', 'FF Tibere Std Medium', 'FF Tibere Std-Bold', 'FFTibereStd-Bold', 'FF Tibere Std', 'FF Tibere', 'Tibere OTW03-Bold', 'TibereOTW03-Bold', 'Tibere', 'Cormorant Garamond', 'EB Garamond', 'Gelasio', 'Cinzel', Georgia, serif",
              fontSize: isScrolled ? '24px' : '30px',
              letterSpacing: '0.06em', lineHeight: '0.9', fontWeight: 700,
              color: isScrolled ? '#0C2C4D' : '#ffffff', textAlign: 'center',
              transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              CONSERVVE
            </span>
            <span className={cn("block font-tibere font-bold mt-0.5 transition-colors duration-300", isScrolled ? "text-brand-navy" : "text-white")} style={{
              fontFamily: "'Tibere OT W03 Medium', 'FF Tibere Medium', 'FF Tibere Std Medium', 'FF Tibere Std-Bold', 'FFTibereStd-Bold', 'FF Tibere Std', 'FF Tibere', 'Tibere OTW03-Bold', 'TibereOTW03-Bold', 'Tibere', 'Cormorant Garamond', 'EB Garamond', 'Gelasio', 'Cinzel', Georgia, serif",
              fontSize: isScrolled ? '14px' : '18px',
              letterSpacing: '0.08em', lineHeight: '0.9', fontWeight: 700,
              color: isScrolled ? '#0C2C4D' : '#ffffff', textAlign: 'center',
              transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              INFRA SOLUTIONSS
            </span>
          </div>
        </div>

        {/* ── Desktop Nav + Mobile Toggle ── */}
        <div className="flex items-center gap-6">

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">

            {/* Home link */}
            <Link
              href={isHome ? '#' : '/'}
              className={cn("font-gotham text-[14px] font-normal antialiased uppercase tracking-wider transition-colors duration-300 relative group py-1.5", navTextCls)}
            >
              <span className="group-hover:text-brand-gold transition-colors duration-300">Home</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
            </Link>

            {/* ── About Us Dropdown ── */}
            <div className="relative" ref={aboutDropdownRef} onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
              <Link
                href="/about"
                className={cn(
                  "font-gotham text-[14px] font-normal antialiased uppercase tracking-wider transition-colors duration-300 relative group py-1.5 flex items-center gap-1.5 cursor-pointer select-none",
                  navTextCls,
                  isAboutActive ? '!text-brand-gold' : ''
                )}
              >
                <span className={cn("group-hover:text-brand-gold transition-colors duration-300", isAboutActive ? 'text-brand-gold' : '')}>
                  About Us
                </span>
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-all duration-300",
                    aboutOpen ? 'rotate-180 text-brand-gold' : 'rotate-0',
                    isAboutActive ? 'text-brand-gold' : 'group-hover:text-brand-gold'
                  )}
                />
                {/* Active underline */}
                <span className={cn(
                  "absolute bottom-0 left-0 h-[2px] bg-brand-gold transition-all duration-300 origin-left",
                  isAboutActive ? 'w-full scale-x-100' : 'scale-x-0 group-hover:scale-x-100 w-full'
                )} />
              </Link>

              {/* Dropdown Panel */}
              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => setAboutOpen(true)}
                    className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[200px] rounded-lg overflow-hidden z-50 bg-white border border-slate-200/70"
                    style={{ boxShadow: '0 8px 24px -4px rgba(12,44,77,0.12), 0 2px 8px rgba(12,44,77,0.06)' }}
                  >
                    {/* Top gold accent — 1 px */}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#BFA052]/70 to-transparent" />

                    <div className="py-1">
                      {ABOUT_CHILDREN.map((child) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "group flex items-center justify-center px-4 py-2.5 transition-all duration-200 relative text-center",
                              "hover:bg-slate-50 text-brand-navy",
                              isChildActive ? 'bg-slate-50' : ''
                            )}
                          >
                            {/* Active indicator bar */}
                            {isChildActive && (
                              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2.5px] h-4 bg-brand-gold rounded-r-full" />
                            )}
                            <span className={cn(
                              "font-gotham text-[11px] uppercase tracking-widest font-medium transition-colors duration-200",
                              isChildActive ? 'text-brand-gold' : 'group-hover:text-brand-gold'
                            )}>
                              {child.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Bottom gold accent — 1 px */}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#BFA052]/70 to-transparent" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* ── End About Us Dropdown ── */}

            {/* ── Services Dropdown ── */}
            <div className="relative" onMouseLeave={() => setServicesOpen(false)}>
              <button
                ref={servicesTriggerRef}
                onMouseEnter={() => setServicesOpen(true)}
                onClick={() => setServicesOpen(v => !v)}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                className={cn(
                  "font-gotham text-[14px] font-normal antialiased uppercase tracking-wider transition-colors duration-300 relative group py-1.5 flex items-center gap-1.5 cursor-pointer select-none",
                  navTextCls,
                  isServicesActive ? '!text-brand-gold' : ''
                )}
              >
                <span className={cn("group-hover:text-brand-gold transition-colors duration-300", isServicesActive ? 'text-brand-gold' : '')}>
                  Services
                </span>
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-all duration-300",
                    servicesOpen ? 'rotate-180 text-brand-gold' : 'rotate-0',
                    isServicesActive ? 'text-brand-gold' : 'group-hover:text-brand-gold'
                  )}
                />
                {/* Active underline */}
                <span className={cn(
                  "absolute bottom-0 left-0 h-[2px] bg-brand-gold transition-all duration-300 origin-left",
                  isServicesActive ? 'w-full scale-x-100' : 'scale-x-0 group-hover:scale-x-100 w-full'
                )} />
              </button>

              {/* Dropdown Panel */}
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    ref={servicesDropdownRef}
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => setServicesOpen(true)}
                    className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[200px] rounded-lg overflow-hidden z-50 bg-white border border-slate-200/70"
                    style={{ boxShadow: '0 8px 24px -4px rgba(12,44,77,0.12), 0 2px 8px rgba(12,44,77,0.06)' }}
                  >
                    {/* Top gold accent — 1 px */}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#BFA052]/70 to-transparent" />

                    <div className="py-1">
                      {SERVICES_CHILDREN.map((child) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "group flex items-center justify-start text-left px-5 py-2.5 transition-all duration-200 relative",
                              "hover:bg-slate-50 text-brand-navy",
                              isChildActive ? 'bg-slate-50' : ''
                            )}
                          >
                            {/* Active indicator bar */}
                            {isChildActive && (
                              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2.5px] h-4 bg-brand-gold rounded-r-full" />
                            )}
                            <span className={cn(
                              "font-gotham text-[11px] uppercase tracking-widest font-medium transition-colors duration-200",
                              isChildActive ? 'text-brand-gold' : 'group-hover:text-brand-gold'
                            )}>
                              {child.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Bottom gold accent — 1 px */}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#BFA052]/70 to-transparent" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* ── End Services Dropdown ── */}

            {/* Remaining plain links */}
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn("font-gotham text-[14px] font-normal antialiased uppercase tracking-wider transition-colors duration-300 relative group py-1.5", navTextCls)}
                >
                  <span className={cn("group-hover:text-brand-gold transition-colors duration-300", isActive ? 'text-brand-gold' : '')}>
                    {link.name}
                  </span>
                  <span className={cn("absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold transition-transform duration-300 origin-left ease-out", isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100')} />
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn("lg:hidden transition-colors duration-300", navTextCls)}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-8 flex flex-col gap-4 lg:hidden shadow-2xl"
          >
            {/* Home */}
            <Link
              href={isHome ? '#' : '/'}
              onClick={() => setMobileMenuOpen(false)}
              className="font-gotham text-[16px] font-normal antialiased uppercase tracking-[0.1em] text-brand-navy hover:text-brand-gold relative py-1 self-start group transition-colors duration-300"
            >
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
            </Link>

            {/* ── About Us Mobile Accordion ── */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between w-full">
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "font-gotham text-[16px] font-normal antialiased uppercase tracking-[0.1em] text-brand-navy hover:text-brand-gold relative py-1 self-start group transition-colors duration-300",
                    pathname === '/about' ? 'text-brand-gold' : ''
                  )}
                >
                  <span>About Us</span>
                </Link>
                <button
                  onClick={() => setMobileAboutOpen(v => !v)}
                  className="p-1 text-brand-navy hover:text-brand-gold transition-colors"
                  aria-label="Toggle About Us menu"
                >
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-300 text-brand-gold", mobileAboutOpen ? 'rotate-180' : 'rotate-0')} />
                </button>
              </div>

              <AnimatePresence>
                {mobileAboutOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 ml-4 flex flex-col gap-1 border-l-2 border-[#BFA052]/30 pl-4">
                      {ABOUT_CHILDREN.map((child) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn(
                              "font-gotham text-[13px] font-normal antialiased uppercase tracking-[0.1em] text-brand-navy hover:text-brand-gold py-2 transition-colors duration-300",
                              isChildActive ? 'text-brand-gold' : ''
                            )}
                          >
                            {child.name}
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* ── End About Us Mobile ── */}

            {/* ── Services Mobile Accordion ── */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileServicesOpen(v => !v)}
                className={cn(
                  "font-gotham text-[16px] font-normal antialiased uppercase tracking-[0.1em] text-brand-navy hover:text-brand-gold relative py-1 self-start flex items-center gap-2 transition-colors duration-300",
                  isServicesActive ? 'text-brand-gold' : ''
                )}
              >
                <span>Services</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-300 text-brand-gold", mobileServicesOpen ? 'rotate-180' : 'rotate-0')} />
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 ml-4 flex flex-col gap-1 border-l-2 border-[#BFA052]/30 pl-4">
                      {SERVICES_CHILDREN.map((child) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn(
                              "font-gotham text-[13px] font-normal antialiased uppercase tracking-[0.1em] text-brand-navy hover:text-brand-gold py-2 transition-colors duration-300",
                              isChildActive ? 'text-brand-gold' : ''
                            )}
                          >
                            {child.name}
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* ── End Services Mobile ── */}

            {/* Remaining links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-gotham text-[16px] font-normal antialiased uppercase tracking-[0.1em] text-brand-navy hover:text-brand-gold relative py-1 self-start group transition-colors duration-300",
                  pathname === link.href ? 'text-brand-gold' : ''
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="group-hover:text-brand-gold transition-colors duration-300">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
