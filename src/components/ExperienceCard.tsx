import React from 'react';
import { useLang } from '../context/LanguageContext';

interface Role {
  name: string;
  responsibilities: string[];
}

interface ExperienceCardProps {
  number: string;
  title: string;
  company: string;
  location?: string;
  period: string;
  responsibilities?: string[];
  roles?: Role[];
  isExpanded: boolean;
  onToggle: () => void;
  bgColor?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  number,
  title,
  company,
  location,
  period,
  responsibilities,
  roles,
  isExpanded,
  onToggle,
  bgColor = 'bg-[#F3F3F3]',
}) => {
  const { t } = useLang();
  const activeBgColor = isExpanded ? 'bg-[#B9FF66]' : bgColor;
  
  return (
    <div
      className={`experience-card flex flex-col self-stretch ${activeBgColor} rounded-[45px] border border-solid border-[#191A23] transition-all duration-600 ease-in-out overflow-hidden cursor-pointer will-change-[background-color,transform]`}
      style={{ boxShadow: '0px 5px 0px #191A23' }}
      onClick={onToggle}
    >
      {/* Header - Always Visible */}
      <div className="flex justify-between items-start lg:items-center self-stretch py-[30px] lg:py-[41px] px-[30px] lg:px-[60px]">
        <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6 flex-1">
          {/* Duration Badge */}
          <div className="flex items-center gap-2 lg:gap-4 shrink-0">
            <span className="text-black text-3xl lg:text-5xl font-medium">{number}</span>
          </div>
          
          {/* Job Details */}
          <div className="flex flex-col gap-1">
            <h3 className="text-black text-lg lg:text-2xl font-semibold leading-tight">
              {title}
            </h3>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3 text-black/70 text-sm lg:text-base">
              <span className="font-medium">{company}</span>
              {location && (
                <>
                  <span className="hidden lg:inline">•</span>
                  <span>{location}</span>
                </>
              )}
            </div>
            <span className="text-black/60 text-sm lg:text-base">{period}</span>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          className="w-[48px] lg:w-[58px] h-[48px] lg:h-[58px] flex items-center justify-center bg-transparent border-0 cursor-pointer transition-all duration-300 hover:scale-110 flex-shrink-0 ml-4"
          aria-label={isExpanded ? t.experience.collapseLabel : t.experience.expandLabel}
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
        >
          {isExpanded ? (
            <svg
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 w-[48px] h-[48px] lg:w-[58px] lg:h-[58px]"
            >
              <circle cx="29" cy="29" r="29" fill="#F3F3F3" />
              <path
                d="M18 29H40"
                stroke="#000000"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 w-[48px] h-[48px] lg:w-[58px] lg:h-[58px]"
            >
              <circle cx="29" cy="29" r="29" fill="#F3F3F3" />
              <path
                d="M29 18V40M18 29H40"
                stroke="#000000"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Dropdown Content - Shows when expanded */}
      <div
        className={`experience-card-content transition-all duration-700 ease-in-out will-change-[max-height,opacity] ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="self-stretch bg-black h-[1px] mx-[30px] lg:mx-[60px]"></div>
        <div className="px-[30px] lg:px-[60px] py-[25px] lg:py-[35px]">
          {/* Single Role Responsibilities */}
          {responsibilities && (
            <div className="space-y-3">
              <h4 className="text-black text-base lg:text-lg font-semibold mb-3">
                {t.experience.responsibilitiesLabel}
              </h4>
              <ul className="space-y-2 list-none">
                {responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-black text-sm lg:text-base">
                    <span className="text-[#B9FF66] text-xl shrink-0 mt-[-2px]">•</span>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Multiple Roles */}
          {roles && (
            <div className="space-y-6">
              {roles.map((role, roleIdx) => (
                <div key={roleIdx} className="space-y-3">
                  <h4 className="text-black text-base lg:text-lg font-semibold">
                    {role.name}
                  </h4>
                  <ul className="space-y-2 list-none">
                    {role.responsibilities.map((resp, respIdx) => (
                      <li key={respIdx} className="flex items-start gap-3 text-black text-sm lg:text-base">
                        <span className="text-[#B9FF66] text-xl shrink-0 mt-[-2px]">•</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                  {roleIdx < roles.length - 1 && (
                    <div className="h-[1px] bg-black/20 mt-4"></div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
