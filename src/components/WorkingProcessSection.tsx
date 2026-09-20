import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';
import ProcessStep from './ProcessStep';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLang } from '../context/LanguageContext';

const WorkingProcessSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLang();
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isManualToggle = useRef<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleToggle = (index: number) => {
    // Manual toggle: close if same card clicked, otherwise open the clicked card
    isManualToggle.current = true;
    setExpandedIndex(expandedIndex === index ? null : index);
    
    // Reset manual toggle after 3 seconds
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      isManualToggle.current = false;
    }, 3000);
  };

  // Auto expand on scroll - ensures only 1 card is active at a time
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Only auto-expand if user hasn't manually toggled
            if (isManualToggle.current) return;

            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              // Mark this item as visible
              setVisibleItems((prev) => {
                const newSet = new Set(prev);
                newSet.add(index);
                return newSet;
              });
              
              // Set this card as the ONLY expanded card
              setExpandedIndex(index);
            } else if (!entry.isIntersecting || entry.intersectionRatio < 0.3) {
              // Remove from visible items
              setVisibleItems((prev) => {
                const newSet = new Set(prev);
                newSet.delete(index);
                return newSet;
              });
              
              // Only collapse if this card is currently expanded
              setExpandedIndex((current) => (current === index ? null : current));
            }
          });
        },
        {
          threshold: [0, 0.3, 0.5, 0.7, 1.0],
          rootMargin: '-20% 0px -30% 0px',
        }
      );

      observer.observe(item);
      observers.push(observer);
    });

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      observers.forEach((observer) => observer.disconnect());
    };
  }, [t.experience.items.length]);

  return (
    <div ref={ref} className={`w-full max-w-[1440px] scroll-animate ${isVisible ? 'visible' : ''}`}>
      <SectionTitle
        title={t.experience.sectionTitle}
        description={t.experience.sectionDesc}
      />
      <div className="relative flex flex-col self-stretch max-w-[1234px] mb-[40px] lg:mb-[60px] mx-4 lg:mx-auto">
        {/* spacer for scroll */}
        <div className="relative" style={{ paddingBottom: '80vh' }}>
          {t.experience.items.map((experience, index) => (
            <div
              key={index}
              ref={(el) => {itemRefs.current[index] = el}}
              className="sticky mb-[20px] lg:mb-[30px] transition-all duration-600 ease-out"
              style={{
                top: `${80 + index * 30}px`,
                zIndex: index + 1,
                transform: visibleItems.has(index) ? 'translateY(0)' : 'translateY(10px)',
                opacity: visibleItems.has(index) ? 1 : 0.95,
              }}
            >
              <ProcessStep
                number={experience.number}
                title={experience.title}
                description={experience.description}
                isExpanded={expandedIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingProcessSection;
