import React from 'react';

interface TeamMemberCardProps {
  name: string;
  position: string;
  description: string;
  imageSrc: string;
  linkedinSrc: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  position,
  description,
  imageSrc,
  linkedinSrc,
}) => {
  return (
    <div
      className="flex flex-col shrink-0 items-start bg-white py-10 px-[35px] gap-[27px] rounded-[45px] border border-solid border-[#191A23]"
      style={{ boxShadow: '0px 5px 0px #191A23' }}
    >
      <div className="flex items-start">
        <img
          src={imageSrc}
          className="w-[102px] h-[102px] mr-5 object-fill"
          alt={name}
        />
        <div className="flex flex-col shrink-0 items-start mt-[30px]">
          <span className="text-black text-xl">{name}</span>
          <span className="text-black text-lg">{position}</span>
        </div>
        <img
          src={linkedinSrc}
          className="w-[34px] h-[34px] ml-auto object-fill"
          alt="LinkedIn"
        />
      </div>
      <div className="bg-black w-[317px] h-[1px]"></div>
      <span className="text-black text-lg" style={{ maxWidth: '299px' }}>
        {description}
      </span>
    </div>
  );
};

export default TeamMemberCard;
