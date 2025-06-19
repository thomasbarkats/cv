import { useState, useEffect } from 'react';

export const usePrint = (isDark, setIsDark) => {
  const [wasForcedLight, setWasForcedLight] = useState(false);
  const [isTransitioningToPrint, setIsTransitioningToPrint] = useState(false);

  useEffect(() => {
    const handleAfterPrint = () => {
      if (wasForcedLight) {
        setIsDark(true);
        setWasForcedLight(false);

        // Remove overlay after dark mode is restored
        setTimeout(() => {
          setIsTransitioningToPrint(false);
        }, 200);
      } else {
        setIsTransitioningToPrint(false);
      }
    };

    window.addEventListener('afterprint', handleAfterPrint);

    return () => {
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, [wasForcedLight, setIsDark]);

  const handlePrint = () => {
    if (isDark) {
      setIsTransitioningToPrint(true);
      setWasForcedLight(true);
      setIsDark(false);
    }

    setTimeout(() => {
      window.print();
    }, 100);
  };

  return { handlePrint, isTransitioningToPrint };
};
