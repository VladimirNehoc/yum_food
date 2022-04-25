import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import StyledComponent from './StyledComponent';

const InputTextarea = ({
  title,
  value,
  placeholder,
  resize,
  rows,
  required,
  onChange,
  disabled,
  error,
}) => {
  const inputRef = useRef();

  const inputClasses = cn({ 'not-valid': error });

  return (
    <StyledComponent rows={rows} resize={resize}>
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
        error && (
          <div className="error-message">
            <span>{error}</span>
          </div>
        )
      }
    </StyledComponent>
  );
};

InputTextarea.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  resize: PropTypes.bool,
  rows: PropTypes.number,
};

InputTextarea.defaultProps = {
  title: null,
  placeholder: 'Введите данные',
  required: false,
  disabled: false,
  error: null,
  resize: false,
  rows: 4,
};

export default InputTextarea;
