import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  openConsultation?: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, openConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'Portfolio', page: 'portfolio' },
    { name: 'Blog', page: 'blog' },
    { name: 'About', page: 'home' },
    { name: 'Contact', page: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.page === 'home' && item.name !== 'Home') {
      const sectionId = item.name.toLowerCase().replace(' ', '-');
      scrollToSection(sectionId);
    } else {
      setCurrentPage(item.page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const getHeaderBackground = () => (
    ['portfolio', 'blog', 'contact', 'terms', 'privacy', 'faq'].includes(currentPage) || currentPage.includes('blog')
      ? 'bg-black/95 backdrop-blur-sm shadow-sm'
      : isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
  );

  const getTextColor = () => (
    ['portfolio', 'blog', 'contact', 'terms', 'privacy', 'faq'].includes(currentPage) || currentPage.includes('blog')
      ? 'text-white'
      : isScrolled ? 'text-white' : 'text-white'
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderBackground()} ${
      isScrolled || currentPage !== 'home' ? 'py-3' : 'py-5'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick({ name: 'Home', page: 'home' })}
          >
            <img src="/logo.png" alt="SAM CREATIVE Logo" className="w-14 h-14 object-contain" />
            <div className="flex flex-col">
              <span className={`text-xl font-bold ${getTextColor()} group-hover:text-yellow-400 transition-colors`}>
                SAM CREATIVE
              </span>
              <span className="text-xs text-yellow-400 font-medium -mt-1 tracking-[0.2em]">
                solutions
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`relative font-medium transition-all duration-300 hover:text-yellow-400 ${
                  currentPage === item.page ? 'text-yellow-400' : getTextColor()
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={openConsultation}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden ${getTextColor()}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden absolute top-full left-0 right-0 ${['portfolio', 'blog', 'contact', 'terms', 'privacy', 'faq'].includes(currentPage) || currentPage.includes('blog') ? 'bg-black/95 text-white' : isScrolled ? 'bg-black/95 text-white' : 'bg-transparent text-white'} backdrop-blur-sm border-t border-gray-200`}>
            <nav className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`text-left font-medium transition-colors ${
                    currentPage === item.page ? 'text-yellow-600' : ['portfolio', 'blog', 'contact', 'terms', 'privacy', 'faq'].includes(currentPage) || currentPage.includes('blog') ? 'text-white hover:text-yellow-600' : isScrolled ? 'text-white hover:text-yellow-600' : 'text-white hover:text-yellow-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openConsultation?.();
                }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 w-full"
              >
                Get Free Consultation
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;