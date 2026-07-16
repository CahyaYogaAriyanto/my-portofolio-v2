import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// ── project image imports ─────────────────────────────────────────────────────
import picture1 from '../assets/image_project/website/picture-1.png';
import pigFriends from '../assets/image_project/website/pig-friends.png';
import plagbleg from '../assets/image_project/website/plagbleg.png';
import sayurMart from '../assets/image_project/website/sayur-mart.png';
import trilokasMobile from '../assets/image_project/mobile/Trilokas-mobile.png';
import pmbsma from '../assets/image_project/mobile/pmbsma.png';

// ── types ─────────────────────────────────────────────────────────────────────
type ProjectType = 'website' | 'mobile';

interface Project {
  title: string;
  description: string;
  tech: string[];
  imageSrc: string;
  type: ProjectType;
  accent: string;
  aspectRatio?: string;   // CSS aspect-ratio value, e.g. '1851 / 923'
  liveUrl?: string;
  repoUrl?: string;
}

// ── data ─────────────────────────────────────────────────────────────────────
const PROJECTS: Project[] = [
  {
    title: 'Pig Friends',
    description:
      'Website komunitas & informasi seputar perawatan guinea pig. Menampilkan panduan, galeri, dan forum diskusi interaktif.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    imageSrc: pigFriends,
    type: 'website',
    accent: '#B9FF66',
    aspectRatio: '1851 / 923',
    repoUrl: 'https://github.com',
  },
  {
    title: 'Plagbleg',
    description:
      'Platform deteksi & pelaporan plagiarisme teks dengan antarmuka bersih dan intuitif.',
    tech: ['React', 'Node.js', 'Express'],
    imageSrc: plagbleg,
    type: 'website',
    accent: '#C8B4FA',
    aspectRatio: '1664 / 898',
    repoUrl: 'https://github.com',
  },
  {
    title: 'Trilokas',
    description:
      'Aplikasi mobile eksplorasi budaya & destinasi wisata berbasis lokasi dengan pengalaman visual imersif.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    imageSrc: trilokasMobile,
    type: 'mobile',
    accent: '#FFD166',
    aspectRatio: '244 / 522',
    repoUrl: 'https://github.com',
  },
  {
    title: 'Picture',
    description:
      'Aplikasi web berbagi dan eksplorasi foto dengan tampilan galeri modern dan fitur pencarian cepat.',
    tech: ['React', 'Tailwind CSS'],
    imageSrc: picture1,
    type: 'website',
    accent: '#FF6B6B',
    aspectRatio: '752 / 475',
    repoUrl: 'https://github.com',
  },
  {
    title: 'Sayur Mart',
    description:
      'Platform e-commerce sayur dan buah segar dengan sistem pemesanan online yang mudah digunakan.',
    tech: ['React', 'Node.js', 'MongoDB'],
    imageSrc: sayurMart,
    type: 'website',
    accent: '#6EE7B7',
    aspectRatio: '784 / 556',
    repoUrl: 'https://github.com',
  },
  {
    title: 'PMB SMA',
    description:
      'Aplikasi mobile penerimaan murid baru SMA dengan alur pendaftaran digital yang efisien dan mudah diakses.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    imageSrc: pmbsma,
    type: 'mobile',
    accent: '#93C5FD',
    aspectRatio: '248 / 531',
    repoUrl: 'https://github.com',
  },
];

// ── helper: GitHub SVG icon ───────────────────────────────────────────────────
const GithubIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ExternalIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// ── BentoCard ─────────────────────────────────────────────────────────────────
interface BentoCardProps {
  project: Project;
  variant: 'featured' | 'tall' | 'normal';
}

