import React, { useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { toast } from 'react-toastify';

import _ from 'lodash';
import StyledComponent from './StyledComponent';

const allowedTypes = ['image/png', 'image/jpeg'];
const maxFileSize = 5;

const FileLoader = ({
  title,
  value,
  onChange,
  required,
  width,
  error,
}) => {
  const inputRef = useRef();

  const fileUrl = useMemo(() => {
    if (value) {
      return window.URL.createObjectURL(value);
    }

    return null;
  }, [value]);

  const containerWidth = width ? `${width}px` : '100%';
  const containerHeight = width ? `${width / 1.5}px` : '100%';

  const containerClasses = cn('upload-container', {
    'has-file': !!value,
    'not-valid': !!error,
  });

  const emitAddFile = () => {
    inputRef.current.click();
  };

  const addFile = (e) => {
    const selectFile = e.target.files[0];

    if (!selectFile) {
      toast('Ошибка загрузки файла', { type: 'error' });
      return;
    }

    if (!_.includes(allowedTypes, selectFile.type)) {
      toast('Недопустимый тип файла. Используйте .png или .jpeg', { type: 'error' });
      return;
    }

    const fileSize = Math.ceil((selectFile.size / 1000 / 1000) * 10) / 10;

    if (fileSize > maxFileSize) {
      toast(`Максимальный размер файла - ${maxFileSize}МБ. Текущий - ${fileSize}МБ`, { type: 'error' });
      return;
    }

    onChange(selectFile);
  };

  return (
    <StyledComponent
      containerWidth={containerWidth}
      containerHeight={containerHeight}
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

      <div className={containerClasses}>
        <input
          ref={inputRef}
          type="file"
          onChange={addFile}
        />

        <div
          className="empty"
          onClick={emitAddFile}
          onKeyPress={emitAddFile}
          tabIndex={0}
          role="button"
        >
          <span>+</span>
        </div>

        {
          value && (
            <div className="file">
              <img src={fileUrl} alt={value.name} />
            </div>
          )
        }

        {
          error && (
            <div className="error-message">
              <span>{error}</span>
            </div>
          )
        }
      </div>
    </StyledComponent>
  );
};

FileLoader.propTypes = {
  title: PropTypes.string,
  value: PropTypes.shape({
    name: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  width: PropTypes.number,
  error: PropTypes.bool,
};

FileLoader.defaultProps = {
  title: null,
  value: null,
  required: false,
  width: null,
  error: null,
};

export default FileLoader;
