import React from 'react';
import Section from '../common/Section';
import ContactForm from './ContactForm';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import * as LucideIcons from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-purple-500" />,
      title: 'Email',
      content: personalInfo.email,
      link: `mailto:${personalInfo.email}`
    },
    {
      icon: <Phone className="text-purple-500" />,
      title: 'Phone',
      content: personalInfo.phone,
      link: `tel:${personalInfo.phone.replace(/\s/g, '')}`
    },
    {
      icon: <MapPin className="text-purple-500" />,
      title: 'Location',
      content: personalInfo.location
    },
    {
      icon: <Clock className="text-purple-500" />,
      title: 'Working Hours',
      content: 'Mon - Fri, 9:00 - 17:00'
    }
  ];

  const renderSocialIcons = () => {
    return socialLinks.map((link) => {
      const IconComponent = LucideIcons[link.icon as keyof typeof LucideIcons];
      return (
        <a 
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center"
          aria-label={link.name}
        >
          {IconComponent && <IconComponent size={20} />}
        </a>
      );
    });
  };

  return (
    <Section 
      id="contact" 
      title="Contact Me" 
      subtitle="Get in touch for collaborations or inquiries"
      className="bg-gray-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
          <p className="text-gray-400 mb-8">
            I'm interested in freelance opportunities – especially ambitious or large projects. 
            However, if you have other requests or questions, don't hesitate to contact me.
          </p>
          
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center shrink-0">
                  {info.icon}
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">{info.title}</h4>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-400">{info.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10">
            <h4 className="text-white font-medium mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              {renderSocialIcons()}
            </div>
          </div>
        </div>
        
        {/* <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
          <ContactForm />
        </div> */}
      </div>
    </Section>
  );
};

export default Contact;