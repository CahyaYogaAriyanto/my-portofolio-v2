import React from 'react';
import SectionTitle from './SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GitHubCalendar } from 'react-github-calendar';

const CaseStudiesSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`w-full max-w-[1440px] scroll-animate ${isVisible ? 'visible' : ''}`}>
      <SectionTitle
        title="GitHub Contributions"
        description="Explore my coding journey and contributions throughout the year"
      />
      <div className="flex justify-center items-center bg-[#191A23] max-w-[1234px] py-[50px] lg:py-[70px] px-[30px] lg:px-[60px] mb-[80px] lg:mb-[140px] mx-4 lg:mx-auto rounded-[45px]">
        <div className="w-full overflow-x-auto">
          <GitHubCalendar 
            username="CahyaYogaAriyanto"
            colorScheme="dark"
            blockSize={15}
            blockMargin={5}
            fontSize={16}
            style={{
              color: '#B9FF66',
            }}
            theme={{
              dark: ['#191A23', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesSection;
