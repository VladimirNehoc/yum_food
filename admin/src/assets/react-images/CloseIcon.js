/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Close = ({
  color,
  className,
  style,
}) => (
  <svg id="close-icon" style={style} width="54" height="54" viewBox="0 0 54 54" className={className} fill={color}>
    <path d="M52.18 7.46C53.7374 5.90256 53.7374 3.37744 52.18 1.82V1.82C50.6226 0.262557 48.0974 0.262557 46.54 1.82L27 21.36L7.46 1.82C5.90256 0.262557 3.37744 0.262557 1.82 1.82V1.82C0.262557 3.37744 0.262557 5.90256 1.82 7.46L21.36 27L1.82 46.54C0.262557 48.0974 0.262557 50.6226 1.82 52.18V52.18C3.37744 53.7374 5.90256 53.7374 7.46 52.18L27 32.64L46.54 52.18C48.0974 53.7374 50.6226 53.7374 52.18 52.18V52.18C53.7374 50.6226 53.7374 48.0974 52.18 46.54L32.64 27L52.18 7.46Z" />
  </svg>
);

Close.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
};

Close.defaultProps = {
  color: '#333',
  className: '',
  style: {},
};

export default Close;
