"use client";

import { useEffect, useRef } from 'react';

export function useSmoothScroll() {
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      // Detect if we're in the hero section transition area
      const scrollY = window.scrollY;
      const heroSection = document.querySelector('section:first-of-type');
      if (heroSection) {
        const heroHeight = heroSection.clientHeight;
        
        // If we're in the transition zone (last 70% of hero section), slow down scrolling
        if (scrollY < heroHeight * 0.7) {
          // Normal scrolling
          return;
        } else if (scrollY < heroHeight) {
          // Transition zone - slow down scrolling
          e.preventDefault();
          isScrolling.current = true;
          
          const targetScroll = scrollY + (e.deltaY * 0.3); // Slow down to 30% speed
          window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
          });

          setTimeout(() => {
            isScrolling.current = false;
          }, 100);
        }
      }
    };

    // Use passive: false to allow preventDefault
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
}