import React from 'react';

interface SectionTitleProps {
  title: string;
  description?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description }) => {
  return (
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
};

export default SectionTitle;
