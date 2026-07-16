import React from 'react';
import HeroSection from '../../components/HeroSection';
import ProjectsSection from '../../components/ProjectsSection';
import Footer from '../../components/Footer';

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col bg-white w-full min-h-screen">
      <HeroSection />
      <div className="flex flex-col w-full flex-1">
        <div className="w-full flex justify-center pt-[80px]">
          <ProjectsSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
