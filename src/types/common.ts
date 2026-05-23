export interface CompanyInfo {
  name: string;
  tagline: string;
  address: {
    line1: string;
    line2: string;
    country: string;
  };
  phone: string;
  email: string;
  foundedYear: number;
  socialLinks: {
    linkedin: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface NavigationLink {
  label: string;
  href: string;
  isExternal?: boolean;
}
