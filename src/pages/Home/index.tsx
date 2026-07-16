import React from 'react';
import {
  HeroSection,
  ServicesSection,
  CTASection,
  CaseStudiesSection,
  WorkingProcessSection,
  EducationSection,
  Footer,
} from '../../components';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-white w-full min-h-screen">
      <div className="flex flex-col w-full flex-1">
        <div className="w-full mb-[148px]">
          <section id="home">
            <HeroSection />
          </section>
        </div>
        <section id="services" className="w-full flex justify-center">
          <ServicesSection />
        </section>
        <div className="w-full flex justify-center">
          <CTASection />
        </div>
        <section id="github-contributions" className="w-full flex justify-center">
          <CaseStudiesSection />
        </section>
        <section id="experience" className="w-full flex justify-center">
          <WorkingProcessSection />
        </section>
        <section id="education" className="w-full flex justify-center">
          <EducationSection />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
