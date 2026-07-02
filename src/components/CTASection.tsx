import React from 'react';
import Button from './Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CTASection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div ref={ref} className={`w-full max-w-[1440px] scroll-animate ${isVisible ? 'visible' : ''}`}>
      <div className="flex flex-col items-end self-stretch max-w-[1240px] relative mb-[80px] lg:mb-[140px] mx-4 lg:mx-auto">
        <img
          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZu43J2mik/m7q17sai_expires_30_days.png"
          className="w-[300px] lg:w-[494px] h-auto object-fill"
          alt="CTA"
        />
        <div className="flex flex-col items-start self-stretch bg-[#F3F3F3] absolute top-[15px] lg:top-[23px] right-0 left-0 py-[40px] lg:py-[60px] pl-[30px] lg:pl-[60px] rounded-[45px]">
          <div className="flex flex-col items-start pr-6 lg:pr-10">
            <span className="text-black text-2xl lg:text-3xl mb-[20px] lg:mb-[26px]">
              Let's make things happen
            </span>
            <span className="text-black text-base lg:text-lg w-full lg:w-[460px] mb-[20px] lg:mb-[25px]">
              Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
            </span>
            <Button onClick={() => alert('Pressed!')}>
              <span className="text-white text-lg lg:text-xl">Get your free proposal</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
