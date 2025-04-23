'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setIsSubmitting(true);
    
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };
  
  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-special-gothic mb-6">Contact Me</h1>
        <p className="text-xl text-gray-600 max-w-2xl font-red-hat">
          Let's connect! Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-2 font-special-gothic">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent font-red-hat"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 font-special-gothic">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent font-red-hat"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 font-special-gothic">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent font-red-hat"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 font-special-gothic text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitSuccess && (
              <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md font-red-hat">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
          </form>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-special-gothic mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-special-gothic">Email</h3>
                <p className="text-gray-600 font-red-hat">example@yourportfolio.com</p>
              </div>
              
              <div>
                <h3 className="font-special-gothic">Location</h3>
                <p className="text-gray-600 font-red-hat">San Francisco, CA</p>
              </div>
              
              <div>
                <h3 className="font-special-gothic">Social Media</h3>
                <div className="flex space-x-4 mt-2 font-red-hat">
                  <a href="#" className="text-gray-600 hover:text-blue-600">LinkedIn</a>
                  <a href="#" className="text-gray-600 hover:text-blue-600">Twitter</a>
                  <a href="#" className="text-gray-600 hover:text-blue-600">GitHub</a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-special-gothic mb-4">Working Hours</h2>
            <p className="text-gray-600 font-red-hat">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600 font-red-hat">Weekend: By appointment</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection; 