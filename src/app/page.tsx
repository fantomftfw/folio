'use client';

import React, { useRef, useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import NavControls from '@/components/nav-controls';
import KeyboardNavigation from '@/components/keyboard-navigation';
import HeroSection from '@/components/hero-section';
import WorkSection from '@/components/work-section';
import ResumeSection from '@/components/resume-section';
import ContactSection from '@/components/contact-section';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isSectionChanging, setIsSectionChanging] = useState(false);
  const sections = ['home', 'work', 'resume', 'contact'];
  
  // Prevent default scrolling behavior for navigation keys
  useEffect(() => {
    const preventArrowScroll = (e: KeyboardEvent) => {
      // Don't block events in input elements
      if (document.activeElement instanceof HTMLInputElement || 
          document.activeElement instanceof HTMLTextAreaElement ||
          document.activeElement instanceof HTMLSelectElement) {
        return;
      }
      
      // Prevent default for navigation keys to stop page scrolling
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 
           'PageUp', 'PageDown', 'Space', ' ', 'Home', 'End'].includes(e.key)) {
        e.preventDefault();
      }
    };
    
    window.addEventListener('keydown', preventArrowScroll);
    return () => window.removeEventListener('keydown', preventArrowScroll);
  }, []);
  
  // Update current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollLeft = containerRef.current.scrollLeft;
        const width = window.innerWidth;
        const newSection = Math.round(scrollLeft / width);
        
        if (newSection !== currentSection && newSection >= 0 && newSection < sections.length) {
          setCurrentSection(newSection);
        }
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [currentSection, sections.length]);
  
  const scrollToSection = (index: number) => {
    if (containerRef.current && index >= 0 && index < sections.length) {
      const sectionWidth = window.innerWidth;
      
      setIsSectionChanging(true);
      
      containerRef.current.scrollTo({
        left: index * sectionWidth,
        behavior: 'smooth'
      });
      
      setCurrentSection(index);
      
      // Reset section changing flag after animation completes
      setTimeout(() => {
        setIsSectionChanging(false);
      }, 800);
    }
  };

  // Directly update current section based on scroll position
  const updateCurrentSectionFromScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const width = window.innerWidth;
      const newSection = Math.round(scrollLeft / width);
      
      if (newSection >= 0 && newSection < sections.length && newSection !== currentSection) {
        setCurrentSection(newSection);
        return true;
      }
    }
    return false;
  };

  // Handle navigation with the controls or keyboard
  const handleNavigate = (direction: 'up' | 'down' | 'left' | 'right' | 'direct') => {
    // For direct navigation (H,W,R,C keys)
    if (direction === 'direct') {
      // Just update the section based on current scroll
      updateCurrentSectionFromScroll();
      return;
    }
    
    // Skip if already changing sections
    if (isSectionChanging) return;
    
    // Left/right navigation
    if (direction === 'right' && currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1);
    } else if (direction === 'left' && currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden font-red-hat">
      {/* Keyboard navigation handler */}
      <KeyboardNavigation 
        currentSection={currentSection}
        onNavigate={handleNavigate}
        maxSections={sections.length}
      />
      
      <div className="fixed top-0 left-0 w-full z-20 bg-background">
        <Navbar currentSection={currentSection} />
      </div>
      
      {/* Navigation Controls - Positioned fixed at bottom and left-aligned with hero text */}
      <div className="fixed bottom-8 px-4 md:px-[180px] left-0 z-20">
        <NavControls onNavigateCustom={handleNavigate} isFlying={isSectionChanging} />
      </div>
      
      <div 
        ref={containerRef}
        className="w-full h-screen pt-20 overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        <div className="flex h-full">
          {/* Home section */}
          <section id="home" className="min-w-full h-full snap-start snap-always flex flex-col">
            <div className="flex-1 px-4 md:px-[180px] pt-10 md:pt-[30px] overflow-y-auto">
              <HeroSection />
              <div className="relative h-[200px] mt-14 border-t border-gray-100"></div>
            </div>
          </section>
          
          {/* Work section */}
          <section id="work" className="min-w-full h-full snap-start snap-always flex flex-col">
            <div className="flex-1 px-4 md:px-[180px] pt-10 md:pt-[30px] overflow-y-auto">
              <WorkSection />
            </div>
          </section>
          
          {/* Resume section */}
          <section id="resume" className="min-w-full h-full snap-start snap-always flex flex-col">
            <div className="flex-1 px-4 md:px-[180px] pt-10 md:pt-[30px] overflow-y-auto">
              <ResumeSection />
            </div>
          </section>
          
          {/* Contact section */}
          <section id="contact" className="min-w-full h-full snap-start snap-always flex flex-col">
            <div className="flex-1 px-4 md:px-[180px] pt-10 md:pt-[30px] overflow-y-auto">
              <ContactSection />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 