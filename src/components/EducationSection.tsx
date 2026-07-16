import React from 'react';
import SectionTitle from './SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLang } from '../context/LanguageContext';

const EducationSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLang();

  return (
    <div ref={ref} className={`w-full max-w-[1440px] scroll-animate ${isVisible ? 'visible' : ''}`}>
      <SectionTitle
        title={t.cv.sections.education}
        description="Perjalanan akademik yang membentuk fondasi pengetahuan dan keterampilan saya"
      />
      
      <div className="flex flex-col self-stretch max-w-[1234px] mb-[80px] lg:mb-[140px] mx-4 lg:mx-auto gap-[30px]">
        {t.cv.education.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col self-stretch bg-[#F3F3F3] rounded-[45px] border border-solid border-[#191A23] overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{ boxShadow: '0px 5px 0px #191A23' }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center self-stretch py-[30px] lg:py-[50px] px-[30px] lg:px-[60px] gap-6 lg:gap-4">
              
              {/* Left: Degree & Institution */}
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-3">
                  {/* Number badge */}
                  <div className="flex items-center justify-center w-12 h-12 bg-[#B9FF66] rounded-full border-2 border-[#191A23] shrink-0">
                    <span className="text-black text-xl font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-black text-2xl lg:text-3xl font-semibold">{edu.degree}</h3>
                    <p className="text-black/70 text-base lg:text-lg">{edu.institution}</p>
                  </div>
                </div>
              </div>

              {/* Right: Period & GPA */}
              <div className="flex flex-col lg:items-end gap-1 shrink-0">
                <span className="text-black text-lg font-semibold bg-[#B9FF66] px-4 py-1 rounded-full border border-[#191A23]">
                  {edu.period}
                </span>
                <span className="text-black/80 text-base font-medium mt-2">
                  {edu.gpa}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
