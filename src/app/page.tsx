import HeroSection from '../components/sections/HomePage/HeroSection';
import FeaturesOverviewSection from '../components/sections/HomePage/FeaturesOverviewSection';
import HowItWorksSection from '../components/sections/HomePage/HowItWorksSection';
import TestimonialsSection from '../components/sections/HomePage/TestimonialsSection';
import FinalCtaSection from '../components/sections/HomePage/FinalCtaSection';
import WhyChooseSection from '@/components/sections/HomePage/WhyChooseSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesOverviewSection />
      <WhyChooseSection/>
      <HowItWorksSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </>
  );
}