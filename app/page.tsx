import Header from './components/Header';
import Hero from './components/Hero';
import WhatIsSection from './components/WhatIsSection';
import HowItWorks from './components/HowItWorks';
import WhySection from './components/WhySection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export const metadata = {
  alternates: {
    canonical: 'https://paypalfeecalculator.org',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhatIsSection />
      <HowItWorks />
      <WhySection />
      <FAQ />
      <Footer />
    </div>
  );
}
