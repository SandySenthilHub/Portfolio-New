import React, { useState } from 'react';
import Button from '../common/Button';
import { Send, Check } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const inputClasses = "w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors duration-300";
  const errorClasses = "text-red-500 text-sm mt-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-white font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className={`${inputClasses} ${errors.name ? 'border-red-500' : ''}`}
          disabled={isSubmitting || isSubmitted}
        />
        {errors.name && <p className={errorClasses}>{errors.name}</p>}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-white font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email address"
          value={formData.email}
          onChange={handleChange}
          className={`${inputClasses} ${errors.email ? 'border-red-500' : ''}`}
          disabled={isSubmitting || isSubmitted}
        />
        {errors.email && <p className={errorClasses}>{errors.email}</p>}
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-white font-medium mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject of your message"
          value={formData.subject}
          onChange={handleChange}
          className={inputClasses}
          disabled={isSubmitting || isSubmitted}
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-white font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClasses} resize-none ${errors.message ? 'border-red-500' : ''}`}
          disabled={isSubmitting || isSubmitted}
        ></textarea>
        {errors.message && <p className={errorClasses}>{errors.message}</p>}
      </div>
      
      <div>
        <Button
          type="submit"
          variant="primary"
          fullWidth
          disabled={isSubmitting || isSubmitted}
          icon={isSubmitted ? <Check /> : <Send />}
          className={isSubmitted ? 'bg-green-600 hover:bg-green-700' : ''}
        >
          {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;