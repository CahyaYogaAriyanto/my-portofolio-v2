import React from 'react';

interface CaseStudyItemProps {
  description: string;
  arrowSrc: string;
}

const CaseStudyItem: React.FC<CaseStudyItemProps> = ({ description, arrowSrc }) => {
  return (
    <div className="flex flex-col shrink-0 items-start gap-5">
      <span className="text-white text-lg" style={{ maxWidth: '282px' }}>
        {description}
      </span>
      <div className="flex items-center gap-[18px]">
        <span className="text-[#B9FF66] text-xl">Learn more</span>
        <img
          src={arrowSrc}
          className="w-[17px] h-2.5 object-fill"
          alt="Arrow"
        />
      </div>
    </div>
  );
};

export default CaseStudyItem;
