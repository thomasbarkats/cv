/* eslint-disable react-refresh/only-export-components */

import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Printer, Moon, Sun } from 'lucide-react';
import PropTypes from 'prop-types';
import './index.css'
import { CV } from './CV'
import Iridescence from './blocks/Backgrounds/Iridescence/Iridescence';
import LiquidChrome from './blocks/Backgrounds/LiquidChrome/LiquidChrome';


const FloatingButtons = ({ isDark, toggleDark, handlePrint }) => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 print:hidden z-20">
      <div className="flex flex-col gap-3">
        {/* Dark Mode Toggle - Always visible */}
        <button
          onClick={toggleDark}
          className={`p-2 sm:p-3 shadow-xl rounded-full transition-all duration-300 backdrop-blur-sm ${
            isDark 
              ? 'bg-gray-800/70 hover:bg-gray-800 text-yellow-400 hover:text-yellow-300' 
              : 'bg-white/70 hover:bg-white text-gray-600 hover:text-gray-800'
          }`}
          aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
        >
          {isDark ? <Sun size={20} className="sm:w-6 sm:h-6" /> : <Moon size={20} className="sm:w-6 sm:h-6" />}
        </button>
        
        {/* Print Button - Hidden on mobile */}
        <button
          onClick={handlePrint}
          className={`p-2 sm:p-3 max-sm:hidden shadow-xl rounded-full transition-all duration-300 backdrop-blur-sm ${
            isDark 
              ? 'bg-gray-800/70 hover:bg-gray-800 text-gray-300 hover:text-gray-100' 
              : 'bg-white/70 hover:bg-white text-gray-600 hover:text-gray-800'
          }`}
          aria-label="Imprimer le CV"
        >
          <Printer size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

FloatingButtons.propTypes = {
  isDark: PropTypes.bool.isRequired,
  toggleDark: PropTypes.func.isRequired,
  handlePrint: PropTypes.func.isRequired
};


const App = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('cv-theme');
    return savedTheme === 'dark';
  });
  const [wasForcedLight, setWasForcedLight] = useState(false);
  const [isTransitioningToPrint, setIsTransitioningToPrint] = useState(false);

  useEffect(() => {
    // Listen for print events to restore dark mode
    const handleAfterPrint = () => {
      if (wasForcedLight) {
        setIsDark(true);
        setWasForcedLight(false);
        localStorage.setItem('cv-theme', 'dark');
        
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
  }, [wasForcedLight]);

  // Parallax scrolling
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

  const toggleDark = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('cv-theme', newTheme ? 'dark' : 'light');
  };

  const handlePrint = () => {
    if (isDark) {
      setIsTransitioningToPrint(true);
      setWasForcedLight(true);
      setIsDark(false);
      localStorage.setItem('cv-theme', 'light');
    }
    
    setTimeout(() => {
      window.print();
    }, 100);
  };

  return (
    <div className={`h-screen relative overflow-hidden print:h-auto print:overflow-visible print:py-0 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Background layers with parallax */}
      <div className="fixed inset-0 w-full h-[200vh] print:hidden parallax-bg-1">
        {isDark ? (
          <LiquidChrome
            baseColor={[0.1, 0.1, 0.1]}
            speed={0.1}
            amplitude={0.5}
            interactive={false}
          />
        ) : (
          <Iridescence
            color={[1, 1, 1]}
            speed={1.0}
            amplitude={0.1}
            mouseReact={false}
          />
        )}
      </div>

      <div className="fixed inset-0 w-full h-[200vh] print:hidden parallax-bg-2">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-yellow-200 opacity-50"></div>
        {isDark && <div className="absolute inset-0 bg-gray-900 opacity-50"></div>}
      </div>

      <div className={`fixed inset-0 w-full h-[200vh] print:hidden transition-colors duration-300 ${
        isDark ? 'bg-gray-900/40' : 'bg-gray-200/50'
      }`}></div>

      {/* Scrollable content area */}
      <div className="relative z-10 h-full overflow-y-auto scrollbar-custom scrollable-content py-4 sm:py-6 lg:py-8 px-2 sm:px-4 lg:px-0 print:h-auto print:overflow-visible print:py-0 print:text-base">
        <CV isDark={isDark} />
      </div>

      <FloatingButtons isDark={isDark} toggleDark={toggleDark} handlePrint={handlePrint} />

      {/* Overlay during print transition */}
      {isTransitioningToPrint && (
        <div className="fixed inset-0 bg-black z-50 print:hidden transition-opacity duration-300 h-full" />
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
