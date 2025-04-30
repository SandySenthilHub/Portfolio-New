import React from 'react';
import { ChevronUp } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="mb-2">
              &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            
          </div>
          
          <a 
            href="#hero" 
            className="mt-6 md:mt-0 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
            aria-label="Back to top"
          >
            <ChevronUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;