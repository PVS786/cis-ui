'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function Footer() {
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', phone: '', email: '', message: '' });
      }, 3000);
    }
  };

  return (
    <footer className="w-full flex flex-col text-white z-10">
      
      {/* ─── TOP SECTION: CONTENT & ARTWORK BACKGROUND ─── */}
      <div 
        className="w-full pt-20 pb-24 px-6 md:px-12 lg:px-20"
        style={{
          backgroundImage: "url('/footer_base.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Responsive 3-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* COLUMN 1: Company Branding (col-span-3) */}
            <div className="lg:col-span-3 flex flex-col items-start pt-2">
              <div className="flex items-center gap-[14px]">
                <div style={{ height: 55, display: 'flex', alignItems: 'center' }}>
                  <Image
                    src="/logo-transparent-dark.png"
                    alt="Conservve Logo"
                    height={55}
                    width={55}
                    style={{ height: '100%', width: 'auto', objectFit: 'contain' }}
                    priority
                  />
                </div>
                <div 
                  className="flex flex-col justify-center"
                  style={{ height: 55 }}
                >
                  <span 
                    className="font-tibere"
                    style={{ 
                      fontFamily: "'Tibere OT W03 Medium', 'FF Tibere Medium', 'FF Tibere Std Medium', 'FF Tibere Std-Bold', 'FFTibereStd-Bold', 'FF Tibere Std', 'FF Tibere', 'Tibere OTW03-Bold', 'TibereOTW03-Bold', 'Tibere', 'Cormorant Garamond', 'EB Garamond', 'Gelasio', 'Cinzel', Georgia, serif", 
                      fontSize: '22px', 
                      fontWeight: 700, 
                      color: '#FFFFFF', 
                      lineHeight: '1.1',
                      letterSpacing: '0.05em'
                    }}
                  >
                    CONSERVVE
                  </span>
                  <span 
                    className="font-gotham"
                    style={{ 
                      fontFamily: "'Gotham', Arial, sans-serif", 
                      fontSize: '9.5px', 
                      fontWeight: 500, 
                      color: '#FFFFFF', 
                      lineHeight: '1.2',
                      letterSpacing: '0.22em',
                      marginTop: '3px'
                    }}
                  >
                    INFRA SOLUTIONS
                  </span>
                </div>
              </div>
            </div>

            {/* COLUMN 2: Navigation Links (col-span-5) */}
            <div className="lg:col-span-5 flex flex-col pt-2">
              <div className="grid grid-cols-3 gap-x-4 gap-y-6 md:gap-x-12 w-full">
                {/* HOME */}
                <Link 
                  href="/" 
                  className="font-gotham hover:text-[#BFA052] transition-colors duration-200 uppercase tracking-widest text-[13px] font-semibold" 
                  style={{ fontFamily: "'Gotham', Arial, sans-serif", color: '#BFA052' }}
                >
                  Home
                </Link>

                {/* ABOUT US */}
                <Link 
                  href="/about" 
                  className="font-gotham hover:text-[#BFA052] transition-colors duration-200 uppercase tracking-widest text-[13px] font-semibold" 
                  style={{ fontFamily: "'Gotham', Arial, sans-serif", color: '#FFFFFF' }}
                >
                  About Us
                </Link>

                {/* LEADERSHIP */}
                <Link 
                  href="/leadership" 
                  className="font-gotham hover:text-[#BFA052] transition-colors duration-200 uppercase tracking-widest text-[13px] font-semibold" 
                  style={{ fontFamily: "'Gotham', Arial, sans-serif", color: '#FFFFFF' }}
                >
                  Leadership
                </Link>

                {/* SERVICES */}
                <div 
                  className="relative"
                  onMouseEnter={() => setIsServicesHovered(true)}
                  onMouseLeave={() => setIsServicesHovered(false)}
                >
                  <button 
                    onClick={() => setIsServicesOpenMobile(!isServicesOpenMobile)}
                    className="font-gotham hover:text-[#BFA052] transition-colors duration-200 uppercase tracking-widest text-[13px] font-semibold flex items-center gap-1 focus:outline-none" 
                    style={{ fontFamily: "'Gotham', Arial, sans-serif", color: '#FFFFFF' }}
                  >
                    <span>Services</span>
                    <ChevronDown className="w-3.5 h-3.5 text-[#BFA052]" />
                  </button>

                  {/* Desktop Dropdown (Hover) */}
                  <AnimatePresence>
                    {isServicesHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.15 }}
                        className="hidden lg:block absolute left-0 top-full mt-2 py-1.5 w-44 rounded shadow-lg z-50"
                        style={{ backgroundColor: '#BFA052' }}
                      >
                        <Link 
                          href="/services/land-approval" 
                          className="block px-4 py-2 text-[11.5px] font-bold text-[#0C2C4D] hover:bg-white/20 transition-all tracking-wider font-gotham"
                          style={{ fontFamily: "'Gotham', Arial, sans-serif" }}
                        >
                          LAND APPROVAL
                        </Link>
                        <Link 
                          href="/services/land-acquisition" 
                          className="block px-4 py-2 text-[11.5px] font-bold text-[#0C2C4D] hover:bg-white/20 transition-all tracking-wider font-gotham"
                          style={{ fontFamily: "'Gotham', Arial, sans-serif" }}
                        >
                          LAND ACQUISITION
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
                        className="lg:hidden overflow-hidden mt-2 rounded"
                        style={{ backgroundColor: '#BFA052' }}
                      >
                        <Link 
                          href="/services/land-approval" 
                          className="block px-4 py-2 text-[11.5px] font-bold text-[#0C2C4D] hover:bg-white/20 transition-all tracking-wider font-gotham"
                          style={{ fontFamily: "'Gotham', Arial, sans-serif" }}
                        >
                          LAND APPROVAL
                        </Link>
                        <Link 
                          href="/services/land-acquisition" 
                          className="block px-4 py-2 text-[11.5px] font-bold text-[#0C2C4D] hover:bg-white/20 transition-all tracking-wider font-gotham"
                          style={{ fontFamily: "'Gotham', Arial, sans-serif" }}
                        >
                          LAND ACQUISITION
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* CAREERS */}
                <Link 
                  href="/careers" 
                  className="font-gotham hover:text-[#BFA052] transition-colors duration-200 uppercase tracking-widest text-[13px] font-semibold" 
                  style={{ fontFamily: "'Gotham', Arial, sans-serif", color: '#FFFFFF' }}
                >
                  Careers
                </Link>

                {/* CONTACT US */}
                <Link 
                  href="/contact" 
                  className="font-gotham hover:text-[#BFA052] transition-colors duration-200 uppercase tracking-widest text-[13px] font-semibold" 
                  style={{ fontFamily: "'Gotham', Arial, sans-serif", color: '#FFFFFF' }}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* COLUMN 3: Mini Contact Form (col-span-4) */}
            <div className="lg:col-span-4 flex flex-col space-y-6">
              <h4 
                className="font-gotham"
                style={{ 
                  fontFamily: "'Gotham', Arial, sans-serif", 
                  fontSize: '18px', 
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
                  className="border border-[#BFA052] rounded-lg p-4 text-xs font-gotham text-[#BFA052] bg-[#0c2c4d]/40 backdrop-blur-sm"
                  style={{ fontFamily: "'Gotham', Arial, sans-serif" }}
                >
                  Thank you! Your message has been received. Our land development team will contact you shortly.
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
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
                      borderRadius: '10px',
                      color: '#FFFFFF',
                      padding: '10px 14px',
                      height: '56px',
                      fontSize: '12px',
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
                      borderRadius: '10px',
                      color: '#FFFFFF',
                      padding: '10px 14px',
                      height: '56px',
                      fontSize: '12px',
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
                      borderRadius: '10px',
                      color: '#FFFFFF',
                      padding: '10px 14px',
                      height: '56px',
                      fontSize: '12px',
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
                      borderRadius: '10px',
                      color: '#FFFFFF',
                      padding: '14px',
                      height: '120px',
                      fontSize: '12px',
                      outline: 'none',
                      resize: 'none',
                    }}
                    className="placeholder-white/70 focus:ring-1 focus:ring-[#BFA052] transition-all font-gotham"
                  />

                  <button
                    type="submit"
                    style={{
                      fontFamily: "'Gotham', Arial, sans-serif",
                      fontWeight: 700,
                      backgroundColor: '#BFA052',
                      color: '#FFFFFF',
                      borderRadius: '10px',
                      padding: '12px',
                      height: '56px',
                      fontSize: '12px',
                      border: 'none',
                      cursor: 'pointer',
                      letterSpacing: '0.1em',
                    }}
                    className="transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(191,160,82,0.5)] active:scale-[0.98] font-gotham"
                  >
                    LET&apos;S CONNECT
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ─── BOTTOM SECTION: SOLID NAVY COLOR (NO OVERLAPPING BACKGROUND LINES) ─── */}
      <div 
        className="w-full py-6 px-6 md:px-12 lg:px-20"
        style={{
          backgroundColor: '#051628',
          borderTop: '1px solid rgba(191, 160, 82, 0.3)',
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div 
            style={{ 
              fontFamily: "'Gotham', Arial, sans-serif", 
              fontSize: '10px', 
              letterSpacing: '0.12em', 
              color: 'rgba(255,255,255,0.75)',
              textTransform: 'uppercase'
            }}
            className="text-center md:text-left flex flex-col md:flex-row md:gap-1.5 font-gotham"
          >
            <span>© 2026 CONSERVVE INFRA SOLUTIONS.</span>
            <span>ALL RIGHTS RESERVED.</span>
          </div>

          <div 
            style={{ 
              fontFamily: "'Gotham', Arial, sans-serif", 
              fontSize: '10px', 
              letterSpacing: '0.12em', 
              color: 'rgba(255,255,255,0.75)'
            }}
            className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-end font-semibold text-center uppercase font-gotham"
          >
            <Link href="/privacy" className="hover:text-[#BFA052] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#BFA052] transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="hover:text-[#BFA052] transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
