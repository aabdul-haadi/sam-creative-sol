import React, { Suspense, lazy, useEffect } from 'react';
import { usePerformanceMonitoring, usePreloadCriticalResources } from '../hooks/usePerformanceOptimization';
import { registerServiceWorker, preloadCriticalResources } from '../utils/performance';
import LoadingScreen from './LoadingScreen';

// Lazy load components for code splitting
const Header = lazy(() => import('./Header'));
const Hero = lazy(() => import('./Hero'));
const Services = lazy(() => import('./Services'));
const AIServices = lazy(() => import('./AIServices'));
const SEOSection = lazy(() => import('./SEOSection'));
const About = lazy(() => import('./About'));
const Stats = lazy(() => import('./Stats'));
const OptimizedPortfolio = lazy(() => import('./OptimizedPortfolio'));
const Testimonials = lazy(() => import('./Testimonials'));
const Footer = lazy(() => import('./Footer'));

// Page components
const PortfolioPage = lazy(() => import('../pages/PortfolioPage'));
const BlogPage = lazy(() => import('../pages/BlogPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const TermsPage = lazy(() => import('../pages/TermsPage'));
const PrivacyPage = lazy(() => import('../pages/PrivacyPage'));
const FAQPage = lazy(() => import('../pages/FAQPage'));

// Blog post components
const FutureAIWebDevelopment2025 = lazy(() => import('../blogs/future-ai-web-development-2025'));
const EcommerceSEOGuide = lazy(() => import('../blogs/ecommerce-seo-guide'));
const ScalableSaaSApplications = lazy(() => import('../blogs/scalable-saas-applications'));
const UIUXDesignTrends2025 = lazy(() => import('../blogs/ui-ux-design-trends-2025'));
const ImplementingAIChatbots = lazy(() => import('../blogs/implementing-ai-chatbots'));
const MobileFirstDesign = lazy(() => import('../blogs/mobile-first-design'));

interface PerformanceOptimizedAppProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  openConsultation: () => void;
}

const PerformanceOptimizedApp: React.FC<PerformanceOptimizedAppProps> = ({
  currentPage,
  setCurrentPage,
  openConsultation
}) => {
  // Initialize performance monitoring
  usePerformanceMonitoring();

  // Preload critical resources
  usePreloadCriticalResources([
    '/logo.png',
    '/favicon.svg'
  ]);

  useEffect(() => {
    // Register service worker for caching
    registerServiceWorker();
    
    // Preload critical resources
    preloadCriticalResources();

    // Optimize font loading
    const fontLink = document.createElement('link');
    fontLink.rel = 'preconnect';
    fontLink.href = 'https://fonts.googleapis.com';
    document.head.appendChild(fontLink);

    // Preconnect to external domains
    const preconnectDomains = [
      'https://images.pexels.com',
      'https://cpiuqrtrodylcxedzbpt.supabase.co'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Optimize viewport for mobile
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover');
    }

  }, []);

  const renderPage = () => {
    const pageComponents = {
      'portfolio': <PortfolioPage setCurrentPage={setCurrentPage} />,
      'blog': <BlogPage setCurrentPage={setCurrentPage} />,
      'contact': <ContactPage setCurrentPage={setCurrentPage} />,
      'future-ai-web-development-2025': <FutureAIWebDevelopment2025 setCurrentPage={setCurrentPage} />,
      'ecommerce-seo-guide': <EcommerceSEOGuide setCurrentPage={setCurrentPage} />,
      'scalable-saas-applications': <ScalableSaaSApplications setCurrentPage={setCurrentPage} />,
      'ui-ux-design-trends-2025': <UIUXDesignTrends2025 setCurrentPage={setCurrentPage} />,
      'implementing-ai-chatbots': <ImplementingAIChatbots setCurrentPage={setCurrentPage} />,
      'mobile-first-design': <MobileFirstDesign setCurrentPage={setCurrentPage} />,
      'terms': <TermsPage setCurrentPage={setCurrentPage} />,
      'privacy': <PrivacyPage setCurrentPage={setCurrentPage} />,
      'faq': <FAQPage setCurrentPage={setCurrentPage} />
    };

    if (pageComponents[currentPage as keyof typeof pageComponents]) {
      return pageComponents[currentPage as keyof typeof pageComponents];
    }

    // Default home page with lazy-loaded components
    return (
      <>
        <Suspense fallback={<div className="h-screen bg-gray-100 animate-pulse" />}>
          <Hero openConsultation={openConsultation} />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <Services />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-900 animate-pulse" />}>
          <AIServices />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
          <SEOSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-900 animate-pulse" />}>
          <Stats />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
          <OptimizedPortfolio setCurrentPage={setCurrentPage} />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
          <Testimonials />
        </Suspense>
      </>
    );
  };

  return (
    <Suspense fallback={<LoadingScreen onLoadingComplete={() => {}} />}>
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        openConsultation={openConsultation} 
      />
      {renderPage()}
      <Footer setCurrentPage={setCurrentPage} />
    </Suspense>
  );
};

export default PerformanceOptimizedApp;