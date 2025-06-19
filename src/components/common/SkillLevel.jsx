import PropTypes from 'prop-types';

export const SkillLevel = ({ level, isDark }) => (
  <div className="flex gap-1">
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className={`w-2 h-2 rounded-full transition-colors duration-300 ${i < level
            ? (isDark ? 'bg-blue-400' : 'bg-blue-500')
            : (isDark ? 'bg-gray-600/70' : 'bg-white/70')
          }`}
      />
    ))}
  </div>
);

SkillLevel.propTypes = {
  level: PropTypes.number.isRequired,
  isDark: PropTypes.bool.isRequired
};
