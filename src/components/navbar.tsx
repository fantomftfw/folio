'use client';

import React from 'react';
import NavItem from './nav-item';
import { motion } from 'framer-motion';

interface NavbarProps {
  currentSection?: number;
}

const Navbar = ({ currentSection = 0 }: NavbarProps) => {
  const scrollToSection = (index: number) => {
    // Find the section element by its index and scroll to it
    const sectionWidth = window.innerWidth;
    window.scrollTo({
      left: index * sectionWidth,
      behavior: 'smooth'
    });
  };

  return (
    <motion.nav 
      className="w-full flex justify-center py-8 md:py-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-row justify-center items-center gap-6 md:gap-12">
        <NavItem 
          icon="H" 
          label="Home" 
          href="#home" 
          isActive={currentSection === 0} 
          onClick={() => scrollToSection(0)}
        />
        <NavItem 
          icon="W" 
          label="Work" 
          href="#work" 
          isActive={currentSection === 1} 
          onClick={() => scrollToSection(1)}
        />
        <NavItem 
          icon="R" 
          label="Resume" 
          href="#resume" 
          isActive={currentSection === 2} 
          onClick={() => scrollToSection(2)}
        />
        <NavItem 
          icon="C" 
          label="Contact" 
          href="#contact" 
          isActive={currentSection === 3} 
          onClick={() => scrollToSection(3)}
        />
      </div>
    </motion.nav>
  );
};

export default Navbar; 