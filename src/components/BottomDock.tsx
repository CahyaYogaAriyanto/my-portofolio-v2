import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Boxes, FileText, Layers } from 'lucide-react';
import myPhoto from '../assets/logo-hero.png';
import { useLang } from '../context/LanguageContext';

// ── Icons ─────────────────────────────────────────────────────────────────────
const GithubIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

// ── BottomDock ────────────────────────────────────────────────────────────────
const BottomDock = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, toggleLang } = useLang();

  const isHome = location.pathname === '/' || location.pathname === '/Home';
  const isSkills = location.pathname === '/skills';
  const isProjects = location.pathname === '/projects';
  const isCV = location.pathname === '/cv';

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 print:hidden">
      <nav
        aria-label="Quick navigation"
        className="flex items-center gap-2 rounded-3xl bg-black/75 px-4 py-3 backdrop-blur-xl shadow-lg"
      >
        {/* Home */}
        <DockButton
          active={isHome}
          aria-label={t.nav.home}
          title={t.nav.home}
          onClick={() => navigate('/')}
        >
          <Home size={18} />
        </DockButton>

        {/* Projects */}
        <DockButton
          active={isProjects}
          aria-label="Projects"
          title="Projects"
          onClick={() => navigate('/projects')}
        >
          <Layers size={18} />
        </DockButton>

        {/* Skills */}
        <DockButton
          active={isSkills}
          aria-label={t.nav.skills}
          title={t.nav.skills}
          onClick={() => navigate('/skills')}
        >
          <Boxes size={18} />
        </DockButton>

        {/* Avatar */}
        <img
          src={myPhoto}
          alt="Cahya Yoga Ariyanto"
          className="w-11 h-11 rounded-full object-cover object-top border-2 border-cyan-400 mx-1"
          style={{ filter: 'grayscale(20%)' }}
        />

        {/* Resume / CV */}
        <DockButton
          active={isCV}
          aria-label={t.nav.resume}
          title={t.nav.resume}
          onClick={() => navigate('/cv')}
        >
          <FileText size={18} />
        </DockButton>

        {/* Thumbs up (placeholder) */}
        <DockButton aria-label="GitHub" title="GitHub ">
          <GithubIcon />
        </DockButton>

        {/* Language toggle — shows current opposite lang as label */}
        <DockButton
          aria-label="Switch language"
          title="Switch language"
          onClick={toggleLang}
        >
          <span className="text-xs font-bold tracking-wide">{t.nav.switchLang}</span>
        </DockButton>
      </nav>
    </div>
  );
};

// ── DockButton helper ─────────────────────────────────────────────────────────
interface DockButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: React.ReactNode;
}

const DockButton = ({ active, children, ...props }: DockButtonProps) => (
  <button
    {...props}
    className={`
      w-11 h-11 rounded-full flex items-center justify-center
      transition-colors duration-200 cursor-pointer
      ${active ? 'bg-white text-black' : 'bg-zinc-800 text-white hover:bg-zinc-700'}
    `}
  >
    {children}
  </button>
);

export default BottomDock;
