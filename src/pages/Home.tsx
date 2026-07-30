import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Opportunities } from '@/components/sections/Opportunities';
import { Strategy } from '@/components/sections/Strategy';
import { Model } from '@/components/sections/Model';
import { WhyGujarat } from '@/components/sections/WhyGujarat';
import { Services } from '@/components/sections/Services';
import { TrustSignals } from '@/components/sections/TrustSignals';
import { BusinessServices } from '@/components/sections/BusinessServices';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { ManufacturingProjects } from '@/components/sections/ManufacturingProjects';

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ManufacturingProjects />
        <About />
        <Opportunities />
        <Strategy />
        <Model />
        <WhyGujarat />
        <Services />
        <TrustSignals />
        <BusinessServices />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
