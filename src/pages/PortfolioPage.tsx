import React, { useState, useCallback, useMemo, lazy, Suspense } from 'react';
import { ArrowLeft, Eye, Filter, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

// ================== Web Images ==================
import web1_1 from '../assets/sam/web1/web1.1.png';
import web1_2 from '../assets/sam/web1/web1.2.png';
import web1_3 from '../assets/sam/web1/web1.3.png';
import web1_4 from '../assets/sam/web1/web1.4.png';

import web2_1 from '../assets/sam/web2/web2.1.png';
import web2_2 from '../assets/sam/web2/web2.2.png';
import web2_3 from '../assets/sam/web2/web2.3.png';
import web2_4 from '../assets/sam/web2/web2.4.png';
import web2_5 from '../assets/sam/web2/web2.5.png';

import web3_1 from '../assets/sam/web3/web3.1.png';
import web3_2 from '../assets/sam/web3/web3.2.png';
import web3_3 from '../assets/sam/web3/web3.3.png';
import web3_4 from '../assets/sam/web3/web3.4.png';

import web4_1 from '../assets/sam/web4/web4.1.png';
import web4_2 from '../assets/sam/web4/web4.2.png';
import web4_3 from '../assets/sam/web4/web4.3.png';
import web4_4 from '../assets/sam/web4/web4.4.png';
import web4_5 from '../assets/sam/web4/web4.5.png';

import web5_1 from '../assets/sam/web5/web5.1.png';
import web5_2 from '../assets/sam/web5/web5.2.png';
import web5_3 from '../assets/sam/web5/web5.3.png';
import web5_4 from '../assets/sam/web5/web5.4.png';

import web6_1 from '../assets/sam/web6/web6.1.png';
import web6_2 from '../assets/sam/web6/web6.2.png';
import web6_3 from '../assets/sam/web6/web6.3.png';
import web6_4 from '../assets/sam/web6/web6.4.png';
import web6_5 from '../assets/sam/web6/web6.5.png';

import web7_1 from '../assets/sam/web7/web7.1.png';
import web7_2 from '../assets/sam/web7/web7.2.png';
import web7_3 from '../assets/sam/web7/web7.3.png';
import web7_4 from '../assets/sam/web7/web7.4.png';

// ================== Ads ==================
import ad1 from '../assets/ads/ad1.jpg';
import ad2 from '../assets/ads/ad2.jpg';
import ad3 from '../assets/ads/ad3.jpg';
import ad4 from '../assets/ads/ad4.jpg';
import ad5 from '../assets/ads/ad5.jpg';
import ad6 from '../assets/ads/ad6.jpg';
import ad7 from '../assets/ads/ad7.jpg';
import ad8 from '../assets/ads/ad8.jpg';
import ad9 from '../assets/ads/ad9.jpg';

// ================== Logos ==================
import logo1 from '../assets/logo/1.jpg';
import logo2 from '../assets/logo/2.jpg';
import logo3 from '../assets/logo/3.jpg';
import logo4 from '../assets/logo/4.jpg';
import logo5 from '../assets/logo/5.jpg';
import logo6 from '../assets/logo/6.jpg';
import logo7 from '../assets/logo/7.jpeg';

// ================== SaaS ==================
import saas1 from '../assets/saas/saas1.webp';
import saas2 from '../assets/saas/saas2.webp';
import saas3 from '../assets/saas/saas3.webp';
import saas4 from '../assets/saas/saas4.webp';

// Lazy load the image component for better performance
const OptimizedImage = lazy(() => Promise.resolve({
  default: ({ src, alt, className, onClick, loading = "lazy", style }: any) => (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      onClick={onClick}
      loading={loading}
      style={{ 
        imageRendering: 'auto',
        objectFit: 'cover',
        transition: 'transform 0.3s ease',
        ...style
      }}
      decoding="async"
    />
  )
}));

interface PortfolioPageProps {
  setCurrentPage?: (page: string) => void;
}

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  images?: string[];
  description: string;
  year: string;
  type: 'single' | 'slider' | 'webpage';
}

