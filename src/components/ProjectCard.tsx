import React, { useState } from 'react';

export type ProjectType = 'mobile' | 'website';

export interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  imageSrc: string;
  type: ProjectType;
  liveUrl?: string;
  repoUrl?: string;
}

/* website card */
const WebsiteCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  imageSrc,
  liveUrl,
  repoUrl,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col bg-white rounded-[20px] border border-[#191A23] overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1"
      style={{ boxShadow: hovered ? '0px 8px 0px #191A23' : '0px 5px 0px #191A23' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* browser chrome */}
      <div className="bg-[#F3F3F3] border-b border-[#E0E0E0] px-4 py-2.5 flex items-center gap-2 shrink-0">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57] inline-block"></span>
        <span className="w-3 h-3 rounded-full bg-[#FEBC2E] inline-block"></span>
        <span className="w-3 h-3 rounded-full bg-[#28C840] inline-block"></span>
        <div className="ml-3 flex-1 bg-white rounded-md h-5 flex items-center px-2">
          <span className="text-[10px] text-[#9CA3AF] truncate">
            {liveUrl ?? 'project.demo'}
          </span>
        </div>
      </div>

      {/* screenshot */}
      <div className="relative overflow-hidden bg-[#F9F9F9]" style={{ aspectRatio: '16/9' }}>
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 bg-[#B9FF66] text-black text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200 hover:bg-[#a8f050] cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 bg-white text-black text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200 hover:bg-gray-100 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              Repo
            </a>
          )}
        </div>
      </div>

      {/* info */}
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-black text-lg font-semibold leading-snug">{title}</h3>
          <span className="shrink-0 text-[11px] font-medium bg-[#191A23] text-white px-2.5 py-1 rounded-full">
            Website
          </span>
        </div>
        <p className="text-[#4B5563] text-sm leading-relaxed line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {tech.map((t) => (
            <span key={t} className="text-[11px] font-medium border border-[#191A23] px-2.5 py-0.5 rounded-full text-[#191A23]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* mobile card */
const MobileCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  imageSrc,
  liveUrl,
  repoUrl,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col sm:flex-row bg-white rounded-[20px] border border-[#191A23] overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1"
      style={{ boxShadow: hovered ? '0px 8px 0px #191A23' : '0px 5px 0px #191A23' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* phone mockup */}
      <div className="flex items-center justify-center bg-[#F3F3F3] sm:w-[200px] shrink-0 p-6">
        <div className="relative" style={{ width: 110, height: 220 }}>
          <div className="absolute inset-0 rounded-[22px] bg-[#191A23] shadow-lg"></div>
          <div className="absolute inset-[6px] rounded-[17px] overflow-hidden bg-black">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {/* notch */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[36px] h-[6px] rounded-full bg-[#191A23] z-10"></div>
          {/* home indicator */}
          <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[30px] h-[3px] rounded-full bg-white/40 z-10"></div>
        </div>
      </div>

      {/* info */}
      <div className="flex flex-col gap-3 p-5 justify-center flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-black text-lg font-semibold leading-snug">{title}</h3>
          <span className="shrink-0 text-[11px] font-medium bg-[#B9FF66] text-black px-2.5 py-1 rounded-full border border-[#191A23]">
            Mobile
          </span>
        </div>
        <p className="text-[#4B5563] text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="text-[11px] font-medium border border-[#191A23] px-2.5 py-0.5 rounded-full text-[#191A23]">
              {t}
            </span>
          ))}
        </div>
        {/* links */}
        <div className="flex gap-2 mt-1">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 bg-[#B9FF66] border border-[#191A23] text-black text-xs font-semibold px-3 py-1.5 rounded-full transition-colors duration-200 hover:bg-[#a8f050] cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 bg-[#191A23] text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors duration-200 hover:bg-[#2d2f3a] cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

/* unified export */
const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return props.type === 'mobile' ? <MobileCard {...props} /> : <WebsiteCard {...props} />;
};

export default ProjectCard;
