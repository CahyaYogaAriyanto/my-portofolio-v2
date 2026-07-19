import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import myPhoto from '../assets/logo-hero.png';
import { useLang } from '../context/LanguageContext';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
}

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLang();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isShaking, setIsShaking] = useState(false);

  const handleExplosion = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // spawn particles
    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => {
      const angle = (Math.PI * 2 * i) / 30;
      const velocity = 3 + Math.random() * 4;
      const colors = ['#B9FF66', '#FFFFFF', '#2563EB', '#F3F3F3', '#FFD700'];
      
      return {
        id: Date.now() + i,
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 6 + Math.random() * 8,
      };
    });

    setParticles(newParticles);
    setIsShaking(true);

    setTimeout(() => setParticles([]), 2000);
    setTimeout(() => setIsShaking(false), 500);
  };

  return (
    <section
      ref={sectionRef}
      className={`relative w-full overflow-hidden bg-[#b0b0b0] ${isShaking ? 'animate-shake' : ''}`}
      style={{ height: '100svh', minHeight: '600px', marginLeft: 0, marginRight: 0 }}
    >
      {/* photo bg */}
      <div className="absolute inset-0 flex justify-center">
        <img
          src={myPhoto}
          alt={t.hero.name}
          className="h-full w-full object-cover object-top"
          style={{ filter: 'grayscale(100%)' }}
        />
      </div>

      {/* vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)',
        }}
      />

      {/* top section */}
      <div className="absolute top-10 left-14 right-14 z-20 flex justify-between items-start">
        <h2 className="text-white text-xl font-semibold font-light tracking-wide">
          {t.hero.name}
        </h2>
        
        <p className="hidden md:block text-white/80 text-right max-w-md leading-relaxed">
          {t.hero.bio}
        </p>
      </div>

      {/* mobile marquee */}
      <div className="md:hidden absolute bottom-32 left-0 right-0 z-20 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="text-white/80 text-sm mx-4">{t.hero.bio}</span>
          <span className="text-white/80 text-sm mx-4">{t.hero.bio}</span>
        </div>
      </div>

      {/* arrow btn */}
      <div className="absolute left-[68%] top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={handleExplosion}
          aria-label={t.hero.viewWork}
          className="
            w-16 h-16 rounded-full
            border border-white/50
            flex items-center justify-center
            text-white
            hover:bg-white hover:text-black
            transition-colors duration-300
            cursor-pointer
            active:scale-90
          "
        >
          <ArrowUpRight size={28} />
        </button>
      </div>

      {/* particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full pointer-events-none animate-explode"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            '--vx': `${particle.vx}px`,
            '--vy': `${particle.vy}px`,
          } as React.CSSProperties}
        />
      ))}

      {/* title */}
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
