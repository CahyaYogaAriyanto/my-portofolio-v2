import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLang } from '../../context/LanguageContext';

import htmlIcon from '../../assets/icon/html5.svg';
import cssIcon from '../../assets/icon/css-3-seeklogo.svg';
import tailwindIcon from '../../assets/icon/tailwind.svg';
import reactIcon from '../../assets/icon/react-seeklogo.svg';
import nextIcon from '../../assets/icon/next-js-seeklogo.svg';
import nodeIcon from '../../assets/icon/node-js-seeklogo.svg';
import pythonIcon from '../../assets/icon/python-seeklogo.svg';
import phpIcon from '../../assets/icon/php-seeklogo.svg';
import laravelIcon from '../../assets/icon/laravel-seeklogo.svg';
import flutterIcon from '../../assets/icon/flutter-seeklogo.svg';
import mysqlIcon from '../../assets/icon/mysql-seeklogo.svg';
import postgresqlIcon from '../../assets/icon/postqresql-seeklogo.svg';
import firebaseIcon from '../../assets/icon/firebase-icon-seeklogo.svg';
import figmaIcon from '../../assets/icon/figma-seeklogo.svg';
import githubIcon from '../../assets/icon/github-seeklogo.svg';
import gitlabIcon from '../../assets/icon/gitlab-seeklogo.svg';
import angularIcon from '../../assets/icon/angular-seeklogo.svg';

const iconMap: Record<string, string> = {
  'HTML5': htmlIcon,
  'CSS3': cssIcon,
  'Tailwind': tailwindIcon,
  'React': reactIcon,
  'React Native': reactIcon,
  'Next.js': nextIcon,
  'Node.js': nodeIcon,
  'Python': pythonIcon,
  'PHP': phpIcon,
  'Laravel': laravelIcon,
  'Flutter': flutterIcon,
  'MySQL': mysqlIcon,
  'PostgreSQL': postgresqlIcon,
  'MongoDB': firebaseIcon,
  'Firebase': firebaseIcon,
  'Figma': figmaIcon,
  'GitHub': githubIcon,
  'GitLab': gitlabIcon,
  'Angular': angularIcon,
};

const SectionTitle: React.FC<{ title: string; description?: string }> = ({ title, description }) => (
  <div className="flex flex-col lg:flex-row items-start lg:items-center mb-12 lg:mb-20 ml-4 lg:ml-[100px] gap-4 lg:gap-10 pr-4 lg:pr-0">
    <div className="flex flex-col shrink-0 items-start bg-[#B9FF66] px-[7px] rounded-[7px]">
      <span className="text-black text-3xl lg:text-[40px]">{title}</span>
    </div>
    {description && (
      <span className="text-black text-base lg:text-lg max-w-[570px]">{description}</span>
    )}
  </div>
);

const Tag: React.FC<{ label: string }> = ({ label }) => (
  <span className="text-sm text-black border border-[#191A23] rounded-full px-3 py-1 bg-white">
    {label}
  </span>
);

interface SkillIconProps { 
  label: string;
}
const SkillIcon: React.FC<SkillIconProps> = ({ label }) => {
  const iconSrc = iconMap[label];
  
  return (
    <div
      title={label}
      className="flex items-center gap-2 bg-[#F3F3F3] border border-[#191A23] rounded-full px-3 py-1.5 text-sm font-medium text-black select-none"
    >
      {iconSrc ? (
        <img 
          src={iconSrc} 
          alt={label} 
          className="w-5 h-5 object-contain"
        />
      ) : (
        <span className="text-xs">📦</span>
      )}
      <span>{label}</span>
    </div>
  );
};

interface SkillCardProps {
  title: string;
  description: string;
  accent?: 'lime' | 'dark' | 'light';
  children: React.ReactNode;
}
const SkillCard: React.FC<SkillCardProps> = ({ 
  title, 
  description, 
  accent = 'light', 
  children
}) => {
  const bg = accent === 'lime' ? 'bg-[#B9FF66]' : accent === 'dark' ? 'bg-[#191A23]' : 'bg-[#F3F3F3]';
  const descColor = accent === 'dark' ? 'text-white/60' : 'text-black/60';

  return (
    <div 
      className={`flex flex-col ${bg} p-8 rounded-[45px] border border-[#191A23] h-full`} 
      style={{ boxShadow: '0px 5px 0px #191A23' }}
    >
      <div className="inline-flex self-start bg-[#B9FF66] px-[7px] rounded-[7px] mb-6">
        <span className="text-black text-xl font-semibold">{title}</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">{children}</div>
      <p className={`${descColor} text-sm leading-relaxed mt-auto`}>{description}</p>
    </div>
  );
};

