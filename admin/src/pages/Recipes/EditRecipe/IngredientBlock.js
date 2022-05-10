/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import ContainerBlock from 'containers/ContainerBlock';
import InputNumber from 'components/Forms/InputNumber';
import Select from 'components/Forms/Select';
import ReorderIcon from 'assets/react-images/ReorderIcon';

const IngredientBlock = ({
  data,
  onChange,
  errors,
  dragHandleProps,
}) => (
  <ContainerBlock
    className="ingredient-item"
    padding="10px"
    bgColor={{ dark: 'color5', light: 'color16' }}
  >
    <div className="move" {...dragHandleProps}>
      <ReorderIcon />
    </div>

    <div className="ingredient">
      <Select
        value={data.ingredientId}
        sort={{ name: 1 }}
        apiUrl="ingredients"
        placeholder="Ингредиент"
        onChange={(value) => onChange({ ingredientId: value })}
        error={errors.ingredientId}
        hideErrorMessage
      />
    </div>

    <div className="count">
      <InputNumber
        value={data.count}
        onChange={(value) => onChange({ count: value })}
        min={0}
        placeholder="Кол-во"
        error={errors.count}
        hideErrorMessage
      />
    </div>

    <div className="unit">
      <Select
        value={data.unitId}
        sort={{ name: 1 }}
        apiUrl="units"
        placeholder="Ед. изм."
        onChange={(value) => onChange({ unitId: value })}
        error={errors.unitId}
        hideErrorMessage
      />
    </div>
  </ContainerBlock>
);

IngredientBlock.propTypes = {
  data: PropTypes.shape({
    ingredientId: PropTypes.number,
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    unitId: PropTypes.number,
  }).isRequired,
  errors: PropTypes.shape({
    ingredientId: PropTypes.string,
    count: PropTypes.string,
    unitId: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
  dragHandleProps: PropTypes.shape({}).isRequired,
};

IngredientBlock.defaultProps = {
  errors: {},
};

export default IngredientBlock;
