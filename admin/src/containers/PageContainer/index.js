import React from 'react';
import PropTypes from 'prop-types';
import StyledComponent from './StyledComponent';

const PageContainer = ({ children }) => (
  <StyledComponent>
    <div className="container">
      {children}
    </div>
  </StyledComponent>
);

PageContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default PageContainer;
