import React from 'react';
import PropTypes from 'prop-types';

import StyledComponent from './StyledComponent';

const Image = ({
  path,
}) => {
  const src = `http://localhost:3333/image-upload/${path}`;

  return (
    <StyledComponent>
      <img src={src} alt="recipe" />
    </StyledComponent>
  );
};

Image.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Image;
