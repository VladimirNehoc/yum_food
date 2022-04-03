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
}) => (
  <StyledComponent
    size={size}
    disabled={disabled}
    onClick={onClick}
    color={color}
    shadow={shadow}
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
};

Button.defaultProps = {
  size: 'm',
  disabled: false,
  color: null,
  shadow: false,
};

export default Button;
