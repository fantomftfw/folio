'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface FullPageBeeProps {
  isFlying: boolean;
  onFlyComplete?: () => void;
  currentSection: number;
  onBeeNavigation?: (direction: 'up' | 'down' | 'left' | 'right') => void;
}

const FullPageBee: React.FC<FullPageBeeProps> = ({ 
  isFlying, 
  onFlyComplete, 
  currentSection,
  onBeeNavigation 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const beeRef = useRef<THREE.Mesh | null>(null);
  const tailPointsRef = useRef<Array<{x: number, y: number, opacity: number}>>([]);
  const animationFrameRef = useRef<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const startTimeRef = useRef(0);
  const tailObjects = useRef<THREE.Mesh[]>([]);
  const beePositionRef = useRef({ x: 0, y: 0 });
  const keyStates = useRef<{[key: string]: boolean}>({});
  const lastMoveTime = useRef<number>(0);
  const currentBoundary = useRef<number>(0);
  const isSectionChanging = useRef<boolean>(false);

  // Initialize Three.js scene
  useEffect(() => {
    if (!containerRef.current) return;

    // Get container dimensions (full viewport)
    const width = window.innerWidth;
    const height = window.innerHeight;
    setCanvasSize({ width, height });

    // Create scene
    const scene = new THREE.Scene();
    // Transparent background
    scene.background = null;
    sceneRef.current = scene;

    // Create camera - use a wider view to ensure bee is always visible
    const aspect = width / height;
    const camera = new THREE.OrthographicCamera(
      -aspect * 15, aspect * 15, 15, -15, 0.1, 100
    );
    camera.position.set(0, 0, 10);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Transparent background
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create pixel bee
    const beeCanvas = document.createElement('canvas');
    beeCanvas.width = 32;
    beeCanvas.height = 32;
    const ctx = beeCanvas.getContext('2d');
    
    if (ctx) {
      // Draw bee body
      ctx.fillStyle = '#FFC600'; // Brighter yellow
      ctx.fillRect(8, 8, 16, 16);
      
      // Draw bee stripes
      ctx.fillStyle = '#000000';
      ctx.fillRect(12, 8, 4, 16);
      ctx.fillRect(20, 8, 4, 16);
      
      // Draw bee head
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(24, 16, 4, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw bee eyes
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(26, 14, 1.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(26, 18, 1.5, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw bee wings
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.beginPath();
      ctx.ellipse(8, 12, 5, 7, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(8, 20, 5, 7, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw wing detail
      ctx.strokeStyle = 'rgba(200, 200, 255, 0.6)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(3, 12);
      ctx.lineTo(13, 12);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(3, 20);
      ctx.lineTo(13, 20);
      ctx.stroke();
    }

    const beeTexture = new THREE.CanvasTexture(beeCanvas);
    beeTexture.magFilter = THREE.NearestFilter;
    beeTexture.minFilter = THREE.NearestFilter;

    const beeMaterial = new THREE.MeshBasicMaterial({ 
      map: beeTexture, 
      transparent: true 
    });
    const beeGeometry = new THREE.PlaneGeometry(1.5, 1.5); // Slightly larger for better visibility
    const bee = new THREE.Mesh(beeGeometry, beeMaterial);
    
    // Position bee initially below the subtext
    const initialY = -2.5; // Position below subtext
    const initialX = 0;    // Centered horizontally
    
    bee.position.set(initialX, initialY, 0);
    beePositionRef.current = { x: initialX, y: initialY };
    currentBoundary.current = currentSection;
    
    scene.add(bee);
    beeRef.current = bee;

    // Initial render
    renderer.render(scene, camera);
    
    // Start idle animation
    animateIdle();

    // Cleanup on unmount
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      if (rendererRef.current && containerRef.current && containerRef.current.contains(rendererRef.current.domElement)) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      tailObjects.current.forEach(obj => {
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach(m => m.dispose());
        } else {
          obj.material.dispose();
        }
      });
      
      renderer.dispose();
    };
  }, []);
  
  // Keyboard controls for bee
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept keys when focus is in an input element
      if (document.activeElement instanceof HTMLInputElement || 
          document.activeElement instanceof HTMLTextAreaElement ||
          document.activeElement instanceof HTMLSelectElement) {
        return;
      }
      
      // Prevent default behavior for navigation keys to avoid page scrolling
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd', ' ', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        
        // Set key state after preventing default
        keyStates.current[e.key] = true;
      } else {
        keyStates.current[e.key] = true;
      }
    };
    
    const handleKeyUp = (e: KeyboardEvent) => {
      // Don't intercept keys when focus is in an input element
      if (document.activeElement instanceof HTMLInputElement || 
          document.activeElement instanceof HTMLTextAreaElement ||
          document.activeElement instanceof HTMLSelectElement) {
        return;
      }
      
      keyStates.current[e.key] = false;
      
      // Also prevent default on key up for navigation keys
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd', ' ', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    
    // Capture all keyboard events in the capture phase to ensure we handle them before scrolling occurs
    window.addEventListener('keydown', handleKeyDown, { capture: true });
    window.addEventListener('keyup', handleKeyUp, { capture: true });
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
      window.removeEventListener('keyup', handleKeyUp, { capture: true });
    };
  }, []);
  
  // Debug function to help understand bee positioning
  const debugBeePosition = () => {
    if (!beeRef.current) return;
    
    // Convert bee position to normalized 0-1 range
    const beeX = (beePositionRef.current.x + 15) / 30;
    
    console.log(`Bee: x=${beePositionRef.current.x.toFixed(2)}, normalized=${beeX.toFixed(2)}, section=${currentSection}`);
  };

  // Check if bee has crossed section boundary by entering edge zones
  const checkSectionBoundary = () => {
    if (isSectionChanging.current) return null;
    
    // Create edge zones for section transitions
    // Significantly increase left edge zone for more reliable detection
    const RIGHT_EDGE_ZONE = 0.15; // 15% from right edge
    const LEFT_EDGE_ZONE = 0.6;   // 60% from left edge (extremely wide for guaranteed triggering)
    
    // Get current time for throttling
    const now = Date.now();
    
    // Convert bee position to screen coordinates (0-1 range)
    // The bee's visual center is offset from its position point
    const beeX = (beePositionRef.current.x + 25) / 50; // normalize to 0-1 range within camera view
    
    // Debug bee position constantly to troubleshoot left navigation issues
    if (currentSection > 0) {
      console.log(`BEE POS: x=${beePositionRef.current.x.toFixed(2)}, normalized=${beeX.toFixed(2)}, section=${currentSection}, left_threshold=${LEFT_EDGE_ZONE}`);
      
      // Force navigation if the bee is in the left 60% of the screen in section > 0
      if (beeX < LEFT_EDGE_ZONE && now - lastMoveTime.current > 300) {
        console.log("🔴 LEFT EDGE TRIGGERED - BEE IS IN LEFT ZONE");
        return 'left';
      }
    }
    
    // Define action zones based on current section
    if (currentSection === 0) { 
      // In home section, detect right edge zone
      if (beeX > (1 - RIGHT_EDGE_ZONE)) {
        console.log("Right zone detected, navigating right");
        return 'right';
      }
    } else if (currentSection > 0) { 
      // Right edge detection for non-home sections
      if (beeX > (1 - RIGHT_EDGE_ZONE)) {
        console.log("Right zone detected, navigating right");
        return 'right';
      }
    }
    
    // No zone detected
    return null;
  };
  
  // Process keyboard input and mouse interactions
  const animateIdle = () => {
    if (!beeRef.current || !sceneRef.current || !cameraRef.current || !rendererRef.current) return;
    
    const time = Date.now() * 0.001;
    
    // Gentle hover movement when idle
    const hoverAmplitude = 0.1;
    const hoverSpeed = 1.5;
    const hoverX = Math.sin(time * hoverSpeed) * hoverAmplitude;
    const hoverY = Math.cos(time * hoverSpeed * 0.7) * hoverAmplitude * 0.5;
    
    // Process keyboard input
    const now = Date.now();
    const moveSpeed = 0.15; // Good balance between speed and control
    let directionMoved: 'up' | 'down' | 'left' | 'right' | null = null;
    
    // Make sure controls are still active for keyboard when not in flying animation
    if (!isAnimating && !isSectionChanging.current) {
      // Calculate movement deltas
      let deltaX = 0;
      let deltaY = 0;
      
      // Handle vertical movement
      if (keyStates.current['ArrowUp'] || keyStates.current['w']) {
        deltaY += moveSpeed;
        directionMoved = 'up';
      }
      if (keyStates.current['ArrowDown'] || keyStates.current['s']) {
        deltaY -= moveSpeed;
        directionMoved = 'down';
      }
      
      // Handle horizontal movement
      if (keyStates.current['ArrowLeft'] || keyStates.current['a']) {
        // Make left movement much faster in sections > 0 to ensure it can trigger the left edge
        const leftSpeedMultiplier = currentSection > 0 ? 2.5 : 1.5;
        deltaX -= moveSpeed * leftSpeedMultiplier; 
        directionMoved = 'left';
      }
      if (keyStates.current['ArrowRight'] || keyStates.current['d']) {
        deltaX += moveSpeed;
        directionMoved = 'right';
      }
      
      // Direct navigation with PageUp/PageDown/Home/End
      if (keyStates.current['PageUp'] || keyStates.current['Home']) {
        // Force left navigation
        if (currentSection > 0 && onBeeNavigation && now - lastMoveTime.current > 500) {
          console.log("PageUp/Home pressed: Direct navigation left");
          onBeeNavigation('left');
          lastMoveTime.current = now;
          isSectionChanging.current = true;
          
          // Clear the key state to prevent repeated navigation
          keyStates.current['PageUp'] = false;
          keyStates.current['Home'] = false;
          
          // Safely reset navigation flag after a delay
          setTimeout(() => {
            isSectionChanging.current = false;
          }, 1000);
        }
      }
      
      if (keyStates.current['PageDown'] || keyStates.current['End']) {
        // Force right navigation
        if (currentSection < 1 && onBeeNavigation && now - lastMoveTime.current > 500) {
          console.log("PageDown/End pressed: Direct navigation right");
          onBeeNavigation('right');
          lastMoveTime.current = now;
          isSectionChanging.current = true;
          
          // Clear the key state to prevent repeated navigation
          keyStates.current['PageDown'] = false;
          keyStates.current['End'] = false;
          
          // Safely reset navigation flag after a delay
          setTimeout(() => {
            isSectionChanging.current = false;
          }, 1000);
        }
      }
      
      // Apply movement
      beePositionRef.current.x += deltaX;
      beePositionRef.current.y += deltaY;
      
      // Check for section boundary crossing
      // We do this check regardless of movement direction so it works with both
      // keyboard navigation and mouse attraction
      if (now - lastMoveTime.current > 300) { // Reduced from 500 to make navigation even more responsive
        const navigationDirection = checkSectionBoundary();
        
        if (navigationDirection && onBeeNavigation && !isSectionChanging.current) {
          // Always log before navigation attempt
          console.log(`Attempting to navigate: ${navigationDirection}, from section ${currentSection}`);
          
          // Trigger navigation callback
          onBeeNavigation(navigationDirection);
          lastMoveTime.current = now;
          
          // Set flag to prevent multiple navigations
          isSectionChanging.current = true;
          
          // For safety, reset after a delay
          setTimeout(() => {
            if (isSectionChanging.current) {
              console.log("Forcing navigation flag reset");
              isSectionChanging.current = false;
            }
          }, 1000);
        }
      }
    }
    
    // Apply bounds to keep bee within a reasonable area
    beePositionRef.current.y = Math.min(Math.max(beePositionRef.current.y, -14), 14);
    
    // X boundaries depend on current section to allow edge detection
    // For both sections, allow the bee to move to the edges
    if (currentSection > 0) {
      // In non-home sections, ensure bee can reach the left edge completely
      // Allow much more movement to the left to ensure edge detection works
      beePositionRef.current.x = Math.min(Math.max(beePositionRef.current.x, -40), 25);
    } else {
      // For home section
      beePositionRef.current.x = Math.min(Math.max(beePositionRef.current.x, -25), 25);
    }
    
    // Add hover effect to current position and update bee position
    if (beeRef.current && !isAnimating) {
      beeRef.current.position.x = beePositionRef.current.x + hoverX;
      beeRef.current.position.y = beePositionRef.current.y + hoverY;
      
      // Apply rotation based on movement direction
      if (directionMoved === 'left') {
        // Smoothly transition to left tilt
        const targetRotation = Math.PI / 12;
        beeRef.current.rotation.z += (targetRotation - beeRef.current.rotation.z) * 0.2;
      } else if (directionMoved === 'right') {
        // Smoothly transition to right tilt
        const targetRotation = -Math.PI / 12;
        beeRef.current.rotation.z += (targetRotation - beeRef.current.rotation.z) * 0.2;
      } else {
        // Smoothly return to normal rotation when not moving horizontally
        beeRef.current.rotation.z *= 0.9;
      }
      
      // Generate trail particles
      if (Math.random() < 0.05) {
        const trailPoint = {
          x: beeRef.current.position.x - 0.1 + Math.random() * 0.2,
          y: beeRef.current.position.y - 0.1 + Math.random() * 0.2,
          opacity: 0.5 + Math.random() * 0.5
        };
        
        tailPointsRef.current.unshift(trailPoint);
        
        // Limit idle trail length
        if (tailPointsRef.current.length > 10) {
          tailPointsRef.current.pop();
        }
      }
      
      // Update tail opacity
      tailPointsRef.current.forEach(p => {
        p.opacity -= 0.01;
      });
      tailPointsRef.current = tailPointsRef.current.filter(p => p.opacity > 0);
      
      // Clear previous tail objects
      tailObjects.current.forEach(obj => {
        if (sceneRef.current) {
          sceneRef.current.remove(obj);
        }
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach(m => m.dispose());
        } else {
          obj.material.dispose();
        }
      });
      tailObjects.current = [];
      
      // Draw tail as small fading spheres
      tailPointsRef.current.forEach(p => {
        // Use different sizes for particles to add variation
        const size = 0.03 + (Math.random() * 0.03);
        const geo = new THREE.SphereGeometry(size, 8, 8);
        
        // Use slightly different colors for variation
        const hue = 40 + (Math.random() * 10); // golden yellow range
        const color = new THREE.Color(`hsl(${hue}, 100%, 60%)`);
        
        const mat = new THREE.MeshBasicMaterial({ 
          color: color, 
          transparent: true, 
          opacity: p.opacity 
        });
        const tailSphere = new THREE.Mesh(geo, mat);
        tailSphere.position.set(p.x, p.y, 0);
        if (sceneRef.current) {
          sceneRef.current.add(tailSphere);
        }
        tailObjects.current.push(tailSphere);
      });
      
      // Render scene
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
    
    // Continue animation loop
    if (!isAnimating) {
      animationFrameRef.current = requestAnimationFrame(animateIdle);
    }
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (!rendererRef.current || !cameraRef.current) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      setCanvasSize({ width, height });
      
      const aspect = width / height;
      cameraRef.current.left = -aspect * 15;
      cameraRef.current.right = aspect * 15;
      cameraRef.current.top = 15;
      cameraRef.current.bottom = -15;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Section change animation
  useEffect(() => {
    console.log(`Section changed to: ${currentSection}`);
    
    // Reset the boundary tracker when section changes
    currentBoundary.current = currentSection;
    
    // Always reset section changing flag when section changes
    isSectionChanging.current = false;
    
    // Ensure the flying state is reset
    if (isFlying) {
      // If we've completed a section change while flying, reset the flying state
      setTimeout(() => {
        // This should trigger parent to reset isFlying
        onFlyComplete?.();
      }, 300);
    }
    
    // Adjust bee position when section changes
    if (!isAnimating && beeRef.current) {
      // Determine appropriate position based on which section we're moving to
      let targetX;
      const targetY = -2.5; // Below subtext
      
      if (currentSection === 0) {
        // For home section, position on the right side of home section
        targetX = 5; // Right side of home section
      } else if (currentSection === 1) {
        // For work section, position much more to the right to avoid accidental left navigation
        targetX = 10; // Further to the right to avoid immediate left navigation
      } else {
        // Default position
        targetX = 0;
      }
      
      // Animate bee to the new position gently
      const startX = beePositionRef.current.x;
      const startY = beePositionRef.current.y;
      const startTime = Date.now();
      const duration = 1200; // Longer for smoother transition
      
      const animateSectionChange = () => {
        if (!beeRef.current || isAnimating) return;
        
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-in-out
        const easedProgress = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        const newX = startX + (targetX - startX) * easedProgress;
        const newY = startY + (targetY - startY) * easedProgress;
        
        beeRef.current.position.x = newX;
        beeRef.current.position.y = newY;
        beePositionRef.current.x = newX;
        beePositionRef.current.y = newY;
        
        if (sceneRef.current && cameraRef.current && rendererRef.current) {
          rendererRef.current.render(sceneRef.current, cameraRef.current);
        }
        
        if (progress < 1) {
          requestAnimationFrame(animateSectionChange);
        } else {
          isSectionChanging.current = false;
          console.log(`Bee repositioned to ${newX.toFixed(2)}, ${newY.toFixed(2)}`);
        }
      };
      
      isSectionChanging.current = true;
      animateSectionChange();
    }
  }, [currentSection, isAnimating, isFlying, onFlyComplete]);

  // Update bee position based on section
  useEffect(() => {
    console.log(`Section changed to: ${currentSection}`);
    
    // Reset the boundary tracker when section changes
    currentBoundary.current = currentSection;
    
    // Always reset section changing flag when section changes
    isSectionChanging.current = false;
    
    // Adjust bee position when section changes
    if (!isAnimating && beeRef.current && !isFlying) {
      // Determine appropriate position based on which section we're moving to
      let targetX;
      const targetY = -2.5; // Below subtext
      
      if (currentSection === 0) {
        // For home section, position on the left side 
        targetX = -5; // Left side of home section
      } else if (currentSection === 1) {
        // For work section, position on the right side
        targetX = 5; // Right side of work section
      } else {
        // Default position
        targetX = 0;
      }
      
      // Animate bee to the new position gently
      const startX = beePositionRef.current.x;
      const startY = beePositionRef.current.y;
      const startTime = Date.now();
      const duration = 1200; // Longer for smoother transition
      
      const animateSectionChange = () => {
        if (!beeRef.current || isAnimating || isFlying) return;
        
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-in-out
        const easedProgress = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        const newX = startX + (targetX - startX) * easedProgress;
        const newY = startY + (targetY - startY) * easedProgress;
        
        beeRef.current.position.x = newX;
        beeRef.current.position.y = newY;
        beePositionRef.current.x = newX;
        beePositionRef.current.y = newY;
        
        if (sceneRef.current && cameraRef.current && rendererRef.current) {
          rendererRef.current.render(sceneRef.current, cameraRef.current);
        }
        
        if (progress < 1) {
          requestAnimationFrame(animateSectionChange);
        } else {
          isSectionChanging.current = false;
          console.log(`Bee repositioned to ${newX.toFixed(2)}, ${newY.toFixed(2)}`);
        }
      };
      
      isSectionChanging.current = true;
      animateSectionChange();
    }
  }, [currentSection, isAnimating, isFlying]);

  // Add mouse interaction effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isAnimating && beeRef.current && !isFlying && !isSectionChanging.current) {
        // Convert mouse position to normalized coordinates (-1 to 1)
        const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
        
        // Calculate attraction strength (stronger when mouse is closer to bee)
        const beeScreenX = (beePositionRef.current.x / 15) * (window.innerWidth / 2) + (window.innerWidth / 2);
        const beeScreenY = -(beePositionRef.current.y / 15) * (window.innerHeight / 2) + (window.innerHeight / 2);
        
        const distance = Math.sqrt(
          Math.pow(e.clientX - beeScreenX, 2) + 
          Math.pow(e.clientY - beeScreenY, 2)
        );
        
        // Max attraction distance is 300px
        const maxDistance = 300;
        const attractionStrength = Math.max(0, 1 - (distance / maxDistance)) * 0.05; // Reduced for smoother movement
        
        // Apply subtle attraction effect
        if (attractionStrength > 0.005) {
          const targetX = beePositionRef.current.x + (mouseX * attractionStrength);
          const targetY = beePositionRef.current.y + (mouseY * attractionStrength);
          
          // Smoothly interpolate to the target position
          beePositionRef.current.x += (targetX - beePositionRef.current.x) * 0.02;
          beePositionRef.current.y += (targetY - beePositionRef.current.y) * 0.02;
          
          // Check if bee has crossed section boundary
          const navigationDirection = checkSectionBoundary();
          
          // Only trigger navigation if bee has crossed section boundary
          if (navigationDirection && onBeeNavigation && Date.now() - lastMoveTime.current > 500) {
            onBeeNavigation(navigationDirection);
            lastMoveTime.current = Date.now();
          }
        }
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isAnimating, isFlying, onBeeNavigation]);

  // Handle flying animation
  useEffect(() => {
    if (isFlying && !isAnimating && beeRef.current && canvasSize.width > 0) {
      // Cancel the idle animation
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      setIsAnimating(true);
      startTimeRef.current = Date.now();
      tailPointsRef.current = [];
      
      // Use a controlled flight distance to prevent overshooting
      const animationDuration = 1800;
      const startX = beePositionRef.current.x;
      const startY = beePositionRef.current.y;
      // Limit the flight distance to prevent overshooting
      const endX = Math.min(startX + 15, 15); // Limit to 15 units right instead of 20
      const endY = startY;
      const hoverAmplitude = 0.15;
      const hoverSpeed = 2;
      const tailLength = 50;

      const animate = () => {
        if (!beeRef.current || !sceneRef.current || !cameraRef.current || !rendererRef.current) return;
        
        const currentTime = Date.now();
        const elapsed = currentTime - startTimeRef.current;
        const progress = Math.min(elapsed / animationDuration, 1);
        
        // Calculate position with easing
        const easedProgress = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        const newX = startX + (endX - startX) * easedProgress;
        const newY = startY + (endY - startY) * easedProgress;
        
        // Add gentle hover effect
        const hoverY = Math.sin(currentTime * 0.002 * hoverSpeed) * hoverAmplitude;
        
        // Update bee position - make sure we don't exceed boundaries
        beeRef.current.position.x = Math.min(newX, 20);
        beeRef.current.position.y = newY + hoverY;
        
        // Smoothly adjust rotation based on flying direction
        beeRef.current.rotation.z = -Math.PI / 12;
        
        // Add point to tail
        if (progress > 0 && progress < 1) {
          // Add new tail point
          tailPointsRef.current.unshift({
            x: beeRef.current.position.x - 0.2,
            y: beeRef.current.position.y,
            opacity: 1.0
          });
          
          // Limit tail length
          if (tailPointsRef.current.length > tailLength) {
            tailPointsRef.current.pop();
          }
        }
        
        // Update tail opacity
        tailPointsRef.current.forEach(p => {
          p.opacity -= 0.02;
        });
        tailPointsRef.current = tailPointsRef.current.filter(p => p.opacity > 0);
        
        // Clear previous tail objects
        tailObjects.current.forEach(obj => {
          if (sceneRef.current) {
            sceneRef.current.remove(obj);
          }
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach(m => m.dispose());
          } else {
            obj.material.dispose();
          }
        });
        tailObjects.current = [];
        
        // Draw tail as small fading spheres
        tailPointsRef.current.forEach(p => {
          // Use different sizes for particles to add variation
          const size = 0.03 + (Math.random() * 0.03);
          const geo = new THREE.SphereGeometry(size, 8, 8);
          
          // Use slightly different colors for variation
          const hue = 40 + (Math.random() * 10); // golden yellow range
          const color = new THREE.Color(`hsl(${hue}, 100%, 60%)`);
          
          const mat = new THREE.MeshBasicMaterial({ 
            color: color, 
            transparent: true, 
            opacity: p.opacity 
          });
          const tailSphere = new THREE.Mesh(geo, mat);
          tailSphere.position.set(p.x, p.y, 0);
          if (sceneRef.current) {
            sceneRef.current.add(tailSphere);
          }
          tailObjects.current.push(tailSphere);
        });
        
        // Render scene
        rendererRef.current.render(sceneRef.current, cameraRef.current);
        
        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          // Animation complete
          setTimeout(() => {
            // Clean up tail objects after animation
            tailObjects.current.forEach(obj => {
              if (sceneRef.current) {
                sceneRef.current.remove(obj);
              }
              obj.geometry.dispose();
              if (Array.isArray(obj.material)) {
                obj.material.forEach(m => m.dispose());
              } else {
                obj.material.dispose();
              }
            });
            tailObjects.current = [];
            if (sceneRef.current && cameraRef.current && rendererRef.current) {
              rendererRef.current.render(sceneRef.current, cameraRef.current);
            }
          }, 500);
          
          // Explicitly ensure the bee isn't out of bounds
          if (beeRef.current) {
            beeRef.current.position.x = Math.min(beeRef.current.position.x, 20);
          }
          
          // Update stored bee position
          if (beeRef.current) {
            beePositionRef.current = {
              x: Math.min(beeRef.current.position.x, 20), // Ensure we stay in bounds
              y: beeRef.current.position.y - hoverY // Remove hover effect from stored position
            };
          }
          
          // Reset animation flags
          setIsAnimating(false);
          isSectionChanging.current = false;
          
          // Notify parent component
          onFlyComplete?.();
          
          // Restart idle animation
          animateIdle();
        }
      };
      
      animationFrameRef.current = requestAnimationFrame(animate);
    }
  }, [isFlying, isAnimating, canvasSize.width, onFlyComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full z-10"
      style={{ 
        pointerEvents: 'none',
        // Make the canvas container have a higher z-index than content but lower than UI controls
        zIndex: 5 
      }}
    />
  );
};

export default FullPageBee; 