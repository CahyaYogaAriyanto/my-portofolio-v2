import React from 'react';
import SectionTitle from './SectionTitle';
import TeamMemberCard from './TeamMemberCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TeamSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const teamMembers = [
    {
      name: 'John Smith',
      position: 'CEO and Founder',
      description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
      imageSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/treshdut_expires_30_days.png',
      linkedinSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/j75crf1r_expires_30_days.png',
    },
    {
      name: 'Jane Doe',
      position: 'Director of Operations',
      description: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
      imageSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/aohcb649_expires_30_days.png',
      linkedinSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/52srcyum_expires_30_days.png',
    },
    {
      name: 'Michael Brown',
      position: 'Senior SEO Specialist',
      description: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
      imageSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/ffj91c71_expires_30_days.png',
      linkedinSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/yt70dakx_expires_30_days.png',
    },
    {
      name: 'Emily Johnson',
      position: 'PPC Manager',
      description: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
      imageSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/3v7qyniy_expires_30_days.png',
      linkedinSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/mqkudfxg_expires_30_days.png',
    },
    {
      name: 'Brian Williams',
      position: 'Social Media Specialist',
      description: '4+ years of experience in social media marketing. Proficient in creating engaging content and managing social media platforms',
      imageSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/7g5sz804_expires_30_days.png',
      linkedinSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/xammc0iw_expires_30_days.png',
    },
    {
      name: 'Sarah Kim',
      position: 'Content Creator',
      description: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
      imageSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/pqhgc2lq_expires_30_days.png',
      linkedinSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/t8auhbh8_expires_30_days.png',
    },
  ];

  return (
    <div ref={ref} className={`w-full max-w-[1440px] scroll-animate ${isVisible ? 'visible' : ''}`}>
      <SectionTitle
        title="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />
      <div className="flex flex-col self-stretch mb-10 gap-10 px-4 lg:px-[100px]">
        <div className="flex flex-col lg:flex-row justify-center items-center self-stretch gap-10">
          {teamMembers.slice(0, 3).map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center self-stretch gap-10">
          {teamMembers.slice(3, 6).map((member, index) => (
            <TeamMemberCard key={index + 3} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
