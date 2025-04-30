import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ChevronDown } from 'lucide-react';
import AnimatedText from '../common/AnimatedText';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import * as LucideIcons from 'lucide-react';

const Hero: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    once: true
  });

  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Hide scroll indicator when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderSocialIcons = () => {
    return socialLinks.map((link) => {
      const IconComponent = LucideIcons[link.icon as keyof typeof LucideIcons];
      return (
        <a 
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label={link.name}
        >
          {IconComponent && <IconComponent size={20} />}
        </a>
      );
    });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gray-900">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-blue-900/20"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(78, 15, 255, 0.2) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(28, 175, 255, 0.2) 0%, transparent 40%)'
        }}
      ></div>
      
      {/* Animated particles/stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `pulse ${Math.random() * 3 + 2}s infinite alternate ${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
      
      <div 
        ref={ref}
        className={`container mx-auto px-4 text-center transition-all duration-1000 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">Hi, I'm </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            {personalInfo.name}
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
          <AnimatedText text={personalInfo.title} className="inline-block" />
        </h2>
        
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg text-justify ">
          {personalInfo.bio}
        </p>
        
        <div className="flex justify-center gap-4 mb-16">
          <a 
            href="#projects" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12">
          {renderSocialIcons()}
        </div>
      </div>
      
      {/* Scroll indicator */}
      {showScrollIndicator && (
        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={30} />
        </a>
      )}
    </section>
  );
};

export default Hero;