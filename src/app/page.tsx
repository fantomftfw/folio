'use client';

import React, { useRef, useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import NavControls from '@/components/nav-controls';
import RollingBall from '@/components/rolling-ball';
import HeroSection from '@/components/hero-section';
import WorkSection from '@/components/work-section';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const sections = ['home', 'work'];
  
  // Update current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollLeft = containerRef.current.scrollLeft;
        const width = window.innerWidth;
        const newSection = Math.round(scrollLeft / width);
        
        if (newSection !== currentSection) {
          setCurrentSection(newSection);
        }
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [currentSection]);
  
  const scrollToSection = (index: number) => {
    if (containerRef.current && index >= 0 && index < sections.length) {
      const sectionWidth = window.innerWidth;
      containerRef.current.scrollTo({
        left: index * sectionWidth,
        behavior: 'smooth'
      });
      setCurrentSection(index);
    }
  };

  // Handle navigation with the controls
  const handleNavigate = (direction: 'up' | 'down' | 'left' | 'right') => {
    if (direction === 'right' && currentSection < sections.length - 1 && !isRolling) {
      // First start the ball rolling animation
      setIsRolling(true);
      // The actual scroll will happen after the animation completes
    } else if (direction === 'left' && currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  };

  // Called when ball rolling animation completes
  const handleRollComplete = () => {
    // Now scroll to the next section
    scrollToSection(currentSection + 1);
    
    // Reset the rolling state
    setTimeout(() => {
      setIsRolling(false);
    }, 500);
  };

  // Handle keyboard shortcuts for navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      
      switch (key) {
        case 'h': // Home
          scrollToSection(0);
          break;
        case 'w': // Work
          scrollToSection(1);
          break;
        case 'r': // Resume
          // Navigate to Resume section when implemented
          break;
        case 'c': // Connect
          // Navigate to Connect section when implemented
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-10 bg-background">
        <Navbar currentSection={currentSection} />
      </div>
      
      <div 
        ref={containerRef}
        className="w-full h-screen pt-20 overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        <div className="flex h-full">
          {/* Home section */}
          <section id="home" className="min-w-full h-full snap-start snap-always flex flex-col">
            <div className="flex-1 px-4 md:px-[180px] pt-10 md:pt-[30px]">
              <HeroSection />
              <div className="relative h-[200px] mt-14 border-t border-gray-100">
                <RollingBall isRolling={isRolling} onRollComplete={handleRollComplete} />
              </div>
            </div>
            <div className="mt-auto pb-20 px-4 md:px-[180px]">
              <div className="flex md:justify-start">
                <div>
                  <NavControls onNavigateCustom={handleNavigate} isRolling={isRolling} />
                </div>
              </div>
            </div>
          </section>
          
          {/* Work section */}
          <section id="work" className="min-w-full h-full snap-start snap-always flex flex-col">
            <div className="flex-1 px-4 md:px-[180px] pt-10 md:pt-[30px]">
              <WorkSection />
            </div>
            <div className="mt-auto pb-20 px-4 md:px-[180px]">
              <div className="flex md:justify-start">
                <NavControls onNavigateCustom={handleNavigate} isRolling={isRolling} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 