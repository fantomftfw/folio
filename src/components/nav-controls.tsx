'use client';

import React from 'react';
import NavButton from './nav-button';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import Image from 'next/image';

interface NavControlsProps {
  onNavigateCustom: (direction: 'up' | 'down' | 'left' | 'right') => void;
  isRolling?: boolean;
  isFlying?: boolean;
}

const NavControls = ({ onNavigateCustom, isRolling, isFlying }: NavControlsProps) => {
  // Use either isFlying or isRolling (for backward compatibility)
  const isDisabled = isFlying || isRolling;
  
  return (
    <motion.div
      className="flex flex-col gap-2" 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="flex gap-3">
        <motion.button
          className={cn(
            "w-10 h-10 rounded-[10px] flex justify-center items-center relative",
            "bg-element-bg border border-element-border",
            "shadow-nav-default opacity-40 hover:opacity-100",
            isDisabled ? "cursor-not-allowed opacity-30" : "cursor-pointer"
          )}
          onClick={() => onNavigateCustom('left')}
          whileHover={{ scale: isDisabled ? 1 : 1.05, opacity: isDisabled ? 0.3 : 1 }}
          whileTap={{ scale: isDisabled ? 1 : 0.95 }}
          aria-label="Navigate left"
          aria-disabled={isDisabled}
          disabled={isDisabled}
        >
          <div className="w-4 h-4 relative rotate-180">
            <Image 
              src="/images/arrow-nav.svg" 
              alt="Arrow left"
              fill
              className="object-contain"
            />
          </div>
        </motion.button>
        
        <NavButton 
          direction="right" 
          onClick={() => onNavigateCustom('right')} 
          isActive={true}
          disabled={isDisabled}
        />
      </div>
    </motion.div>
  );
};

export default NavControls; 