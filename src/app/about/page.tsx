import React from 'react';
import AboutHero from '../../components/sections/AboutPage/AboutHero';
import MissionVisionSection from '../../components/sections/AboutPage/MissionVisionSection';
import LeadershipSection from '../../components/sections/AboutPage/LeadershipSection';
import ValuesSection from '../../components/sections/AboutPage/ValuesSection';
import AboutCtaSection from '../../components/sections/AboutPage/AboutCtaSection';

export default function AboutUsPage() {
  return (
    <>
      <AboutHero />
      <MissionVisionSection />
      <LeadershipSection />
      <ValuesSection />
      <AboutCtaSection />
    </>
  );
}