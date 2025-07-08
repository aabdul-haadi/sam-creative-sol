import React, { useState, useMemo } from 'react';
import { Filter, Eye, ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react';
import LazyImage from './LazyImage';
import { useOptimizedScroll, useIntersectionObserver } from '../hooks/usePerformanceOptimization';

interface PortfolioProps {
  setCurrentPage: (page: string) => void;
}

const OptimizedPortfolio: React.FC<PortfolioProps> = ({ setCurrentPage }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  const categories = [
    { id: 'all', label: 'All Projects', count: 18 },
    { id: 'web', label: 'Web Development', count: 6 },
    { id: 'saas', label: 'SaaS Applications', count: 4 },
    { id: 'ecommerce', label: 'E-commerce', count: 3 },
    { id: 'design', label: 'Design & Branding', count: 3 },
    { id: 'logo', label: 'Logo Mockups', count: 2 }
  ];

  const projects = useMemo(() => [
    {
      id: 1,
      title: "TechFlow SaaS Platform",
      category: "saas",
      image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg",
      description: "Complete business automation platform with AI-powered analytics and workflow management.",
      year: "2024",
      type: "single"
    },
    {
      id: 2,
      title: "Luxury E-commerce Store",
      category: "ecommerce",
      image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg",
      images: [
        "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg",
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
      ],
      description: "Premium e-commerce platform with advanced product customization and AR preview.",
      year: "2024",
      type: "slider"
    },
    {
      id: 3,
      title: "Modern Web Application",
      category: "web",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      images: [
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
        "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
        "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      ],
      description: "Responsive web application with modern design and seamless user experience.",
      year: "2024",
      type: "slider"
    },
    {
      id: 4,
      title: "Brand Identity - EcoLife",
      category: "design",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      description: "Complete brand identity design for sustainable lifestyle company.",
      year: "2023",
      type: "single"
    },
    {
      id: 5,
      title: "Corporate Logo Design",
      category: "logo",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      description: "Professional logo design with multiple variations and brand applications.",
      year: "2024",
      type: "single"
    },
    {
      id: 6,
      title: "E-commerce Mobile App",
      category: "ecommerce",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
      images: [
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
        "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
      ],
      description: "Cross-platform mobile e-commerce application with seamless shopping experience.",
      year: "2023",
      type: "slider"
    }
  ], []);

  // Memoized filtered projects for performance
  const filteredProjects = useMemo(() => {
    return activeCategory === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeCategory);
  }, [projects, activeCategory]);

  const openProject = (project: any) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setZoomLevel(1);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setZoomLevel(1);
    document.body.style.overflow = 'unset'; // Restore scroll
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
      setZoomLevel(1);
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
      setZoomLevel(1);
    }
  };

  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.5, 3));
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  const resetZoom = () => setZoomLevel(1);

  // Keyboard navigation for accessibility
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-yellow-600">Work</span>
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto mt-2">
            Discover our curated collection of projects showcasing innovation and creativity.
          </p>
        </div>

        {/* Optimized Category Filter */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <Filter className="w-5 h-5 text-gray-400 mr-2" />
            <span className="text-gray-600 font-medium">Filter by category</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm'
                }`}
              >
                {category.label}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Optimized Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openProject(project)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full"
                  width={400}
                  height={300}
                  quality={85}
                />
                
                {/* Optimized Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {project.year}
                      </span>
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs uppercase font-medium">
                  {project.category}
                </div>

                {/* Multiple Images Indicator */}
                {project.type === 'slider' && project.images && project.images.length > 1 && (
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
                    +{project.images.length - 1} more
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View Full Portfolio Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              setCurrentPage('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105"
          >
            Explore Full Portfolio
          </button>
        </div>
      </div>

      {/* Optimized Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-black rounded-xl overflow-hidden">
            {/* Close Button */}
            <button 
              onClick={closeProject}
              className="absolute top-4 right-4 z-30 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Zoom Controls */}
            <div className="absolute top-4 left-4 z-30 flex space-x-2">
              <button 
                onClick={zoomIn}
                className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button 
                onClick={zoomOut}
                className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <button 
                onClick={resetZoom}
                className="px-3 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm hover:bg-black/70 transition-colors"
              >
                Reset
              </button>
            </div>

            {/* Optimized Image Display */}
            <div className="w-full h-full flex items-center justify-center overflow-auto">
              {selectedProject.type === 'slider' && selectedProject.images ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <LazyImage
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-300"
                    width={1200}
                    height={800}
                    quality={95}
                  />
                  
                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}

                  {/* Image Indicators */}
                  {selectedProject.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {selectedProject.images.map((_: any, index: number) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            index === currentImageIndex ? 'bg-yellow-400' : 'bg-white/50'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <LazyImage
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-300"
                  width={1200}
                  height={800}
                  quality={95}
                />
              )}
            </div>

            {/* Project Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
              <h2 className="text-white text-3xl font-bold mb-2">{selectedProject.title}</h2>
              <p className="text-gray-300">{selectedProject.year}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OptimizedPortfolio;