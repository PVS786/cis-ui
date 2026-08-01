'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Mail,
  User,
  Phone,
  Upload,
  Check,
  RotateCcw,
  FileText,
  AlertCircle,
  X
} from 'lucide-react';

// Form Interfaces
export interface FormState {
  fullName: string;
  email: string;
  phone: string;
  resume: File | null;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  resume?: string;
}

export type AnimationStep =
  | 'idle'       // Initial state
  | 'slideUp'    // Envelope slides up
  | 'opening'    // Top flap opens
  | 'revealing'  // Card slides out of the envelope
  | 'ready'      // Fully opened, form fields fade in
  | 'submitting' // Button shimmer / submission loading state
  | 'submitted'; // Form card slides down, envelope flap closes, sealed stamp applied

// Floating Gold Particles
const FloatingParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <div className="absolute top-[15%] left-[20%] w-2 h-2 rounded-full bg-[#BFA052]/50 blur-[1px] animate-pulse" />
      <div className="absolute top-[40%] left-[45%] w-1.5 h-1.5 rounded-full bg-[#BFA052]/60 animate-pulse" />
      <div className="absolute top-[25%] right-[25%] w-2.5 h-2.5 rounded-full bg-[#BFA052]/40 blur-[1px] animate-pulse" />
      <div className="absolute top-[65%] left-[15%] w-1.5 h-1.5 rounded-full bg-[#BFA052]/50 animate-pulse" />
      <div className="absolute bottom-[20%] right-[35%] w-2 h-2 rounded-full bg-[#BFA052]/60 blur-[0.5px] animate-pulse" />
      <div className="absolute top-[75%] right-[10%] w-1.5 h-1.5 rounded-full bg-[#BFA052]/40 animate-pulse" />
    </div>
  );
};

