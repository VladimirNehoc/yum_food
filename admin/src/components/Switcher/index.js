import React from 'react';
import PropTypes from 'prop-types';

import StyledComponent from './StyledComponent';

const Switcher = ({
  isActive,
  onClick,
  size,
  disabled,
}) => (
  <StyledComponent
    isActive={isActive}
    size={size}
    disabled={disabled}
    onClick={onClick}
  >
    <div className="circle" />
  </StyledComponent>
);

Switcher.propTypes = {
  isActive: PropTypes.bool.isRequired,
  size: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Switcher.defaultProps = {
  size: 'm',
  disabled: false,
};

export default Switcher;
