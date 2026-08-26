'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function Footer() {
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isAboutOpenMobile, setIsAboutOpenMobile] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    if (!formData.name || !formData.phone || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err: any) {
      setFormError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="w-full flex flex-col text-white z-10 relative">
      {/* Brand Gold Ribbon */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#BFA052] z-20" />

      {/* ─── TOP SECTION: CONTENT & ARTWORK BACKGROUND ─── */}
      <div
        className="w-full pt-10 pb-24 relative"
        style={{
          backgroundImage: "url('/footer_base.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full">
          {/* Responsive Redesigned 3-Column CSS Grid Layout (3.5fr / 3fr / 3.5fr ratio) */}
          <div className="grid grid-cols-1 lg:grid-cols-[3.5fr_3fr_3.5fr] gap-12 lg:gap-16 justify-between items-start w-full">

            {/* COLUMN 1: Company Branding (Left-Justified) */}
            <div className="flex flex-col items-start pt-1 w-full justify-self-start text-left">
              <div className="flex items-center gap-[14px] xl:gap-[18px]">
                {/* Logo Container matching Header scale but larger */}
                <div className="w-[72px] h-[72px] xl:w-[82px] xl:h-[82px] relative flex items-center justify-center shrink-0" style={{ transform: 'translateY(-6px)' }}>
                  <div className="absolute inset-0 w-full h-full" style={{ transform: 'scale(1.34)' }}>
                    <Image
                      src="/logo-transparent-dark.png"
                      alt="Conservve Logo Light"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Company Name Container matching Header scale but larger */}
                <div className="flex flex-col items-start justify-center text-left whitespace-nowrap">
                  <span
                    className="font-tibere font-bold text-[36px] xl:text-[42px] whitespace-nowrap"
                    style={{
                      fontFamily: "'Tibere OT W03 Medium', 'FF Tibere Medium', 'FF Tibere Std Medium', 'FF Tibere Std-Bold', 'FFTibereStd-Bold', 'FF Tibere Std', 'FF Tibere', 'Tibere OTW03-Bold', 'TibereOTW03-Bold', 'Tibere', 'Cormorant Garamond', 'EB Garamond', 'Gelasio', 'Cinzel', Georgia, serif",
                      letterSpacing: '0.06em',
                      lineHeight: '0.9',
                      fontWeight: 700,
                      color: '#FFFFFF'
                    }}
                  >
                    CONSERVVE
                  </span>
                  <span
                    className="font-tibere font-bold text-[22px] xl:text-[26px] whitespace-nowrap"
                    style={{
                      fontFamily: "'Tibere OT W03 Medium', 'FF Tibere Medium', 'FF Tibere Std Medium', 'FF Tibere Std-Bold', 'FFTibereStd-Bold', 'FF Tibere Std', 'FF Tibere', 'Tibere OTW03-Bold', 'TibereOTW03-Bold', 'Tibere', 'Cormorant Garamond', 'EB Garamond', 'Gelasio', 'Cinzel', Georgia, serif",
                      letterSpacing: '0.08em',
                      lineHeight: '0.9',
                      fontWeight: 700,
                      color: 'rgba(255, 255, 255, 0.9)',
                      marginTop: '5px'
                    }}
                  >
                    INFRA SOLUTIONSS
                  </span>
                </div>
              </div>
            </div>

            {/* COLUMN 2: Navigation Links (Line 1: Home, About Us, Services; Line 2: Careers, Contact Us) */}
            <div className="flex flex-col items-center lg:pt-3 pt-3 w-full justify-self-center text-left">
              <div className="grid grid-cols-3 gap-x-10 md:gap-x-14 gap-y-6 w-full max-w-[480px] xl:max-w-[560px] justify-items-start text-left">
                {/* ── ROW 1 ── */}
                {/* 1. HOME */}
                <Link
                  href="/"
                  className="font-gotham antialiased uppercase tracking-widest text-[11px] font-semibold whitespace-nowrap relative group pb-1 w-fit"
                  style={{ fontFamily: "'Gotham', Arial, sans-serif" }}
                >
                  <span className="text-white group-hover:text-[#BFA052] transition-colors duration-300">
                    Home
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#BFA052] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
                </Link>

                {/* 2. ABOUT US (With Dropdown for Our Leadership) */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsAboutHovered(true)}
                  onMouseLeave={() => setIsAboutHovered(false)}
                >
                  <div className="font-gotham antialiased uppercase tracking-widest text-[11px] font-semibold flex items-center gap-1 focus:outline-none whitespace-nowrap relative group pb-1 w-fit">
                    <Link
                      href="/about"
                      className="text-white group-hover:text-[#BFA052] transition-colors duration-300"
                      style={{ fontFamily: "'Gotham', Arial, sans-serif" }}
                    >
                      About Us
                    </Link>
                    <button
                      type="button"
                      onClick={() => setIsAboutOpenMobile(!isAboutOpenMobile)}
                      className="focus:outline-none"
                      aria-label="Toggle About Us menu"
                    >
                      <ChevronDown className="w-3 h-3 text-[#BFA052]" />
                    </button>
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#BFA052] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
                  </div>

                  {/* Desktop Dropdown (Hover) */}
                  <AnimatePresence>
                    {isAboutHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.15 }}
                        className="hidden lg:block absolute left-0 top-full mt-2 py-1.5 w-36 rounded shadow-lg z-50 text-left"
                        style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #BFA052' }}
                      >
                        <Link
                          href="/leadership"
                          className="block px-3 py-1.5 text-[9.5px] font-bold text-[#0C2C4D] hover:bg-[#BFA052]/10 hover:text-[#BFA052] transition-all tracking-wider font-gotham whitespace-nowrap"
                          style={{ fontFamily: "'Gotham', Arial, sans-serif" }}
                        >
                          OUR LEADERSHIP
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Mobile/Tablet Accordion (Click) */}
                  <AnimatePresence>
                    {isAboutOpenMobile && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="lg:hidden overflow-hidden mt-2 rounded text-left"
                        style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #BFA052' }}
                      >
                        <Link
                          href="/leadership"
                          className="block px-3 py-1.5 text-[9.5px] font-bold text-[#0C2C4D] hover:bg-[#BFA052]/10 hover:text-[#BFA052] transition-all tracking-wider font-gotham whitespace-nowrap"
                          style={{ fontFamily: "'Gotham', Arial, sans-serif" }}
                        >
                          OUR LEADERSHIP
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 3. SERVICES (With Dropdown for Land Acquisition & Land Approval) */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsServicesHovered(true)}
                  onMouseLeave={() => setIsServicesHovered(false)}
                >
                  <button
                    onClick={() => setIsServicesOpenMobile(!isServicesOpenMobile)}
                    className="font-gotham antialiased uppercase tracking-widest text-[11px] font-semibold flex items-center gap-1 focus:outline-none whitespace-nowrap relative group pb-1 w-fit"
                    style={{ fontFamily: "'Gotham', Arial, sans-serif" }}
                  >
                    <span className="text-white group-hover:text-[#BFA052] transition-colors duration-300">Services</span>
                    <ChevronDown className="w-3 h-3 text-[#BFA052]" />
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#BFA052] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
                  </button>

                  {/* Desktop Dropdown (Hover) */}
                  <AnimatePresence>
                    {isServicesHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.15 }}
                        className="hidden lg:block absolute left-0 top-full mt-2 py-1.5 w-36 rounded shadow-lg z-50 text-left"
                        style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #BFA052' }}
                      >
                        <Link
                          href="/services/land-acquisition"
                          className="block px-3 py-1.5 text-[9.5px] font-bold text-[#0C2C4D] hover:bg-[#BFA052]/10 hover:text-[#BFA052] transition-all tracking-wider font-gotham whitespace-nowrap"
                          style={{ fontFamily: "'Gotham', Arial, sans-serif" }}
                        >
                          LAND ACQUISITION
                        </Link>
                        <Link
                          href="/services/land-approval"
                          className="block px-3 py-1.5 text-[9.5px] font-bold text-[#0C2C4D] hover:bg-[#BFA052]/10 hover:text-[#BFA052] transition-all tracking-wider font-gotham whitespace-nowrap"
                          style={{ fontFamily: "'Gotham', Arial, sans-serif" }}
                        >
                          LAND APPROVAL
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Mobile/Tablet Accordion (Click) */}
                  <AnimatePresence>
                    {isServicesOpenMobile && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="lg:hidden overflow-hidden mt-2 rounded text-left"
                        style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #BFA052' }}
                      >
                        <Link
                          href="/services/land-acquisition"
                          className="block px-3 py-1.5 text-[9.5px] font-bold text-[#0C2C4D] hover:bg-[#BFA052]/10 hover:text-[#BFA052] transition-all tracking-wider font-gotham whitespace-nowrap"
                          style={{ fontFamily: "'Gotham', Arial, sans-serif" }}
                        >
                          LAND ACQUISITION
                        </Link>
                        <Link
                          href="/services/land-approval"
                          className="block px-3 py-1.5 text-[9.5px] font-bold text-[#0C2C4D] hover:bg-[#BFA052]/10 hover:text-[#BFA052] transition-all tracking-wider font-gotham whitespace-nowrap"
                          style={{ fontFamily: "'Gotham', Arial, sans-serif" }}
                        >
                          LAND APPROVAL
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* ── ROW 2 ── */}
                {/* 4. CAREERS (Aligned under Col 1: HOME) */}
                <Link
                  href="/careers"
                  className="font-gotham antialiased uppercase tracking-widest text-[11px] font-semibold whitespace-nowrap relative group pb-1 w-fit"
                  style={{ fontFamily: "'Gotham', Arial, sans-serif" }}
                >
                  <span className="text-white group-hover:text-[#BFA052] transition-colors duration-300">
                    Careers
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#BFA052] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
                </Link>

                {/* 5. CONTACT US (Aligned under Col 2: ABOUT US) */}
                <Link
                  href="/contact"
                  className="font-gotham antialiased uppercase tracking-widest text-[11px] font-semibold whitespace-nowrap relative group pb-1 w-fit"
                  style={{ fontFamily: "'Gotham', Arial, sans-serif" }}
                >
                  <span className="text-white group-hover:text-[#BFA052] transition-colors duration-300">
                    Contact Us
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#BFA052] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
                </Link>
              </div>
            </div>

            {/* COLUMN 3: Mini Contact Form (4fr, Right-Justified) */}
            <div className="flex flex-col space-y-6 w-full lg:max-w-[380px] lg:ml-auto pt-1 justify-self-end text-left">
              <h4
                className="font-gotham text-center"
                style={{
                  fontFamily: "'Gotham', Arial, sans-serif",
                  fontSize: '14.5px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                }}
              >
                Get in Touch with Us
              </h4>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-[#BFA052] rounded-lg p-3 text-xs font-gotham text-[#BFA052] bg-[#0c2c4d]/40 backdrop-blur-sm"
                  style={{ fontFamily: "'Gotham', Arial, sans-serif" }}
                >
                  Thank you! Your message has been received. Our land development team will contact you shortly.
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name*"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      fontFamily: "'Gotham', Arial, sans-serif",
                      backgroundColor: 'rgba(12, 44, 77, 0.4)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(191, 160, 82, 0.6)',
                      borderRadius: '8px',
                      color: '#FFFFFF',
                      padding: '7px 11px',
                      height: '42px',
                      fontSize: '11px',
                      outline: 'none',
                    }}
                    className="placeholder-white/70 focus:ring-1 focus:ring-[#BFA052] transition-all font-gotham"
                  />

                  <input
                    type="text"
                    required
                    placeholder="Phone Number*"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      fontFamily: "'Gotham', Arial, sans-serif",
                      backgroundColor: 'rgba(12, 44, 77, 0.4)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(191, 160, 82, 0.6)',
                      borderRadius: '8px',
                      color: '#FFFFFF',
                      padding: '7px 11px',
                      height: '42px',
                      fontSize: '11px',
                      outline: 'none',
                    }}
                    className="placeholder-white/70 focus:ring-1 focus:ring-[#BFA052] transition-all font-gotham"
                  />

                  <input
                    type="email"
                    required
                    placeholder="Email ID*"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      fontFamily: "'Gotham', Arial, sans-serif",
                      backgroundColor: 'rgba(12, 44, 77, 0.4)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(191, 160, 82, 0.6)',
                      borderRadius: '8px',
                      color: '#FFFFFF',
                      padding: '7px 11px',
                      height: '42px',
                      fontSize: '11px',
                      outline: 'none',
                    }}
                    className="placeholder-white/70 focus:ring-1 focus:ring-[#BFA052] transition-all font-gotham"
                  />

                  <textarea
                    required
                    rows={3}
                    placeholder="Write your message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      fontFamily: "'Gotham', Arial, sans-serif",
                      backgroundColor: 'rgba(12, 44, 77, 0.4)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(191, 160, 82, 0.6)',
                      borderRadius: '8px',
                      color: '#FFFFFF',
                      padding: '10px 12px',
                      height: '84px',
                      fontSize: '11px',
                      outline: 'none',
                      resize: 'none',
                    }}
                    className="placeholder-white/70 focus:ring-1 focus:ring-[#BFA052] transition-all font-gotham"
                  />

                  {formError && (
                    <div className="border border-red-400/60 rounded-lg p-2 text-[11px] font-gotham text-red-300 bg-red-950/40 backdrop-blur-sm">
                      {formError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      fontFamily: "'Gotham', Arial, sans-serif",
                      fontWeight: 700,
                      backgroundColor: '#BFA052',
                      color: '#FFFFFF',
                      borderRadius: '8px',
                      padding: '10px',
                      height: '42px',
                      fontSize: '11px',
                      border: 'none',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      letterSpacing: '0.1em',
                      opacity: isSubmitting ? 0.7 : 1,
                    }}
                    className="transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(191,160,82,0.5)] active:scale-[0.98] font-gotham"
                  >
                    {isSubmitting ? 'SENDING...' : "LET'S CONNECT"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Centered Copyright text absolute positioned inside the bottom navy stripe of the background image */}
        <div
          style={{
            position: 'absolute',
            bottom: '6px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            textAlign: 'center',
            zIndex: 20
          }}
        >
          <p
            style={{
              fontFamily: "'Gotham', Arial, sans-serif",
              fontSize: '10px',
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.75)',
              textTransform: 'uppercase',
              margin: 0
            }}
            className="font-gotham font-semibold tracking-wider"
          >
            © 2026 CONSERVVE INFRA SOLUTIONSS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
