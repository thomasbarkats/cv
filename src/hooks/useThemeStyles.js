// Centralized theme styles hook - easy to modify when changing design trends

export const useThemeStyles = (isDark) => {
  // Text colors
  const getTextColor = (type) => {
    if (!isDark) {
      switch (type) {
        case 'primary': return 'text-gray-800';
        case 'secondary': return 'text-gray-600';
        case 'body': return 'text-gray-700';
        default: return 'text-gray-700';
      }
    } else {
      switch (type) {
        case 'primary': return 'text-gray-100';
        case 'secondary': return 'text-gray-300';
        case 'body': return 'text-gray-200';
        default: return 'text-gray-200';
      }
    }
  };

  // All glassy/design-specific styles in one place
  const styles = {
    // Links
    link: isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800',

    // Backgrounds - This is where the "glassy" effect lives
    cardBg: isDark ? 'bg-gray-800/40' : 'bg-white/40',
    mainBg: isDark ? 'bg-gray-800/40' : 'bg-white/40',
    nestedBg: isDark ? 'bg-gray-700/25 border-gray-600' : 'bg-gray-200/25 border-gray-200',

    // Borders
    borderColor: isDark ? 'border-gray-600' : 'border-gray-200',

    // Badges
    badgeBg: isDark ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100/50 text-blue-500',

    // Buttons
    floatingButton: isDark
      ? 'bg-gray-800/70 hover:bg-gray-800 text-gray-300 hover:text-gray-100'
      : 'bg-white/70 hover:bg-white text-gray-600 hover:text-gray-800',

    // Toggle button specific
    toggleButton: isDark
      ? 'bg-gray-800/70 hover:bg-gray-800 text-yellow-400 hover:text-yellow-300'
      : 'bg-white/70 hover:bg-white text-gray-600 hover:text-gray-800',
  };

  return { getTextColor, ...styles };
};
