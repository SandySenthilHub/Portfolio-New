import React, { useState } from 'react';
import Section from '../common/Section';
import { FileText, Download, Briefcase, GraduationCap } from 'lucide-react';
import { experiences, education } from '../../data/portfolioData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import resume from './Sandhya-CV.pdf'

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    once: true
  });

  return (
    <Section 
      id="resume" 
      title="My Resume" 
      subtitle="A summary of my education and professional experience"
      className="bg-gray-800"
    >
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-6 py-2 text-sm font-medium rounded-l-lg ${
              activeTab === 'experience'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            onClick={() => setActiveTab('experience')}
          >
            <Briefcase size={18} className="inline mr-2" />
            Experience
          </button>
          <button
            type="button"
            className={`px-6 py-2 text-sm font-medium rounded-r-lg ${
              activeTab === 'education'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            onClick={() => setActiveTab('education')}
          >
            <GraduationCap size={18} className="inline mr-2" />
            Education
          </button>
        </div>
      </div>
      
      <div 
        ref={ref}
        className={`bg-gray-900 rounded-lg p-8 transition-opacity duration-1000 ${
          isIntersecting ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {activeTab === 'experience' ? (
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative pl-8 border-l-2 border-purple-500"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                  <div className="flex items-center text-gray-400">
                    <span className="mr-3">{exp.company}</span>
                    <span className="text-sm bg-purple-500 bg-opacity-30 text-purple-300 px-2 py-0.5 rounded-full">
                      {exp.duration} 
                    </span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-10">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="relative pl-8 border-l-2 border-blue-500"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <div className="flex items-center text-gray-400">
                    <span className="mr-3">{edu.institution}</span>
                    <span className="text-sm bg-blue-500 bg-opacity-30 text-blue-300 px-2 py-0.5 rounded-full">
                      {edu.duration}
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="mt-12 text-center">
        <a 
          href={resume} 
          className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300"
          download="Sandhya_CV.pdf"
        >
          <FileText size={20} className="mr-2" />
          <span className="mr-1">Download Resume</span>
          <Download size={16} />
        </a>
        <p className="text-gray-400 mt-4 text-sm">
          PDF format • Last updated May 2025
        </p>
      </div>
    </Section>
  );
};

export default Resume;