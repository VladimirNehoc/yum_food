import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import StyledComponent from './StyledComponent';

const Spinner = ({
  size,
  color,
}) => {
  const spinnerSize = _.isString && !_.isNaN(size) ? `${size}px` : size;

  return (
    <StyledComponent className="simple-spinner" size={spinnerSize} color={color}>
      <div className="spinner">
        <div />
        <div />
        <div />
        <div />
      </div>
    </StyledComponent>
  );
};

Spinner.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
};

Spinner.defaultProps = {
  size: 20,
  color: null,
};

export default Spinner;
