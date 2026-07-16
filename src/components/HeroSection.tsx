import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import myPhoto from '../assets/logo-hero.png';
import { useLang } from '../context/LanguageContext';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLang();

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#b0b0b0]"
      style={{ height: '100svh', minHeight: '600px', marginLeft: 0, marginRight: 0 }}
    >
      {/* Photo — grayscale, covers full height */}
      <div className="absolute inset-0 flex justify-center">
        <img
          src={myPhoto}
          alt={t.hero.name}
          className="h-full w-full object-cover object-top"
          style={{ filter: 'grayscale(100%)' }}
        />
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)',
        }}
      />

      {/* Top bar: name + bio */}
      <div className="absolute top-10 left-14 right-14 z-20 flex justify-between items-start">
        <h2 className="text-white text-xl font-semibold font-light tracking-wide">
          {t.hero.name}
        </h2>
        <p className="text-white/80 text-right max-w-md leading-relaxed">
          {t.hero.bio}
        </p>
      </div>

      {/* Arrow button */}
      <div className="absolute left-[68%] top-1/2 -translate-y-1/2 z-20">
        <button
          aria-label={t.hero.viewWork}
          className="
            w-16 h-16 rounded-full
            border border-white/50
            flex items-center justify-center
            text-white
            hover:bg-white hover:text-black
            transition-colors duration-300
            cursor-pointer
          "
        >
          <ArrowUpRight size={28} />
        </button>
      </div>

      {/* Giant title */}
      <div
        className="absolute bottom-20 left-0 right-0 z-20 overflow-hidden"
        style={{ lineHeight: 1 }}
      >
        <h1
          className="text-white font-bold tracking-tight select-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(60px, 12vw, 165px)',
            lineHeight: 1,
            paddingLeft: '0.15em',
          }}
        >
          {t.hero.title}
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
