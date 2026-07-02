import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import ProcessStep from './ProcessStep';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Experience {
  number: string;
  title: string;
  company?: string;
  period?: string;
  description?: string;
}

const WorkingProcessSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const experiences: Experience[] = [
    {
      number: '01',
      title: 'Senior Frontend Developer',
      company: 'Tech Company A',
      period: 'Jan 2022 - Present',
      description: 'Led the development of responsive web applications using React, TypeScript, and modern CSS frameworks. Collaborated with cross-functional teams to deliver high-quality products. Mentored junior developers and conducted code reviews to maintain code quality standards.',
    },
    {
      number: '02',
      title: 'Frontend Developer',
      company: 'Startup B',
      period: 'Jun 2020 - Dec 2021',
      description: 'Developed and maintained multiple client-facing web applications. Implemented responsive designs and ensured cross-browser compatibility. Worked closely with designers to transform mockups into functional interfaces.',
    },
    {
      number: '03',
      title: 'Junior Web Developer',
      company: 'Agency C',
      period: 'Jan 2019 - May 2020',
      description: 'Built interactive web pages using HTML, CSS, and JavaScript. Assisted senior developers in implementing new features and fixing bugs. Participated in daily stand-ups and sprint planning meetings.',
    },
    {
      number: '04',
      title: 'Web Developer Intern',
      company: 'Company D',
      period: 'Jun 2018 - Dec 2018',
      description: 'Learned web development fundamentals and best practices. Contributed to small features and bug fixes under supervision. Gained experience with version control systems and agile methodologies.',
    },
  ];

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div ref={ref} className={`w-full max-w-[1440px] scroll-animate ${isVisible ? 'visible' : ''}`}>
      <SectionTitle
        title="Work Experience"
        description="My professional journey and career milestones in web development"
      />
      <div className="flex flex-col self-stretch max-w-[1234px] mb-[80px] lg:mb-[140px] mx-4 lg:mx-auto gap-[20px] lg:gap-[30px]">
        {experiences.map((experience, index) => (
          <ProcessStep
            key={index}
            number={experience.number}
            title={experience.title}
            description={experience.description}
            isExpanded={expandedIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkingProcessSection;
