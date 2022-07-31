import React, {
  useRef, useState, useEffect, useContext,
} from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import cn from 'classnames';

import CloseIcon from 'assets/react-images/CloseIcon';
import DatePopover from 'components/DatePopover';
import StyledComponent from './StyledComponent';

const InputDate = ({
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
  const [isOpenDatePopover, setIsOpenDatePopover] = useState(false);

  const inputDateRef = useRef();
  const inputRef = useRef();

  const theme = useContext(ThemeContext);

  const onClickClear = () => {
    onChange('');

    inputRef.current.focus();
  };

  useEffect(() => {
    const { current } = inputRef;

    if (current) {
      const openDatePopover = () => setIsOpenDatePopover(true);

      current.addEventListener('focus', openDatePopover);

      return () => {
        current.removeEventListener('focus', openDatePopover);
      };
    }

    return null;
  }, [inputRef]);

  const setDate = (date) => {
    console.log(date);
    onChange(date);
  };

  const datePopoverStyles = {
    container: {
      borderRadius: theme.borderRadiusL,
      boxShadow: theme.popoverBlockShadow,
      padding: '15px',
      backgroundColor: theme.bgCardColor,
    },
    header: {
      color: theme.status === 'light' ? '#555' : '#bbb',
      fontSize: '1.2em',
      fontWeight: 'bold',
      buttonColor: theme.status === 'light' ? '#555' : '#bbb',
    },
    dayWeeks: {
      color: theme.color10,
      fontSize: '1em',
    },
    days: {
      color: theme.textColor,
      selectedColor: theme.color16,
      selectedBackgroundColor: theme.bgColor1,
      hoverColor: theme.textColorReverse,
      hoverBackgroundColor: theme.bgColorHoverButton,
      hoverInRangeBackgroundColor: '#fff',
      transition: '0.2s',
    },
    confirmButton: {
      color: theme.color15,
      borderRadius: theme.borderRadiusS,
      backgroundColor: theme.bgColorHover1,
    },
    cancelButton: {
      color: theme.textColor,
      borderRadius: theme.borderRadiusS,
      backgroundColor: theme.bgColorHoverButton,
    },
  };

  const inputClasses = cn({ 'not-valid': error });

  return (
    <StyledComponent className={className} errorInside={errorInside} ref={inputDateRef}>
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

      <DatePopover
        containerRef={inputDateRef}
        isOpen={isOpenDatePopover}
        closePopover={() => setIsOpenDatePopover(false)}
        onConfirm={(date) => setDate(date)}
        mode="range"
        showConfirm={false}
        showCancel={false}
        styles={datePopoverStyles}
      />
    </StyledComponent>
  );
};

InputDate.propTypes = {
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

InputDate.defaultProps = {
  className: '',
  title: null,
  placeholder: 'Выберите дату',
  required: false,
  disabled: false,
  clearable: true,
  errorInside: false,
  hideErrorMessage: false,
  error: null,
};

export default InputDate;
