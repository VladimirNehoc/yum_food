import React from 'react';
import PropTypes from 'prop-types';

import StyledComponent from './StyledComponent';

const Image = ({
  imageId,
  adaptive,
}) => {
  const src = `http://localhost:3333/uploads/${imageId}.jpg`;

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
  imageId: PropTypes.string.isRequired,
  adaptive: PropTypes.bool,
};

Image.defaultProps = {
  adaptive: false,
};

export default Image;