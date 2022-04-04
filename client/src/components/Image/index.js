import React from 'react';
import PropTypes from 'prop-types';

import StyledComponent from './StyledComponent';

const Image = ({
  imageId,
}) => {
  const src = `http://localhost:3333/uploads/${imageId}.jpg`;

  return (
    <StyledComponent>
      <img src={src} alt="recipe" />
    </StyledComponent>
  );
};

Image.propTypes = {
  imageId: PropTypes.string.isRequired,
};

export default Image;
