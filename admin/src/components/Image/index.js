import React from 'react';
import PropTypes from 'prop-types';

import StyledComponent from './StyledComponent';

const Image = ({
  path,
  adaptive,
}) => {
  const src = `http://localhost:3333/image-upload/${path}`;

  return (
    adaptive
      ? (
        <StyledComponent src={src}>
          <div />
        </StyledComponent>
      )
      : (
        <StyledComponent>
          <img src={src} alt="recipe" />
        </StyledComponent>
      )
  );
};

Image.propTypes = {
  path: PropTypes.string.isRequired,
  adaptive: PropTypes.bool,
};

Image.defaultProps = {
  adaptive: false,
};

export default Image;
