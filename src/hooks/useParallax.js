import { useEffect } from 'react';

export const useParallax = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector('.scrollable-content');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop;
      const bg1 = document.querySelector('.parallax-bg-1');
      const bg2 = document.querySelector('.parallax-bg-2');

      if (bg1) bg1.style.transform = `translateY(-${scrollTop * 0.3}px)`;
      if (bg2) bg2.style.transform = `translateY(-${scrollTop * 0.2}px)`;
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);
};
