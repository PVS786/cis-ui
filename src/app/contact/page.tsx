'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, User, Building2, FileText, Send } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [txt1, setTxt1] = useState('');
  const [txtGold, setTxtGold] = useState('');
  const [txtComma, setTxtComma] = useState('');
  const [txt2, setTxt2] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const p1 = "Your questions deserve ";
    const p2 = "clarity";
    const p3 = ",";
    const p4 = "start the conversation today.";
    
    let currentIdx = 0;
    const totalLength = p1.length + p2.length + p3.length + p4.length;
    
    const timer = setInterval(() => {
      currentIdx++;
      if (currentIdx <= p1.length) {
        setTxt1(p1.slice(0, currentIdx));
      } else if (currentIdx <= p1.length + p2.length) {
        setTxt1(p1);
        setTxtGold(p2.slice(0, currentIdx - p1.length));
      } else if (currentIdx <= p1.length + p2.length + p3.length) {
        setTxt1(p1);
        setTxtGold(p2);
        setTxtComma(p3.slice(0, currentIdx - p1.length - p2.length));
      } else if (currentIdx <= totalLength) {
        setTxt1(p1);
        setTxtGold(p2);
        setTxtComma(p3);
        setTxt2(p4.slice(0, currentIdx - p1.length - p2.length - p3.length));
      } else {
        clearInterval(timer);
        // Keep blinking for 4 seconds, then turn off cursor
        setTimeout(() => {
          setIsTyping(false);
        }, 4000);
      }
    }, 55); // 55ms per character typing speed
    
    return () => clearInterval(timer);
  }, []);

  const showCursorAt = (part: number) => {
    if (!isTyping) return false;
    const p1Len = 23;
    const p2Len = 7;
    const p3Len = 1;
    const currentLen = txt1.length + txtGold.length + txtComma.length + txt2.length;
    
    if (part === 1 && currentLen < p1Len) return true;
    if (part === 2 && currentLen >= p1Len && currentLen < p1Len + p2Len) return true;
    if (part === 3 && currentLen >= p1Len + p2Len && currentLen < p1Len + p2Len + p3Len) return true;
    if (part === 4 && currentLen >= p1Len + p2Len + p3Len) return true;
    return false;
  };

  const [activeIndicator, setActiveIndicator] = useState<'name' | 'email' | 'phone' | 'message'>('name');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 6000);
  };

  return (
    <div className="w-full min-h-screen bg-brand-gray-light flex flex-col relative overflow-hidden">
      {/* Blueprint fine aesthetic network vector grid lines (matches WhyPartnerSection) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="h-full w-full stroke-brand-gold/35 fill-none stroke-[0.06]">
          <pattern id="contact-hexes" x="0" y="0" width="10" height="17.3" patternUnits="userSpaceOnUse">
            <path d="M5 0 L10 2.8 L10 8.5 L5 11.3 L0 8.5 L0 2.8 Z" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#contact-hexes)" />
        </svg>
      </div>

      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#1e5c94]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Premium Image Hero Section */}
      <div className="relative w-full h-[380px] xs:h-[440px] md:h-[520px] lg:h-[580px] flex items-center bg-brand-navy overflow-hidden">
        {/* Background Image */}
        <Image
          src="/contact-hero-bg.png"
          alt="Contact Hero Background"
          fill
          priority
          className="object-cover object-center z-0"
        />
        {/* Dark overlay with soft blue-navy tint to make text highly legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/45 z-10" />

        {/* Text overlay Container */}
        <div className="max-w-[90rem] mx-auto pl-2 md:pl-4 lg:pl-6 pr-6 md:pr-12 lg:pr-16 w-full relative z-20 pt-20 md:pt-28">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ fontFamily: "'Poppins', sans-serif" }}
            className="font-poppins text-white text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.25] min-h-[2.5em]"
          >
            {txt1}
            {showCursorAt(1) && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-[3px] h-[0.85em] bg-white inline-block align-middle ml-0.5"
              />
            )}
            <span className="text-brand-gold">{txtGold}</span>
            {showCursorAt(2) && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-[3px] h-[0.85em] bg-brand-gold inline-block align-middle ml-0.5"
              />
            )}
            {txtComma}
            {showCursorAt(3) && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-[3px] h-[0.85em] bg-white inline-block align-middle ml-0.5"
              />
            )}
            <br />
            {txt2}
            {showCursorAt(4) && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-[3px] h-[0.85em] bg-white inline-block align-middle ml-0.5"
              />
            )}
          </motion.h1>
        </div>
      </div>

      {/* Grid Content Section Wrapper with background */}
      <div
        className="w-full flex-1"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.90)), url('/Logo_Distort_BG.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '300px'
        }}
      >
        <div className="max-w-[90rem] mx-auto pl-2 md:pl-4 lg:pl-6 pr-6 md:pr-12 lg:pr-16 py-16 md:py-24 relative z-10 w-full flex flex-col justify-start">
          
          {/* Header Text Section above the Grid */}
          <div className="mb-12 md:mb-16 max-w-5xl">
            <h2 
              className="font-tibere text-brand-navy text-2xl md:text-3xl lg:text-[2.5rem] font-bold leading-tight tracking-wide uppercase mb-4"
              style={{ letterSpacing: '0.04em' }}
            >
              From <span className="text-brand-gold">land acquisition</span> to approvals, every successful development starts with the <span className="text-brand-gold">right guidance</span>.
            </h2>
            <p 
              className="font-gotham text-brand-navy text-lg md:text-xl font-medium"
              style={{ fontFamily: "'Gotham', Arial, sans-serif" }}
            >
              Are you ready to take the <span className="text-brand-gold">next step</span>?
            </p>
          </div>

          {/* High-Fidelity Placeholder Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 w-full items-start">
          {/* Left Column: Contact Channels & Offices */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col gap-8 w-full"
          >
            {/* Quick Contact Box */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_12px_40px_rgba(12,44,77,0.04)] border border-brand-navy/5 flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-gold z-10" />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-navy/5 flex items-center justify-center text-brand-navy shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-gotham font-bold text-xs uppercase tracking-wider text-slate-500 mb-1">
                    Call Our Team
                  </h3>
                  <p className="font-gotham font-bold text-lg text-brand-navy hover:text-brand-gold transition-colors duration-300">
                    +91 44 4860 4880
                  </p>
                  <p className="text-xs text-slate-500 mt-1 font-poppins font-medium">
                    Mon–Sat, 9:30 AM – 6:30 PM (IST)
                  </p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-slate-100" />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-navy/5 flex items-center justify-center text-brand-navy shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-gotham font-bold text-xs uppercase tracking-wider text-slate-500 mb-1">
                    Electronic Mail
                  </h3>
                  <p className="font-gotham font-bold text-lg text-brand-navy hover:text-brand-gold transition-colors duration-300">
                    info@conservve.com
                  </p>
                  <p className="text-xs text-slate-500 mt-1 font-poppins font-medium">
                    We respond to all institutional inquiries within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate Headquarters */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_12px_40px_rgba(12,44,77,0.04)] border border-brand-navy/5 flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-navy z-10" />

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <h3 className="font-gotham font-extrabold text-sm uppercase tracking-wider text-brand-navy">
                  Corporate Headquarters
                </h3>
              </div>
              <p className="font-poppins font-medium text-slate-700 text-sm leading-relaxed pl-6">
                Conservve Infra Solutions<br />
                Capital Tower, Suite 402,<br />
                Anna Salai, Chennai, TN - 600002
              </p>
            </div>
          </motion.div>

          {/* Right Column: Premium Inquiry Form Canvas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="bg-[#0C2C4D] text-white rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(12,44,77,0.15)] relative overflow-hidden"
            style={{
              backgroundImage: "linear-gradient(rgba(12, 44, 77, 0.96), rgba(12, 44, 77, 0.96)), url('/Logo_Distort_BG.png')",
              backgroundRepeat: 'repeat',
              backgroundSize: '120px',
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-brand-gold z-20" />

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-brand-gold/30 rounded-xl p-8 bg-[#07182b]/60 backdrop-blur-sm flex flex-col items-center justify-center text-center py-16"
              >
                <div className="w-16 h-16 rounded-full bg-brand-gold/15 flex items-center justify-center mb-6 text-brand-gold">
                  <Send className="w-8 h-8" />
                </div>
                <h4 className="font-gotham font-bold text-lg uppercase tracking-wider text-brand-gold mb-3">
                  Thank You!
                </h4>
                <p className="text-white/80 font-poppins text-sm leading-relaxed max-w-md">
                  Your message has been received successfully. Our strategic planning and land development advisory team will review your details and contact you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex gap-6 md:gap-8 items-stretch text-left">
                {/* Left Column: Progress Indicators */}
                <div className="hidden sm:flex flex-col items-center justify-between relative w-16 py-4 shrink-0">
                  {/* Vertical connecting line */}
                  <div className="absolute top-8 bottom-8 w-[1.5px] bg-white/10 z-0" />
                  
                  {/* Indicator 1: NAME */}
                  <div className="flex flex-col items-center gap-1.5 z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeIndicator === 'name' 
                        ? 'ring-2 ring-brand-gold ring-offset-4 ring-offset-[#0C2C4D] bg-[#0C2C4D] text-brand-gold font-bold' 
                        : 'border border-white/20 bg-brand-navy/60 text-white/50'
                    }`}>
                      <User className="w-5 h-5" />
                    </div>
                    <span className={`text-[9px] font-gotham font-normal uppercase tracking-wider transition-colors duration-300 ${
                      activeIndicator === 'name' ? 'text-brand-gold' : 'text-white/40'
                    }`}>
                      Name
                    </span>
                  </div>

                  {/* Indicator 2: EMAIL */}
                  <div className="flex flex-col items-center gap-1.5 z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeIndicator === 'email' 
                        ? 'ring-2 ring-brand-gold ring-offset-4 ring-offset-[#0C2C4D] bg-[#0C2C4D] text-brand-gold font-bold' 
                        : 'border border-white/20 bg-brand-navy/60 text-white/50'
                    }`}>
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className={`text-[9px] font-gotham font-normal uppercase tracking-wider transition-colors duration-300 ${
                      activeIndicator === 'email' ? 'text-brand-gold' : 'text-white/40'
                    }`}>
                      Email
                    </span>
                  </div>

                  {/* Indicator 3: PHONE */}
                  <div className="flex flex-col items-center gap-1.5 z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeIndicator === 'phone' 
                        ? 'ring-2 ring-brand-gold ring-offset-4 ring-offset-[#0C2C4D] bg-[#0C2C4D] text-brand-gold font-bold' 
                        : 'border border-white/20 bg-brand-navy/60 text-white/50'
                    }`}>
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className={`text-[9px] font-gotham font-normal uppercase tracking-wider transition-colors duration-300 ${
                      activeIndicator === 'phone' ? 'text-brand-gold' : 'text-white/40'
                    }`}>
                      Phone
                    </span>
                  </div>

                  {/* Indicator 4: MESSAGE */}
                  <div className="flex flex-col items-center gap-1.5 z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeIndicator === 'message' 
                        ? 'ring-2 ring-brand-gold ring-offset-4 ring-offset-[#0C2C4D] bg-[#0C2C4D] text-brand-gold font-bold' 
                        : 'border border-white/20 bg-brand-navy/60 text-white/50'
                    }`}>
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className={`text-[9px] font-gotham font-normal uppercase tracking-wider transition-colors duration-300 ${
                      activeIndicator === 'message' ? 'text-brand-gold' : 'text-white/40'
                    }`}>
                      Message
                    </span>
                  </div>
                </div>

                {/* Right Column: Input Fields */}
                <div className="flex-1 flex flex-col gap-5">
                  {/* Row 1: Name and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="flex items-center gap-2 text-xs font-gotham font-normal tracking-wider text-white/80">
                        <User className="w-3.5 h-3.5 text-brand-gold" />
                        <span>FULL NAME <span className="text-brand-gold">*</span></span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Devendra Singh"
                        onFocus={() => setActiveIndicator('name')}
                        className="w-full px-4 py-3 rounded-lg bg-[#061d33] border border-[#1a426b] text-white placeholder-[#647F9E] focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all duration-300"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="flex items-center gap-2 text-xs font-gotham font-normal tracking-wider text-white/80">
                        <Building2 className="w-3.5 h-3.5 text-brand-gold" />
                        <span>COMPANY NAME <span className="text-brand-gold">*</span></span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Conservve Infra"
                        onFocus={() => setActiveIndicator('name')}
                        className="w-full px-4 py-3 rounded-lg bg-[#061d33] border border-[#1a426b] text-white placeholder-[#647F9E] focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Address */}
                    <div className="flex flex-col gap-1.5">
                      <label className="flex items-center gap-2 text-xs font-gotham font-normal tracking-wider text-white/80">
                        <Mail className="w-3.5 h-3.5 text-brand-gold" />
                        <span>EMAIL ADDRESS <span className="text-brand-gold">*</span></span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. info@conservve.com"
                        onFocus={() => setActiveIndicator('email')}
                        className="w-full px-4 py-3 rounded-lg bg-[#061d33] border border-[#1a426b] text-white placeholder-[#647F9E] focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all duration-300"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col gap-1.5">
                      <label className="flex items-center gap-2 text-xs font-gotham font-normal tracking-wider text-white/80">
                        <Phone className="w-3.5 h-3.5 text-brand-gold" />
                        <span>PHONE NUMBER <span className="text-brand-gold">*</span></span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        onFocus={() => setActiveIndicator('phone')}
                        className="w-full px-4 py-3 rounded-lg bg-[#061d33] border border-[#1a426b] text-white placeholder-[#647F9E] focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="flex items-center gap-2 text-xs font-gotham font-normal tracking-wider text-white/80">
                      <FileText className="w-3.5 h-3.5 text-brand-gold" />
                      <span>MESSAGE <span className="text-brand-gold">*</span></span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Provide details about your project scope, locations, or key engineering milestones..."
                      onFocus={() => setActiveIndicator('message')}
                      className="w-full px-4 py-3 rounded-lg bg-[#061d33] border border-[#1a426b] text-white placeholder-[#647F9E] focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 mt-2 rounded-lg bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-gotham font-medium text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 transform active:scale-[0.98]"
                  >
                    <span>Submit Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      </div>
    </div>
  );
}
