/* eslint-disable react/forbid-prop-types */
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import StyledComponent from './StyledComponent';

const ContainerBlock = ({
  padding,
  bgColor,
  shadow,
  className,
  children,
}) => {
  const { status } = useContext(ThemeContext);

  return (
    <StyledComponent
      padding={padding}
      bgColor={bgColor ? bgColor[status] : null}
      shadow={shadow}
      className={className}
    >
      {children}
    </StyledComponent>
  );
};

ContainerBlock.propTypes = {
  padding: PropTypes.string,
  bgColor: PropTypes.shape({
    dark: PropTypes.string,
    light: PropTypes.string,
  }),
  shadow: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
};

ContainerBlock.defaultProps = {
  padding: null,
  bgColor: null,
  className: '',
  shadow: true,
};

export default ContainerBlock;
