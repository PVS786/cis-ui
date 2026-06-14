import { ExecutionPillars } from '@/components/sections/execution-pillars';
import { Hero } from '@/components/sections/hero';
import { IntegratedSolutionsSection } from '@/components/sections/integrated-solutions';
import { HowWeDeliverSection } from '@/components/sections/how-we-deliver/HowWeDeliverSection';
import { LandOpportunitySection } from '@/components/sections/land-opportunity';
import { WhyPartnerSection } from '@/components/sections/why-partner';
import { OperationalPresenceSection } from '@/components/sections/operational-presence';

export default function Home() {
  return (
    <>
      <Hero />
      <div 
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.90)), url('/Logo_Distort_BG.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '300px'
        }}
      >
        <LandOpportunitySection />
        <ExecutionPillars />
        <IntegratedSolutionsSection />
        <HowWeDeliverSection />
      </div>
      <OperationalPresenceSection />
      <WhyPartnerSection />
    </>
  );
}
