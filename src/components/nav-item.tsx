'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

interface NavItemProps {
  icon: string;
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, href, isActive = false, onClick }: NavItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <motion.div 
      className="flex flex-row items-center gap-2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className={cn(
          "w-10 h-10 rounded-[10px] flex justify-center items-center relative",
          "bg-element-bg border border-element-border",
          isActive ? "shadow-nav-active" : "shadow-nav-default"
        )}
      >
        <span className="font-red-hat font-semibold text-secondary">{icon}</span>
      </div>
      <Link 
        href={href}
        className="font-special-gothic text-nav text-secondary pl-1"
        onClick={handleClick}
      >
        {label}
      </Link>
    </motion.div>
  );
};

export default NavItem; 