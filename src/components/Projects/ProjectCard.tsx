import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '../../types';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    once: true,
  });

  // Add a staggered animation delay based on index
  const delay = index * 150;

  return (
    <div
      ref={ref}
      className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-700 ${
        isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70`}></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs bg-purple-500 bg-opacity-40 text-white px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs bg-gray-700 text-white px-2 py-1 rounded-full">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="View GitHub repository"
              >
                <Github size={20} />
              </a>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Visit live site"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
          
          <a
            href={project.github || project.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-purple-500 hover:text-purple-400 transition-colors duration-300 text-sm font-medium"
          >
            View Details
            <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;