/* ── Main Section ─────────────────────────────────────────────────────────── */
const SkillsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLang();

  return (
    <section
      ref={ref}
      className={`w-full max-w-[1440px] mx-auto scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      <SectionTitle title={t.skills.sectionTitle} description={t.skills.sectionDesc} />

      {/* Bento Grid - Asymmetric masonry-style layout */}
      <div className="px-4 lg:px-[100px] mb-[100px]">
        <div className="flex flex-col gap-6">
          
          {/* Row 1: Featured wide + 2 normal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Front-End - Featured wide (6 items) */}
            <div className="md:col-span-2">
              <SkillCard 
                title="Front-End Development" 
                description="Building engaging and user-friendly web interfaces using modern frameworks and cutting-edge technologies." 
                accent="lime"
              >
                <SkillIcon label="HTML5" />
                <SkillIcon label="CSS3" />
                <SkillIcon label="Tailwind" />
                <SkillIcon label="React" />
                <SkillIcon label="Next.js" />
                <SkillIcon label="Angular" />
              </SkillCard>
            </div>
            
            {/* Programming Languages (4 items) */}
            <SkillCard 
              title="Programming Languages" 
              description="Proficient in multiple languages for problem-solving, algorithms, and building efficient solutions." 
              accent="dark"
            >
              <SkillIcon label="Python" />
              <SkillIcon label="PHP" />
            </SkillCard>
          </div>

          {/* Row 2: 3 equal cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Styling & Design (5 items) */}
            <SkillCard 
              title="Styling & Design" 
              description="Crafting visually appealing and responsive designs with advanced styling tools and frameworks." 
              accent="light"
            >
              <SkillIcon label="CSS3" />
              <SkillIcon label="Tailwind" />
              <SkillIcon label="Figma" />
            </SkillCard>

            {/* Database Management (4 items) */}
            <SkillCard 
              title="Database Management" 
              description="Designing and managing databases to ensure secure and efficient data storage and retrieval." 
              accent="lime"
            >
              <SkillIcon label="MySQL" />
              <SkillIcon label="PostgreSQL" />
              <SkillIcon label="Firebase" />
            </SkillCard>

            {/* Back-End Development (4 items) */}
            <SkillCard 
              title="Back-End Development" 
              description="Developing robust server-side logic and APIs to power dynamic and scalable web applications." 
              accent="dark"
            >
              <SkillIcon label="Node.js" />
              <SkillIcon label="Laravel" />
            </SkillCard>
          </div>

          {/* Row 3: 1 normal + 1 wide */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Web Animations removed - no matching icons available */}

            {/* Version Control - Wide */}
            <div className="md:col-span-3">
              <SkillCard 
                title="Version Control & Collaboration" 
                description="Effectively managing code and collaborating on projects using Git platforms." 
                accent="dark"
              >
                <SkillIcon label="GitHub" />
                <SkillIcon label="GitLab" />
              </SkillCard>
            </div>
          </div>

          {/* Row 4: Wide + normal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Core CS Concepts - Wide (5 tags) */}
            <div className="md:col-span-2">
              <SkillCard 
                title="Core CS Concepts" 
                description="Strong foundation in computer science principles including system design and efficient computing techniques." 
                accent="light"
              >
                <Tag label="Operating Systems" />
                <Tag label="Computer Networks" />
                <Tag label="OOP" />
                <Tag label="DSA" />
                <Tag label="System Design" />
              </SkillCard>
            </div>

            {/* UI/UX Design */}
            <SkillCard 
              title="UI/UX Design" 
              description="Designing user-centric interfaces that are intuitive, visually appealing, and easy to navigate." 
              accent="lime"
            >
              <SkillIcon label="Figma" />
            </SkillCard>
          </div>

          {/* Row 5: 3 cards - mixed sizes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Mobile App Development */}
            <SkillCard 
              title="Mobile App Development" 
              description="Creating cross-platform mobile apps with sleek designs and robust functionality." 
              accent="dark"
            >
              <SkillIcon label="React Native" />
              <SkillIcon label="Flutter" />
            </SkillCard>

            {/* Version Control moved up */}

            {/* Personal Development (4 tags) */}
            <SkillCard 
              title="Personal Development" 
              description="Committed to continuous learning and personal growth to excel professionally." 
              accent="light"
            >
              <Tag label="Time Management" />
              <Tag label="Problem Solving" />
              <Tag label="Communication" />
              <Tag label="Leadership" />
            </SkillCard>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
