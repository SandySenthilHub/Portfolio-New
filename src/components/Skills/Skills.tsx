import React from 'react';
import Section from '../common/Section';
import SkillBar from './SkillBar';
import { skills } from '../../data/portfolioData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Skills: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  // Category titles map
  const categoryTitles = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    design: 'Design',
    tools: 'Tools & Technologies'
  };

  return (
    <Section 
      id="skills" 
      title="My Skills" 
      subtitle="Areas of expertise and technologies I work with"
      className="bg-gray-900"
    >
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white mb-6">
              {categoryTitles[category as keyof typeof categoryTitles]}
            </h3>
            
            <div>
              {categorySkills.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  skill={skill} 
                  isVisible={isIntersecting} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center text-gray-300">
        <p className="max-w-2xl mx-auto text-justify">
          In addition to these technical skills, I also bring strong problem-solving abilities, 
          excellent communication, and a passion for creating exceptional user experiences.
        </p>
      </div>
    </Section>
  );
};

export default Skills;