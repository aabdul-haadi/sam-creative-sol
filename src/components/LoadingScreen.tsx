import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 500);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="mb-8 relative">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <Sparkles className="w-10 h-10 text-black animate-spin" />
          </div>
          <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto opacity-30 animate-ping"></div>
        </div>

        {/* Brand Name */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 animate-fade-in-up">
            SAM CREATIVE
          </h1>
          <p className="text-yellow-400 text-lg font-medium animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            solutions
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="bg-gray-800 rounded-full h-1 mb-4">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-1 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-gray-400 text-sm">Loading {progress}%</p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-40"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;