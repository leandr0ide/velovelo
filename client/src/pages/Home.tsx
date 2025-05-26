import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Services } from '@/components/Services';
import { Showcase } from '@/components/Showcase';
import { CaseStudies } from '@/components/CaseStudies';
import { Testimonials } from '@/components/Testimonials';
import { Resources } from '@/components/Resources';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Showcase />
        <CaseStudies />
        <Testimonials />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