// 3D ENVELOPE FORM COMPONENT
const EnvelopeForm: React.FC = () => {
  const [step, setStep] = useState<AnimationStep>('idle');
  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    resume: null,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [visibleFields, setVisibleFields] = useState<number>(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep('slideUp'), 200);
    const timer2 = setTimeout(() => setStep('opening'), 1200);
    const timer3 = setTimeout(() => setStep('revealing'), 2200);
    const timer4 = setTimeout(() => setStep('ready'), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  useEffect(() => {
    if (step === 'ready') {
      const fieldTimer = setInterval(() => {
        setVisibleFields((prev) => {
          if (prev >= 5) {
            clearInterval(fieldTimer);
            return 5;
          }
          return prev + 1;
        });
      }, 250);
      return () => clearInterval(fieldTimer);
    } else {
      setVisibleFields(0);
    }
  }, [step]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email Id is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(form.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!form.resume) newErrors.resume = 'Please upload your resume';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearError = (field: keyof FormErrors) => {
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      clearError(name as keyof FormErrors);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setForm((prev) => ({ ...prev, resume: selectedFile }));
      if (errors.resume) clearError('resume');
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      setForm((prev) => ({ ...prev, resume: droppedFile }));
      if (errors.resume) clearError('resume');
    }
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setForm((prev) => ({ ...prev, resume: null }));
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStep('submitting');
    setTimeout(() => setStep('submitted'), 2200);
  };

  const handleReset = () => {
    setForm({ fullName: '', email: '', phone: '', resume: null });
    setErrors({});
    setVisibleFields(0);
    setStep('idle');
    setTimeout(() => setStep('slideUp'), 100);
    setTimeout(() => setStep('opening'), 1100);
    setTimeout(() => setStep('revealing'), 2100);
    setTimeout(() => setStep('ready'), 3400);
  };

  const isFlapOpen = step !== 'idle' && step !== 'slideUp';
  const isCardRevealed = step === 'revealing' || step === 'ready' || step === 'submitting';
  const isSubmitted = step === 'submitted';

  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[700px] flex flex-col items-center justify-end h-[680px] sm:h-[760px] md:h-[820px] lg:h-[880px] mt-2 sm:mt-4">

      {/* 3D Envelope Container Wrapper */}
      <div
        className={`relative w-full h-[280px] sm:h-[330px] md:h-[385px] lg:h-[440px] max-w-[380px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[640px] transition-all duration-1000 ease-out z-10
          ${step === 'idle' ? 'translate-y-24 opacity-0 scale-95' : 'translate-y-0 opacity-100 scale-100'}
          ${isSubmitted ? 'translate-y-8 scale-95 opacity-0 pointer-events-none' : ''}
        `}
        style={{ perspective: '1000px' }}
      >

        {/* Envelope Base / Back Layer */}
        <div
          className="absolute inset-0 bg-[#0A243F] rounded-b-[24px] border-2 border-[#BFA052] shadow-[0_20px_50px_rgba(0,0,0,0.65),_0_0_15px_rgba(191,160,82,0.15)] overflow-hidden"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none" />
        </div>

        {/* TOP FLAP - Rotating folding hinge */}
        <div
          className="absolute top-0 left-0 right-0 h-[210px] sm:h-[245px] md:h-[290px] lg:h-[330px] origin-top transition-transform duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1)"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlapOpen && !isSubmitted
              ? 'rotateX(180deg) translateY(-0.5px)'
              : 'rotateX(0deg) translateY(0)',
            zIndex: isFlapOpen && !isSubmitted ? 15 : 30,
          }}
        >
          {/* Flap Outer Side (Navy blue) */}
          <div className="absolute inset-0 bg-transparent" style={{ backfaceVisibility: 'hidden' }}>
            <svg className="w-full h-full drop-shadow-md" viewBox="0 0 480 250" fill="none" preserveAspectRatio="none">
              <path
                d="M 0 0 L 480 0 L 255 237 Q 240 250 225 237 Z"
                fill="#0C2C4D"
                stroke="#BFA052"
                strokeWidth="1.5"
              />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }} />
          </div>

          {/* Flap Inner Side (Metallic Gold lining) */}
          <div
            className="absolute inset-0"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateX(180deg)',
            }}
          >
            <svg className="w-full h-full drop-shadow-inner" viewBox="0 0 480 250" fill="none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="goldLiningGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FFF1B8" />
                  <stop offset="30%" stopColor="#D4AF37" />
                  <stop offset="60%" stopColor="#BFA052" />
                  <stop offset="100%" stopColor="#805C0F" />
                </linearGradient>
              </defs>
              <path
                d="M 0 250 L 480 250 L 255 13 Q 240 0 225 13 Z"
                fill="url(#goldLiningGrad)"
                stroke="#BFA052"
                strokeWidth="1.5"
              />
              <path
                d="M 12 246 L 468 246 L 251 26 Q 240 16 229 26 Z"
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1.2"
                strokeDasharray="4 2"
              />
            </svg>
          </div>
        </div>

        {/* THE INVITATION CARD (Form) */}
        <div
          className={`absolute left-[35px] sm:left-[45px] md:left-[55px] lg:left-[65px] top-[10px] w-[310px] sm:w-[390px] md:w-[450px] lg:w-[510px] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[515px] bg-white rounded-[16px] shadow-2xl border border-[#BFA052] z-20 overflow-hidden
            transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1)
            ${isCardRevealed
              ? 'translate-y-[-190px] sm:translate-y-[-230px] md:translate-y-[-260px] lg:translate-y-[-290px] opacity-100 scale-100'
              : 'translate-y-[20px] opacity-0 scale-95 pointer-events-none'}
            ${isSubmitted ? 'translate-y-[20px] opacity-0 scale-90 pointer-events-none' : ''}
          `}
        >
          <div className="h-full pt-3 sm:pt-4 lg:pt-6 pb-3 sm:pb-4 lg:pb-6 px-4 sm:px-5 lg:px-7 flex flex-col justify-start relative z-10 text-left">

            {/* Header section */}
            <div className="text-center">
              <h3 className="text-[#0C2C4D] font-heading font-extrabold text-sm sm:text-base lg:text-[20px] tracking-tight leading-snug">
                Interested in Joining Us?
              </h3>
              <p className="text-[#BFA052] font-poppins text-[10px] sm:text-[12px] lg:text-[13.5px] font-extrabold tracking-wider uppercase mt-1">
                Fill Out the Application Form Below
              </p>

              <div className="flex items-center justify-center gap-2 mt-1 opacity-80">
                <div className="w-10 h-[0.75px] bg-[#BFA052]" />
                <div className="flex gap-1 items-center">
                  <div className="w-1 h-1 rounded-full bg-[#BFA052]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#BFA052]" />
                  <div className="w-1 h-1 rounded-full bg-[#BFA052]" />
                </div>
                <div className="w-10 h-[0.75px] bg-[#BFA052]" />
              </div>
            </div>

            {/* FORM BODY */}
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-start gap-2.5 sm:gap-3 lg:gap-4.5 mt-2 sm:mt-3 lg:mt-5">

              {/* Field 1: Full Name */}
              <div
                className={`flex items-center gap-2 lg:gap-3 transition-all duration-500
                  ${visibleFields >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-[#0C2C4D] flex items-center justify-center text-white border border-[#BFA052]/20 shadow-sm">
                  <User className="w-3 h-3 sm:w-3.5 h-3.5 lg:w-4 stroke-[1.75]" />
                </div>
                <div className="flex items-center flex-1">
                  <label className="w-[90px] sm:w-[105px] md:w-[120px] lg:w-[135px] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] font-poppins font-bold text-[#0C2C4D] tracking-tight whitespace-nowrap flex-shrink-0" id="lbl-fullname">
                    Full Name:
                  </label>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      aria-labelledby="lbl-fullname"
                      value={form.fullName}
                      onChange={handleInputChange}
                      className="w-full h-7 sm:h-8 lg:h-10 px-2.5 sm:px-3 text-[11px] sm:text-[12px] lg:text-[14px] bg-white border border-[#BFA052]/40 rounded-md text-[#0C2C4D] font-poppins font-semibold focus:outline-none focus:border-[#0C2C4D] focus:ring-1 focus:ring-[#BFA052] transition-all"
                    />
                    {errors.fullName && (
                      <span className="absolute right-2 -bottom-3.5 text-[8px] text-red-500 font-bold flex items-center gap-0.5 bg-white px-1 z-10">
                        <AlertCircle size={8} /> {errors.fullName}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Field 2: Email Id */}
              <div
                className={`flex items-center gap-2 lg:gap-3 transition-all duration-500
                  ${visibleFields >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-[#0C2C4D] flex items-center justify-center text-white border border-[#BFA052]/20 shadow-sm">
                  <Mail className="w-3 h-3 sm:w-3.5 h-3.5 lg:w-4 stroke-[1.75]" />
                </div>
                <div className="flex items-center flex-1">
                  <label className="w-[90px] sm:w-[105px] md:w-[120px] lg:w-[135px] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] font-poppins font-bold text-[#0C2C4D] tracking-tight whitespace-nowrap flex-shrink-0" id="lbl-email">
                    Email Id:
                  </label>
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      aria-labelledby="lbl-email"
                      value={form.email}
                      onChange={handleInputChange}
                      className="w-full h-7 sm:h-8 lg:h-10 px-2.5 sm:px-3 text-[11px] sm:text-[12px] lg:text-[14px] bg-white border border-[#BFA052]/40 rounded-md text-[#0C2C4D] font-poppins font-semibold focus:outline-none focus:border-[#0C2C4D] focus:ring-1 focus:ring-[#BFA052] transition-all"
                    />
                    {errors.email && (
                      <span className="absolute right-2 -bottom-3.5 text-[8px] text-red-500 font-bold flex items-center gap-0.5 bg-white px-1 z-10">
                        <AlertCircle size={8} /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Field 3: Phone Number */}
              <div
                className={`flex items-center gap-2 lg:gap-3 transition-all duration-500
                  ${visibleFields >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-[#0C2C4D] flex items-center justify-center text-white border border-[#BFA052]/20 shadow-sm">
                  <Phone className="w-3 h-3 sm:w-3.5 h-3.5 lg:w-4 stroke-[1.75]" />
                </div>
                <div className="flex items-center flex-1">
                  <label className="w-[90px] sm:w-[105px] md:w-[120px] lg:w-[135px] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] font-poppins font-bold text-[#0C2C4D] tracking-tight whitespace-nowrap flex-shrink-0" id="lbl-phone">
                    Phone Number:
                  </label>
                  <div className="flex-1 relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      aria-labelledby="lbl-phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      className="w-full h-7 sm:h-8 lg:h-10 px-2.5 sm:px-3 text-[11px] sm:text-[12px] lg:text-[14px] bg-white border border-[#BFA052]/40 rounded-md text-[#0C2C4D] font-poppins font-semibold focus:outline-none focus:border-[#0C2C4D] focus:ring-1 focus:ring-[#BFA052] transition-all"
                    />
                    {errors.phone && (
                      <span className="absolute right-2 -bottom-3.5 text-[8px] text-red-500 font-bold flex items-center gap-0.5 bg-white px-1 z-10">
                        <AlertCircle size={8} /> {errors.phone}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Field 4: Upload Resume */}
              <div
                className={`flex items-center gap-2 lg:gap-3 transition-all duration-500
                  ${visibleFields >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-[#0C2C4D] flex items-center justify-center text-white border border-[#BFA052]/20 shadow-sm">
                  <Upload className="w-3 h-3 sm:w-3.5 h-3.5 lg:w-4 stroke-[1.75]" />
                </div>
                <div className="flex items-center flex-1">
                  <label className="w-[90px] sm:w-[105px] md:w-[120px] lg:w-[135px] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] font-poppins font-bold text-[#0C2C4D] tracking-tight whitespace-nowrap flex-shrink-0" id="lbl-resume">
                    Upload Resume:
                  </label>
                  <div className="flex-1 relative">
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`relative h-7 sm:h-8 lg:h-10 px-2.5 sm:px-3 bg-white border rounded-md flex items-center justify-between cursor-pointer transition-all duration-300
                        ${isDragging ? 'border-[#0C2C4D] bg-[#BFA052]/10 ring-1 ring-[#BFA052]' : 'border-[#BFA052]/40 hover:border-[#0C2C4D]'}
                      `}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        id="resume-file"
                        aria-labelledby="lbl-resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />

                      {form.resume ? (
                        <div className="flex items-center gap-1 overflow-hidden w-full mr-2">
                          <FileText className="w-3 h-3 sm:w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#0C2C4D] flex-shrink-0" />
                          <span className="text-[10px] sm:text-[11px] lg:text-[13px] text-[#0C2C4D] font-poppins font-semibold truncate">
                            {form.resume.name}
                          </span>
                        </div>
                      ) : (
                        <span className="text-[10px] sm:text-[11px] lg:text-[13px] text-slate-400 font-poppins font-medium">
                          Choose File (.pdf, .doc)
                        </span>
                      )}

                      <div className="flex items-center gap-1 flex-shrink-0 pl-1.5 h-3 border-l border-[#BFA052]/40">
                        {form.resume ? (
                          <button
                            type="button"
                            onClick={removeFile}
                            className="p-0.5 rounded-full hover:bg-red-50 text-red-400 hover:text-red-600 transition-colors"
                          >
                            <X className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          </button>
                        ) : (
                          <Upload className="w-3 h-3 sm:w-3.5 h-3.5 text-[#BFA052] stroke-[2]" />
                        )}
                      </div>
                    </div>
                    {errors.resume && (
                      <span className="absolute right-2 -bottom-3.5 text-[8px] text-red-500 font-bold flex items-center gap-0.5 bg-white px-1 z-10">
                        <AlertCircle size={8} /> {errors.resume}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <div
                className={`mt-5 sm:mt-6 lg:mt-8 mb-1 sm:mb-2 transition-all duration-700 flex justify-center
                  ${visibleFields >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <button
                  type="submit"
                  id="btn-submit"
                  disabled={step === 'submitting'}
                  className="relative w-40 sm:w-48 lg:w-56 h-9 sm:h-10 lg:h-12 bg-[#0C2C4D] hover:bg-[#143d64] text-[#BFA052] hover:text-white font-poppins font-extrabold rounded-md overflow-hidden shadow-lg border border-[#BFA052]/70 hover:border-[#BFA052] hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center justify-center group"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2 w-full">
                    <div className="w-3 sm:w-4 h-[0.75px] bg-[#BFA052] group-hover:bg-white/40 transition-colors" />
                    <span className="font-bold tracking-widest uppercase text-[10px] sm:text-[11px] lg:text-[12px] text-[#BFA052] group-hover:text-white transition-colors">
                      {step === 'submitting' ? 'Sealing...' : 'Submit'}
                    </span>
                    <div className="w-3 sm:w-4 h-[0.75px] bg-[#BFA052] group-hover:bg-white/40 transition-colors" />
                  </div>
                </button>
              </div>

            </form>
          </div>
        </div>

        {/* FRONT FLAPS - Overlapping 3D vector paths */}
        <div className="absolute inset-0 rounded-b-[24px] overflow-hidden z-25 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 480 330" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="leftFlapGrad" x1="0" y1="0" x2="1" y2="0.6">
                <stop offset="0%" stopColor="#0B2642" />
                <stop offset="60%" stopColor="#0E3256" />
                <stop offset="100%" stopColor="#154573" />
              </linearGradient>

              <linearGradient id="rightFlapGrad" x1="1" y1="0" x2="0" y2="0.6">
                <stop offset="0%" stopColor="#0B2642" />
                <stop offset="60%" stopColor="#0E3256" />
                <stop offset="100%" stopColor="#154573" />
              </linearGradient>

              <linearGradient id="bottomFlapGrad" x1="0.5" y1="1" x2="0.5" y2="0">
                <stop offset="0%" stopColor="#071A2E" />
                <stop offset="50%" stopColor="#0B2540" />
                <stop offset="100%" stopColor="#123B64" />
              </linearGradient>

              <linearGradient id="goldSeamGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFF1B8" />
                <stop offset="35%" stopColor="#D4AF37" />
                <stop offset="70%" stopColor="#BFA052" />
                <stop offset="100%" stopColor="#805C0F" />
              </linearGradient>
            </defs>

            <path
              d="M 0 0 L 240 231 L 0 330 Z"
              fill="url(#leftFlapGrad)"
              stroke="url(#goldSeamGrad)"
              strokeWidth="1.5"
            />

            <path
              d="M 480 0 L 240 231 L 480 330 Z"
              fill="url(#rightFlapGrad)"
              stroke="url(#goldSeamGrad)"
              strokeWidth="1.5"
            />

            <path
              d="M 0 330 L 240 231 L 480 330 Z"
              fill="url(#bottomFlapGrad)"
              stroke="url(#goldSeamGrad)"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* GOLD WAX SEAL / EMBOSSED STAMP */}
        <div
          className={`absolute top-[196px] sm:top-[231px] md:top-[270px] lg:top-[308px] left-1/2 z-40 transition-all duration-[1200ms] origin-center
            ${step === 'idle' ? 'scale-0' : 'scale-100'}
          `}
          style={{
            transform: isFlapOpen && !isSubmitted ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(1.15)',
          }}
        >
          <svg className="absolute top-[65%] left-1/2 -translate-x-1/2 w-28 h-20 pointer-events-none -z-10" viewBox="0 0 120 80" fill="none">
            <path d="M 42 0 L 22 62 L 36 50 L 48 56 L 54 0 Z" fill="url(#goldGrad)" opacity="0.95" />
            <path d="M 66 0 L 72 0 L 98 62 L 84 50 L 72 56 Z" fill="url(#goldGrad)" opacity="0.95" />

            <defs>
              <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFF1B8" />
                <stop offset="25%" stopColor="#D4AF37" />
                <stop offset="65%" stopColor="#BFA052" />
                <stop offset="100%" stopColor="#805C0F" />
              </linearGradient>
            </defs>
          </svg>

          <div className="w-20 h-20 rounded-full p-0.5 shadow-2xl bg-gradient-to-br from-[#FFDF73] via-[#BFA052] to-[#80631F] flex items-center justify-center relative active:scale-95 transition-transform cursor-pointer">
            <div className="absolute inset-1.5 rounded-full border border-[#BFA052]/40 bg-gradient-to-br from-[#80631F] via-[#BFA052] to-[#40310F] shadow-inner flex items-center justify-center">
              <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-br from-[#FFDF73] via-[#BFA052] to-[#80631F] shadow-md flex items-center justify-center p-1 border border-white/20">
                <svg className="w-11 h-11 text-[#40310F]/85" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M 12 50 L 52 50" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 18 50 L 18 20 M 24 50 L 24 16 M 32 50 L 32 10 M 40 50 L 40 16 M 46 50 L 46 20" strokeLinecap="round" />
                  <path d="M 15 20 Q 18 16 21 20 M 21 16 Q 24 12 27 16 M 28 10 Q 32 6 36 10 M 37 16 Q 40 12 43 16 M 43 20 Q 46 16 49 20" strokeLinecap="round" />
                  <path d="M 10 24 L 32 4 L 54 24 Z" strokeWidth="1.5" strokeLinejoin="round" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* SUCCESS CARD DIALOG */}
      <div
        className={`absolute inset-x-0 bottom-4 bg-white rounded-2xl shadow-2xl border border-[#BFA052]/40 p-4 sm:p-6 flex flex-col items-center justify-center text-center z-50 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1)
          ${isSubmitted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-90 pointer-events-none'}
        `}
        style={{ height: 'auto', minHeight: '320px' }}
      >
        <div className="w-14 h-14 rounded-full bg-[#BFA052]/10 border-2 border-[#BFA052] flex items-center justify-center text-[#BFA052] shadow-lg mb-4">
          <Check size={28} className="stroke-[3]" />
        </div>

        <h3 className="text-[#0C2C4D] font-heading font-extrabold text-xl md:text-2xl tracking-tight leading-snug">
          Application Sealed & Sent!
        </h3>
        <p className="text-[#0C2C4D] font-poppins text-xs md:text-sm max-w-sm mt-3 leading-relaxed font-semibold">
          Your application has been successfully sent. The recruitment team at <strong className="text-[#BFA052]">Conservve Infra Solutions</strong> has received your resume.
        </p>

        <div className="mt-4 px-4 py-2 bg-[#0C2C4D]/[0.03] border border-[#BFA052]/20 rounded-lg max-w-xs text-center">
          <span className="text-[10px] text-slate-400 font-bold tracking-wider uppercase block">Applicant</span>
          <span className="text-xs font-heading font-extrabold text-[#0C2C4D] mt-0.5 block">{form.fullName || 'Candidate'}</span>
          <span className="text-[10px] text-[#0C2C4D]/70 block mt-0.5 font-poppins font-medium">{form.email}</span>
        </div>

        <button
          onClick={handleReset}
          className="mt-5 px-5 py-2 border border-[#0C2C4D]/20 hover:border-[#0C2C4D] rounded-lg text-[#0C2C4D] hover:bg-[#0C2C4D]/5 text-xs font-poppins font-bold tracking-wide flex items-center gap-1.5 transition-all duration-300 cursor-pointer"
        >
          <RotateCcw size={12} />
          Submit Another Application
        </button>
      </div>

    </div>
  );
};

export default function JoinOurTeamSection() {
  return (
    <section
      className="relative flex flex-col justify-between overflow-x-hidden font-poppins select-text pt-6 pb-6 w-full"
      style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url('/Logo_Distort_BG.png')",
        backgroundRepeat: 'repeat',
        backgroundSize: '300px'
      }}
    >
      <FloatingParticles />

      {/* Main content container - Responsive 2-column layout */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-12 pt-0 pb-2 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10">

        {/* LEFT COLUMN: Editorial Content */}
        <div className="lg:col-span-5 flex flex-col justify-center h-full relative min-h-[360px] lg:pr-6 text-left">

          <div className="relative">
            <h2 className="text-[#0C2C4D] font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] tracking-tight leading-none uppercase">
              Join Our Team
            </h2>

            {/* Gold line + square indicator */}
            <div className="flex items-center gap-1.5 mt-4 mb-6">
              <div className="w-16 h-1 bg-[#BFA052] rounded-sm" />
              <div className="w-2.5 h-1 bg-[#BFA052] rounded-sm" />
            </div>
          </div>

          <p className="text-[#0C2C4D]/85 font-poppins text-[17px] sm:text-[19px] md:text-[20px] leading-[1.8] tracking-wide max-w-lg font-medium">
            Take the next step in your career with Conservve Infra Solutions. Explore our open roles and grow with a team where innovation, expertise, and impact go hand in hand.
          </p>

          {/* Contact Box with email link */}
          <div className="mt-8 flex items-center gap-4 group">
            <a
              href="mailto:info@conservveinfrasolutionss.com"
              className="flex-shrink-0 w-14 h-14 rounded-full bg-[#BFA052] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label="Email resume to Conservve"
            >
              <Mail size={22} className="stroke-[2]" />
            </a>

            <div className="flex flex-col">
              <span className="text-sm sm:text-[15px] font-poppins font-extrabold text-[#0C2C4D] uppercase tracking-wider">
                Send your resume to:
              </span>
              <a
                href="mailto:info@conservveinfrasolutionss.com"
                className="text-[16px] sm:text-[18px] md:text-[19px] font-poppins font-extrabold text-[#BFA052] hover:text-[#A3843B] transition-colors mt-0.5"
              >
                info@conservveinfrasolutionss.com
              </a>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Interactive 3D Envelope and Application Form */}
        <div className="lg:col-span-7 flex items-center justify-center relative w-full h-full lg:pl-4">
          <EnvelopeForm />
        </div>

      </div>

    </section>
  );
}
