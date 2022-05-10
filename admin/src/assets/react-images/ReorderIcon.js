/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Reorder = ({
  color,
  className,
  style,
}) => (
  <svg id="reorder-icon" style={style} width="24" height="24" viewBox="0 0 24 24" className={className} fill={color}>
    <path d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z" />
  </svg>
);

Reorder.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
};

Reorder.defaultProps = {
  color: '#333',
  className: '',
  style: {},
};

export default Reorder;
