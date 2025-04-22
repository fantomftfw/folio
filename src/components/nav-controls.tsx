'use client';

import React from 'react';
import NavButton from './nav-button';
import { motion } from 'framer-motion';

interface NavControlsProps {
  onNavigateCustom: (direction: 'up' | 'down' | 'left' | 'right') => void;
  isRolling: boolean;
}

const NavControls = ({ onNavigateCustom, isRolling }: NavControlsProps) => {
  return (
    <motion.div
      className="flex flex-col gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="flex justify-center mb-1">
        <NavButton 
          direction="up" 
          onClick={() => onNavigateCustom('up')} 
        />
      </div>
      <div className="flex justify-center items-center gap-3">
        <NavButton 
          direction="left" 
          onClick={() => onNavigateCustom('left')} 
        />
        <NavButton 
          direction="down" 
          onClick={() => onNavigateCustom('down')} 
        />
        <NavButton 
          direction="right" 
          onClick={() => onNavigateCustom('right')} 
          isActive={true}
          disabled={isRolling}
        />
      </div>
    </motion.div>
  );
};

export default NavControls; 