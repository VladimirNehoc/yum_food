import React from 'react';
import PropTypes from 'prop-types';
import StyledComponent from './StyledComponent';

const ContainerBlock = ({ children }) => (
  <StyledComponent>
    {children}
  </StyledComponent>
);

ContainerBlock.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]).isRequired,
};

export default ContainerBlock;
