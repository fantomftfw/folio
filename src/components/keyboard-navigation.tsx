'use client';

import React, { useEffect, useRef } from 'react';

interface KeyboardNavigationProps {
  currentSection: number;
  onNavigate: (direction: 'up' | 'down' | 'left' | 'right' | 'direct') => void;
  maxSections: number;
}

const KeyboardNavigation: React.FC<KeyboardNavigationProps> = ({
  currentSection,
  onNavigate,
  maxSections
}) => {
  const lastMoveTime = useRef<number>(0);
  const isSectionChanging = useRef<boolean>(false);

  // Keyboard controls for navigation
  useEffect(() => {
    console.log("Keyboard navigation component initialized");
    
    // Direct section navigation with single key
    const handleDirectNavigation = (sectionIndex: number) => {
      if (sectionIndex < 0 || sectionIndex >= maxSections) {
        return; // Invalid section
      }
      
      console.log(`Direct navigation to section ${sectionIndex}`);
      
      // Throttle navigation
      const now = Date.now();
      if (now - lastMoveTime.current < 300 || isSectionChanging.current) {
        return;
      }
      
      lastMoveTime.current = now;
      isSectionChanging.current = true;
      
      // Use the container reference from the page component
      const container = document.querySelector('div[style*="scroll-snap-type"]');
      
      if (container) {
        console.log(`Found container, scrolling to section ${sectionIndex}`);
        const sectionWidth = window.innerWidth;
        
        // Scroll directly to section
        container.scrollTo({
          left: sectionIndex * sectionWidth,
          behavior: 'smooth'
        });
        
        // Notify parent about navigation to update state
        onNavigate('direct');
        
        // Reset flag after animation
        setTimeout(() => {
          isSectionChanging.current = false;
        }, 800);
      } else {
        console.log("Container not found, using fallback");
        // Fallback
        window.scrollTo({
          left: sectionIndex * window.innerWidth,
          behavior: 'smooth'
        });
        
        onNavigate('direct');
        setTimeout(() => {
          isSectionChanging.current = false;
        }, 800);
      }
    };
    
    // Arrow key navigation (left/right)
    const handleArrowNavigation = (direction: 'left' | 'right') => {
      console.log(`Arrow navigation: ${direction}`);
      
      // Throttle navigation
      const now = Date.now();
      if (now - lastMoveTime.current < 300 || isSectionChanging.current) {
        return;
      }
      
      // Determine target section
      let targetSection = currentSection;
      if (direction === 'left' && currentSection > 0) {
        targetSection = currentSection - 1;
      } else if (direction === 'right' && currentSection < maxSections - 1) {
        targetSection = currentSection + 1;
      } else {
        return; // No valid navigation
      }
      
      lastMoveTime.current = now;
      isSectionChanging.current = true;
      
      // Notify parent to handle the navigation
      onNavigate(direction);
      
      // Reset flag after animation
      setTimeout(() => {
        isSectionChanging.current = false;
      }, 800);
    };
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if in input element
      if (document.activeElement instanceof HTMLInputElement || 
          document.activeElement instanceof HTMLTextAreaElement ||
          document.activeElement instanceof HTMLSelectElement) {
        return;
      }
      
      // Get key in lowercase
      const key = e.key.toLowerCase();
      
      // Handle section shortcut keys (H, W, R, C)
      if (['h', 'w', 'r', 'c'].includes(key)) {
        e.preventDefault();
        e.stopPropagation();
        
        // Map key to section index
        const sectionMap: {[key: string]: number} = {
          'h': 0, // Home
          'w': 1, // Work
          'r': 2, // Resume
          'c': 3  // Contact
        };
        
        handleDirectNavigation(sectionMap[key]);
        return;
      }
      
      // Handle arrow keys for left/right navigation
      if (['arrowleft', 'a'].includes(key)) {
        e.preventDefault();
        e.stopPropagation();
        handleArrowNavigation('left');
        return;
      }
      
      if (['arrowright', 'd'].includes(key)) {
        e.preventDefault();
        e.stopPropagation();
        handleArrowNavigation('right');
        return;
      }
      
      // Handle PageUp/PageDown/Home/End for navigation
      if (key === 'pageup' || key === 'home') {
        e.preventDefault();
        e.stopPropagation();
        handleArrowNavigation('left');
        return;
      }
      
      if (key === 'pagedown' || key === 'end') {
        e.preventDefault();
        e.stopPropagation();
        handleArrowNavigation('right');
        return;
      }
    };
    
    // Add event listener for keyboard navigation
    window.addEventListener('keydown', handleKeyDown, { capture: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
    };
  }, [currentSection, maxSections, onNavigate]);

  return null; // This component doesn't render anything
};

export default KeyboardNavigation; 