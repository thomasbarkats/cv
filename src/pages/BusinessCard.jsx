import React from 'react';
import PropTypes from 'prop-types';
import cvData from '../content.json';
import { CVHeader } from '../components/cv/CVHeader';
import { useThemeStyles } from '../hooks/useThemeStyles';
import { useTiltEffect } from '../hooks/useTiltEffect';
import { usePageTitle } from '../hooks/usePageTitle';

export const BusinessCard = ({ isDark }) => {
  const { personalInfo } = cvData;
  const { mainBg } = useThemeStyles(isDark);
  const { ref, transform, handlers, isMobile } = useTiltEffect({
    rotateAmplitude: 12,
    scale: 1.03,
    perspective: 1200
  });

  usePageTitle(personalInfo.name);

  return (
    <div 
      className="w-full max-w-xl mx-auto"
      {...handlers}
    >
      <div
        ref={ref}
        className={`w-full p-6 pb-2 sm:p-6 sm:pb-2 lg:p-8 lg:pb-2 backdrop-blur-2xl rounded-lg shadow-xl transition-all duration-300 ${!isMobile ? 'transform-gpu will-change-transform' : ''} ${mainBg}`}
        style={{
          transform,
          transformStyle: isMobile ? undefined : 'preserve-3d',
          transition: isMobile ? undefined : 'transform 0.1s ease-out'
        }}
      >
        {/* Add a subtle gradient overlay for depth - only on desktop */}
        {!isMobile && (
          <div 
            className="absolute inset-0 rounded-lg pointer-events-none"
            style={{
              background: isDark 
                ? 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)'
                : 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(0,0,0,0.05) 100%)',
              transform: 'translateZ(1px)'
            }}
          />
        )}
        
        {/* Content with subtle 3D effect - only on desktop */}
        <div style={{ transform: isMobile ? undefined : 'translateZ(20px)' }}>
          <CVHeader personalInfo={personalInfo} isDark={isDark} />
        </div>
      </div>
    </div>
  );
};

BusinessCard.propTypes = {
  isDark: PropTypes.bool.isRequired
};
