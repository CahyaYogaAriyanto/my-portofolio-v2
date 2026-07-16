import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ 
          opacity: 0,
          rotateY: 90,
          transformOrigin: 'left center',
          transformStyle: 'preserve-3d',
        }}
        animate={{ 
          opacity: 1,
          rotateY: 0,
          transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1], // Smooth page flip easing
            opacity: { duration: 0.4 }
          }
        }}
        exit={{ 
          opacity: 0,
          rotateY: -90,
          transformOrigin: 'right center',
          transition: {
            duration: 0.6,
            ease: [0.7, 0, 0.84, 0],
            opacity: { duration: 0.3 }
          }
        }}
        style={{
          perspective: '2000px',
          perspectiveOrigin: 'center center',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
