'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col gap-3 md:gap-4">
      <div className="flex flex-col gap-0">
        <motion.h1 
          className="font-special-gothic text-3xl md:text-heading-xl text-primary leading-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I am Sameer.
        </motion.h1>
        <motion.h1 
          className="font-special-gothic text-3xl md:text-heading-xl text-primary leading-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          I bring the best of
        </motion.h1>
        <div className="flex items-baseline flex-wrap">
          <motion.span 
            className="font-special-gothic text-3xl md:text-heading-xl text-primary leading-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Function and{" "}
          </motion.span>
          <motion.span 
            className="font-special-gothic text-3xl md:text-heading-xl bg-gradient-aesthetic inline-block bg-clip-text text-transparent"
            style={{ lineHeight: 1.4 }} 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Aesthetic
          </motion.span>
          <motion.span 
            className="font-special-gothic text-3xl md:text-heading-xl text-primary leading-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            .
          </motion.span>
        </div>
      </div>
      
      <motion.p 
        className="font-special-gothic text-xl md:text-heading-lg text-primary-light mt-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Let&apos;s get the ball rolling
      </motion.p>
    </section>
  );
};

export default HeroSection; 