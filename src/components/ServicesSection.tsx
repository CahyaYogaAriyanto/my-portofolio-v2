import React from 'react';
import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLang } from '../context/LanguageContext';

const STATIC_SERVICE_CONFIG = [
  { titleBgColor: 'bg-[#B9FF66]', bgColor: 'bg-[#F3F3F3]', textColor: 'text-black', imageSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/875ls1i9_expires_30_days.png', iconSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/ga3erwvf_expires_30_days.png' },
  { titleBgColor: 'bg-white', bgColor: 'bg-[#B9FF66]', textColor: 'text-black', imageSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/vugzilt4_expires_30_days.png', iconSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/5npt6geo_expires_30_days.png' },
  { titleBgColor: 'bg-white', bgColor: 'bg-[#191A23]', textColor: 'text-white', imageSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/v6cmweat_expires_30_days.png', iconSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/o3ttglg2_expires_30_days.png' },
  { titleBgColor: 'bg-[#B9FF66]', bgColor: 'bg-[#F3F3F3]', textColor: 'text-black', imageSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/xu28uf6b_expires_30_days.png', iconSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/mr3srvic_expires_30_days.png' },
  { titleBgColor: 'bg-white', bgColor: 'bg-[#B9FF66]', textColor: 'text-black', imageSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/h3v754ys_expires_30_days.png', iconSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/ffrkceg3_expires_30_days.png' },
  { titleBgColor: 'bg-[#B9FF66]', bgColor: 'bg-[#191A23]', textColor: 'text-white', imageSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/vpyjf9mb_expires_30_days.png', iconSrc: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/l6eb0r9a_expires_30_days.png' },
];

const ServicesSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLang();

  const services = STATIC_SERVICE_CONFIG.map((cfg, i) => ({
    ...cfg,
    title: [...t.services.items[i].title] as string[],
  }));

  return (
    <div ref={ref} className={`w-full max-w-[1440px] scroll-animate ${isVisible ? 'visible' : ''}`}>
      <SectionTitle
        title={t.services.sectionTitle}
        description={t.services.sectionDesc}
      />
      <div className="flex flex-col self-stretch mb-[100px] gap-10 px-4 lg:px-[100px]">
        <div className="flex flex-col lg:flex-row justify-center items-center self-stretch gap-10">
          <ServiceCard {...services[0]} />
          <ServiceCard {...services[1]} />
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center self-stretch gap-10">
          <ServiceCard {...services[2]} />
          <ServiceCard {...services[3]} />
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center self-stretch gap-10">
          <ServiceCard {...services[4]} />
          <ServiceCard {...services[5]} />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