interface Category {
  id: string;
  label: string;
  count: number;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ setCurrentPage }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const categories: Category[] = useMemo(() => [
    { id: 'all', label: 'All Projects', count: 27 },
    { id: 'web', label: 'Web Development', count: 7 },
    { id: 'saas', label: 'SaaS Applications', count: 4 },
    { id: 'ads', label: 'Advertisements', count: 9 },
    { id: 'logo', label: 'Logo Designs', count: 7 }
  ], []);

  const projects: Project[] = useMemo(() => [
    // Web Projects - Full webpage captures
    {
      id: 1,
      title: "Modern Web Application 1",
      category: "web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80",
      images: [web1_1, web1_2, web1_3, web1_4],
      description: "Responsive web application with modern design and seamless user experience.",
      year: "2024",
      type: "webpage"
    },
    {
      id: 2,
      title: "Creative Agency Website",
      category: "web",
      image:"https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80",
      images: [web2_1, web2_2, web2_3, web2_4, web2_5],
      description: "Creative portfolio website with stunning animations and interactive elements.",
      year: "2023",
      type: "webpage"
    },
    {
      id: 3,
      title: "Corporate Web Portal",
      category: "web",
      image:  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80",
      images: [web3_1, web3_2, web3_3, web3_4],
      description: "Enterprise-grade web portal with robust features and scalability.",
      year: "2024",
      type: "webpage"
    },
    {
      id: 4,
      title: "E-learning Platform",
      category: "web",
      image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80",
      images: [web4_1, web4_2, web4_3, web4_4, web4_5],
      description: "Interactive e-learning platform with course management and analytics.",
      year: "2024",
      type: "webpage"
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80",
      images: [web5_1, web5_2, web5_3, web5_4],
      description: "Sleek portfolio website for showcasing creative work.",
      year: "2023",
      type: "webpage"
    },
    {
      id: 6,
      title: "Community Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80",
      images: [web6_1, web6_2, web6_3, web6_4, web6_5],
      description: "Social community platform with real-time interaction features.",
      year: "2024",
      type: "webpage"
    },
    {
      id: 7,
      title: "Business Dashboard",
      category: "web",
      image:  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80",
      images: [web7_1, web7_2, web7_3, web7_4],
      description: "Data-driven business dashboard with real-time insights.",
      year: "2024",
      type: "webpage"
    },
    // SaaS Projects
    {
      id: 8,
      title: "TechFlow SaaS Platform",
      category: "saas",
      image: saas1,
      description: "Complete business automation platform with AI-powered analytics and workflow management.",
      year: "2024",
      type: "single"
    },
    {
      id: 9,
      title: "Analytics Dashboard",
      category: "saas",
      image: saas2,
      description: "Advanced analytics dashboard with real-time data visualization and reporting.",
      year: "2024",
      type: "single"
    },
    {
      id: 10,
      title: "Fintech App Interface",
      category: "saas",
      image: saas3,
      description: "Modern fintech application with secure payment processing and intuitive design.",
      year: "2024",
      type: "single"
    },
    {
      id: 11,
      title: "CRM Solution",
      category: "saas",
      image: saas4,
      description: "Customer relationship management system with advanced automation features.",
      year: "2024",
      type: "single"
    },
    // Ads Projects
    {
      id: 12,
      title: "Digital Campaign Ad 1",
      category: "ads",
      image: ad1,
      description: "Engaging digital advertisement for brand promotion.",
      year: "2024",
      type: "single"
    },
    {
      id: 13,
      title: "Product Launch Ad",
      category: "ads",
      image: ad2,
      description: "High-impact ad for new product launch campaign.",
      year: "2024",
      type: "single"
    },
    {
      id: 14,
      title: "Social Media Ad 1",
      category: "ads",
      image: ad3,
      description: "Targeted social media advertisement with dynamic visuals.",
      year: "2024",
      type: "single"
    },
    {
      id: 15,
      title: "Event Promotion Ad",
      category: "ads",
      image: ad4,
      description: "Promotional ad for large-scale event marketing.",
      year: "2023",
      type: "single"
    },
    {
      id: 16,
      title: "Brand Awareness Ad",
      category: "ads",
      image: ad5,
      description: "Creative ad to boost brand visibility.",
      year: "2024",
      type: "single"
    },
    {
      id: 17,
      title: "Seasonal Campaign Ad",
      category: "ads",
      image: ad6,
      description: "Seasonal advertisement with festive theme.",
      year: "2023",
      type: "single"
    },
    {
      id: 18,
      title: "Product Showcase Ad",
      category: "ads",
      image: ad7,
      description: "Ad showcasing key product features.",
      year: "2024",
      type: "single"
    },
    {
      id: 19,
      title: "Digital Banner Ad",
      category: "ads",
      image: ad8,
      description: "Interactive digital banner for online campaigns.",
      year: "2024",
      type: "single"
    },
    {
      id: 20,
      title: "Social Media Ad 2",
      category: "ads",
      image: ad9,
      description: "Engaging social media ad with bold visuals.",
      year: "2024",
      type: "single"
    },
    // Logo Projects
    {
      id: 21,
      title: "Corporate Logo Design",
      category: "logo",
      image: logo1,
      description: "Professional logo design with multiple variations and brand applications.",
      year: "2024",
      type: "single"
    },
    {
      id: 22,
      title: "Fashion Brand Logo",
      category: "logo",
      image: logo2,
      description: "Elegant logo design for luxury fashion brand with timeless appeal.",
      year: "2024",
      type: "single"
    },
    {
      id: 23,
      title: "Tech Startup Logo",
      category: "logo",
      image: logo3,
      description: "Modern logo for innovative tech startup.",
      year: "2024",
      type: "single"
    },
    {
      id: 24,
      title: "Eco Brand Logo",
      category: "logo",
      image: logo4,
      description: "Sustainable brand logo with eco-friendly design.",
      year: "2023",
      type: "single"
    },
    {
      id: 25,
      title: "Retail Logo Design",
      category: "logo",
      image: logo5,
      description: "Bold logo for retail brand expansion.",
      year: "2024",
      type: "single"
    },
    {
      id: 26,
      title: "Food Industry Logo",
      category: "logo",
      image: logo6,
      description: "Appetizing logo design for food and beverage brand.",
      year: "2024",
      type: "single"
    },
    {
      id: 27,
      title: "Creative Agency Logo",
      category: "logo",
      image: logo7,
      description: "Distinctive logo for creative agency branding.",
      year: "2024",
      type: "single"
    }
  ], []);

  const filteredProjects = useMemo(() => {
    return activeCategory === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeCategory);
  }, [activeCategory, projects]);

  const handleBackToHome = useCallback(() => {
    if (setCurrentPage) {
      setCurrentPage('home');
    }
  }, [setCurrentPage]);

  const openProject = useCallback((project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setZoomLevel(1);
    setIsFullscreen(false);
  }, []);

  const closeProject = useCallback(() => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setZoomLevel(1);
    setIsFullscreen(false);
  }, []);

  const nextImage = useCallback(() => {
    if (selectedProject && selectedProject.images && selectedProject.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images!.length - 1 ? 0 : prev + 1
      );
      setZoomLevel(1);
    }
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (selectedProject && selectedProject.images && selectedProject.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images!.length - 1 : prev - 1
      );
      setZoomLevel(1);
    }
  }, [selectedProject]);

  const zoomIn = useCallback(() => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  }, []);

  const zoomOut = useCallback(() => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  }, []);

  const resetZoom = useCallback(() => {
    setZoomLevel(1);
  }, []);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(prev => !prev);
    setZoomLevel(1);
  }, []);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      
      switch (e.key) {
        case 'Escape':
          closeProject();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'f':
        case 'F':
          if (selectedProject.type === 'webpage') {
            toggleFullscreen();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedProject, closeProject, prevImage, nextImage, toggleFullscreen]);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <button 
            onClick={handleBackToHome}
            className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-yellow-400">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Showcasing our finest work across various industries. Each project represents our commitment 
              to excellence, innovation, and delivering exceptional results.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">150+</div>
                <p className="text-gray-300 text-sm md:text-base">Projects</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">98%</div>
                <p className="text-gray-300 text-sm md:text-base">Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">25+</div>
                <p className="text-gray-300 text-sm md:text-base">Industries</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">50+</div>
                <p className="text-gray-300 text-sm md:text-base">Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Category Filter */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center justify-center mb-6 md:mb-8">
            <Filter className="w-5 h-5 text-gray-400 mr-2" />
            <span className="text-gray-600 font-medium">Filter by category</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:scale-105 border border-gray-200 shadow-sm'
                }`}
              >
                {category.label}
                <span className="ml-2 text-xs md:text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openProject(project)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <Suspense fallback={
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                }>
                  <OptimizedImage 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </Suspense>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h3 className="text-white font-bold text-lg md:text-xl mb-2 line-clamp-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm md:text-base mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                        {project.year}
                      </span>
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-black/70 text-white px-2 md:px-3 py-1 rounded-full text-xs uppercase font-medium backdrop-blur-sm">
                  {project.category}
                </div>

                {/* Multiple Images Indicator */}
                {project.type === 'webpage' && project.images && project.images.length > 1 && (
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 md:px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    Full Site ({project.images.length} pages)
                  </div>
                )}
                {project.type === 'slider' && project.images && project.images.length > 1 && (
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 md:px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    +{project.images.length - 1} more
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`relative w-full bg-black rounded-xl overflow-hidden transition-all duration-300 ${
            selectedProject.type === 'webpage' && isFullscreen 
              ? 'max-w-none max-h-none h-full rounded-none' 
              : 'max-w-7xl max-h-[95vh]'
          }`}>
            {/* Close Button */}
            <button 
              onClick={closeProject}
              className="absolute top-4 right-4 z-30 w-12 h-12 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Controls */}
            <div className="absolute top-4 left-4 z-30 flex space-x-2">
              <button 
                onClick={zoomIn}
                className="w-12 h-12 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button 
                onClick={zoomOut}
                className="w-12 h-12 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <button 
                onClick={resetZoom}
                className="px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm hover:bg-black/90 transition-colors"
                title="Reset Zoom"
              >
                Reset
              </button>
              {selectedProject.type === 'webpage' && (
                <button 
                  onClick={toggleFullscreen}
                  className="w-12 h-12 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-colors"
                  title="Toggle Fullscreen (F)"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Image Display */}
            <div className="w-full h-full flex items-center justify-center overflow-auto">
              {selectedProject.images && selectedProject.images.length > 1 ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <Suspense fallback={
                    <div className="w-full h-full bg-gray-800 animate-pulse flex items-center justify-center">
                      <div className="w-12 h-12 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  }>
                    <OptimizedImage 
                      src={selectedProject.images[currentImageIndex]} 
                      alt={`${selectedProject.title} - Page ${currentImageIndex + 1}`}
                      className={`max-w-full max-h-full transition-transform duration-300 ${
                        selectedProject.type === 'webpage' 
                          ? 'object-contain object-top' 
                          : 'object-contain object-center'
                      }`}
                      style={{ 
                        transform: `scale(${zoomLevel})`,
                        transformOrigin: selectedProject.type === 'webpage' ? 'top center' : 'center'
                      }}
                      loading="eager"
                    />
                  </Suspense>
                  
                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-colors"
                        title="Previous Image (←)"
                      >
                        <ChevronLeft className="w-7 h-7" />
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-colors"
                        title="Next Image (→)"
                      >
                        <ChevronRight className="w-7 h-7" />
                      </button>
                    </>
                  )}

                  {/* Image Indicators */}
                  {selectedProject.images.length > 1 && !isFullscreen && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                      {selectedProject.images.map((_, index: number) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            index === currentImageIndex ? 'bg-yellow-400' : 'bg-white/50 hover:bg-white/70'
                          }`}
                          title={`Go to page ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Suspense fallback={
                  <div className="w-full h-full bg-gray-800 animate-pulse flex items-center justify-center">
                    <div className="w-12 h-12 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                }>
                  <OptimizedImage 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-300"
                    style={{ transform: `scale(${zoomLevel})` }}
                    loading="eager"
                  />
                </Suspense>
              )}
            </div>

            {/* Project Info Overlay */}
            {!isFullscreen && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 to-transparent p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-white text-2xl md:text-3xl font-bold">{selectedProject.title}</h2>
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <span className="text-gray-400 text-sm">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </span>
                  )}
                </div>
                <p className="text-gray-300 text-sm md:text-base mb-2">{selectedProject.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 text-sm md:text-base font-semibold">{selectedProject.year}</span>
                  {selectedProject.type === 'webpage' && (
                    <span className="text-gray-400 text-sm">Full-screen webpage capture • Press F for fullscreen</span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;