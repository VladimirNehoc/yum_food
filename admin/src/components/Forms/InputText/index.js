import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import CloseIcon from 'assets/react-images/CloseIcon';
import StyledComponent from './StyledComponent';

const InputText = ({
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
}) => {
  const inputRef = useRef();

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
        type="text"
        className={inputClasses}
        value={value}
        onChange={(e) => onChange(e.target.value)}
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
        clearable && value.trim().length > 0 && (
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

InputText.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  clearable: PropTypes.bool,
  errorInside: PropTypes.bool,
  hideErrorMessage: PropTypes.bool,
  error: PropTypes.string,
};

InputText.defaultProps = {
  className: '',
  title: null,
  placeholder: 'Введите данные',
  required: false,
  disabled: false,
  clearable: true,
  errorInside: false,
  hideErrorMessage: false,
  error: null,
};

export default InputText;
