import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // Auto scroll to top on route change
  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      root.scrollTo({ top: 0, behavior: 'instant' });
    }
    // Also scroll window (fallback)
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Show/hide scroll button based on scroll position
  useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return;

    const onScroll = () => {
      setVisible(root.scrollTop > 300);
    };

    root.addEventListener('scroll', onScroll, { passive: true });
    return () => root.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => {
    document.getElementById('root')?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className="
        fixed bottom-24 right-6 z-50
        w-11 h-11 rounded-full
        bg-[#B9FF66] text-black
        border border-[#191A23]
        flex items-center justify-center
        shadow-[0px_4px_0px_#191A23]
        hover:translate-y-[-2px]
        transition-transform duration-200
        cursor-pointer
      "
    >
      <ArrowUp size={18} />
    </button>
  );
};

export default ScrollToTop;
