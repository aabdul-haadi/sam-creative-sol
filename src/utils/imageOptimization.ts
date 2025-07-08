// Image optimization utilities
export const optimizeImageUrl = (url: string, width?: number, height?: number, quality: number = 80): string => {
  // For Pexels images, add optimization parameters
  if (url.includes('pexels.com')) {
    const baseUrl = url.split('?')[0];
    const params = new URLSearchParams();
    
    if (width) params.append('w', width.toString());
    if (height) params.append('h', height.toString());
    params.append('auto', 'compress');
    params.append('cs', 'tinysrgb');
    params.append('fit', 'crop');
    
    return `${baseUrl}?${params.toString()}`;
  }
  
  return url;
};

// Preload critical images
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Lazy load images with intersection observer
export const createLazyImageObserver = (callback: (entry: IntersectionObserverEntry) => void) => {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach(callback);
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.01
    }
  );
};

// Image format detection and optimization
export const getOptimalImageFormat = (): string => {
  // Check for WebP support
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  try {
    const webpSupport = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    if (webpSupport) return 'webp';
  } catch (e) {
    // WebP not supported
  }
  
  return 'jpeg';
};

// Responsive image sizes
export const getResponsiveImageSizes = (breakpoints: { [key: string]: number }) => {
  const sizes: string[] = [];
  
  Object.entries(breakpoints).forEach(([key, width]) => {
    sizes.push(`(max-width: ${width}px) ${width}px`);
  });
  
  return sizes.join(', ');
};