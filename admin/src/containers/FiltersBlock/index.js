/* eslint-disable react/forbid-prop-types */
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import StyledComponent from './StyledComponent';

const FiltersBlock = ({
  className,
  template,
}) => {
  const { status } = useContext(ThemeContext);

  return (
    <StyledComponent className={className}>
      <div className="filters mt-10">
        <div style={{ backgroundColor: 'red', height: 50 }} />
        <div style={{ backgroundColor: 'red', height: 50 }} />
        <div style={{ backgroundColor: 'red', height: 50 }} />
      </div>
    </StyledComponent>
  );
};

FiltersBlock.propTypes = {
  className: PropTypes.string,
  template: PropTypes.any.isRequired,
};

FiltersBlock.defaultProps = {
  className: '',
};

export default FiltersBlock;
