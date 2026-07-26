'use client';

import { BenefitItem } from './types';
import { RibbonBanner } from './RibbonBanner';

const BENEFITS: BenefitItem[] = [
  {
    id: 'benefit-1',
    index: 0,
    title: 'Strategic Land Selection',
    description: 'Access the best parcels aligned with your project goals.',
    iconName: 'map',
    type: 'navy',
    details: {
      subtitle: 'Unlocking maximum project value through precision GIS and location intelligence.',
      overview: 'Our team leverages state-of-the-art spatial intelligence systems to identify and evaluate premium off-market land opportunities.',
      milestones: [
        'Regional GIS suitability mapping & analysis',
        'Preliminary environmental & wetlands scan',
        'Direct landowner outreach & structured acquisition talks',
        'Municipal zoning & community future-use checks'
      ],
      deliverables: [
        'Regional Land Suitability Atlas',
        'Zoning & Comprehensive Plan Compatibility Memo',
        'Socio-Demographic Trend & Growth Analysis',
        'Preliminary Yield & Density Feasibility Map'
      ],
      timeline: '15 - 30 Business Days',
      importanceScore: 94
    }
  },
  {
    id: 'benefit-2',
    index: 1,
    title: 'Time and Cost Efficiency',
    description: 'Streamlined process saves the resources.',
    iconName: 'timer',
    type: 'gold',
    details: {
      subtitle: 'Optimizing transaction timelines and capital allocations to protect developer margins.',
      overview: 'Land acquisition is a race against holding costs and market windows. We streamline every single step.',
      milestones: [
        'Pre-vetted standard document templates deployment',
        'Phased earnest money and escrow schedule optimization',
        'Synchronized municipal review & board hearings timeline',
        'Expedited seller-side communication & signing channels'
      ],
      deliverables: [
        'Standard Purchase & Sale Agreement Bundle',
        'Critical Path Transaction Gantt Schedule',
        'Holding Costs & Carry Capital Worksheet',
        'Expedited Escrow Coordination Blueprint'
      ],
      timeline: '10 - 20 Business Days',
      importanceScore: 88
    }
  },
  {
    id: 'benefit-3',
    index: 2,
    title: 'Risk Mitigation',
    description: 'Thorough due diligence reduces legal and regulatory complications.',
    iconName: 'shield',
    type: 'navy',
    details: {
      subtitle: 'Sterilizing potential title defects, environmental liabilities, and easement encumbrances.',
      overview: 'A single missed easement or environmental hazard can completely derail an entire multi-million dollar development.',
      milestones: [
        'Phase 1 Environmental Site Assessment (ESA)',
        'Boundary & Easement Verification via ALTA Survey',
        'Comprehensive title abstract & exceptions analysis',
        'Geotechnical core soil borings & geological testing'
      ],
      deliverables: [
        'Certified Clean Title Insurance Commitment',
        'ALTA/NSPS Certified Boundary Survey Map',
        'Phase 1 Environmental Site Assessment Certificate',
        'Geotechnical Engineering Soil Integrity Report'
      ],
      timeline: '20 - 45 Business Days',
      importanceScore: 98
    }
  },
  {
    id: 'benefit-4',
    index: 3,
    title: 'Expert Guidance',
    description: 'Professional support ensures smooth acquisition from start to finish.',
    iconName: 'handshake',
    type: 'gold',
    details: {
      subtitle: 'Premium land advisory counsel from seasoned regulatory and planning specialists.',
      overview: 'Our veteran planning advisors act as your trusted voice in city council chambers and public zoning hearings.',
      milestones: [
        'County/Municipal rezoning representation setup',
        'Strategic public hearing outline & presentation drafting',
        'Utility district integration & easement acquisition',
        'Special Use Permit (SUP) application & follow-up'
      ],
      deliverables: [
        'Municipal Zoning Representation Binder',
        'Public Hearing Visual Impact Deck',
        'Infrastructure Easement Agreement Map',
        'County Special Use Permit (SUP) Tracker'
      ],
      timeline: '30 - 60 Business Days',
      importanceScore: 92
    }
  }
];

export default function AcquisitionBenefitsSection() {
  return (
    <section className="w-full pt-2 md:pt-4 pb-12 md:pb-16 relative overflow-hidden bg-transparent text-[#0C2C4D]">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 z-10 flex flex-col justify-start">
        
        {/* Editorial Heading Column */}
        <div className="space-y-3 mb-8 lg:mb-10 w-full text-left">
          <h2 className="font-tibere text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0C2C4D] uppercase leading-none">
            KEY BENEFITS
          </h2>
          <p className="font-poppins font-normal text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
            Delivering value at every step of land acquisition
          </p>
        </div>

        {/* CONNECTED LINE & CARD LAYOUT */}
        <div className="relative pt-24 px-2">
          {/* Connected Line Behind the Ribbons */}
          <div className="absolute top-[48%] left-[10%] right-[10%] h-[1.5px] bg-[#BFA052]/50 z-0 hidden lg:block" />

          {/* Banners Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 justify-items-center items-start relative z-10 max-w-6xl mx-auto">
            {BENEFITS.map((benefit) => (
              <RibbonBanner
                key={benefit.id}
                benefit={benefit}
                show3DFolds={true}
                isSelected={false}
                onSelect={() => {}}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
