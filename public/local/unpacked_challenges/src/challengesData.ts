import { Challenge } from './types';

export const challenges: Challenge[] = [
  {
    id: '01',
    number: '01',
    title: 'Lack of clear land titles',
    shortDesc: 'Incomplete or outdated records create legal uncertainty and financial risk.',
    longDesc: 'Historical lands often suffer from poorly archived deeds, overlapping boundaries, or unrecorded inheritances. Acquiring land without absolute title clarity exposes investors to litigation, forfeiture, and severe project halts.',
    solutionTitle: 'Our Title Cleansing Protocol',
    solutionDesc: 'We perform forensic title reconstruction using local historical archives, state records, and modern GIS mapping to resolve ownership anomalies before capital is deployed.',
    caseStudy: {
      location: 'Hudson Valley Estate',
      size: '240 Acres',
      outcome: 'Resolved a 120-year-old boundary overlap dispute, securing 100% clear title within 45 days.'
    },
    iconName: 'ShieldCheck'
  },
  {
    id: '02',
    number: '02',
    title: 'Time-consuming due diligence',
    shortDesc: 'Verifying every aspect manually can delay projects and increase costs.',
    longDesc: 'Traditional due diligence involves manual coordination between zoning offices, environmental agencies, utilities, and tax assessors, causing critical delays in hot markets.',
    solutionTitle: 'Accelerated Digital Due Diligence',
    solutionDesc: 'We integrate municipal databases with our private predictive models, generating full environmental, topographical, and zoning reports in days instead of months.',
    caseStudy: {
      location: 'Austin Tech Corridor',
      size: '85 Acres',
      outcome: 'Completed comprehensive environmental phase I and geotechnical assessments in just 10 business days.'
    },
    iconName: 'Hourglass'
  },
  {
    id: '03',
    number: '03',
    title: 'Negotiation barriers with landowners',
    shortDesc: 'Price expectations, emotional attachment, or lack of documentation can complicate closure.',
    longDesc: 'Multigenerational landowners often possess strong emotional ties or unrealistic valuation expectations. Direct corporate approaches frequently trigger defensive positioning and breakdown in talks.',
    solutionTitle: 'Bespoke Familial Mediation',
    solutionDesc: 'Our advisors specialize in relationship-first mediation, structuring creative tax-efficient trusts, joint ventures, or life estate clauses that honor the owner’s legacy while meeting commercial goals.',
    caseStudy: {
      location: 'Sonoma Vineyard Expansion',
      size: '110 Acres',
      outcome: 'Negotiated an option-to-lease agreement with three co-owners, satisfying estate-tax concerns and securing full land rights.'
    },
    iconName: 'Handshake'
  },
  {
    id: '04',
    number: '04',
    title: 'Complex ownership structures',
    shortDesc: 'Multiple owners, disputed shares, or unclear inheritance can stall deals indefinitely.',
    longDesc: 'When land is owned by fragmented heirs or complex corporate shells across multiple jurisdictions, aligning all parties on sale terms is incredibly difficult.',
    solutionTitle: 'Heir Consolidation & Structuring',
    solutionDesc: 'We locate missing stakeholders globally, fund estate probates, and establish single-purpose vehicles (SPVs) to consolidate fractional shares into a clean, single-point-of-contact transaction.',
    caseStudy: {
      location: 'Miami Waterfront Parcels',
      size: '14 prime lots',
      outcome: 'Identified and bought out 19 separate heir interests scattered across 4 countries to assemble a unified development site.'
    },
    iconName: 'Network'
  },
  {
    id: '05',
    number: '05',
    title: 'Hidden legal liabilities',
    shortDesc: 'Encumbrances, disputes, or claims that aren’t visible upfront can surface later.',
    longDesc: 'Undisclosed agricultural easements, utility rights-of-way, old tax liens, or restrictive covenants can severely limit development potential or lead to surprise capital expenditures.',
    solutionTitle: 'Deep Forensic Liability Scrubbing',
    solutionDesc: 'Our legal team conducts exhaustive database audits and physical site inspections to identify and extinguish historic encumbrances, obtaining absolute title insurance indemnity.',
    caseStudy: {
      location: 'Nashville Transit Hub',
      size: '42 Acres',
      outcome: 'Discovered and cleared an ancient undisclosed municipal pipeline easement, avoiding a multimillion-dollar re-routing expense.'
    },
    iconName: 'Scale'
  },
  {
    id: '06',
    number: '06',
    title: 'Difficulty in identifying the right land',
    shortDesc: 'Not every available land parcel is viable for development or investment.',
    longDesc: 'Many acquisitions fail because the site lacks proper utility capacity, has undetected wetlands, or suffers from restrictive municipal zoning that makes the project financially unfeasible.',
    solutionTitle: 'AI-Powered Viability Filters',
    solutionDesc: 'We utilize multi-layer geographic search engines to cross-reference slope, utility access, soil quality, and regulatory restrictions to locate ideal, off-market acquisition targets.',
    caseStudy: {
      location: 'Denver Logistics Zone',
      size: '310 Acres',
      outcome: 'Sourced an off-market agricultural parcel with ready access to high-voltage power and interstate rail connections.'
    },
    iconName: 'Map'
  }
];
