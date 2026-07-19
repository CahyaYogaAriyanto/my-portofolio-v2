import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoSaya from '../assets/logo-saya.png';
import { useLang } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#191A23] text-white mt-auto">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[100px] py-16 lg:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoSaya} 
                alt="Logo" 
                className="w-10 h-10 rounded-full border-2 border-[#B9FF66]"
              />
              <span className="text-2xl font-bold">{t.cv.name}</span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-md mb-6">
              {t.hero.bio}
            </p>
            
            {/* socials */}
            <div className="flex gap-4">
              <a
                href="https://github.com/CahyaYogaAriyanto"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F3F3F3] text-black flex items-center justify-center hover:bg-[#B9FF66] transition-colors duration-200 cursor-pointer"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/cahya-yoga-ariyanto-b24a3a25a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F3F3F3] text-black flex items-center justify-center hover:bg-[#B9FF66] transition-colors duration-200 cursor-pointer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="mailto:cahyayogaariyanto@gmail.com"
                className="w-10 h-10 rounded-full bg-[#F3F3F3] text-black flex items-center justify-center hover:bg-[#B9FF66] transition-colors duration-200 cursor-pointer"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#B9FF66]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate('/')}
                  className="text-white/60 hover:text-white transition-colors duration-200 cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/skills')}
                  className="text-white/60 hover:text-white transition-colors duration-200 cursor-pointer text-left"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/projects')}
                  className="text-white/60 hover:text-white transition-colors duration-200 cursor-pointer text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/cv')}
                  className="text-white/60 hover:text-white transition-colors duration-200 cursor-pointer text-left"
                >
                  Resume
                </button>
              </li>
            </ul>
          </div>

          {/* contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#B9FF66]">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 shrink-0 text-[#B9FF66]" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a
                  href="mailto:cahyayogaariyanto@gmail.com"
                  className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                >
                  cahyayoga10@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 shrink-0 text-[#B9FF66]" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-white/60 text-sm">
                  Sleman, Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/10 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {year} {t.cv.name}. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
