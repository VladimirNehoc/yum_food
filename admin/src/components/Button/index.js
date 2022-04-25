import React from 'react';
import PropTypes from 'prop-types';

import StyledComponent from './StyledComponent';

const Button = ({
  children,
  size,
  onClick,
  disabled,
  color,
  shadow,
  className,
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
  </StyledComponent>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  size: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  color: PropTypes.number,
  shadow: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  size: 'l',
  disabled: false,
  color: null,
  shadow: false,
  className: '',
};

export default Button;
