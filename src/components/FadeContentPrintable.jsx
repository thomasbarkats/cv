import PropTypes from 'prop-types';
import FadeContent from '../blocks/Animations/FadeContent/FadeContent';


export const FadeContentPrintable = ({ children, fixMt, ...otherProps }) => {
  return (
    <>
      <FadeContent {...otherProps} className="print:hidden">
        {children}
      </FadeContent>
      <div className={`hidden print:block ${fixMt ? 'mt-8' : ''}`}>
        {children}
      </div>
    </>
  );
};

FadeContentPrintable.propTypes = {
  children: PropTypes.node,
  fixMt: false,
};
