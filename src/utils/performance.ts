// Performance monitoring and optimization utilities

// Debounce function for performance optimization
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
};

// Throttle function for scroll events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Measure and report performance metrics
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Optimize animations based on user preferences
export const getAnimationDuration = (defaultDuration: number): number => {
  return prefersReducedMotion() ? 0 : defaultDuration;
};

// Memory usage monitoring
export const getMemoryUsage = (): any => {
  if ('memory' in performance) {
    return (performance as any).memory;
  }
  return null;
};

// Connection quality detection
export const getConnectionQuality = (): string => {
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    return connection.effectiveType || 'unknown';
  }
  return 'unknown';
};

// Adaptive loading based on connection
export const shouldLoadHighQuality = (): boolean => {
  const connection = getConnectionQuality();
  return !['slow-2g', '2g'].includes(connection);
};

// Critical resource preloading
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.as = 'font';
  fontLink.type = 'font/woff2';
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);
  
  // Preload critical CSS
  const criticalCSS = document.createElement('link');
  criticalCSS.rel = 'preload';
  criticalCSS.as = 'style';
  document.head.appendChild(criticalCSS);
};

// Service Worker registration for caching
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered successfully:', registration);
    } catch (error) {
      console.log('Service Worker registration failed:', error);
    }
  }
};