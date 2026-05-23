export interface Project {
  id: string;
  title: string;
  category: 'Construction' | 'Land Acquisition' | 'Infrastructure' | 'Tech Lab' | 'Commercial' | 'Industrial';
  location: string;
  year: number;
  description: string;
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
  value?: string;
  area?: string;
}
