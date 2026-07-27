import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import SectionTitle from './SectionTitle';
import OptimizedImage from './OptimizedImage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLang } from '../context/LanguageContext';

// ── project image imports ─────────────────────────────────────────────────────
import picture1 from '../assets/image_project/website/picture-1.png';
import pigFriends from '../assets/image_project/website/pig-friends.png';
import beeCook from '../assets/image_project/website/beeCook.png';
import trihanggo from '../assets/image_project/website/trihanggo.png';
import plagbleg from '../assets/image_project/website/plagbleg.png';
import sayurMart from '../assets/image_project/website/sayur-mart.png';
import klinikHewan from '../assets/image_project/website/KlinikHewan.png';
import klinikKecantikan from '../assets/image_project/website/KlinikKecantikan.png';
import trilokasMobile from '../assets/image_project/mobile/Trilokas-mobile.png';
import pmbsma from '../assets/image_project/mobile/pmbsma.png';
import kenzyToys from '../assets/image_project/mobile/KenzyToys.jpg';
import klinikGigi from '../assets/image_project/mobile/KlinikGigi.jpg';


// ── types ─────────────────────────────────────────────────────────────────────
type ProjectType = 'website' | 'mobile';

interface Project {
  title: string;
  description: string;
  tech: string[];
  imageSrc: string;
  type: ProjectType;
  accent: string;
  aspectRatio?: string;   
  liveUrl?: string;
  repoUrl?: string;
  detailFolder?: string; 
}

// ── Helper function to load project detail images ────────────────────────────
const detailImageModules = import.meta.glob('../assets/project_detail/**/*.{png,jpg,jpeg}', { eager: true });

const loadProjectDetailImages = (folderName: string): string[] => {
  const images: string[] = [];
  const folderPath = `../assets/project_detail/${folderName}/`;
  
  // Get all images for this folder and sort them numerically
  Object.entries(detailImageModules).forEach(([path, module]) => {
    if (path.includes(`/${folderName}/`)) {
      images.push((module as { default: string }).default);
    }
  });
  
  // Sort images by filename (1.png, 2.png, etc.)
  images.sort((a, b) => {
    const getNumber = (path: string) => {
      const match = path.match(/\/(\d+)\.(png|jpg|jpeg)$/);
      return match ? parseInt(match[1]) : 0;
    };
    return getNumber(a) - getNumber(b);
  });
  
  return images;
};

