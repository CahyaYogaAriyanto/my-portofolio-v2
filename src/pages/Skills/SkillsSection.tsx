import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLang } from '../../context/LanguageContext';

/* ── SectionTitle ─────────────────────────────────────────────────────────── */
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

/* ── Tag badge ────────────────────────────────────────────────────────────── */
const Tag: React.FC<{ label: string }> = ({ label }) => (
  <span className="text-sm text-black border border-[#191A23] rounded-full px-3 py-1 bg-white">
    {label}
  </span>
);

/* ── Skill Icon pill ──────────────────────────────────────────────────────── */
interface SkillIconProps { label: string; icon: string; }
const SkillIcon: React.FC<SkillIconProps> = ({ label, icon }) => (
  <div
    title={label}
    className="flex items-center gap-2 bg-[#F3F3F3] border border-[#191A23] rounded-full px-3 py-1.5 text-sm font-medium text-black select-none"
  >
    <span role="img" aria-label={label} className="text-base">{icon}</span>
    <span>{label}</span>
  </div>
);

/* ── Skill Card ───────────────────────────────────────────────────────────── */
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
                <SkillIcon label="HTML5" icon="🔶" />
                <SkillIcon label="JavaScript" icon="🟨" />
                <SkillIcon label="TypeScript" icon="🔷" />
                <SkillIcon label="React" icon="⚛️" />
                <SkillIcon label="Next.js" icon="⬛" />
                <SkillIcon label="Redux" icon="🟣" />
              </SkillCard>
            </div>
            
            {/* Programming Languages (4 items) */}
            <SkillCard 
              title="Programming Languages" 
              description="Proficient in multiple languages for problem-solving, algorithms, and building efficient solutions." 
              accent="dark"
            >
              <SkillIcon label="Python" icon="🐍" />
              <SkillIcon label="C" icon="🔵" />
              <SkillIcon label="C++" icon="⚙️" />
              <SkillIcon label="Java" icon="☕" />
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
              <SkillIcon label="CSS3" icon="🎨" />
              <SkillIcon label="Tailwind" icon="💨" />
              <SkillIcon label="Bootstrap" icon="🅱️" />
              <SkillIcon label="Sass" icon="💅" />
              <SkillIcon label="MUI" icon="🅼" />
            </SkillCard>

            {/* Database Management (4 items) */}
            <SkillCard 
              title="Database Management" 
              description="Designing and managing databases to ensure secure and efficient data storage and retrieval." 
              accent="lime"
            >
              <SkillIcon label="MySQL" icon="🐬" />
              <SkillIcon label="PostgreSQL" icon="🐘" />
              <SkillIcon label="MongoDB" icon="🍃" />
              <SkillIcon label="Firebase" icon="🔥" />
            </SkillCard>

            {/* Back-End Development (4 items) */}
            <SkillCard 
              title="Back-End Development" 
              description="Developing robust server-side logic and APIs to power dynamic and scalable web applications." 
              accent="dark"
            >
              <SkillIcon label="Node.js" icon="🟢" />
              <SkillIcon label="Express" icon="🚂" />
              <SkillIcon label="Django" icon="🐉" />
              <SkillIcon label="Laravel" icon="🔺" />
            </SkillCard>
          </div>

          {/* Row 3: 1 normal + 1 wide */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Web Animations (3 items) */}
            <SkillCard 
              title="Web Animations" 
              description="Creating seamless animations and transitions to enhance user engagement and interactivity." 
              accent="lime"
            >
              <SkillIcon label="Framer Motion" icon="🎞️" />
              <SkillIcon label="GSAP" icon="🦎" />
              <SkillIcon label="Lottie" icon="✨" />
            </SkillCard>

            {/* Cloud & Deployment - Wide (5 items) */}
            <div className="md:col-span-2">
              <SkillCard 
                title="Cloud & Deployment" 
                description="Experienced in deploying and managing applications using modern cloud platforms and DevOps tools." 
                accent="dark"
              >
                <SkillIcon label="Docker" icon="🐳" />
                <SkillIcon label="AWS" icon="🟠" />
                <SkillIcon label="Azure" icon="☁️" />
                <SkillIcon label="GCP" icon="🌐" />
                <SkillIcon label="Vercel" icon="▲" />
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

            {/* UI/UX & Testing (4 items) */}
            <SkillCard 
              title="UI/UX & Testing" 
              description="Designing user-centric interfaces and ensuring code quality through rigorous testing and debugging." 
              accent="lime"
            >
              <SkillIcon label="Figma" icon="🎭" />
              <SkillIcon label="Jest" icon="🃏" />
              <SkillIcon label="Cypress" icon="🌲" />
              <SkillIcon label="Vitest" icon="⚡" />
            </SkillCard>
          </div>

          {/* Row 5: 3 cards - mixed sizes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Mobile App Development (2 items) */}
            <SkillCard 
              title="Mobile App Development" 
              description="Creating cross-platform mobile apps with sleek designs and robust functionality." 
              accent="dark"
            >
              <SkillIcon label="React Native" icon="⚛️" />
              <SkillIcon label="Expo" icon="📱" />
            </SkillCard>

            {/* Version Control (2 items) */}
            <SkillCard 
              title="Version Control" 
              description="Effectively managing code and collaborating on projects for seamless teamwork." 
              accent="lime"
            >
              <SkillIcon label="GitHub" icon="🐙" />
              <SkillIcon label="GitLab" icon="🦊" />
            </SkillCard>

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
