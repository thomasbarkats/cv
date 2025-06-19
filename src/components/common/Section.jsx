import PropTypes from 'prop-types';
import { useThemeStyles } from '../../hooks/useThemeStyles';

export const Section = ({ title, children, className = "mb-6 sm:mb-8", isDark }) => {
  const { getTextColor } = useThemeStyles(isDark);

  return (
    <section className={className}>
      <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 pb-2 border-b transition-colors duration-300 ${getTextColor('primary')} ${isDark ? 'border-gray-600/50' : 'border-white/50'
        }`}>
        {title}
      </h3>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isDark: PropTypes.bool.isRequired
};
