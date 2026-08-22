export interface Point {
  x: number;
  y: number;
}

export interface Challenge {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  solutionTitle: string;
  solutionDesc: string;
  caseStudy: {
    location: string;
    size: string;
    outcome: string;
  };
  iconName: 'ShieldCheck' | 'Hourglass' | 'Handshake' | 'Network' | 'Scale' | 'Map';
}
