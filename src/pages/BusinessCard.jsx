import PropTypes from 'prop-types';
import cvData from '../content.json';
import { CVHeader } from '../components/cv/CVHeader';
import { useThemeStyles } from '../hooks/useThemeStyles';
import { usePageTitle } from '../hooks/usePageTitle';

export const BusinessCard = ({ isDark }) => {
  const { personalInfo } = cvData;
  const { mainBg } = useThemeStyles(isDark);

  usePageTitle(personalInfo.name);

  return (
    <div className={`w-full max-w-xl mx-auto p-6 pb-2 sm:p-6 sm:pb-2 lg:p-8 lg:pb-2 backdrop-blur-2xl rounded-lg shadow-xl transition-all duration-300 ${mainBg}`}>
      <CVHeader personalInfo={personalInfo} isDark={isDark} />
    </div>
  );
};

BusinessCard.propTypes = {
  isDark: PropTypes.bool.isRequired
};
