import React from 'react';

interface ProcessStepProps {
  number: string;
  title: string;
  description?: string;
  isExpanded: boolean;
  onToggle: () => void;
  bgColor?: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  isExpanded,
  onToggle,
  bgColor = 'bg-[#F3F3F3]',
}) => {
  // Change background to green when expanded
  const activeBgColor = isExpanded ? 'bg-[#B9FF66]' : bgColor;
  
  return (
    <div
      className={`flex flex-col self-stretch ${activeBgColor} rounded-[45px] border border-solid border-[#191A23] transition-all duration-500 ease-out overflow-hidden`}
      style={{ boxShadow: '0px 5px 0px #191A23' }}
    >
      {/* Header - Always Visible */}
      <div className="flex justify-between items-center self-stretch py-[30px] lg:py-[41px] px-[30px] lg:px-[60px]">
        <div className="flex shrink-0 items-center">
          <span className="text-black text-4xl lg:text-6xl mr-4 lg:mr-8">{number}</span>
          <span className="text-black text-xl lg:text-3xl">{title}</span>
        </div>
        <button
          onClick={onToggle}
          className="w-[48px] lg:w-[58px] h-[48px] lg:h-[58px] flex items-center justify-center bg-transparent border-0 cursor-pointer transition-all duration-300 hover:scale-110 flex-shrink-0"
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          {isExpanded ? (
            <svg
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300"
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
              className="transition-transform duration-300"
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
        className={`transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="self-stretch bg-black h-[1px] mx-[30px] lg:mx-[60px]"></div>
        <div className="px-[30px] lg:px-[60px] py-[25px] lg:py-[35px]">
          <span className="text-black text-base lg:text-lg block">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;
