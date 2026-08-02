export interface TechnicalDetail {
  label: string;
  value: string;
}

export interface EcosystemNode {
  id: number;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  specifications: string[];
  techDetails: TechnicalDetail[];
  angle: number; // angle in degrees around the circle
  iconPath: string; // custom SVG path data for the gold icon inside
  plotCoords: { x: number; y: number }; // Relative plot coordinate on the land tile
  color: string;
}
