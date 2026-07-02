import React from 'react';
import SkillsSection from './SkillsSection';

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col bg-white w-full">
      <div className="flex flex-col w-full">
        <div className="w-full flex justify-center pt-[80px]">
          <SkillsSection />
        </div>
      </div>
    </div>
  );
};

export default Skills;
