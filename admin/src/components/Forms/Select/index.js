import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import ReactSelect from 'react-select';

import api from 'api';

import StyledComponent from './StyledComponent';

const Select = ({
  title,
  value,
  options,
  apiUrl,
  placeholder,
  required,
  onChange,
  disabled,
  isMulti,
  isClearable,
  error,
}) => {
  const [apiOptions, setApiOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const selectRef = useRef();

  useEffect(() => {
    if (inputValue) {
      const params = {
        $limit: 50,
        'name[$iLike]': `%${inputValue}%`,
      };

      api.get(apiUrl, params)
        .then((res) => {
          const resOptions = _.map(res.data, (item) => ({
            label: item.name,
            value: item.id,
          }));

          setApiOptions(resOptions);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [inputValue]);

  const selectClasses = cn({ 'not-valid': error });

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

      <ReactSelect
        ref={selectRef}
        className={selectClasses}
        value={value}
        options={api ? apiOptions : options}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        isMulti={isMulti}
        isClearable={isClearable}
        id="react-select"
        classNamePrefix="react-select"
        onInputChange={setInputValue}
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

const optionType = PropTypes.shape({
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
});

Select.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([optionType, PropTypes.arrayOf(optionType)]),
  options: PropTypes.arrayOf(optionType),
  apiUrl: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  isClearable: PropTypes.bool,
  error: PropTypes.string,
};

Select.defaultProps = {
  title: null,
  value: null,
  placeholder: 'Введите данные',
  options: [],
  apiUrl: null,
  required: false,
  disabled: false,
  isMulti: false,
  isClearable: true,
  error: null,
};

export default Select;
