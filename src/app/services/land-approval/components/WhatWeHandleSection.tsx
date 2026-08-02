'use client';

import { useState, useEffect } from 'react';
import { Smartphone } from 'lucide-react';
import PaperClip from './PaperClip';
import OfficialStamp from './OfficialStamp';
import DocumentIcon from './DocumentIcons';

export interface LandDocument {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  fullText: string;
  department: string;
  date: string;
  signatureName: string;
  stampColor: 'gold' | 'bronze' | 'red';
  iconType: 'building' | 'conversion' | 'fire' | 'blueprint' | 'liaison' | 'certificate' | 'compliance' | 'ecology';
}

const LAND_DOCUMENTS: LandDocument[] = [
  {
    id: "doc-1",
    num: "01",
    title: "Zone Change Permissions and Layout Sanction",
    subtitle: "Section 44, Town & Country Planning Act",
    description: "Securing zone change permissions and layout sanction for smooth project initiation.",
    fullText: "Pursuant to the powers conferred by the Town and Country Planning Act, the designated parcel is hereby certified for zone conversion. The master layout plan submitted has been audited and found compliant with municipal setback, density, and public utility ratios.",
    department: "Urban Development & Housing Department",
    date: "July 10, 2026",
    signatureName: "J. V. Joseph",
    stampColor: "gold",
    iconType: "building"
  },
  {
    id: "doc-2",
    num: "02",
    title: "NA Orders and Land Use Conversion",
    subtitle: "Revenue Code Decree under Section 63",
    description: "Converting agricultural land to non-agricultural status with official state decrees.",
    fullText: "In accordance with the State Revenue Code, permission is hereby granted for the conversion of agricultural acreage (A-Class) to Non-Agricultural (NA) designation. Title deed authenticity has been verified and state taxes cleared.",
    department: "Directorate of Land Revenue & Records",
    date: "June 24, 2026",
    signatureName: "Alexander Reynolds",
    stampColor: "bronze",
    iconType: "conversion"
  },
  {
    id: "doc-3",
    num: "03",
    title: "Fire, Safety, and allied NOC procurement",
    subtitle: "Fire & Emergency Services Code Compliance",
    description: "Securing fire department clearance and related safety standard certificates.",
    fullText: "The firefighting infrastructure, structural escape routes, dry riser systems, and dedicated water reservoirs detailed in the plan have been surveyed and found fully compliant with national safety regulations.",
    department: "State Fire & Emergency Services Command",
    date: "May 18, 2026",
    signatureName: "Arthur Pendelton",
    stampColor: "red",
    iconType: "fire"
  },
  {
    id: "doc-4",
    num: "04",
    title: "Development Permission and Building Plan Approval",
    subtitle: "Municipal Corporation Structural Clearance",
    description: "Obtaining local municipal approvals and structural blueprint clearances.",
    fullText: "Sanction is hereby accorded for development under Section 342. Floor Space Index (FSI) calculations, building heights, and structural earthquake safety coefficients have been officially validated and stamped.",
    department: "Municipal Corporation Building Committee",
    date: "April 02, 2026",
    signatureName: "S. Malpekar",
    stampColor: "gold",
    iconType: "blueprint"
  },
  {
    id: "doc-5",
    num: "05",
    title: "Liaison with civic bodies & statutory agencies",
    subtitle: "Inter-Agency Public Infrastructure Alignment",
    description: "Streamlining communications and handling disputes with government departments.",
    fullText: "This serves as official confirmation that utility easements for water supply, sewage disposal, high-tension power line clearances, and local municipal drainage lines have been coordinated and locked.",
    department: "Directorate of Statutory Liaisons",
    date: "March 15, 2026",
    signatureName: "Cynthia Vance",
    stampColor: "bronze",
    iconType: "liaison"
  },
  {
    id: "doc-6",
    num: "06",
    title: "Stage-wise completion & Occupancy Certificate",
    subtitle: "Final Structural Safety & Suitability Clearance",
    description: "Obtaining stage certifications and the final sign-off for occupancy.",
    fullText: "Upon inspection of the completed civil structure, it is certified that construction conforms in entirety to sanctioned building regulations. The premises are declared safe and approved for immediate occupancy.",
    department: "Civil Infrastructure Safety Directorate",
    date: "February 28, 2026",
    signatureName: "Evelyn Sterling",
    stampColor: "gold",
    iconType: "certificate"
  },
  {
    id: "doc-7",
    num: "07",
    title: "Policy tracking & regulatory compliance updates",
    subtitle: "Zoning & Environmental Legislative Audit",
    description: "Monitoring state zoning code amendments and environmental policy shifts.",
    fullText: "A legal audit of active files has been completed against the newly revised State Master Plan. All proposed developments comply with revised wetland conservation margins and carbon offsetting statutes.",
    department: "Office of Legislative Compliance",
    date: "January 14, 2026",
    signatureName: "William Vance",
    stampColor: "bronze",
    iconType: "compliance"
  },
  {
    id: "doc-8",
    num: "08",
    title: "Environmental Clearance and management",
    subtitle: "Ecology & Pollution Control Board Authorization",
    description: "Securing state/national pollution control board approvals.",
    fullText: "Having evaluated the Environmental Impact Assessment (EIA) and proposed carbon mitigation measures, the department hereby clears the project for immediate setup, subject to periodic ecological audits.",
    department: "National Green Tribunal Directorate",
    date: "December 05, 2025",
    signatureName: "Dr. Marcus Thorne",
    stampColor: "red",
    iconType: "ecology"
  }
];

