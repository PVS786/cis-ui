import companyData from '@/data/company.json';
import navigationData from '@/data/navigation.json';
import projectsData from '@/data/projects.json';
import servicesData from '@/data/services.json';
import teamData from '@/data/team.json';
import testimonialsData from '@/data/testimonials.json';
import type { CompanyInfo, NavigationLink, Project, Service, TeamMember, Testimonial } from '@/types';

export function getCompanyInfo(): CompanyInfo {
  return companyData as CompanyInfo;
}

export function getNavigation(): { mainNav: NavigationLink[]; footerLinks: Record<string, NavigationLink[]> } {
  return navigationData as { mainNav: NavigationLink[]; footerLinks: Record<string, NavigationLink[]> };
}

export function getProjects(): Project[] {
  return projectsData as Project[];
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((p) => p.featured);
}

export function getServices(): Service[] {
  return servicesData as Service[];
}

export function getTeamMembers(): TeamMember[] {
  return teamData as TeamMember[];
}

export function getTestimonials(): Testimonial[] {
  return testimonialsData as Testimonial[];
}
