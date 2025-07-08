import { useEffect, useCallback } from 'react';
import { throttle, debounce } from '../utils/performance';

// Hook for optimized scroll handling
export const useOptimizedScroll = (callback: () => void, delay: number = 16) => {
  const throttledCallback = useCallback(throttle(callback, delay), [callback, delay]);

  useEffect(() => {
    window.addEventListener('scroll', throttledCallback, { passive: true });
    return () => window.removeEventListener('scroll', throttledCallback);
  }, [throttledCallback]);
};

// Hook for optimized resize handling
export const useOptimizedResize = (callback: () => void, delay: number = 250) => {
  const debouncedCallback = useCallback(debounce(callback, delay), [callback, delay]);

  useEffect(() => {
    window.addEventListener('resize', debouncedCallback, { passive: true });
    return () => window.removeEventListener('resize', debouncedCallback);
  }, [debouncedCallback]);
};

// Hook for intersection observer optimization
export const useIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      rootMargin: '50px 0px',
      threshold: 0.1,
      ...options
    });

    return () => observer.disconnect();
  }, [callback, options]);
};

// Hook for preloading critical resources
export const usePreloadCriticalResources = (resources: string[]) => {
  useEffect(() => {
    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      
      if (resource.endsWith('.css')) {
        link.as = 'style';
      } else if (resource.endsWith('.js')) {
        link.as = 'script';
      } else if (resource.match(/\.(jpg|jpeg|png|webp)$/)) {
        link.as = 'image';
      }
      
      link.href = resource;
      document.head.appendChild(link);
    });
  }, [resources]);
};

// Hook for performance monitoring
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      // This would integrate with a real performance monitoring service
      console.log('Performance monitoring initialized');
    }

    // Monitor memory usage
    const checkMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.9) {
          console.warn('High memory usage detected');
        }
      }
    };

    const memoryInterval = setInterval(checkMemory, 30000);
    return () => clearInterval(memoryInterval);
  }, []);
};