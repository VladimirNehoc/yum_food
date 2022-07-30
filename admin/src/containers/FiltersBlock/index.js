/* eslint-disable react/forbid-prop-types */
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import InputDate from 'components/Forms/InputDate';
import StyledComponent from './StyledComponent';

const FiltersBlock = ({
  className,
  template,
}) => {
  const { status } = useContext(ThemeContext);

  return (
    <StyledComponent className={className}>
      <div className="filters">
        <InputDate value="" onChange={() => {}} />
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
