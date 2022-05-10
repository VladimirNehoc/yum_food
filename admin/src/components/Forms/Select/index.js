import React, {
  useRef, useState, useEffect, useContext, useMemo,
} from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import cn from 'classnames';
import _ from 'lodash';
import { toast } from 'react-toastify';

import ReactSelect from 'react-select';

import api from 'api';

import StyledComponent from './StyledComponent';

const loadDelay = 300;
const itemsPerPage = 50;

const Select = ({
  className,
  title,
  value,
  options,
  apiUrl,
  placeholder,
  required,
  onChange,
  inputValue,
  onInputChange,
  disabled,
  isMulti,
  isClearable,
  isLoading,
  loadingMessage,
  noOptionMessage,
  error,
  hideErrorMessage,
  sort,
}) => {
  const theme = useContext(ThemeContext);

  const [apiOptions, setApiOptions] = useState([]);
  const [componentInputValue, setComponentInputValue] = useState('');
  const [componentIsLoading, setComponentIsLoading] = useState(false);

  const selectRef = useRef();
  const timerRef = useRef();

  const customStyles = {
    option: (provided, state) => {
      const bgColor = state.isFocused || state.isActive ? theme.bgColorActive : theme.inputBgColor;
      return {
        ...provided,
        color: theme.textColor,
        backgroundColor: bgColor,
        transition: '0.1s',
      };
    },
    input: (provided) => ({
      ...provided,
      color: theme.textColor,
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: theme.inputPlaceholder,
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: theme.inputPlaceholder,
    }),
    clearIndicator: (provided) => ({
      ...provided,
      color: theme.inputPlaceholder,
    }),
    loadingIndicator: (provided) => ({
      ...provided,
      color: theme.inputPlaceholder,
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: theme.inputBgColor,
      zIndex: 5,
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: theme.inputBgColor,
      boxShadow: 'none',
      outline: error ? `1px solid ${theme.notValidColor}` : 'none',
      border: 'none',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: theme.textColor,
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: theme.status === 'dark' ? theme.bgColorActive : theme.bgCardColor,
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: theme.textColor,
    }),
  };

  const loadFromApi = (val, skip) => {
    const query = {
      $limit: itemsPerPage,
      'name[$iLike]': `%${val}%`,
      $skip: skip,
      $sort: sort,
    };

    api.service(apiUrl).find({ query })
      .then((res) => {
        const resOptions = _.map(res.data, (item) => ({
          label: item.name,
          value: item.id,
          data: item,
        }));

        if (skip) {
          setApiOptions([...apiOptions, ...resOptions]);
        } else {
          setApiOptions(resOptions);
        }
      })
      .catch((err) => {
        toast(err.message, { type: 'error' });
      })
      .finally(() => {
        setComponentIsLoading(false);
      });
  };

  useEffect(() => {
    if (componentInputValue && componentInputValue.trim().length > 0) {
      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setComponentIsLoading(true);
        loadFromApi(componentInputValue);
      }, loadDelay);
    } else {
      clearTimeout(timerRef.current);
    }
  }, [componentInputValue]);

  useEffect(() => {
    if (!componentInputValue) {
      loadFromApi('');
    }
  }, [componentInputValue]);

  const handleChange = (data) => {
    if (isMulti) {
      const values = _.map(data, (item) => item.value);

      onChange(values, data);
    } else {
      onChange(data?.value || null, data);
    }
  };

  const loadMore = () => {
    loadFromApi(inputValue, apiOptions.length);
  };

  const selectClasses = cn({ 'not-valid': error });

  const componentOptions = apiOptions || options;

  const componentValue = useMemo(() => {
    if (isMulti) {
      return _.filter(componentOptions, (option) => _.includes(value, option.value));
    }
    return _.find(componentOptions, (option) => option.value === value);
  }, [value, componentOptions]);

  return (
    <StyledComponent className={className}>
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

      <ReactSelect
        ref={selectRef}
        className={selectClasses}
        value={componentValue}
        options={componentOptions}
        onChange={handleChange}
        disabled={disabled}
        placeholder={placeholder}
        isLoading={apiUrl ? componentIsLoading : isLoading}
        isMulti={isMulti}
        isClearable={isClearable}
        id="react-select"
        classNamePrefix="react-select"
        onInputChange={apiUrl ? setComponentInputValue : onInputChange}
        inputValue={apiUrl ? componentInputValue : inputValue}
        loadingMessage={() => loadingMessage}
        noOptionsMessage={() => (inputValue ? noOptionMessage : 'Начните вводить название')}
        styles={customStyles}
        onMenuScrollToBottom={loadMore}
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

const optionType = PropTypes.shape({
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.shape({}),
});

Select.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.oneOfType([
    optionType,
    PropTypes.arrayOf(optionType),
    PropTypes.string,
    PropTypes.number,
  ]),
  options: PropTypes.arrayOf(optionType),
  apiUrl: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
  onInputChange: PropTypes.func,
  disabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  isClearable: PropTypes.bool,
  error: PropTypes.string,
  hideErrorMessage: PropTypes.bool,
  loadingMessage: PropTypes.string,
  noOptionMessage: PropTypes.string,
  isLoading: PropTypes.bool,
  sort: PropTypes.shape({}),
};

Select.defaultProps = {
  className: '',
  title: null,
  value: null,
  placeholder: 'Введите данные',
  options: [],
  apiUrl: null,
  required: false,
  inputValue: '',
  onInputChange: null,
  disabled: false,
  isMulti: false,
  isClearable: true,
  error: null,
  hideErrorMessage: false,
  loadingMessage: 'Загрузка...',
  noOptionMessage: 'Не найдено',
  isLoading: false,
  sort: {},
};

export default Select;
