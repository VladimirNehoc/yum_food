import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import CloseIcon from 'assets/react-images/CloseIcon';
import StyledComponent from './StyledComponent';

const InputNumber = ({
  title,
  value,
  placeholder,
  required,
  onChange,
  disabled,
  clearable,
  error,
  min,
  max,
}) => {
  const inputRef = useRef();

  const onClickClear = () => {
    onChange('');

    inputRef.current.focus();
  };

  const inputClasses = cn({ 'not-valid': error });

  return (
    <StyledComponent>
      {
        title && (
          <div className="title">
            <span>
              {title}

              {
                required && (
                  <sup>&nbsp;*</sup>
                )
              }
            </span>
          </div>
        )
      }

      <input
        ref={inputRef}
        type="number"
        min={min}
        max={max}
        className={inputClasses}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        placeholder={placeholder}
      />

      {
        error && (
          <div className="error-message">
            <span>{error}</span>
          </div>
        )
      }

      {
        clearable && value > 0 && (
          <div
            className="clear-button"
            onClick={onClickClear}
            onKeyPress={onClickClear}
            role="button"
            tabIndex={0}
          >
            <CloseIcon />
          </div>
        )
      }
    </StyledComponent>
  );
};

InputNumber.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  clearable: PropTypes.bool,
  error: PropTypes.string,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

InputNumber.defaultProps = {
  title: null,
  value: '0',
  placeholder: 'Введите данные',
  required: false,
  disabled: false,
  clearable: true,
  error: null,
  min: null,
  max: null,
};

export default InputNumber;
