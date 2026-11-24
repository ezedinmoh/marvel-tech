import { Hero } from '@/components/sections/Hero';
import { ConstellationEcosystem } from '@/components/sections/ConstellationEcosystem';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { IndustrySolutions } from '@/components/sections/IndustrySolutions';
import { InteractiveSystem } from '@/components/sections/InteractiveSystem';
import { Process } from '@/components/sections/Process';
import { Projects } from '@/components/sections/Projects';
import { Technologies } from '@/components/sections/Technologies';
import { Team } from '@/components/sections/Team';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ConstellationEcosystem />
      <About />
      <Services />
      <IndustrySolutions />
      <InteractiveSystem />
      <Process />
      <Projects />
      <Technologies />
      <Team />
      <Faq />
      <Contact />
    </>
  );
}
