import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import CloseIcon from 'assets/react-images/CloseIcon';
import StyledComponent from './StyledComponent';

const InputNumber = ({
  className,
  title,
  value,
  placeholder,
  required,
  onChange,
  disabled,
  clearable,
  errorInside,
  hideErrorMessage,
  error,
  min,
  max,
}) => {
  const inputRef = useRef();

  const handleChange = (e) => {
    const val = e.target.value;

    if (!Number.isNaN(Number(val))) {
      onChange(String(Number(val)));
    }
  };

  const onClickClear = () => {
    onChange('');

    inputRef.current.focus();
  };

  const inputClasses = cn({ 'not-valid': error });

  return (
    <StyledComponent className={className} errorInside={errorInside}>
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
        onChange={handleChange}
        disabled={disabled}
        placeholder={placeholder}
      />

      {
        error && !hideErrorMessage && (
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
  className: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  clearable: PropTypes.bool,
  errorInside: PropTypes.bool,
  hideErrorMessage: PropTypes.bool,
  error: PropTypes.string,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

InputNumber.defaultProps = {
  className: '',
  title: null,
  value: '0',
  placeholder: 'Введите данные',
  required: false,
  disabled: false,
  clearable: true,
  errorInside: false,
  hideErrorMessage: false,
  error: null,
  min: null,
  max: null,
};

export default InputNumber;
