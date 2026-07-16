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

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Auto-expand when item becomes visible (works for both scroll directions)
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Mark as visible and auto-expand
              setVisibleItems((prev) => new Set(prev).add(index));
              setExpandedIndex(index);
            } else {
              // Remove from visible set when out of view
              setVisibleItems((prev) => {
                const newSet = new Set(prev);
                newSet.delete(index);
                return newSet;
              });
            }
          });
        },
        {
          threshold: [0.4, 0.6, 0.8], // Multiple thresholds for smoother detection
          rootMargin: '-15% 0px -35% 0px', // Trigger zone in middle of viewport
        }
      );

      observer.observe(item);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [t.experience.items.length]);

  return (
    <div ref={ref} className={`w-full max-w-[1440px] scroll-animate ${isVisible ? 'visible' : ''}`}>
      <SectionTitle
        title={t.experience.sectionTitle}
        description={t.experience.sectionDesc}
      />
      <div className="relative flex flex-col self-stretch max-w-[1234px] mb-[80px] lg:mb-[140px] mx-4 lg:mx-auto">
        {/* Spacer to allow last cards to stick properly */}
        <div className="relative" style={{ paddingBottom: '100vh' }}>
          {t.experience.items.map((experience, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="sticky mb-[20px] lg:mb-[30px] transition-all duration-500 ease-out"
              style={{
                top: `${80 + index * 30}px`, // Staggered sticky position
                zIndex: index + 1, // Higher cards stack on top
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
