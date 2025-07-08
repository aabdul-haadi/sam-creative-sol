import React, { useState, useRef, useEffect } from 'react';
import { optimizeImageUrl, createLazyImageObserver } from '../utils/imageOptimization';
import { shouldLoadHighQuality } from '../utils/performance';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  quality = 80,
  placeholder,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    observerRef.current = createLazyImageObserver((entry) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observerRef.current?.unobserve(entry.target);
      }
    });

    observerRef.current.observe(imgRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Optimize image URL based on connection quality
  const optimizedSrc = isInView ? optimizeImageUrl(
    src, 
    width, 
    height, 
    shouldLoadHighQuality() ? quality : Math.max(quality - 20, 50)
  ) : '';

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          {placeholder ? (
            <img src={placeholder} alt="" className="w-full h-full object-cover opacity-50" />
          ) : (
            <div className="w-8 h-8 bg-gray-300 rounded"></div>
          )}
        </div>
      )}

      {/* Main Image */}
      <img
        ref={imgRef}
        src={optimizedSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        decoding="async"
      />

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <div className="w-8 h-8 bg-gray-300 rounded mx-auto mb-2"></div>
            <span className="text-xs">Failed to load</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;