'use client';

import React, { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Define types but don't import directly
type PIXIApplication = any;
type PIXIGraphics = any;

// Import dynamically to avoid SSR issues
let PIXI: any = null;

interface RollingBallProps {
  isRolling: boolean;
  onRollComplete?: () => void;
}

// Simple CSS-based fallback implementation that doesn't rely on PixiJS
const FallbackBall = ({ isRolling, onRollComplete }: RollingBallProps) => {
  useEffect(() => {
    if (isRolling) {
      const timer = setTimeout(() => {
        onRollComplete?.();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isRolling, onRollComplete]);

  return (
    <div className="relative w-full h-[150px] bg-blue-50/5 border border-dashed border-gray-200">
      <div className="absolute top-[50%] transform -translate-y-1/2 left-8">
        <div 
          className={`w-12 h-12 bg-black rounded-full transition-all duration-1000 ${
            isRolling ? 'translate-x-[calc(100vw-80px)]' : ''
          }`}
          style={{
            transform: isRolling ? 'translateX(calc(100vw - 80px)) rotate(720deg)' : 'translateX(0) rotate(0)',
            transition: 'transform 1s linear'
          }}
        />
      </div>
      <div 
        className="absolute top-[50%] left-0 w-full h-[1px] bg-black/30 opacity-0"
        style={{
          opacity: isRolling ? 0.5 : 0,
          transition: 'opacity 1s linear',
          backgroundImage: isRolling ? 
            'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(0,0,0,0.3) 20px, rgba(0,0,0,0.3) 21px)' : 
            'none'
        }}
      />
      <div 
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          opacity: isRolling ? 0.2 : 0,
          transition: 'opacity 1s linear',
          backgroundImage: 
            'repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 21px), ' + 
            'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 21px)'
        }}
      />
    </div>
  );
};

const RollingBall = (props: RollingBallProps) => {
  // Just use the fallback implementation which is more reliable
  return <FallbackBall {...props} />;
};

// Export the component
export default RollingBall; 