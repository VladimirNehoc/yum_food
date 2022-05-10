import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import StyledComponent from './StyledComponent';

const InputTextarea = ({
  className,
  title,
  value,
  placeholder,
  resize,
  rows,
  required,
  onChange,
  disabled,
  errorInside,
  hideErrorMessage,
  error,
}) => {
  const inputRef = useRef();

  const inputClasses = cn({ 'not-valid': error });

  return (
    <StyledComponent
      className={className}
      rows={rows}
      resize={resize}
      errorInside={errorInside}
    >
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

      <textarea
        ref={inputRef}
        className={inputClasses}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        placeholder={placeholder}
        resize={resize ? 'vertical' : 'none'}
      />

      {
        error && !hideErrorMessage && (
          <div className="error-message">
            <span>{error}</span>
          </div>
        )
      }
    </StyledComponent>
  );
};

InputTextarea.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  resize: PropTypes.bool,
  rows: PropTypes.number,
  errorInside: PropTypes.bool,
  hideErrorMessage: PropTypes.bool,
};

InputTextarea.defaultProps = {
  className: '',
  title: null,
  placeholder: 'Введите данные',
  required: false,
  disabled: false,
  error: null,
  resize: false,
  rows: 4,
  errorInside: false,
  hideErrorMessage: false,
};

export default InputTextarea;
