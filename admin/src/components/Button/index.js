import React from 'react';
import PropTypes from 'prop-types';

import Spinner from 'components/Spinner';

import StyledComponent from './StyledComponent';

const Button = ({
  children,
  size,
  onClick,
  disabled,
  color,
  spinnerColor,
  shadow,
  className,
  isLoading,
}) => (
  <StyledComponent
    size={size}
    disabled={disabled}
    onClick={onClick}
    color={color}
    shadow={shadow}
    className={className}
  >
    {children}

    <div className={`loading-container ${isLoading ? 'loading' : ''}`}>
      <Spinner color={spinnerColor} />
    </div>
  </StyledComponent>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  size: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  color: PropTypes.number,
  spinnerColor: PropTypes.string,
  shadow: PropTypes.bool,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  size: 'l',
  disabled: false,
  color: null,
  spinnerColor: null,
  shadow: false,
  className: '',
  isLoading: false,
};

export default Button;
