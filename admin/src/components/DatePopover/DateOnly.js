/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';
import classNames from 'classnames';

moment.locale('ru');

const DateOnly = ({
  value,
  format,
  monthData,
  onConfirm,
  onCancel,
  showConfirm,
  confirmTitle,
  showCancel,
  cancelTitle,
}) => {
  const [selectedValue, setSelectedValue] = useState(
    moment(value, format).isValid() ? moment(value, format) : null,
  );

  const confirm = (date) => {
    onConfirm(date?.format(format) || selectedValue.format(format));
  };

  const cancel = () => {
    onCancel();
  };

  const selectDay = (date) => {
    setSelectedValue(date.clone());

    if (!showConfirm) {
      confirm(date.clone());
    }
  };

  return (
    <>
      <div className="days only unselectable">
        {
          _.map(monthData, (day) => {
            const dayClasses = classNames('days_day-container', {
              current: day.isCurrentMonth,
              prev: day.isPrevMonth,
              next: day.isNextMonth,
              today: day.isToday,
              selected: day.date?.format('DD.MM.YYYY') === selectedValue?.format('DD.MM.YYYY'),
            });

            return (
              <div
                className={dayClasses}
                key={day.date?.format()}
                onClick={() => selectDay(day.date)}
                onKeyDown={() => selectDay(day.date)}
                role="button"
                tabIndex={0}
              >
                <div className="days_day">
                  <span>{day.text}</span>
                </div>
              </div>
            );
          })
        }
      </div>

      {
        (showCancel || showConfirm) && (
          <div className="footer mt-10">
            {
              showCancel && (
                <div className="cancel-button">
                  <button
                    onClick={cancel}
                    type="button"
                  >
                    {cancelTitle}
                  </button>
                </div>
              )
            }

            {
              showConfirm && (
                <div className="confirm-button">
                  <button
                    onClick={confirm}
                    type="button"
                    disabled={!selectedValue}
                  >
                    {confirmTitle}
                  </button>
                </div>
              )
            }
          </div>
        )
      }
    </>
  );
};

DateOnly.propTypes = {
  value: PropTypes.string,
  format: PropTypes.string,
  monthData: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.number,
    date: PropTypes.objectOf(PropTypes.any),
  })).isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  showConfirm: PropTypes.bool.isRequired,
  confirmTitle: PropTypes.string.isRequired,
  showCancel: PropTypes.bool.isRequired,
  cancelTitle: PropTypes.string.isRequired,
};

DateOnly.defaultProps = {
  value: null,
  format: 'DD.MM.YYYY',
};

export default DateOnly;
