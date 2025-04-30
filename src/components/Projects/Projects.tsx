import React, { useState } from 'react';
import Section from '../common/Section';
import ProjectCard from './ProjectCard';
import { projects, categories } from '../../data/portfolioData';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <Section 
      id="projects" 
      title="My Projects"
      subtitle="Check out some of my recent work"
      className="bg-gray-800"
    >
      <div className="flex justify-center mb-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.value
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index}
          />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center text-gray-400 py-10">
          No projects found in this category.
        </div>
      )}
      
      <div className="text-center mt-12">
        <a 
          href="https://github.com/SandySenthilHub"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 inline-flex items-center"
        >
          View More on GitHub
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>
      </div>
    </Section>
  );
};

export default Projects;