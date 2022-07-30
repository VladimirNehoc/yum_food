/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const ArrowIcon = ({
  color,
  className,
  style,
}) => (
  <svg id="arrow-icon" style={style} width="28" height="46" viewBox="0 0 28 46" className={className} fill={color}>
    <path d="M1.47899 43.479C0.308324 42.3083 0.307289 40.4106 1.47668 39.2387L15.5656 25.119C16.7341 23.948 16.7341 22.052 15.5656 20.881L1.47668 6.76132C0.307289 5.58937 0.308324 3.69166 1.47899 2.52099L2.87866 1.12132C4.05024 -0.0502531 5.94973 -0.0502524 7.12131 1.12132L26.8787 20.8787C28.0502 22.0503 28.0502 23.9497 26.8787 25.1213L7.12131 44.8787C5.94973 46.0503 4.05024 46.0503 2.87866 44.8787L1.47899 43.479Z" />
  </svg>
);

ArrowIcon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
};

ArrowIcon.defaultProps = {
  color: '#333',
  className: '',
  style: {},
};

export default ArrowIcon;
