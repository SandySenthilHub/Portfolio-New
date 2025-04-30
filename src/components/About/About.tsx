import React from 'react';
import Section from '../common/Section';
import { personalInfo } from '../../data/portfolioData';
import { User, MapPin, Mail, Phone, FileText, Code, Briefcase, GraduationCap, Award } from 'lucide-react';
import Sandy from './sandy.jpg'

const About: React.FC = () => {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know me better"
      className="bg-gray-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="group">
          <div className="relative rounded-xl overflow-hidden">
            {/* Replace with your own image URL */}
            <img
              src={Sandy}
              alt="Profile"
              className="w-full h-auto transition-transform duration-700 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white">
            Professional <span className="text-purple-500">Profile</span>
          </h3>

          <p className="text-gray-300 leading-relaxed">
            {personalInfo.longBio.split('\n\n').map((paragraph, index) => (
              <span key={index} className="block mb-4">{paragraph}</span>
            ))}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
            <div className="flex items-center space-x-3">
              <User size={20} className="text-purple-500" />
              <span>{personalInfo.name}</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={20} className="text-purple-500" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={20} className="text-purple-500" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={20} className="text-purple-500" />
              <span>{personalInfo.phone}</span>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="#resume"
              className="inline-flex items-center text-purple-500 hover:text-purple-400 font-medium transition-colors duration-300"
            >
              <FileText size={20} className="mr-2" />
              View My Resume
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
          <Code size={32} className="text-purple-500 mb-4" />
          <h3 className="text-xl font-bold text-white mb-3">Development</h3>
          <p className="text-gray-400">
            Building modern, responsive web applications with a focus on performance and user experience.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
          <Briefcase size={32} className="text-purple-500 mb-4" />
          <h3 className="text-xl font-bold text-white mb-3">Experience</h3>
          <p className="text-gray-400">
            Over 2+ years of professional experience working with startups and established companies.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
          <GraduationCap size={32} className="text-purple-500 mb-4" />
          <h3 className="text-xl font-bold text-white mb-3">Education</h3>
          <p className="text-gray-400">
          Bachelor’s degree in Computer Science from Government Arts College, Coimbatore, with distinction (8.2%) and university rank (Rank: 09)
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
  <Award size={32} className="text-purple-500 mb-4" />
  <h3 className="text-xl font-bold text-white mb-3">Certification</h3>
  <p className="text-gray-400">
    Certificate of Completion in Full Stack Web Development, demonstrating hands-on expertise in building end-to-end web applications using the MERN stack.
  </p>
</div>

      </div>
    </Section>
  );
};

export default About;