export default function WhatWeHandleSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [clientScale, setClientScale] = useState<number>(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1440 && window.innerWidth >= 1200) {
        setClientScale(0.92);
      } else if (window.innerWidth < 1200 && window.innerWidth >= 992) {
        setClientScale(0.78);
      } else if (window.innerWidth < 992 && window.innerWidth >= 768) {
        setClientScale(0.65);
      } else {
        setClientScale(1);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play page-flip animation timer loop when user is not hovering
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % LAND_DOCUMENTS.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleCardHover = (index: number) => {
    setIsHovered(true);
    setHoveredIndex(index);
    setActiveIndex(index);
  };

  const handleCardLeave = () => {
    setIsHovered(false);
    setHoveredIndex(null);
  };

  const cardWidth = 420;
  const overlapOffset = 100;
  const shelfWidth = (LAND_DOCUMENTS.length - 1) * overlapOffset + cardWidth;

  return (
    <section
      className="w-full py-12 px-6 md:py-16 md:px-12 lg:px-20 relative flex flex-col items-center justify-center bg-transparent text-[#0c2c4d]"
      id="what-we-handle-section"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center relative z-10 px-4 md:px-8">

        {/* Top Header Row: Side-by-side Title & Subheading with Vertical Navy Line */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 lg:gap-16 w-full mb-8 lg:mb-12">
          {/* Title */}
          <div className="shrink-0">
            <h2 className="font-tibere font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0C2C4D] tracking-tight leading-none uppercase whitespace-nowrap" style={{ wordSpacing: '0.25em' }}>
              What We Handle
            </h2>
          </div>

          {/* Subheading with Vertical Divider Line */}
          <div className="relative flex items-center self-stretch">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#0C2C4D]" />
            <div className="pl-6 md:pl-8 py-1 max-w-2xl">
              <p className="font-poppins font-normal text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
                From the first submission to the final certificate, every clearance your project needs is tracked, managed, and obtained without it becoming your problem.
              </p>
            </div>
          </div>
        </div>

        {/* Document Showcase Stack - Centered Below Title */}
        <div className="w-full flex flex-col items-center justify-center relative mt-4 md:mt-6" id="document-stack-container">

          {/* Desktop Stack View with 3D Navy Office Desk Surface */}
          <div
            className="hidden md:block relative select-none p-8 md:p-12 pb-14 rounded-3xl"
            style={{
              transform: `scale(${clientScale})`,
              transformOrigin: 'center center',
              transition: 'transform 0.3s ease-out',
            }}
          >
            {/* 3D Navy Office Tabletop Platform Surface */}
            <div className="absolute inset-0 top-8 bottom-0 rounded-3xl bg-gradient-to-b from-[#0F355C] via-[#0C2C4D] to-[#06182B] border border-[#BFA052]/40 shadow-2xl shadow-[#06182B]/40 overflow-hidden">
              {/* Subtle Desk Surface Radial Ambient Light */}
              <div className="absolute inset-0 bg-radial from-[#1E5C94]/25 via-transparent to-transparent opacity-60 pointer-events-none" />
              {/* Glossy Surface Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
              {/* Gold Inlay Trim on Desk Surface */}
              <div className="absolute inset-3.5 border border-[#BFA052]/25 rounded-2xl pointer-events-none" />
              {/* Subtle Gold Corner Accents */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-[#BFA052]/50 pointer-events-none" />
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-[#BFA052]/50 pointer-events-none" />
              <div className="absolute bottom-6 left-4 w-3 h-3 border-b-2 border-l-2 border-[#BFA052]/50 pointer-events-none" />
              <div className="absolute bottom-6 right-4 w-3 h-3 border-b-2 border-r-2 border-[#BFA052]/50 pointer-events-none" />
              {/* 3D Front Bevel Table Edge (Desk Lip Thickness) */}
              <div className="absolute bottom-0 inset-x-0 h-5 bg-gradient-to-b from-[#06182B] via-[#04101D] to-[#02080F] border-t border-[#BFA052]/40 flex items-center justify-center">
                <div className="w-24 h-[1.5px] bg-[#BFA052]/40 rounded-full" />
              </div>
            </div>

            {/* Cards Stack Element */}
            <div
              className="relative z-10"
              style={{
                width: `${shelfWidth}px`,
                height: '590px',
              }}
            >
              <div
                className="absolute left-[-40px] right-[-40px] h-[1px] bg-gradient-to-r from-transparent via-[#bfa052]/40 to-transparent pointer-events-none"
                style={{ top: '550px' }}
              />

              {LAND_DOCUMENTS.map((doc, idx) => {
                const currentActive = hoveredIndex !== null ? hoveredIndex : activeIndex;
                const isRevealed = currentActive === idx;

                const leftPos = idx * overlapOffset;
                const topPos = 70;
                const zIndex = isRevealed ? 50 : 20 - idx;

                const cardStyle: React.CSSProperties = {
                  transform: `translateY(${isRevealed ? -32 : 0}px)`,
                  boxShadow: isRevealed
                    ? '0 25px 50px -12px rgba(12, 44, 77, 0.28), 0 8px 16px -6px rgba(12, 44, 77, 0.15)'
                    : '0 8px 20px -6px rgba(12, 44, 77, 0.08), 0 2px 4px -1px rgba(12, 44, 77, 0.03)',
                  backgroundColor: isRevealed ? '#faf8f5' : '#faf9f6',
                  border: isRevealed ? '1.5px solid rgba(191, 160, 82, 0.55)' : '0.5px solid rgba(191, 160, 82, 0.18)',
                  transition: 'transform 0.5s ease-out, box-shadow 0.5s ease-out, background-color 0.4s ease-out',
                };

                return (
                  <div
                    key={doc.id}
                    onMouseEnter={() => handleCardHover(idx)}
                    onMouseLeave={handleCardLeave}
                    onClick={() => setActiveIndex(idx)}
                    className="absolute h-[500px] w-[420px] rounded-2xl cursor-pointer overflow-hidden select-none"
                    style={{
                      left: `${leftPos}px`,
                      top: `${topPos}px`,
                      zIndex,
                      ...cardStyle
                    }}
                    id={`desktop-card-${doc.num}`}
                  >
                    {/* Corner Document Number with Underline */}
                    <div
                      className="absolute top-8 right-0 flex flex-col items-center justify-center select-none pointer-events-none z-30"
                      style={{ width: `${overlapOffset}px` }}
                    >
                      <span className="font-tibere text-base font-bold tracking-wider text-[#bfa052] leading-none mb-1">
                        {doc.num}
                      </span>
                      <div className="w-4 h-[1.5px] bg-[#bfa052]/60" />
                    </div>

                    {/* Card Content Wrapper */}
                    <div
                      className="absolute inset-0 p-8 flex flex-col justify-between transition-all duration-500 z-15"
                      style={{ width: `${cardWidth}px` }}
                    >
                      <div className={`absolute inset-4 border border-[#bfa052]/20 border-dashed rounded-xl pointer-events-none transition-opacity duration-500 ${isRevealed ? 'opacity-100' : 'opacity-0'
                        }`} />

                      <div className="flex flex-col items-start text-left mt-3">
                        <div className={`w-14 h-14 rounded-full bg-white border border-[#bfa052]/25 shadow-inner flex items-center justify-center mb-4 transition-all duration-500 hover:rotate-6 ${isRevealed ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-[1px] pointer-events-none'
                          }`}>
                          <DocumentIcon type={doc.iconType} className="w-8 h-8 text-[#bfa052]" />
                        </div>

                        <h3 className={`font-tibere text-base md:text-lg font-bold text-[#0c2c4d] tracking-wide leading-tight mb-3 transition-all duration-500 ${isRevealed ? 'opacity-100 blur-0' : 'opacity-0 blur-[1px] pointer-events-none'
                          }`}>
                          {doc.title}
                        </h3>

                        {/* Skeleton Lines */}
                        <div className="w-full flex flex-col gap-3.5 mt-3">
                          <div className="h-[2.5px] w-[85%] bg-[#bfa052]/25 rounded-full" />
                          <div className="h-[2.5px] w-[85%] bg-[#bfa052]/25 rounded-full" />
                          <div className="h-[2.5px] w-[85%] bg-[#bfa052]/25 rounded-full" />
                          <div className="h-[2.5px] w-[50%] bg-[#bfa052]/25 rounded-full" />
                        </div>
                      </div>

                      <div className={`flex justify-between items-end border-t border-solid border-[#0c2c4d]/10 pt-4 mt-auto relative transition-all duration-500 ${isRevealed ? 'opacity-100 blur-0' : 'opacity-0 blur-[1px] pointer-events-none'
                        }`}>
                        <div className="flex flex-col text-left">
                          <span className="text-xl text-[#0c2c4d]/85 font-tibere italic tracking-wide h-8 select-none">
                            {doc.signatureName}
                          </span>
                          <span className="text-[8px] uppercase tracking-wider font-semibold text-slate-400 mt-1">
                            Authorized Signature
                          </span>
                        </div>

                        <OfficialStamp
                          color={doc.stampColor}
                          rotate={12}
                          className="mr-1 mb-1 shadow-[0_4px_10px_rgba(191,160,82,0.05)]"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Accordion View */}
          <div className="w-full max-w-md block md:hidden space-y-3 px-2 mt-6">
            <div className="text-[10px] font-bold text-center tracking-[0.25em] text-[#bfa052] uppercase mb-4 flex items-center justify-center gap-2 font-poppins">
              <Smartphone className="w-4 h-4" /> Tap document below to open
            </div>

            {LAND_DOCUMENTS.map((doc, idx) => {
              const isOpen = idx === activeIndex;
              return (
                <div
                  key={doc.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full rounded-sm border p-4 transition-all duration-300 text-slate-800 relative ${isOpen
                    ? 'ring-2 ring-[#bfa052] shadow-lg translate-y-[-2px]'
                    : 'shadow-sm opacity-85 hover:opacity-100'
                    }`}
                  style={{
                    border: isOpen ? '1px solid rgba(191, 160, 82, 0.6)' : '1px solid rgba(191, 160, 82, 0.2)',
                    backgroundColor: isOpen ? '#fcfaf7' : '#f5f2ed'
                  }}
                  id={`mobile-card-${doc.num}`}
                >
                  {idx !== 0 && (
                    <div className="absolute top-0 left-6 z-20 transform scale-[0.6] origin-top">
                      <PaperClip />
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3 pr-2">
                      <span className="font-tibere text-sm font-bold text-[#bfa052]">
                        {doc.num}
                      </span>
                      <h4 className="font-tibere text-xs font-bold text-[#0c2c4d] tracking-wide">
                        {doc.title}
                      </h4>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-white border border-[#bfa052]/20 flex items-center justify-center shrink-0">
                      <DocumentIcon type={doc.iconType} className="w-4 h-4 text-[#bfa052]" />
                    </div>
                  </div>

                  <div className={`transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100 pt-4 border-t border-solid border-[#0c2c4d]/10 mt-4' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="w-12 h-12 rounded-full bg-white border border-[#bfa052]/20 flex items-center justify-center mb-3">
                      <DocumentIcon type={doc.iconType} className="w-7 h-7 text-[#bfa052]" />
                    </div>

                    <h4 className="font-tibere text-sm font-bold text-[#0c2c4d] tracking-wide mb-2">
                      {doc.title}
                    </h4>

                    <div className="w-full flex flex-col gap-3 my-4">
                      <div className="h-[2.5px] w-[85%] bg-[#bfa052]/25 rounded-full" />
                      <div className="h-[2.5px] w-[85%] bg-[#bfa052]/25 rounded-full" />
                      <div className="h-[2.5px] w-[85%] bg-[#bfa052]/25 rounded-full" />
                      <div className="h-[2.5px] w-[50%] bg-[#bfa052]/25 rounded-full" />
                    </div>

                    <div className="flex justify-between items-end pt-3 border-t border-solid border-[#0c2c4d]/5">
                      <div className="flex flex-col text-left">
                        <span className="text-xl text-[#0c2c4d]/85 font-tibere italic h-8 select-none">
                          {doc.signatureName}
                        </span>
                        <span className="text-[8px] uppercase tracking-wider font-semibold text-slate-400">
                          Authorized Signature
                        </span>
                      </div>
                      <OfficialStamp color={doc.stampColor} rotate={12} className="scale-75 origin-bottom-right" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
