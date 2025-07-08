import React, { useState, useEffect } from 'react';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import ConsultationPopup from './components/ConsultationPopup';
import PerformanceOptimizedApp from './components/PerformanceOptimizedApp';
import { usePerformanceMonitoring } from './hooks/usePerformanceOptimization';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Initialize performance monitoring
  usePerformanceMonitoring();

  // Handle URL routing
  useEffect(() => {
    const handleRouting = () => {
      const path = window.location.pathname;
      const domain = window.location.hostname;
      
      // Update document title and canonical URL based on route
      const updatePageMeta = (title: string, description: string, path: string) => {
        document.title = title;
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', description);
        }
        
        // Update canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
          canonical = document.createElement('link');
          canonical.setAttribute('rel', 'canonical');
          document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', `https://samcreative-solutions.com${path}`);
        
        // Update Open Graph URL
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) {
          ogUrl.setAttribute('content', `https://samcreative-solutions.com${path}`);
        }
      };

      // Route mapping
      const routes = {
        '/': 'home',
        '/portfolio': 'portfolio',
        '/contact': 'contact',
        '/blog': 'blog',
        '/privacy-policy': 'privacy',
        '/terms-of-service': 'terms',
        '/faq': 'faq',
        '/blog/future-ai-web-development-2025': 'future-ai-web-development-2025',
        '/blog/ecommerce-seo-guide': 'ecommerce-seo-guide',
        '/blog/scalable-saas-applications': 'scalable-saas-applications',
        '/blog/ui-ux-design-trends-2025': 'ui-ux-design-trends-2025',
        '/blog/implementing-ai-chatbots': 'implementing-ai-chatbots',
        '/blog/mobile-first-design': 'mobile-first-design'
      };

      const page = routes[path as keyof typeof routes] || 'home';
      setCurrentPage(page);

      // Update page metadata
      switch (page) {
        case 'portfolio':
          updatePageMeta(
            'Portfolio - SAM CREATIVE Solutions | Premium Digital Projects',
            'Explore our portfolio of successful web development, AI solutions, and design projects. See how we transform businesses with cutting-edge technology.',
            '/portfolio'
          );
          break;
        case 'contact':
          updatePageMeta(
            'Contact Us - SAM CREATIVE Solutions | Get Free Consultation',
            'Contact SAM CREATIVE Solutions for premium web development, AI solutions, and digital services. Get your free consultation today.',
            '/contact'
          );
          break;
        case 'blog':
          updatePageMeta(
            'Blog - SAM CREATIVE Solutions | Web Development & AI Insights',
            'Stay updated with the latest trends in web development, AI technology, and digital innovation. Expert insights and industry knowledge.',
            '/blog'
          );
          break;
        case 'privacy':
          updatePageMeta(
            'Privacy Policy - SAM CREATIVE Solutions',
            'Learn how SAM CREATIVE Solutions protects your privacy and handles your personal information. Our commitment to data security and transparency.',
            '/privacy-policy'
          );
          break;
        case 'terms':
          updatePageMeta(
            'Terms of Service - SAM CREATIVE Solutions',
            'Read our terms of service and understand our policies for using SAM CREATIVE Solutions services and website.',
            '/terms-of-service'
          );
          break;
        case 'faq':
          updatePageMeta(
            'FAQ - SAM CREATIVE Solutions | Frequently Asked Questions',
            'Find answers to common questions about our web development, AI solutions, and digital services. Get the information you need.',
            '/faq'
          );
          break;
        case 'future-ai-web-development-2025':
          updatePageMeta(
            'The Future of AI in Web Development: Trends to Watch in 2025',
            'Discover how artificial intelligence is revolutionizing web development and what trends will shape the industry in 2025.',
            '/blog/future-ai-web-development-2025'
          );
          break;
        case 'ecommerce-seo-guide':
          updatePageMeta(
            'Complete Guide to E-commerce SEO: Boost Your Online Store Rankings',
            'Learn proven strategies to improve your e-commerce website search engine rankings and drive more organic traffic to your online store.',
            '/blog/ecommerce-seo-guide'
          );
          break;
        case 'scalable-saas-applications':
          updatePageMeta(
            'Building Scalable SaaS Applications: Best Practices and Architecture',
            'Essential guidelines for developing robust, scalable SaaS applications that can grow with your business.',
            '/blog/scalable-saas-applications'
          );
          break;
        case 'ui-ux-design-trends-2025':
          updatePageMeta(
            'UI/UX Design Trends That Will Dominate 2025',
            'Explore the latest design trends and how to implement them in your next project for maximum user engagement and conversion.',
            '/blog/ui-ux-design-trends-2025'
          );
          break;
        case 'implementing-ai-chatbots':
          updatePageMeta(
            'Implementing AI Chatbots: A Step-by-Step Business Guide',
            'Everything you need to know about implementing AI chatbots to improve customer service and reduce operational costs.',
            '/blog/implementing-ai-chatbots'
          );
          break;
        case 'mobile-first-design':
          updatePageMeta(
            'Mobile-First Design: Why It\'s Critical for Modern Websites',
            'Understanding the importance of mobile-first design and how to implement it effectively for better user experience and search rankings.',
            '/blog/mobile-first-design'
          );
          break;
        default:
          updatePageMeta(
            'SAM CREATIVE Solutions - Premium Digital Agency | Web Development & AI Solutions',
            'Premium digital agency specializing in web development, AI solutions, and luxury design. Transform your business with our cutting-edge technology and creative excellence.',
            '/'
          );
      }
    };

    handleRouting();
    
    // Listen for browser navigation
    window.addEventListener('popstate', handleRouting);
    
    return () => {
      window.removeEventListener('popstate', handleRouting);
    };
  }, []);

  // Handle page navigation
  const handlePageChange = (page: string) => {
    const routeMap: { [key: string]: string } = {
      'home': '/',
      'portfolio': '/portfolio',
      'contact': '/contact',
      'blog': '/blog',
      'privacy': '/privacy-policy',
      'terms': '/terms-of-service',
      'faq': '/faq',
      'future-ai-web-development-2025': '/blog/future-ai-web-development-2025',
      'ecommerce-seo-guide': '/blog/ecommerce-seo-guide',
      'scalable-saas-applications': '/blog/scalable-saas-applications',
      'ui-ux-design-trends-2025': '/blog/ui-ux-design-trends-2025',
      'implementing-ai-chatbots': '/blog/implementing-ai-chatbots',
      'mobile-first-design': '/blog/mobile-first-design'
    };

    const newPath = routeMap[page] || '/';
    
    // Update URL without page reload
    window.history.pushState({ page }, '', newPath);
    
    // Update current page
    setCurrentPage(page);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const openConsultation = () => {
    setIsConsultationOpen(true);
  };

  const closeConsultation = () => {
    setIsConsultationOpen(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <ScrollProgress />
      <PerformanceOptimizedApp 
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        openConsultation={openConsultation}
      />
      <ConsultationPopup isOpen={isConsultationOpen} onClose={closeConsultation} />
    </div>
  );
}

export default App;