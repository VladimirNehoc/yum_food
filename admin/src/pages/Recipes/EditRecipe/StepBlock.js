/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import ContainerBlock from 'containers/ContainerBlock';
import FileLoader from 'components/Forms/FileLoader';
import InputText from 'components/Forms/InputText';
import InputTextarea from 'components/Forms/InputTextarea';
import ReorderIcon from 'assets/react-images/ReorderIcon';

const StepBlock = ({
  data,
  onChange,
  errors,
  dragHandleProps,
}) => (
  <ContainerBlock
    className="step-item"
    padding="10px"
    bgColor={{ dark: 'color5', light: 'color16' }}
  >
    <div className="move" {...dragHandleProps}>
      <ReorderIcon />
    </div>

    <div className="image">
      <FileLoader
        value={data.image}
        onChange={(file) => onChange({ image: file })}
        width={200}
        error={errors.image}
      />
    </div>

    <div className="title">
      <InputText
        value={data.title}
        onChange={(val) => onChange({ title: val })}
        error={errors.title}
        placeholder="Название"
        errorInside
        hideErrorMessage
      />
    </div>

    <div className="content">
      <InputTextarea
        value={data.content}
        onChange={(val) => onChange({ content: val })}
        error={errors.content}
        placeholder="Описание"
        hideErrorMessage
      />
    </div>
  </ContainerBlock>
);

StepBlock.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.shape({}),
    title: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
  dragHandleProps: PropTypes.shape({}).isRequired,
};

StepBlock.defaultProps = {
  errors: {},
};

export default StepBlock;
