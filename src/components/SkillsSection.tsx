import React from 'react';
import {
  Home,
  Mail,
  Camera,
  MessageCircle,
  FileText,
  GitBranch,
  Shield,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Skill Icon component – renders a rounded dark
   pill/square with an emoji or image inside
───────────────────────────────────────────── */
interface SkillIconProps {
  label: string;
  /** emoji or short text shown as the icon */
  icon: string;
  /** optional background color override */
  bg?: string;
  size?: 'sm' | 'md';
}

const SkillIcon: React.FC<SkillIconProps> = ({
  label,
  icon,
  bg = 'bg-zinc-800',
  size = 'md',
}) => {
  const dim = size === 'sm' ? 'w-10 h-10 text-xl' : 'w-12 h-12 text-2xl';
  return (
    <div
      title={label}
      className={`${dim} ${bg} rounded-xl flex items-center justify-center select-none`}
    >
      <span role="img" aria-label={label}>
        {icon}
      </span>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Tag badge (used in CS Concepts & Personal Dev)
───────────────────────────────────────────── */
const Tag: React.FC<{ label: string }> = ({ label }) => (
  <span className="text-xs text-white/70 border border-white/20 rounded-full px-3 py-1">
    {label}
  </span>
);

/* ─────────────────────────────────────────────
   Skill Card – main reusable card
───────────────────────────────────────────── */
interface SkillCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  children,
  className = '',
}) => (
  <div
    className={`bg-[#1a1a1a] rounded-2xl p-5 flex flex-col gap-4 border border-white/5 ${className}`}
  >
    {/* Icons area */}
    <div>{children}</div>
    {/* Text */}
    <div>
      <h3 className="text-white font-semibold text-base mb-1">{title}</h3>
      <p className="text-white/50 text-xs leading-relaxed">{description}</p>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   Dock button (reused from BottomDock style)
───────────────────────────────────────────── */
interface DockBtnProps {
  active?: boolean;
  children: React.ReactNode;
  label: string;
}
const DockBtn: React.FC<DockBtnProps> = ({ active, children, label }) => (
  <button
    aria-label={label}
    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
      active ? 'bg-white text-black' : 'bg-zinc-800 text-white/70 hover:bg-zinc-700'
    }`}
  >
    {children}
  </button>
);

/* ─────────────────────────────────────────────
   Main Section
───────────────────────────────────────────── */
const SkillsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#0a0a0a] text-white px-4 sm:px-8 py-16 pb-28">
      {/* ── Header bar ── */}
      <div className="max-w-6xl mx-auto flex justify-between items-start mb-12">
        <p className="text-white/40 text-xs">© Code by Cahya</p>
        <p className="text-white/40 text-xs text-right max-w-[240px] leading-relaxed hidden sm:block">
          Passionate Frontend Developer dedicated to crafting innovative
          solutions and exceptional digital experiences through modern
          technologies
        </p>
      </div>

      {/* ── Giant heading ── */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-white font-bold leading-tight"
          style={{ fontSize: 'clamp(40px, 8vw, 88px)' }}>
          Skills that fuel my
          <br />
          passion
        </h1>
      </div>

  =
      {/* ── Skills grid ── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

        {/* 1 · Front-End Development (tall – spans 2 rows on lg) */}
        <SkillCard
          title="Front-End Development"
          description="Building engaging and user-friendly web interfaces using modern frameworks and technologies with expertise."
          className="lg:row-span-1"
        >
          <div className="flex flex-wrap gap-2 mb-2">
            <SkillIcon label="HTML5" icon="🔶" bg="bg-orange-600/20" />
            <SkillIcon label="JavaScript" icon="🟨" bg="bg-yellow-500/20" />
            <SkillIcon label="TypeScript" icon="🔷" bg="bg-blue-600/20" />
          </div>
          <div className="flex flex-wrap gap-2">
            <SkillIcon label="Next.js" icon="⬛" bg="bg-zinc-700" />
            <SkillIcon label="Redux" icon="🟣" bg="bg-purple-700/20" />
            <SkillIcon label="React" icon="⚛️" bg="bg-cyan-700/20" />
          </div>
        </SkillCard>

        {/* 2 · Styling & Design (center column, tall) */}
        <SkillCard
          title="Styling & Design"
          description="Crafting visually appealing and responsive designs with advanced styling tools and frameworks."
          className="sm:row-span-2"
        >
          <div className="flex flex-wrap gap-2 mb-2">
            <SkillIcon label="CSS3" icon="🎨" bg="bg-blue-500/20" />
            <SkillIcon label="Tailwind" icon="💨" bg="bg-cyan-600/20" />
            <SkillIcon label="Bootstrap" icon="🅱️" bg="bg-purple-600/20" />
          </div>
          <div className="flex flex-wrap gap-2">
            <SkillIcon label="Sass" icon="💅" bg="bg-pink-600/20" />
            <SkillIcon label="MUI" icon="🅼" bg="bg-blue-600/20" />
          </div>
        </SkillCard>

        {/* 3 · Programming Languages */}
        <SkillCard
          title="Programming Languages"
          description="Proficient in problem-solving and applying programming languages to implement efficient data structures and algorithms."
        >
          <div className="flex flex-wrap gap-2">
            <SkillIcon label="Python" icon="🐍" bg="bg-yellow-600/20" />
            <SkillIcon label="C" icon="🔵" bg="bg-blue-700/20" />
            <SkillIcon label="C++" icon="🔵" bg="bg-blue-600/20" />
            <SkillIcon label="Java" icon="☕" bg="bg-red-600/20" />
          </div>
        </SkillCard>

        {/* 4 · Back-End Development */}
        <SkillCard
          title="Back-End Development"
          description="Developing robust server-side logic and APIs to power dynamic and scalable web applications."
        >
          <div className="flex flex-wrap gap-2">
            <SkillIcon label="Node.js" icon="🟢" bg="bg-green-600/20" />
            <SkillIcon label="Express" icon="🚂" bg="bg-zinc-700" />
            <SkillIcon label="Django" icon="🐉" bg="bg-green-800/20" />
            <SkillIcon label="Laravel" icon="🔺" bg="bg-red-700/20" />
          </div>
        </SkillCard>

        {/* 5 · Database Management */}
        <SkillCard
          title="Database Management"
          description="Designing and managing databases to ensure secure and efficient data storage and retrieval."
        >
          <div className="flex flex-wrap gap-2">
            <SkillIcon label="MySQL" icon="🐬" bg="bg-blue-700/20" />
            <SkillIcon label="PostgreSQL" icon="🐘" bg="bg-indigo-700/20" />
            <SkillIcon label="MongoDB" icon="🍃" bg="bg-green-700/20" />
            <SkillIcon label="Firebase" icon="🔥" bg="bg-orange-600/20" />
          </div>
        </SkillCard>

        {/* 6 · Web Animations (center) */}
        <SkillCard
          title="Web Animations"
          description="Creating seamless animations and transitions to enhance user engagement and interactivity."
        >
          <div className="flex flex-wrap gap-2">
            <SkillIcon label="Framer Motion" icon="🎞️" bg="bg-pink-700/20" />
            <SkillIcon label="GSAP" icon="🦎" bg="bg-green-600/20" />
            <SkillIcon label="Lottie" icon="✨" bg="bg-teal-600/20" />
          </div>
        </SkillCard>

        {/* 7 · Core CS Concepts */}
        <SkillCard
          title="Core Computer Science Concepts"
          description="Demonstrating a strong foundation in core computer science principles, including problem-solving, system design, and efficient computing techniques."
        >
          <div className="flex flex-wrap gap-2">
            <Tag label="Operating Systems" />
            <Tag label="Computer Networks" />
            <Tag label="Object-Oriented Programming" />
            <Tag label="DSA" />
            <Tag label="System Design" />
          </div>
        </SkillCard>

        {/* 8 · Cloud & Deployment (center) */}
        <SkillCard
          title="Cloud & Deployment"
          description="Experienced in deploying and managing applications using modern cloud platforms and tools."
        >
          <div className="flex flex-wrap gap-2">
            <SkillIcon label="Docker" icon="🐳" bg="bg-blue-600/20" />
            <SkillIcon label="Azure" icon="☁️" bg="bg-sky-600/20" />
            <SkillIcon label="AWS" icon="🟠" bg="bg-orange-500/20" />
            <SkillIcon label="GCP" icon="🌐" bg="bg-blue-500/20" />
            <SkillIcon label="Vercel" icon="▲" bg="bg-zinc-700" />
          </div>
        </SkillCard>

        {/* 9 · Mobile App Dev + Version Control (right col, 2 small stacked) */}
        <div className="flex flex-col gap-4">
          <SkillCard
            title="Mobile App Development"
            description="Creating cross-platform mobile apps with sleek designs and robust functionality."
          >
            <div className="flex flex-wrap gap-2">
              <SkillIcon label="React Native" icon="⚛️" bg="bg-cyan-700/20" />
              <SkillIcon label="Expo" icon="📱" bg="bg-zinc-700" />
            </div>
          </SkillCard>

          <SkillCard
            title="Version Control & Collaboration"
            description="Effectively managing code and collaborating on projects to ensure seamless teamwork."
          >
            <div className="flex flex-wrap gap-2">
              <SkillIcon label="GitHub" icon="🐙" bg="bg-zinc-700" />
              <SkillIcon label="GitLab" icon="🦊" bg="bg-orange-700/20" />
            </div>
          </SkillCard>
        </div>

        {/* 10 · Personal Development */}
        <SkillCard
          title="Personal Development"
          description="Committed to continuous learning and personal growth to excel in both professional and collaborative environments."
        >
          <div className="flex flex-wrap gap-2">
            <Tag label="Time Management" />
            <Tag label="Problem Solving" />
            <Tag label="Communication" />
            <Tag label="Leadership" />
          </div>
        </SkillCard>

        {/* 11 · Testing & Debugging (center) */}
        <SkillCard
          title="Testing & Debugging"
          description="Ensuring code quality and reliability through rigorous testing and debugging processes."
        >
          <div className="flex flex-wrap gap-2">
            <SkillIcon label="Jest" icon="🃏" bg="bg-red-700/20" />
            <SkillIcon label="Cypress" icon="🌲" bg="bg-green-700/20" />
            <SkillIcon label="Vitest" icon="⚡" bg="bg-yellow-600/20" />
          </div>
        </SkillCard>

        {/* 12 · UI/UX Design */}
        <SkillCard
          title="UI/UX Design"
          description="Designing user-centric interfaces that are intuitive, visually appealing, and easy to navigate."
        >
          <div className="flex flex-wrap gap-2 mb-2">
            <SkillIcon label="Figma" icon="🎭" bg="bg-purple-600/20" />
            <Tag label="Prototyping" />
            <Tag label="Wireframing" />
          </div>
        </SkillCard>

      </div>
    </section>
  );
};

export default SkillsSection;
