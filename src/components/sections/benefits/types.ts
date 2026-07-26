export type RibbonType = 'navy' | 'gold';

export interface BenefitDetail {
  subtitle: string;
  overview: string;
  milestones: string[];
  deliverables: string[];
  timeline: string;
  importanceScore: number;
}

export interface BenefitItem {
  id: string;
  index: number;
  title: string;
  description: string;
  iconName: string;
  type: RibbonType;
  details: BenefitDetail;
}

export type BackgroundStyle = 'topographic' | 'blueprint' | 'hybrid' | 'minimal';

export interface AppConfig {
  slideNumber: string;
  heading: string;
  subtitle: string;
  backgroundStyle: BackgroundStyle;
  contourCount: number;
  contourOpacity: number;
  gridOpacity: number;
  showConnectingLine: boolean;
  show3DFolds: boolean;
  isInteractive: boolean;
}