const BentoCard: React.FC<BentoCardProps> = ({ project, variant }) => {
  const [hovered, setHovered] = useState(false);
  const isMobile = project.type === 'mobile';

  // Mobile card: phone-frame beside info (horizontal layout)
  if (isMobile) {
    return (
      <div
        className={`group relative flex flex-col sm:flex-row overflow-hidden rounded-[24px] border border-[#191A23] cursor-pointer transition-all duration-300 bg-white ${hovered ? '-translate-y-1' : ''}`}
        style={{ boxShadow: hovered ? '0px 8px 0px #191A23' : '0px 5px 0px #191A23' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* accent stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 z-10" style={{ background: project.accent }} />

        {/* phone mockup panel — sized to fit the portrait image */}
        <div className="flex items-center justify-center bg-[#F0F2F5] px-8 py-8 sm:w-[220px] shrink-0">
          {/* phone shell — aspect ratio matches actual screenshot */}
          <div className="relative w-[108px]" style={{ aspectRatio: project.aspectRatio ?? '244 / 522' }}>
            {/* shell */}
            <div className="absolute inset-0 rounded-[22px] bg-[#191A23] shadow-xl" />
            {/* screen inset */}
            <div className="absolute inset-[5px] rounded-[18px] overflow-hidden bg-black">
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* notch */}
            <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[32px] h-[6px] rounded-full bg-[#191A23] z-10" />
            {/* home bar */}
            <div className="absolute bottom-[9px] left-1/2 -translate-x-1/2 w-[28px] h-[3px] rounded-full bg-white/30 z-10" />
          </div>
        </div>

        {/* info */}
        <div className="flex flex-col gap-3 p-6 justify-center flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-[#09090B] text-lg font-bold leading-snug">{project.title}</h3>
            <span
              className="shrink-0 text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-[#191A23]"
              style={{ background: project.accent }}
            >
              Mobile
            </span>
          </div>
          <p className="text-[#4B5563] text-sm leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="text-[10px] font-medium border border-[#191A23] px-2 py-0.5 rounded-full text-[#191A23]">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-2 mt-1">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border border-[#191A23] cursor-pointer transition-colors duration-200 hover:opacity-80"
                style={{ background: project.accent }}>
                <ExternalIcon className="w-3 h-3" /> Live
              </a>
            )}
            {/* {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 bg-[#191A23] text-white text-xs font-bold px-3 py-1.5 rounded-full cursor-pointer transition-colors duration-200 hover:bg-[#2d2f3a]">
                <GithubIcon className="w-3 h-3" /> Repo
              </a>
            )} */}
          </div>
        </div>
      </div>
    );
  }

  // Website card: browser mockup on top, info below
  // pig-friends ≈ 2:1, plagbleg ≈ 1.85:1 — use each project's real aspect ratio
  const aspectRatio = project.aspectRatio ?? '16 / 9';

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-[24px] border border-[#191A23] cursor-pointer transition-all duration-300 bg-white ${hovered ? '-translate-y-1' : ''}`}
      style={{ boxShadow: hovered ? '0px 8px 0px #191A23' : '0px 5px 0px #191A23' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5 z-10" style={{ background: project.accent }} />

      {/* browser chrome + screenshot */}
      <div className="relative" style={{ aspectRatio }}>
       

        {/* screenshot — fills the aspect-ratio box, nudged down by browser bar height */}
        <div className="absolute inset-0 overflow-hidden bg-[#F9F9F9]">
          <img
            src={project.imageSrc}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        {/* hover overlay */}
        <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 bg-[#B9FF66] text-black text-xs font-bold px-4 py-2 rounded-full cursor-pointer hover:bg-[#a8f050] transition-colors duration-200">
              <ExternalIcon className="w-3.5 h-3.5" /> Live
            </a>
          )}
          {/* {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 bg-white text-black text-xs font-bold px-4 py-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors duration-200">
              <GithubIcon className="w-3.5 h-3.5" /> Repo
            </a>
          )} */}
        </div>
      </div>

      {/* info */}
      <div className="p-5 flex flex-col gap-2.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[#09090B] text-base font-bold leading-snug">{project.title}</h3>
          <span
            className="shrink-0 text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-[#191A23]"
            style={{ background: project.accent }}
          >
            Website
          </span>
        </div>
        <p className="text-[#4B5563] text-sm leading-relaxed line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] font-medium border border-[#191A23] px-2 py-0.5 rounded-full text-[#191A23]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


type FilterType = 'all' | 'website' | 'mobile';

const ProjectsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filtered =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.type === activeFilter);

  const filters: { label: string; value: FilterType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Website', value: 'website' },
    { label: 'Mobile', value: 'mobile' },
  ];

  return (
    <div
      ref={ref}
      className={`w-full max-w-[1440px] scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      <SectionTitle
        title="Projects"
        description="Kumpulan proyek yang saya kerjakan — dari web hingga mobile"
      />

      {/* filter tabs */}
      <div className="flex items-center gap-2 px-4 lg:px-[100px] mb-8">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`cursor-pointer px-5 py-2 rounded-full text-sm font-semibold border border-[#191A23] transition-colors duration-200
              ${activeFilter === f.value
                ? 'bg-[#191A23] text-white'
                : 'bg-white text-[#191A23] hover:bg-[#F3F3F3]'
              }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* ── BENTO GRID ── */}
      <div className="px-4 lg:px-[100px] mb-10">
        {activeFilter === 'all' ? (
          <div className="flex flex-col gap-5">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="md:col-span-2">
                <BentoCard project={PROJECTS[1]} variant="featured" />
              </div>
              <div className="md:col-span-1">
                <BentoCard project={PROJECTS[2]} variant="tall" />
              </div>
            </div>

            {/* Row 2 — mobile card spans full width */}
            <div className="grid grid-cols-1 gap-5">
              <BentoCard project={PROJECTS[0]} variant="normal" />
            </div>

            {/* Row 3 — three equal cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              <BentoCard project={PROJECTS[3]} variant="normal" />
              <BentoCard project={PROJECTS[4]} variant="normal" />
              <BentoCard project={PROJECTS[5]} variant="normal" />
            </div>
          </div>
        ) : (
          /* filtered view */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {filtered.map((p) => (
              <BentoCard key={p.title} project={p} variant="normal" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
