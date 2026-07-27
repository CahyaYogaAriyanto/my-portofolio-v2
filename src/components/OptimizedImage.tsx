import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  sizes?: string; // For responsive images
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  style,
  onClick,
  sizes = '100vw'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string>('');

  useEffect(() => {
    // Create a low-quality placeholder by creating a tiny version
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
    };

    // Set source immediately for faster perceived loading
    setCurrentSrc(src);
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`} style={style} onClick={onClick}>
      {/* Blur placeholder */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ backdropFilter: 'blur(10px)' }}
        />
      )}
      
      {/* Main image with responsive attributes */}
      <img
        src={currentSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        sizes={sizes}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={style}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default OptimizedImage;
