import React, { useState, useEffect } from 'react';
import { Skill } from '../../types';

interface SkillBarProps {
  skill: Skill;
  isVisible: boolean;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, isVisible, index }) => {
  const [width, setWidth] = useState(0);
  const delay = index * 100; // Staggered animation

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isVisible) {
      timeout = setTimeout(() => {
        setWidth(skill.level);
      }, delay);
    } else {
      setWidth(0);
    }
    
    return () => clearTimeout(timeout);
  }, [isVisible, skill.level, delay]);

  const getColorClass = () => {
    switch(skill.category) {
      case 'frontend':
        return 'from-purple-500 to-blue-500';
      case 'backend':
        return 'from-green-500 to-teal-500';
      case 'design':
        return 'from-pink-500 to-red-500';
      case 'tools':
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-purple-500 to-blue-500';
    }
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full bg-gradient-to-r ${getColorClass()} transition-all duration-1000 ease-out`}
          style={{ width: `${width}%`, transitionDelay: `${delay}ms` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;