// ── data ─────────────────────────────────────────────────────────────────────
const PROJECTS: Project[] = [
  {
    title: 'Pig Friends',
    description:
      'Website sistem pakar untuk diagnosa penyakit babi. Menampilkan panduan, galeri, dan forum diskusi interaktif dengan pakar.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    imageSrc: pigFriends,
    type: 'website',
    accent: '#B9FF66',
    aspectRatio: '1851 / 923',
    repoUrl: 'https://github.com',
    detailFolder: 'pig_friend',
  },
  {
    title: 'Plagbleg',
    description:
      'Platform deteksi & pelaporan plagiarisme teks dengan antarmuka bersih dan intuitif.',
    tech: ['React', 'Node.js', 'Express'],
    imageSrc: plagbleg,
    type: 'website',
    accent: '#C8B4FA',
    aspectRatio: '1664 / 898',
    repoUrl: 'https://github.com',
    detailFolder: 'plagbleg',
  },
  {
    title: 'BeeCook',
    description:
      'Platform resep masakan dan kelas memasak online dengan fitur komunitas chef dan video tutorial interaktif.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    imageSrc: beeCook,
    type: 'website',
    accent: '#FFA500',
    aspectRatio: '16 / 9',
    repoUrl: 'https://github.com',
    detailFolder: 'beeCook',
  },
  {
    title: 'Trihanggo',
    description:
      'Website sistem informasi desa Trihanggo untuk layanan administrasi dan informasi publik warga.',
    tech: ['Laravel', 'MySQL', 'Bootstrap'],
    imageSrc: trihanggo,
    type: 'website',
    accent: '#10B981',
    aspectRatio: '16 / 9',
    repoUrl: 'https://github.com',
    detailFolder: 'Trihanggo',
  },
  {
    title: 'Klinik Hewan Dashboard',
    description:
      'Sistem manajemen pelayanan klinik hewan berbasis web dengan fitur administrasi lengkap, rekam medis, dan jadwal appointment.',
    tech: ['React', 'Node.js', 'MySQL'],
    imageSrc: klinikHewan,
    type: 'website',
    accent: '#60A5FA',
    aspectRatio: '16 / 9',
    repoUrl: 'https://github.com',
    detailFolder: 'klinik_hewan',
  },
  {
    title: 'Klinik Kecantikan Dashboard',
    description:
      'Platform manajemen pelayanan klinik kecantikan dengan sistem booking, manajemen pelanggan, dan laporan treatment.',
    tech: ['React', 'Tailwind CSS', 'PostgreSQL'],
    imageSrc: klinikKecantikan,
    type: 'website',
    accent: '#F472B6',
    aspectRatio: '16 / 9',
    repoUrl: 'https://github.com',
    detailFolder: 'klinik_kecantikan',
  },
  {
    title: 'Triloka',
    description:
      'Aplikasi mobile deteksi mood untuk auto play musik sesuai dengan kondisi mood',
    tech: ['Flutter', 'Dart', 'Firebase'],
    imageSrc: trilokasMobile,
    type: 'mobile',
    accent: '#FFD166',
    aspectRatio: '244 / 522',
    repoUrl: 'https://github.com',
    detailFolder: 'trilokas',
  },
  {
    title: 'Kenzy Toys',
    description:
      'Aplikasi mobile manajemen toko mainan dengan fitur inventori, penjualan, dan laporan stok real-time.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    imageSrc: kenzyToys,
    type: 'mobile',
    accent: '#FCD34D',
    aspectRatio: '9 / 16',
    repoUrl: 'https://github.com',
    detailFolder: 'kenzy_toys',
  },
  {
    title: 'Klinik Gigi',
    description:
      'Aplikasi mobile manajemen pelayanan klinik gigi dengan sistem reservasi pasien, rekam medis, dan reminder appointment.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    imageSrc: klinikGigi,
    type: 'mobile',
    accent: '#34D399',
    aspectRatio: '9 / 16',
    repoUrl: 'https://github.com',
    detailFolder: 'klinik_gigi',
  },
  {
    title: 'Deteksi Angka',
    description:
      'Website deteksi angka menggunakan KNN',
    tech: ['React', 'Tailwind CSS'],
    imageSrc: picture1,
    type: 'website',
    accent: '#FF6B6B',
    aspectRatio: '752 / 475',
    repoUrl: 'https://github.com',
    detailFolder: 'detection_image',
  },
  {
    title: 'Sayur Mart',
    description:
      'Platform e-commerce sayur segar dengan sistem pemesanan online yang mudah digunakan.',
    tech: ['React', 'Node.js', 'MongoDB'],
    imageSrc: sayurMart,
    type: 'website',
    accent: '#6EE7B7',
    aspectRatio: '784 / 556',
    repoUrl: 'https://github.com',
    detailFolder: 'sayur_mart',
  },
  {
    title: 'PMB SMA',
    description:
      'Aplikasi mobile penerimaan murid baru SMA dengan alur pendaftaran digital yang efisien dan mudah diakses.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    imageSrc: pmbsma,
    type: 'mobile',
    accent: '#93C5FD',
    aspectRatio: '248 / 531',
    repoUrl: 'https://github.com',
    detailFolder: 'pmb_sma',
  },
  {
    title: 'BeeCook',
    description:
      'Website belajar resep makanan yang minimalis',
    tech: ['React', 'Tailwind CSS'],
    imageSrc: beeCook,
    type: 'website',
    accent: '#B9FF66',
    aspectRatio: '240 / 923',
    repoUrl: 'https://github.com',
    detailFolder: 'beeCook',
  },
  {
    title: 'Trihanggo',
    description:
      'Website Jual Beli Mesin Printing',
    tech: ['Next Js', 'Tailwind CSS','Supabase'],
    imageSrc: trihanggo,
    type: 'website',
    accent: '#B9FF66',
    aspectRatio: '240 / 923',
    repoUrl: 'https://github.com',
    detailFolder: 'trihanggo',
  },
];

// ── helper: GitHub SVG icon ───────────────────────────────────────────────────
const GithubIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ExternalIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// ── ImageModal ────────────────────────────────────────────────────────────────
interface ImageModalProps {
  isOpen: boolean;
  images: string[];
  title: string;
  projectType: ProjectType;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, images, title, projectType, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      
      // Prevent scrolling on body
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = `-${scrollX}px`;
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      document.body.style.width = '100%';
      
      // Cleanup: restore scroll when modal closes
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        document.body.style.width = '';
        
