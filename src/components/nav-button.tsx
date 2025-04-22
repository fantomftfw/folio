'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

interface NavButtonProps {
  direction: 'up' | 'down' | 'left' | 'right';
  onClick?: () => void;
  className?: string;
  isActive?: boolean;
  disabled?: boolean;
}

const directionToRotation = {
  up: 'rotate-0',
  right: 'rotate-90',
  down: 'rotate-180',
  left: '-rotate-90',
};

const NavButton = ({ 
  direction, 
  onClick, 
  className,
  isActive = false,
  disabled = false
}: NavButtonProps) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <motion.button
      className={cn(
        "w-10 h-10 rounded-[10px] flex justify-center items-center relative",
        "bg-element-bg border border-element-border",
        isActive ? "shadow-button opacity-100" : "shadow-nav-default opacity-40",
        disabled ? "cursor-not-allowed opacity-30" : "cursor-pointer",
        className
      )}
      onClick={handleClick}
      whileHover={{ scale: disabled ? 1 : 1.05, opacity: disabled ? 0.3 : 1 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      aria-label={`Navigate ${direction}`}
      aria-disabled={disabled}
    >
      <div className={cn("w-4 h-4 relative", directionToRotation[direction])}>
        <Image 
          src="/images/arrow-up.svg" 
          alt={`Arrow ${direction}`}
          fill
          className="object-contain"
        />
      </div>
    </motion.button>
  );
};

export default NavButton; 