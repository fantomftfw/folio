'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ResumeSection: React.FC = () => {
  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-special-gothic mb-6">Resume</h1>
        <p className="text-xl text-gray-600 max-w-2xl font-red-hat">
          My professional background and skills.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-12"
      >
        {/* Experience Section */}
        <div>
          <h2 className="text-2xl font-special-gothic mb-4 border-b pb-2">Experience</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-special-gothic">Senior Frontend Developer</h3>
              <p className="text-gray-600 font-red-hat">Example Company • 2021 - Present</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 font-red-hat">
                <li>Developed responsive web applications using React and Next.js</li>
                <li>Implemented modern UI designs with Tailwind CSS</li>
                <li>Collaborated with cross-functional teams to deliver high-quality products</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-special-gothic">Frontend Developer</h3>
              <p className="text-gray-600 font-red-hat">Previous Company • 2018 - 2021</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 font-red-hat">
                <li>Built interactive user interfaces with modern JavaScript frameworks</li>
                <li>Optimized application performance and accessibility</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-special-gothic mb-4 border-b pb-2">Education</h2>
          
          <div>
            <h3 className="text-xl font-special-gothic">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600 font-red-hat">Example University • 2014 - 2018</p>
            <p className="mt-2 font-red-hat">Graduated with honors, focusing on web technologies and software engineering.</p>
          </div>
        </div>
        
        {/* Skills Section */}
        <div>
          <h2 className="text-2xl font-special-gothic mb-4 border-b pb-2">Skills</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-special-gothic">Frontend</h3>
              <ul className="list-disc pl-5 mt-1 font-red-hat">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>HTML5 / CSS3</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-special-gothic">Tools</h3>
              <ul className="list-disc pl-5 mt-1 font-red-hat">
                <li>Git / GitHub</li>
                <li>VS Code</li>
                <li>Figma</li>
                <li>Webpack</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-special-gothic">Other</h3>
              <ul className="list-disc pl-5 mt-1 font-red-hat">
                <li>Node.js</li>
                <li>REST APIs</li>
                <li>GraphQL</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResumeSection; 