        // Restore scroll position
        window.scrollTo(scrollX, scrollY);
      };
    }
  }, [isOpen]);

  // Reset current index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  // Preload adjacent images for faster navigation
  useEffect(() => {
    if (isOpen && images.length > 1) {
      const preloadImage = (src: string) => {
        const img = new Image();
        img.src = src;
      };

      // Preload next and previous images
      const nextIndex = (currentIndex + 1) % images.length;
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      
      if (images[nextIndex]) preloadImage(images[nextIndex]);
      if (images[prevIndex]) preloadImage(images[prevIndex]);
    }
  }, [currentIndex, images, isOpen]);

  if (!isOpen || images.length === 0) return null;

  // Determine if we should show marquee
  const showMarquee = projectType === 'website' ? images.length > 1 : images.length > 4;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Render modal using portal to body element
  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Close button - responsive positioning */}
      <button
        onClick={onClose}
        className="fixed top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors duration-200 cursor-pointer z-[10001]"
        aria-label="Close modal"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Project title - responsive */}
      <div className="fixed top-2 left-2 sm:top-4 sm:left-4 md:top-6 md:left-6 z-[10001] max-w-[60%] sm:max-w-none">
        <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold truncate">{title}</h3>
        <p className="text-white/70 text-xs sm:text-sm">{currentIndex + 1} / {images.length}</p>
      </div>

      {/* Modal content - responsive layout */}
      <div
        className="flex flex-col items-center justify-center w-full h-full px-2 py-16 sm:px-4 sm:py-20 md:px-6 md:py-8 lg:px-8 animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main image display - responsive container */}
        <div className="relative flex items-center justify-center w-full h-full max-h-[calc(100vh-8rem)] sm:max-h-[calc(100vh-10rem)]">
          {/* Previous button - responsive */}
          {showMarquee && (
            <button
              onClick={handlePrevious}
              className="absolute left-1 sm:left-2 md:left-4 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors duration-200 cursor-pointer"
              aria-label="Previous image"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Image - fully responsive */}
          <OptimizedImage
            src={images[currentIndex]}
            alt={`${title} - ${currentIndex + 1}`}
            className="object-contain rounded-md sm:rounded-lg md:rounded-xl shadow-2xl transition-opacity duration-300"
            style={{ 
              maxWidth: 'calc(100vw - 4rem)',
              maxHeight: 'calc(100vh - 12rem)',
              width: 'auto',
              height: 'auto',
            }}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 70vw"
          />

          {/* Next button - responsive */}
          {showMarquee && (
            <button
              onClick={handleNext}
              className="absolute right-1 sm:right-2 md:right-4 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors duration-200 cursor-pointer"
              aria-label="Next image"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Thumbnail marquee - responsive */}
        {showMarquee && (
          <div className="fixed bottom-2 sm:bottom-4 left-0 right-0 z-[10001] px-2 sm:px-4 md:px-6">
            <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`flex-shrink-0 snap-start rounded-md sm:rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                    idx === currentIndex
                      ? 'border-white scale-105'
                      : 'border-white/30 hover:border-white/60'
                  }`}
                  style={{
                    width: projectType === 'mobile' ? '48px' : '80px',
                    height: projectType === 'mobile' ? '80px' : '48px',
                  }}
                >
                  <OptimizedImage
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                    sizes="100px"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

// ── BentoCard ─────────────────────────────────────────────────────────────────
interface BentoCardProps {
  project: Project;
  variant: 'featured' | 'tall' | 'normal';
  onImageClick: (images: string[], title: string, type: ProjectType) => void;
}

const BentoCard: React.FC<BentoCardProps> = ({ project, variant, onImageClick }) => {
  const [hovered, setHovered] = useState(false);
  const isMobile = project.type === 'mobile';

  // Load detail images
  const detailImages = project.detailFolder ? loadProjectDetailImages(project.detailFolder) : [];
  
  const handleImageClick = () => {
    // If no detail images found, use the main image
    const imagesToShow = detailImages.length > 0 ? detailImages : [project.imageSrc];
    onImageClick(imagesToShow, project.title, project.type);
  };

  // Mobile card: phone-frame beside info (horizontal layout)
  if (isMobile) {
    return (
      <div
        className={`group relative flex flex-col sm:flex-row overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#191A23] cursor-pointer transition-all duration-300 bg-white min-h-[400px] sm:h-[500px] lg:h-[550px] ${hovered ? '-translate-y-1' : ''}`}
        style={{ boxShadow: hovered ? '0px 8px 0px #191A23' : '0px 5px 0px #191A23' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* accent stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 z-10" style={{ background: project.accent }} />

        {/* phone mockup panel — sized to fit the portrait image */}
        <div className="flex items-center justify-center bg-[#F0F2F5] px-6 py-6 sm:px-8 sm:py-8 sm:w-[200px] lg:w-[220px] shrink-0">
          {/* phone shell — aspect ratio matches actual screenshot */}
          <div 
            className="relative w-[90px] sm:w-[100px] lg:w-[108px] cursor-pointer" 
            style={{ aspectRatio: project.aspectRatio ?? '244 / 522' }}
            onClick={handleImageClick}
          >
            {/* shell */}
            <div className="absolute inset-0 rounded-[20px] sm:rounded-[22px] bg-[#191A23] shadow-xl" />
            {/* screen inset */}
            <div className="absolute inset-[4px] sm:inset-[5px] rounded-[16px] sm:rounded-[18px] overflow-hidden bg-black">
              <OptimizedImage
                src={project.imageSrc}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100px, 120px"
              />
            </div>
            {/* notch */}
            <div className="absolute top-[8px] sm:top-[10px] left-1/2 -translate-x-1/2 w-[28px] sm:w-[32px] h-[5px] sm:h-[6px] rounded-full bg-[#191A23] z-10" />
            {/* home bar */}
            <div className="absolute bottom-[8px] sm:bottom-[9px] left-1/2 -translate-x-1/2 w-[24px] sm:w-[28px] h-[2.5px] sm:h-[3px] rounded-full bg-white/30 z-10" />
          </div>
        </div>

        {/* info */}
        <div className="flex flex-col gap-2 sm:gap-3 p-4 sm:p-5 lg:p-6 justify-center flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-[#09090B] text-base sm:text-lg font-bold leading-snug line-clamp-2">{project.title}</h3>
            <span
              className="shrink-0 text-[9px] sm:text-[10px] font-semibold px-2 sm:px-2.5 py-0.5 rounded-full border border-[#191A23]"
              style={{ background: project.accent }}
            >
              Mobile
            </span>
          </div>
          <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">{project.description}</p>
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="text-[9px] sm:text-[10px] font-medium border border-[#191A23] px-1.5 sm:px-2 py-0.5 rounded-full text-[#191A23]">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-2 mt-1">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-[#191A23] cursor-pointer transition-colors duration-200 hover:opacity-80"
                style={{ background: project.accent }}>
                <ExternalIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Live
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }


  const aspectRatio = project.aspectRatio ?? '16 / 9';

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#191A23] cursor-pointer transition-all duration-300 bg-white min-h-[400px] sm:h-[500px] lg:h-[550px] ${hovered ? '-translate-y-1' : ''}`}
      style={{ boxShadow: hovered ? '0px 8px 0px #191A23' : '0px 5px 0px #191A23' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5 z-10" style={{ background: project.accent }} />

      {/* browser chrome + screenshot - with max-height to prevent overflow */}
      <div className="relative cursor-pointer overflow-hidden" 
        style={{ 
          aspectRatio,
          maxHeight: '380px', // Limit image height to show description
        }} 
        onClick={handleImageClick}>
        {/* screenshot — fills the aspect-ratio box */}
        <div className="absolute inset-0 overflow-hidden bg-[#F9F9F9]">
          <OptimizedImage
            src={project.imageSrc}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* hover overlay */}
        <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 sm:gap-3 z-20">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 sm:gap-1.5 bg-[#B9FF66] text-black text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full cursor-pointer hover:bg-[#a8f050] transition-colors duration-200">
              <ExternalIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Live
            </a>
          )}
        </div>
      </div>

      {/* info - flex-1 to fill remaining space */}
      <div className="p-4 sm:p-5 flex flex-col gap-2 sm:gap-2.5 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[#09090B] text-sm sm:text-base font-bold leading-snug line-clamp-2">{project.title}</h3>
          <span
            className="shrink-0 text-[9px] sm:text-[10px] font-semibold px-2 sm:px-2.5 py-0.5 rounded-full border border-[#191A23]"
            style={{ background: project.accent }}
          >
            Website
          </span>
        </div>
        <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1">
          {project.tech.map((t) => (
            <span key={t} className="text-[9px] sm:text-[10px] font-medium border border-[#191A23] px-1.5 sm:px-2 py-0.5 rounded-full text-[#191A23]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


type FilterType = 'all' | 'website' | 'mobile';

const ProjectsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLang();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [modalData, setModalData] = useState<{ images: string[]; title: string; type: ProjectType } | null>(null);

  const filtered =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.type === activeFilter);

  const filters: { label: string; value: FilterType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Website', value: 'website' },
    { label: 'Mobile', value: 'mobile' },
  ];

  const handleImageClick = (images: string[], title: string, type: ProjectType) => {
    setModalData({ images, title, type });
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  return (
    <div
      ref={ref}
      className={`w-full max-w-[1440px] mx-auto scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      {/* Image Modal */}
      <ImageModal
        isOpen={modalData !== null}
        images={modalData?.images ?? []}
        title={modalData?.title ?? ''}
        projectType={modalData?.type ?? 'website'}
        onClose={handleCloseModal}
      />

      <SectionTitle
        title={t.projects.sectionTitle}
        description={t.projects.sectionDesc}
      />
      {/* filter tabs - responsive */}
      {/* <div className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 lg:px-[100px] mb-6 sm:mb-8">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`cursor-pointer px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border border-[#191A23] transition-colors duration-200
              ${activeFilter === f.value
                ? 'bg-[#191A23] text-white'
                : 'bg-white text-[#191A23] hover:bg-[#F3F3F3]'
              }`}
          >
            {f.label}
          </button>
        ))}
      </div> */}

      {/* ── BENTO GRID - Responsive ── */}
      <div className="px-4 sm:px-6 lg:px-[100px] mb-6 lg:mb-8">
        {activeFilter === 'all' ? (
          <div className="flex flex-col gap-4 sm:gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 md:auto-rows-fr">
            {/* Row 1: Large (2 cols) + Small (1 col) */}
            <div className="md:col-span-2 lg:col-span-2">
              <BentoCard 
                project={PROJECTS[1]} 
                variant="featured" 
                onImageClick={handleImageClick}
              />
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <BentoCard 
                project={PROJECTS[6]} 
                variant="normal" 
                onImageClick={handleImageClick}
              />
            </div>

            {/* Row 2: Small (1 col) + Large (2 cols) */}
            <div className="md:col-span-2 lg:col-span-1">
              <BentoCard 
                project={PROJECTS[0]} 
                variant="normal" 
                onImageClick={handleImageClick}
              />
            </div>
            <div className="md:col-span-2 lg:col-span-2">
              <BentoCard 
                project={PROJECTS[2]} 
                variant="featured" 
                onImageClick={handleImageClick}
              />
            </div>

            {/* Row 3: Large (2 cols) + Small (1 col) */}
            <div className="md:col-span-2 lg:col-span-2">
              <BentoCard 
                project={PROJECTS[3]} 
                variant="featured" 
                onImageClick={handleImageClick}
              />
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <BentoCard 
                project={PROJECTS[7]} 
                variant="normal" 
                onImageClick={handleImageClick}
              />
            </div>

            {/* Row 4: Small (1 col) + Large (2 cols) */}
            <div className="md:col-span-2 lg:col-span-1">
              <BentoCard 
                project={PROJECTS[8]} 
                variant="normal" 
                onImageClick={handleImageClick}
              />
            </div>
            <div className="md:col-span-2 lg:col-span-2">
              <BentoCard 
                project={PROJECTS[4]} 
                variant="featured" 
                onImageClick={handleImageClick}
              />
            </div>

            {/* Row 5: Two website projects side by side - always 50/50 */}
            <div className="md:col-span-2 lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <BentoCard 
                  project={PROJECTS[5]} 
                  variant="featured" 
                  onImageClick={handleImageClick}
                />
                <BentoCard 
                  project={PROJECTS[9]} 
                  variant="featured" 
                  onImageClick={handleImageClick}
                />
              </div>
            </div>

            {/* Row 6: Large (2 cols) + Small (1 col) */}
            <div className="md:col-span-2 lg:col-span-2">
              <BentoCard 
                project={PROJECTS[10]} 
                variant="featured" 
                onImageClick={handleImageClick}
              />
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <BentoCard 
                project={PROJECTS[11]} 
                variant="normal" 
                onImageClick={handleImageClick}
              />
            </div>
          </div>
        ) : (
          /* filtered view - responsive */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filtered.map((p) => (
              <BentoCard 
                key={p.title} 
                project={p} 
                variant="normal" 
                onImageClick={handleImageClick}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
