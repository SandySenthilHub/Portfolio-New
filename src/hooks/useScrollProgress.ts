import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const currentProgress = scrollHeight > 0 ? (currentScrollY / scrollHeight) : 0;
      setProgress(currentProgress);
    };

    // Initialize progress on mount
    updateScrollProgress();

    // Add scroll event listener
    window.addEventListener('scroll', updateScrollProgress);

    // Clean up event listener on unmount
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return progress;
}