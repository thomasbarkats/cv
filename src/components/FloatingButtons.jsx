import { Printer, Moon, Sun } from 'lucide-react';
import PropTypes from 'prop-types';
import { useThemeStyles } from '../hooks/useThemeStyles';

export const FloatingButtons = ({ isDark, toggleDark, handlePrint }) => {
  const { floatingButton, toggleButton } = useThemeStyles(isDark);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 print:hidden z-20">
      <div className="flex flex-col gap-3">
        {/* Dark Mode Toggle - Always visible */}
        <button
          onClick={toggleDark}
          className={`p-2 sm:p-3 shadow-xl rounded-full transition-all duration-300 backdrop-blur-sm ${toggleButton}`}
          aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
        >
          {isDark ? <Sun size={20} className="sm:w-6 sm:h-6" /> : <Moon size={20} className="sm:w-6 sm:h-6" />}
        </button>

        {/* Print Button - Hidden on mobile */}
        <button
          onClick={handlePrint}
          className={`p-2 sm:p-3 max-sm:hidden shadow-xl rounded-full transition-all duration-300 backdrop-blur-sm ${floatingButton}`}
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
