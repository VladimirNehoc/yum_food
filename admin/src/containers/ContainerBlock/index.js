import React from 'react';
import PropTypes from 'prop-types';
import StyledComponent from './StyledComponent';

const ContainerBlock = ({ padding, children }) => (
  <StyledComponent padding={padding}>
    {children}
  </StyledComponent>
);

ContainerBlock.propTypes = {
  padding: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]).isRequired,
};

ContainerBlock.defaultProps = {
  padding: null,
};

export default ContainerBlock;
