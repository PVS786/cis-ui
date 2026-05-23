import { AboutSection } from '@/components/sections/about-section';
import { ContactCTA } from '@/components/sections/contact-cta';
import { ExecutionPillars } from '@/components/sections/execution-pillars';
import { Hero } from '@/components/sections/hero';
import { IntegratedSolutionsSection } from '@/components/sections/integrated-solutions';
import { InteractiveProcessMapSection } from '@/components/sections/interactive-process-map';
import { LandOpportunitySection } from '@/components/sections/land-opportunity';
import { PortfolioSection } from '@/components/sections/portfolio-section';
import { ServicesGrid } from '@/components/sections/services-grid';
import { StatsSection } from '@/components/sections/stats-section';
import { WhyPartnerSection } from '@/components/sections/why-partner';

export default function Home() {
  return (
    <>
      <Hero />
      <LandOpportunitySection />
      <ExecutionPillars />
      <IntegratedSolutionsSection />
      <InteractiveProcessMapSection />
      <WhyPartnerSection />
      <StatsSection />
      <AboutSection />
      <ServicesGrid />
      <PortfolioSection />
      <ContactCTA />
    </>
  );
}
