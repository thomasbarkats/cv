import { useEffect } from 'react';

export const useFavicon = (faviconUrl) => {
  useEffect(() => {
    // Find existing favicon link or create one
    let link = document.querySelector("link[rel~='icon']");
    
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    
    link.href = faviconUrl;
  }, [faviconUrl]);
};
