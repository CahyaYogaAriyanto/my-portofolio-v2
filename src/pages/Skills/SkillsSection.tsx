import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/* ─────────────────────────────────────────────
   SectionTitle  (mirrors the Home version)
───────────────────────────────────────────── */
const SectionTitle: React.FC<{ title: string; description?: string }> = ({
  title,
  description,
}) => (
  <div className="flex flex-col lg:flex-row items-start lg:items-center mb-12 lg:mb-20 ml-4 lg:ml-[100px] gap-4 lg:gap-10 pr-4 lg:pr-0">
    <div className="flex flex-col shrink-0 items-start bg-[#B9FF66] px-[7px] rounded-[7px]">
      <span className="text-black text-3xl lg:text-[40px]">{title}</span>
    </div>
    {description && (
      <span className="text-black text-base lg:text-lg max-w-[570px]">
        {description}
      </span>
    )}
  </div>
);

/* ─────────────────────────────────────────────
   Tag badge  (lime outline, matches Home style)
───────────────────────────────────────────── */
const Tag: React.FC<{ label: string }> = ({ label }) => (
  <span className="text-sm text-black border border-[#191A23] rounded-full px-3 py-1 bg-white">
    {label}
  </span>
);

/* ─────────────────────────────────────────────
   Skill Icon pill
───────────────────────────────────────────── */
interface SkillIconProps {
  label: string;
  icon: string;
}
const SkillIcon: React.FC<SkillIconProps> = ({ label, icon }) => (
  <div
    title={label}
    className="
      flex items-center gap-2
      bg-[#F3F3F3] border border-[#191A23]
      rounded-full px-3 py-1.5
      text-sm font-medium text-black
      select-none
    "
  >
    <span role="img" aria-label={label} className="text-base">
      {icon}
    </span>
    <span>{label}</span>
  </div>
);

/* ─────────────────────────────────────────────
   Skill Card  (matches ServiceCard aesthetic)
───────────────────────────────────────────── */
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
  children,
}) => {
  const bg =
    accent === 'lime'
      ? 'bg-[#B9FF66]'
      : accent === 'dark'
      ? 'bg-[#191A23]'
      : 'bg-[#F3F3F3]';

  const titleBg =
    accent === 'lime' ? 'bg-white' : accent === 'dark' ? 'bg-[#B9FF66]' : 'bg-[#B9FF66]';

  const textColor = accent === 'dark' ? 'text-white' : 'text-black';
  const descColor = accent === 'dark' ? 'text-white/60' : 'text-black/60';

  return (
    <div
      className={`flex flex-col ${bg} p-8 rounded-[45px] border border-[#191A23] h-full`}
      style={{ boxShadow: '0px 5px 0px #191A23' }}
    >
      {/* Title badge */}
      <div className={`inline-flex self-start ${titleBg} px-[7px] rounded-[7px] mb-6`}>
        <span className={`text-black text-xl font-semibold`}>{title}</span>
      </div>

      {/* Icons / tags */}
      <div className="flex flex-wrap gap-2 mb-6">{children}</div>

      {/* Description */}
      <p className={`${descColor} text-sm leading-relaxed mt-auto`}>{description}</p>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Main Section
───────────────────────────────────────────── */
const SkillsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`w-full max-w-[1440px] mx-auto scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      <SectionTitle
        title="My Skills"
        description="A comprehensive overview of the technologies, tools, and concepts I work with to build modern digital experiences."
      />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-[100px] mb-[100px]">

        {/* 1 · Front-End Development — lime */}
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

        {/* 2 · Styling & Design — dark */}
        <SkillCard
          title="Styling & Design"
          description="Crafting visually appealing and responsive designs with advanced styling tools and frameworks."
          accent="dark"
        >
          <SkillIcon label="CSS3" icon="🎨" />
          <SkillIcon label="Tailwind" icon="💨" />
          <SkillIcon label="Bootstrap" icon="🅱️" />
          <SkillIcon label="Sass" icon="💅" />
          <SkillIcon label="MUI" icon="🅼" />
        </SkillCard>

        {/* 3 · Programming Languages — light */}
        <SkillCard
          title="Programming Languages"
          description="Proficient in multiple languages for problem-solving, algorithms, and building efficient solutions."
          accent="light"
        >
          <SkillIcon label="Python" icon="🐍" />
          <SkillIcon label="C" icon="🔵" />
          <SkillIcon label="C++" icon="⚙️" />
          <SkillIcon label="Java" icon="☕" />
        </SkillCard>

        {/* 4 · Back-End Development — light */}
        <SkillCard
          title="Back-End Development"
          description="Developing robust server-side logic and APIs to power dynamic and scalable web applications."
          accent="light"
        >
          <SkillIcon label="Node.js" icon="🟢" />
          <SkillIcon label="Express" icon="🚂" />
          <SkillIcon label="Django" icon="🐉" />
          <SkillIcon label="Laravel" icon="🔺" />
        </SkillCard>

        {/* 5 · Database Management — lime */}
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

        {/* 6 · Web Animations — dark */}
        <SkillCard
          title="Web Animations"
          description="Creating seamless animations and transitions to enhance user engagement and interactivity."
          accent="dark"
        >
          <SkillIcon label="Framer Motion" icon="🎞️" />
          <SkillIcon label="GSAP" icon="🦎" />
          <SkillIcon label="Lottie" icon="✨" />
        </SkillCard>

        {/* 7 · Cloud & Deployment — light */}
        <SkillCard
          title="Cloud & Deployment"
          description="Experienced in deploying and managing applications using modern cloud platforms and DevOps tools."
          accent="light"
        >
          <SkillIcon label="Docker" icon="🐳" />
          <SkillIcon label="AWS" icon="🟠" />
          <SkillIcon label="Azure" icon="☁️" />
          <SkillIcon label="GCP" icon="🌐" />
          <SkillIcon label="Vercel" icon="▲" />
        </SkillCard>

        {/* 8 · Core CS Concepts — dark */}
        <SkillCard
          title="Core CS Concepts"
          description="Strong foundation in computer science principles including system design and efficient computing techniques."
          accent="dark"
        >
          <Tag label="Operating Systems" />
          <Tag label="Computer Networks" />
          <Tag label="OOP" />
          <Tag label="DSA" />
          <Tag label="System Design" />
        </SkillCard>

        {/* 9 · UI/UX & Testing — lime */}
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

        {/* 10 · Mobile Development — light */}
        <SkillCard
          title="Mobile App Development"
          description="Creating cross-platform mobile apps with sleek designs and robust functionality using React Native."
          accent="light"
        >
          <SkillIcon label="React Native" icon="⚛️" />
          <SkillIcon label="Expo" icon="📱" />
        </SkillCard>

        {/* 11 · Version Control — lime */}
        <SkillCard
          title="Version Control"
          description="Effectively managing code and collaborating on projects to ensure seamless teamwork and delivery."
          accent="lime"
        >
          <SkillIcon label="GitHub" icon="🐙" />
          <SkillIcon label="GitLab" icon="🦊" />
        </SkillCard>

        {/* 12 · Personal Development — dark */}
        <SkillCard
          title="Personal Development"
          description="Committed to continuous learning and personal growth to excel in professional environments."
          accent="dark"
        >
          <Tag label="Time Management" />
          <Tag label="Problem Solving" />
          <Tag label="Communication" />
          <Tag label="Leadership" />
        </SkillCard>

      </div>
    </section>
  );
};

export default SkillsSection;
