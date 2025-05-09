/**
 * This is a custom hook implementation similar to `react-intersection-observer`.
 * It's a simplified version for our usage needs.
 */

"use client"

import { useState, useEffect, useRef } from 'react';

interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export const useInView = (options: UseInViewOptions = {}) => {
  const [inView, setInView] = useState(false);
  const [ref, setRef] = useState<Element | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { threshold = 0, triggerOnce = false, rootMargin = '0px' } = options;

  useEffect(() => {
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new observer
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const isInView = entry.isIntersecting;
        setInView(isInView);

        // If triggerOnce is true and the element is in view, disconnect the observer
        if (triggerOnce && isInView && observerRef.current) {
          observerRef.current.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    // Observe the element
    if (ref) {
      observerRef.current.observe(ref);
    }

    // Cleanup on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [ref, threshold, triggerOnce, rootMargin]);

  return [setRef, inView] as const;
};