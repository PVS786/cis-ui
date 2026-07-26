import { EcosystemNode } from "./types";

export const ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: 1,
    title: "Title Due Diligence and Ownership Verification",
    shortTitle: "Title Due Diligence",
    tagline: "Ownership Authentication & Historic Verification",
    description: "Ownership verification and legal title review.",
    specifications: [
      "60-Year Historic Title Search",
      "Deed Authenticity & Signature Verification",
      "Heirship & Probate Risk Assessment",
      "Non-Encumbrance Clearance"
    ],
    techDetails: [
      { label: "Registry Depth", value: "60 Years" },
      { label: "Sovereign Scan", value: "Active" },
      { label: "Confidence", value: "99.98%" },
      { label: "Schema", value: "TS-DF/2026" }
    ],
    angle: 270, // Straight up
    iconPath: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M11.5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M13.6 15.1l3.4 3.4",
    plotCoords: { x: -35, y: -20 },
    color: "#BFA052"
  },
  {
    id: 2,
    title: "Encumbrance Checks, Easement Mapping, and Litigation History Review",
    shortTitle: "Encumbrance Checks",
    tagline: "Lien Clearance & Access Audits",
    description: "Easement mapping and litigation history review.",
    specifications: [
      "Utility Right-of-Way Mapping",
      "Private & Public Easement Audits",
      "Active Lien & Mortgage Verification",
      "Civil & Environmental Litigation Review"
    ],
    techDetails: [
      { label: "Lien Buffer", value: "Zero Tolerance" },
      { label: "Registry Sync", value: "Direct SQL" },
      { label: "Audit Radius", value: "1500m" },
      { label: "Ltg Check", value: "State/Federal" }
    ],
    angle: 315, // Top right
    iconPath: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2 M9 2h6a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1z M9 11l2 2 4-4 M8 16h8",
    plotCoords: { x: 35, y: -20 },
    color: "#BFA052"
  },
  {
    id: 3,
    title: "Market Analysis and Opportunity Identification",
    shortTitle: "Market Analysis",
    tagline: "Dynamic Yield Optimization & Heatmaps",
    description: "Opportunity identification.",
    specifications: [
      "FSI Absorption Rate Forecasting",
      "Comparable Transaction Heatmapping",
      "Future Development Pipeline Analysis",
      "Yield-on-Cost Sensitivity Matrix"
    ],
    techDetails: [
      { label: "Data Nodes", value: "14,200 points" },
      { label: "Yield Target", value: "14.2% IRR" },
      { label: "Horizon", value: "10-Year CAGR" },
      { label: "Confidence", value: "94.5%" }
    ],
    angle: 0, // Right
    iconPath: "M3 21h18 M5 21V15h3v7 M11 21V11h3v11 M17 21V8h3v13 M3 8l6-4 6 2 6-5 M17 1h4v4",
    plotCoords: { x: 45, y: 0 },
    color: "#BFA052"
  },
  {
    id: 4,
    title: "Parcel Aggregation and Multi-owner Negotiations",
    shortTitle: "Parcel Aggregation",
    tagline: "Strategic Assemblage & Multi-Owner Tactics",
    description: "Multi-owner negotiations.",
    specifications: [
      "Boundary Adjacency Mapping",
      "Holdout Risk Mitigation Strategy",
      "Escrow & Option-Agreement Structuring",
      "Unified Survey Integration"
    ],
    techDetails: [
      { label: "Assemblage Factor", value: "3.2x Scale" },
      { label: "Host Risk", value: "0.15 Index" },
      { label: "Escrow Protocol", value: "Multi-Sig" },
      { label: "Adjacency Ratio", value: "100%" }
    ],
    angle: 45, // Bottom right
    iconPath: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M20 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
    plotCoords: { x: 25, y: 20 },
    color: "#BFA052"
  },
  {
    id: 5,
    title: "Infrastructure and Connectivity Feasibility Assessment",
    shortTitle: "Infrastructure Feasibility",
    tagline: "Civil Utilities & Network Routing",
    description: "Feasibility assessment.",
    specifications: [
      "Subsurface Hydraulic Profiling",
      "Electrical Grid Substation Audits",
      "Sanitary & Water Mains Connection Math",
      "Right-of-Way Ingress Modeling"
    ],
    techDetails: [
      { label: "Grid Tie-In", value: "480V / 3-Phase" },
      { label: "Mains Depth", value: "3.2m Sub" },
      { label: "Ingress Margin", value: "45m Width" },
      { label: "Hydraulic Load", value: "250 kL/D" }
    ],
    angle: 90, // Bottom
    iconPath: "M 12 1 A 5 5 0 0 0 7 6 C 7 10 12 15 12 15 S 17 11 17 6 A 5 5 0 0 0 12 1 Z M 12 5 A 1.5 1.5 0 1 0 12 8 A 1.5 1.5 0 0 0 12 5 Z M 12 15 V 18 M 12 18 A 2 2 0 1 1 12 22 A 2 2 0 0 1 12 18 Z M 12 18 L 6 14 M 12 18 L 18 14",
    plotCoords: { x: -10, y: 25 },
    color: "#BFA052"
  },
  {
    id: 6,
    title: "Zoning Verification and FSI Utilization Analysis",
    shortTitle: "Zoning & FSI Analysis",
    tagline: "Density Engineering & Height Envelopes",
    description: "FSI utilization analysis.",
    specifications: [
      "FSI Premium Purchase Modeling",
      "Frontage Setback Compliances",
      "Shadow & Sky-Exposure Plain Modeling",
      "Transit-Oriented Development Bonuses"
    ],
    techDetails: [
      { label: "Base FSI Limit", value: "3.5x GFA" },
      { label: "Premium Multiplier", value: "+1.2x" },
      { label: "Setback (Front)", value: "12.0m" },
      { label: "Sky Exposure Plane", value: "1:1.5" }
    ],
    angle: 135, // Bottom left
    iconPath: "M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5",
    plotCoords: { x: -30, y: 15 },
    color: "#BFA052"
  },
  {
    id: 7,
    title: "Regulatory Pathway Mapping and Approval Timeline Forecasting",
    shortTitle: "Regulatory Approvals",
    tagline: "Municipal Masterplan Clearances",
    description: "Approval timeline forecasting.",
    specifications: [
      "Environmental Impact Assessment Paths",
      "Aviation Height Clearance Mapping",
      "Land Use Change (CLU) Workflows",
      "Public Hearing Protest Mitigation"
    ],
    techDetails: [
      { label: "Consent Boards", value: "11 Panels" },
      { label: "Lead Duration", value: "240 Days" },
      { label: "EIA Tier", value: "Level-3 Review" },
      { label: "Clearance Rate", value: "100% Target" }
    ],
    angle: 180, // Left
    iconPath: "M2 22h20 M3 18h18 M12 2L2 7h20L12 2z M6 10v8 M10 10v8 M14 10v8 M18 10v8",
    plotCoords: { x: -45, y: 0 },
    color: "#BFA052"
  },
  {
    id: 8,
    title: "Acquisition Structuring Aligned to Your Development Objective",
    shortTitle: "Acquisition Structuring",
    tagline: "Tax-Optimized Special Purpose Vehicles",
    description: "Aligned to your development objective.",
    specifications: [
      "Special Purpose Vehicle (SPV) Creation",
      "Capital Gains Tax Mitigation Framework",
      "Joint-Development-Agreement (JDA) Structuring",
      "Mezzanine Debt Integration Protocols"
    ],
    techDetails: [
      { label: "SPV Type", value: "LP / Delaware LLC" },
      { label: "Tax Shield Ratio", value: "28.4% Sav." },
      { label: "Funding Structure", value: "Debt + Equity" },
      { label: "JV Allocation", value: "60/40 Equity" }
    ],
    angle: 225, // Top left
    iconPath: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M12 18H8 M10 14H8 M21 11.5L12.5 20H10v-2.5L18.5 9l2.5 2.5z",
    plotCoords: { x: -15, y: -20 },
    color: "#BFA052"
  }
];
