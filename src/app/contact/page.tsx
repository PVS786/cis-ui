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

  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const isNameComplete = fullName.trim() !== '' && companyName.trim() !== '';
  const isEmailComplete = email.trim() !== '';
  const isPhoneComplete = phone.trim() !== '';
  const isMessageComplete = message.trim() !== '';

  const completedStepsCount = [isNameComplete, isEmailComplete, isPhoneComplete, isMessageComplete].filter(Boolean).length;
  const progressHeight = completedStepsCount === 0 ? 0 : completedStepsCount === 1 ? 33.3 : completedStepsCount === 2 ? 66.7 : 100;



  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Reset values upon submission success
    setTimeout(() => {
      setFormSubmitted(false);
      setFullName('');
      setCompanyName('');
      setEmail('');
      setPhone('');
      setMessage('');
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
      <div className="relative w-full h-[450px] xs:h-[520px] md:h-[620px] lg:h-[700px] flex items-center bg-brand-navy overflow-hidden">
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
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-16 w-full relative z-20 pt-20 md:pt-28">
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

      {/* Golden Ribbon Section Break (matches homepage layout transitions) */}
      <div className="w-full h-[4px] bg-brand-gold relative z-20 shadow-[0_2px_10px_rgba(0,0,0,0.15)]" />

      {/* Grid Content Section Wrapper with background */}
      <div
        className="w-full flex-1"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.90)), url('/Logo_Distort_BG.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '300px'
        }}
      >
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-16 pt-6 md:pt-10 pb-16 md:pb-24 relative z-10 w-full flex flex-col justify-start">

          {/* Header Flex Section above the Grid */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 md:mb-16 w-full">
            {/* Left: Heading text */}
            <div className="flex-1 lg:max-w-[70%]">
              <h2
                className="font-tibere text-brand-navy text-xl md:text-2xl lg:text-[1.75rem] font-bold leading-tight tracking-wide uppercase"
                style={{ letterSpacing: '0.04em' }}
              >
                <span className="block md:whitespace-nowrap">From <span className="text-brand-gold">land acquisition</span> to <span className="text-brand-gold">approvals</span>,</span>
                <span className="block md:whitespace-nowrap">every successful development starts with</span>
                <span className="block md:whitespace-nowrap">the <span className="text-brand-gold">right guidance</span>.</span>
              </h2>
            </div>

            {/* Right: Graphic and Prompt aligned to the right side */}
            <div className="flex items-center gap-6 lg:gap-8 shrink-0 ml-auto w-full lg:w-auto justify-end">
              {/* Middle: Brand Chevron graphic */}
              <div className="hidden lg:flex justify-center items-center relative w-[180px] h-[180px]">
                <svg viewBox="0 0 200 200" className="w-full h-full select-none" fill="none">
                  {/* Halftone Dot Grid (Static - Filled Chevron Shape Matching Gold Chevron Angle) */}
                  <g fill="#BFA052">
                    {/* Column 1 (X=35, 8 dots, small & faded) */}
                    <circle cx="35" cy="30" r="1.2" opacity="0.2" />
                    <circle cx="35" cy="50" r="1.2" opacity="0.2" />
                    <circle cx="35" cy="70" r="1.2" opacity="0.2" />
                    <circle cx="35" cy="90" r="1.2" opacity="0.2" />
                    <circle cx="35" cy="110" r="1.2" opacity="0.2" />
                    <circle cx="35" cy="130" r="1.2" opacity="0.2" />
                    <circle cx="35" cy="150" r="1.2" opacity="0.2" />
                    <circle cx="35" cy="170" r="1.2" opacity="0.2" />
                    
                    {/* Column 2 (X=45, 7 dots) */}
                    <circle cx="45" cy="40" r="1.6" opacity="0.3" />
                    <circle cx="45" cy="60" r="1.6" opacity="0.3" />
                    <circle cx="45" cy="80" r="1.6" opacity="0.3" />
                    <circle cx="45" cy="100" r="1.6" opacity="0.3" />
                    <circle cx="45" cy="120" r="1.6" opacity="0.3" />
                    <circle cx="45" cy="140" r="1.6" opacity="0.3" />
                    <circle cx="45" cy="160" r="1.6" opacity="0.3" />
                    
                    {/* Column 3 (X=55, 5 dots) */}
                    <circle cx="55" cy="60" r="2.0" opacity="0.4" />
                    <circle cx="55" cy="80" r="2.0" opacity="0.4" />
                    <circle cx="55" cy="100" r="2.0" opacity="0.4" />
                    <circle cx="55" cy="120" r="2.0" opacity="0.4" />
                    <circle cx="55" cy="140" r="2.0" opacity="0.4" />
                    
                    {/* Column 4 (X=65, 4 dots) */}
                    <circle cx="65" cy="70" r="2.4" opacity="0.5" />
                    <circle cx="65" cy="90" r="2.4" opacity="0.5" />
                    <circle cx="65" cy="110" r="2.4" opacity="0.5" />
                    <circle cx="65" cy="130" r="2.4" opacity="0.5" />
                    
                    {/* Column 5 (X=75, 3 dots) */}
                    <circle cx="75" cy="80" r="2.8" opacity="0.6" />
                    <circle cx="75" cy="100" r="2.8" opacity="0.6" />
                    <circle cx="75" cy="120" r="2.8" opacity="0.6" />
                    
                    {/* Column 6 (X=85, 2 dots) */}
                    <circle cx="85" cy="90" r="3.2" opacity="0.7" />
                    <circle cx="85" cy="110" r="3.2" opacity="0.7" />
                    
                    {/* Column 7 (X=95, 1 dot, large & opaque) */}
                    <circle cx="95" cy="100" r="3.8" opacity="0.8" />
                  </g>

                  {/* Solid Gold Chevron with floating slide animation */}
                  <motion.path 
                    d="M 80 20 L 145 100 L 80 180 L 50 180 L 115 100 L 50 20 Z" 
                    fill="#BFA052" 
                    animate={{ x: [-3, 3, -3] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  />

                  {/* Solid Navy Chevron with opposing floating slide animation */}
                  <motion.path 
                    d="M 98 0 L 178 100 L 98 200 L 68 200 L 148 100 L 68 0 Z" 
                    fill="#0C2C4D" 
                    animate={{ x: [1.5, -1.5, 1.5] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  />
                </svg>
              </div>

              {/* Right: Next step text with animations (Single line, no arrow) */}
              <motion.div 
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                whileHover={{ x: 6 }}
                className="flex items-center shrink-0 cursor-pointer group"
              >
                <p
                  className="font-poppins text-brand-navy text-base xs:text-lg md:text-xl lg:text-2xl font-bold transition-colors duration-300 group-hover:text-brand-navy/85"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Are you ready to take the<br />
                  <span className="text-brand-gold transition-colors duration-300 group-hover:text-brand-gold/90">next step</span>?
                </p>
              </motion.div>
            </div>
          </div>

          {/* Dynamic 40:60 Form & Conversation Grid (Equal Heights via items-stretch) */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 w-full items-stretch">
            {/* Left Column: Let's Start the Conversation Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="w-full h-full flex"
            >
              {/* Let's Start the Conversation / Get in Touch Card */}
              <div className="bg-white rounded-2xl p-8 sm:p-12 md:p-14 shadow-[0_12px_40px_rgba(12,44,77,0.04)] border border-brand-navy/5 flex flex-col justify-between flex-1 relative overflow-hidden text-left h-full min-h-[400px]">
                <div className="absolute top-0 left-0 w-2 h-full bg-brand-gold z-10" />

                {/* Section 1: Let's Start the Conversation */}
                <div className="flex flex-col">
                  <h3 className="font-tibere text-brand-navy text-3xl md:text-4xl lg:text-[2.25rem] font-bold uppercase tracking-wide leading-tight">
                    Let's Start the <br />
                    <span className="text-brand-gold">Conversation</span>
                  </h3>

                  {/* Stylized divider with dynamic width animation (matches 3 images) */}
                  <div className="flex items-center w-24 h-1.5 mt-4 mb-5">
                    <motion.div
                      className="h-[3px] bg-brand-gold rounded-full"
                      animate={{ width: ["0%", "100%"] }}
                      transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.2, ease: "easeInOut" }}
                    />
                    <div className="h-[4px] w-3 bg-brand-navy rounded-full shrink-0 mx-1" />
                    <motion.div
                      className="h-[3px] bg-brand-gold rounded-full"
                      animate={{ width: ["100%", "0%"] }}
                      transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.2, ease: "easeInOut" }}
                    />
                  </div>

                  <p
                    className="font-poppins font-bold text-slate-700 text-base md:text-lg lg:text-[1.125rem] leading-relaxed"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Want to work with us or have questions? We'd love to hear from you.
                  </p>
                </div>

                {/* Thin separator line */}
                <div className="w-full h-[1px] bg-slate-100 my-6" />

                {/* Section 2: Get in Touch */}
                <div className="flex flex-col">
                  <h3 className="font-tibere text-brand-navy text-2xl md:text-3xl font-bold uppercase tracking-wide">
                    Get in <span className="text-brand-gold">Touch</span>
                  </h3>

                  {/* Stylized divider with dynamic width animation (matches 3 images) */}
                  <div className="flex items-center w-24 h-1.5 mt-3 mb-4">
                    <motion.div
                      className="h-[3px] bg-brand-gold rounded-full"
                      animate={{ width: ["0%", "100%"] }}
                      transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.2, ease: "easeInOut" }}
                    />
                    <div className="h-[4px] w-3 bg-brand-navy rounded-full shrink-0 mx-1" />
                    <motion.div
                      className="h-[3px] bg-brand-gold rounded-full"
                      animate={{ width: ["100%", "0%"] }}
                      transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.2, ease: "easeInOut" }}
                    />
                  </div>

                  <p
                    className="font-poppins font-bold text-slate-700 text-base md:text-lg lg:text-[1.125rem] leading-relaxed"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Fill out the form below and our team will get back to you shortly.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Premium Inquiry Form Canvas */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="bg-[#0C2C4D] text-white rounded-2xl pl-6 sm:pl-10 pr-8 sm:pr-14 py-8 sm:py-12 shadow-[0_20px_50px_rgba(12,44,77,0.15)] relative overflow-hidden w-full h-full flex flex-col justify-between"
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
                  <div className="hidden sm:flex flex-col items-center justify-between relative w-16 py-6 shrink-0">
                    {/* Progress bar container (from center of Circle 1 to center of Circle 4) */}
                    <div className="absolute top-12 bottom-12 w-[8px] bg-[#051424] border border-white/10 z-0 left-1/2 -translate-x-1/2 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${progressHeight}%` }}
                        transition={{ type: "spring", stiffness: 70, damping: 14 }}
                        className="w-full bg-brand-gold rounded-full relative overflow-hidden shadow-[0_0_12px_rgba(191,160,82,0.8)]"
                      >
                        {/* Fluid flow animate reflection overlay */}
                        {progressHeight > 0 && (
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent w-full h-[60px] animate-liquid-flow" />
                        )}
                      </motion.div>
                    </div>

                    {/* Indicator 1: NAME */}
                    <div className="z-10 relative">
                      {/* Pulsing ring for active state */}
                      {activeIndicator === 'name' && (
                        <motion.div
                          className="absolute -inset-1.5 rounded-full border border-brand-gold/50"
                          animate={{ scale: [1, 1.25, 1], opacity: [0.8, 0.1, 0.8] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        />
                      )}
                      <motion.div
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          backgroundColor: activeIndicator === 'name'
                            ? '#0C2C4D'
                            : isNameComplete
                              ? '#BFA052'
                              : '#0C2C4D',
                          borderColor: activeIndicator === 'name' || isNameComplete
                            ? '#BFA052'
                            : 'rgba(255, 255, 255, 0.2)',
                          color: activeIndicator === 'name'
                            ? '#BFA052'
                            : isNameComplete
                              ? '#0C2C4D'
                              : 'rgba(255, 255, 255, 0.5)',
                          scale: activeIndicator === 'name' ? 1.1 : 1
                        }}
                        transition={{ duration: 0.4 }}
                        className={`w-12 h-12 rounded-full flex items-center justify-center border transition-shadow duration-300 z-10 cursor-pointer ${activeIndicator === 'name' ? 'shadow-[0_0_15px_rgba(191,160,82,0.4)]' : ''
                          }`}
                      >
                        <motion.div
                          animate={isNameComplete ? { scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] } : {}}
                          transition={{ duration: 0.5 }}
                        >
                          <User className="w-5 h-5" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Indicator 2: EMAIL */}
                    <div className="z-10 relative">
                      {/* Pulsing ring for active state */}
                      {activeIndicator === 'email' && (
                        <motion.div
                          className="absolute -inset-1.5 rounded-full border border-brand-gold/50"
                          animate={{ scale: [1, 1.25, 1], opacity: [0.8, 0.1, 0.8] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        />
                      )}
                      <motion.div
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          backgroundColor: activeIndicator === 'email'
                            ? '#0C2C4D'
                            : isEmailComplete
                              ? '#BFA052'
                              : '#0C2C4D',
                          borderColor: activeIndicator === 'email' || isEmailComplete
                            ? '#BFA052'
                            : 'rgba(255, 255, 255, 0.2)',
                          color: activeIndicator === 'email'
                            ? '#BFA052'
                            : isEmailComplete
                              ? '#0C2C4D'
                              : 'rgba(255, 255, 255, 0.5)',
                          scale: activeIndicator === 'email' ? 1.1 : 1
                        }}
                        transition={{ duration: 0.4 }}
                        className={`w-12 h-12 rounded-full flex items-center justify-center border transition-shadow duration-300 z-10 cursor-pointer ${activeIndicator === 'email' ? 'shadow-[0_0_15px_rgba(191,160,82,0.4)]' : ''
                          }`}
                      >
                        <motion.div
                          animate={isEmailComplete ? { scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] } : {}}
                          transition={{ duration: 0.5 }}
                        >
                          <Mail className="w-5 h-5" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Indicator 3: PHONE */}
                    <div className="z-10 relative">
                      {/* Pulsing ring for active state */}
                      {activeIndicator === 'phone' && (
                        <motion.div
                          className="absolute -inset-1.5 rounded-full border border-brand-gold/50"
                          animate={{ scale: [1, 1.25, 1], opacity: [0.8, 0.1, 0.8] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        />
                      )}
                      <motion.div
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          backgroundColor: activeIndicator === 'phone'
                            ? '#0C2C4D'
                            : isPhoneComplete
                              ? '#BFA052'
                              : '#0C2C4D',
                          borderColor: activeIndicator === 'phone' || isPhoneComplete
                            ? '#BFA052'
                            : 'rgba(255, 255, 255, 0.2)',
                          color: activeIndicator === 'phone'
                            ? '#BFA052'
                            : isPhoneComplete
                              ? '#0C2C4D'
                              : 'rgba(255, 255, 255, 0.5)',
                          scale: activeIndicator === 'phone' ? 1.1 : 1
                        }}
                        transition={{ duration: 0.4 }}
                        className={`w-12 h-12 rounded-full flex items-center justify-center border transition-shadow duration-300 z-10 cursor-pointer ${activeIndicator === 'phone' ? 'shadow-[0_0_15px_rgba(191,160,82,0.4)]' : ''
                          }`}
                      >
                        <motion.div
                          animate={isPhoneComplete ? { scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] } : {}}
                          transition={{ duration: 0.5 }}
                        >
                          <Phone className="w-5 h-5" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Indicator 4: MESSAGE */}
                    <div className="z-10 relative">
                      {/* Pulsing ring for active state */}
                      {activeIndicator === 'message' && (
                        <motion.div
                          className="absolute -inset-1.5 rounded-full border border-brand-gold/50"
                          animate={{ scale: [1, 1.25, 1], opacity: [0.8, 0.1, 0.8] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        />
                      )}
                      <motion.div
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          backgroundColor: activeIndicator === 'message'
                            ? '#0C2C4D'
                            : isMessageComplete
                              ? '#BFA052'
                              : '#0C2C4D',
                          borderColor: activeIndicator === 'message' || isMessageComplete
                            ? '#BFA052'
                            : 'rgba(255, 255, 255, 0.2)',
                          color: activeIndicator === 'message'
                            ? '#BFA052'
                            : isMessageComplete
                              ? '#0C2C4D'
                              : 'rgba(255, 255, 255, 0.5)',
                          scale: activeIndicator === 'message' ? 1.1 : 1
                        }}
                        transition={{ duration: 0.4 }}
                        className={`w-12 h-12 rounded-full flex items-center justify-center border transition-shadow duration-300 z-10 cursor-pointer ${activeIndicator === 'message' ? 'shadow-[0_0_15px_rgba(191,160,82,0.4)]' : ''
                          }`}
                      >
                        <motion.div
                          animate={isMessageComplete ? { scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] } : {}}
                          transition={{ duration: 0.5 }}
                        >
                          <FileText className="w-5 h-5" />
                        </motion.div>
                      </motion.div>
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
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          onFocus={() => setActiveIndicator('name')}
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                          className="w-full px-4 py-3 rounded-lg bg-[#061d33] border border-[#1a426b] text-white placeholder-[#647F9E] font-poppins focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all duration-300"
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
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          onFocus={() => setActiveIndicator('name')}
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                          className="w-full px-4 py-3 rounded-lg bg-[#061d33] border border-[#1a426b] text-white placeholder-[#647F9E] font-poppins focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all duration-300"
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
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={() => setActiveIndicator('email')}
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                          className="w-full px-4 py-3 rounded-lg bg-[#061d33] border border-[#1a426b] text-white placeholder-[#647F9E] font-poppins focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all duration-300"
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
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          onFocus={() => setActiveIndicator('phone')}
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                          className="w-full px-4 py-3 rounded-lg bg-[#061d33] border border-[#1a426b] text-white placeholder-[#647F9E] font-poppins focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all duration-300"
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
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onFocus={() => setActiveIndicator('message')}
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                        className="w-full px-4 py-3 rounded-lg bg-[#061d33] border border-[#1a426b] text-white placeholder-[#647F9E] font-poppins focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all duration-300 resize-none"
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

          {/* Third Card Row: Office Location & Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 w-full items-stretch mt-12 lg:mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="w-full h-full flex"
            >
              {/* Office Location Card */}
              <div className="bg-white rounded-2xl p-8 sm:p-10 md:p-12 shadow-[0_12px_40px_rgba(12,44,77,0.04)] border border-brand-navy/5 flex flex-col justify-between flex-1 relative overflow-hidden text-left h-full">
                <div className="absolute top-0 left-0 w-2 h-full bg-brand-navy z-10" />

                <div className="flex flex-col gap-6">
                  {/* Header Badge */}
                  <div>
                    <span className="bg-brand-navy/5 text-brand-navy border border-brand-navy/10 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-gotham font-semibold inline-block">
                      Executive Headquarters
                    </span>
                  </div>

                  {/* Section Title */}
                  <div>
                    <h3 className="font-tibere text-brand-navy text-2xl md:text-3xl font-bold uppercase tracking-wider mb-2">
                      Office Location
                    </h3>
                    {/* Stylized divider with dynamic width animation (matches 3 images) */}
                    <div className="flex items-center w-24 h-1.5 mt-3">
                      <motion.div
                        className="h-[3px] bg-brand-gold rounded-full"
                        animate={{ width: ["0%", "100%"] }}
                        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.2, ease: "easeInOut" }}
                      />
                      <div className="h-[4px] w-3 bg-brand-navy rounded-full shrink-0 mx-1" />
                      <motion.div
                        className="h-[3px] bg-brand-gold rounded-full"
                        animate={{ width: ["100%", "0%"] }}
                        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.2, ease: "easeInOut" }}
                      />
                    </div>
                  </div>

                  {/* Address Row */}
                  <div className="flex items-start gap-4 mt-2">
                    <div className="w-12 h-12 rounded-xl bg-brand-navy/5 border border-brand-navy/10 flex items-center justify-center text-brand-navy shrink-0">
                      <MapPin className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="font-tibere font-bold text-brand-navy text-base md:text-lg uppercase tracking-wide">
                        Conservve Infra Solutionss
                      </h4>
                      <p
                        className="font-poppins font-semibold text-slate-700 text-sm md:text-base leading-relaxed mt-1"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        7th Floor, Neelkanth Business Park, D-718,<br />
                        Ramdev Pir Road, Sadguru Nagar,<br />
                        Neelkanth Kingdom, Vidyavihar West,<br />
                        <span className="text-brand-gold font-bold">Mumbai, Maharashtra – 400086</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6 mt-6">
                  {/* Separator line */}
                  <div className="w-full h-[1px] bg-slate-100" />

                  {/* Email Row */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-navy/5 border border-brand-navy/10 flex items-center justify-center text-brand-navy shrink-0">
                      <Mail className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <a
                        href="mailto:info@conservveinfrasolutions.com"
                        className="font-poppins font-bold text-brand-gold hover:text-brand-gold/80 transition-colors text-sm md:text-base"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        info@conservveinfrasolutions.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Empty Map Card Outline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              className="w-full h-full flex"
            >
              <div className="border-2 border-dashed border-slate-200 rounded-2xl bg-white/40 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 flex-1 w-full h-full min-h-[320px] relative overflow-hidden">
                <MapPin className="w-10 h-10 text-slate-300 stroke-[1.5] mb-2 animate-pulse" />
                <p className="font-poppins font-medium text-slate-400 text-sm">
                  Map Location Interface Placeholder
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
