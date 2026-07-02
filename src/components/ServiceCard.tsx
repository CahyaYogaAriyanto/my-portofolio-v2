import React from 'react';

interface ServiceCardProps {
  title: string[];
  titleBgColor: string;
  bgColor: string;
  textColor?: string;
  imageSrc: string;
  iconSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  titleBgColor,
  bgColor,
  textColor = 'text-black',
  imageSrc,
  iconSrc,
}) => {
  return (
    <div
      className={`flex shrink-0 items-center ${bgColor} p-[50px] rounded-[45px] border border-solid border-[#191A23]`}
      style={{ boxShadow: '0px 5px 0px #191A23' }}
    >
      <div className="flex flex-col shrink-0 items-start" style={{ marginRight: title.length > 1 ? '69px' : '81px' }}>
        <div className="flex flex-col items-start mb-[93px]">
          {title.map((line, index) => (
            <div
              key={index}
              className={`flex flex-col items-start ${titleBgColor} px-[7px] rounded-[7px]`}
            >
              <span className="text-black text-3xl">{line}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-[15px]">
          <img src={iconSrc} className="w-[41px] h-[41px] object-fill" alt="Icon" />
          <span className={`${textColor} text-xl`}>Learn more</span>
        </div>
      </div>
      <img
        src={imageSrc}
        className="w-[210px] rounded-[45px] object-fill"
        alt={title.join(' ')}
      />
    </div>
  );
};

export default ServiceCard;
