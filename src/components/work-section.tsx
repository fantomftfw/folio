'use client';

import React from 'react';
import { motion } from 'framer-motion';

const WorkSection = () => {
  return (
    <motion.section 
      className="w-full flex flex-col gap-3 md:gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col gap-0">
        <h1 className="font-special-gothic text-3xl md:text-heading-xl text-primary leading-heading">
          My Work
        </h1>
        <h2 className="font-special-gothic text-2xl md:text-heading-lg text-primary leading-heading">
          Coming soon...
        </h2>
      </div>
      
      <p className="font-special-gothic text-xl md:text-heading-lg text-primary-light mt-1">
        This is a section for showcasing my work
      </p>
    </motion.section>
  );
};

export default WorkSection; 