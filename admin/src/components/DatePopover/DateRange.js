/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';
import classNames from 'classnames';

moment.locale('ru');

const checkDateValue = (value, format) => {
  if (moment(value?.from, format).isValid() && moment(value?.to, format).isValid()) {
    return value;
  }

  return { from: null, to: null };
};

const DateRange = ({
  value,
  format,
  monthData,
}) => {
  const [selectedValue, setSelectedValue] = useState(checkDateValue(value, format));

  const selectDay = (date) => {
    if (selectedValue?.from && !selectedValue?.to) {
      setSelectedValue((prev) => {
        const newValue = _.clone(prev);

        if (date.isAfter(selectedValue.from)) {
          newValue.to = date;
        } else if (date.isBefore(selectedValue.from)) {
          newValue.from = date;
          newValue.to = prev.from.clone();
        } else {
          return prev;
        }

        return newValue;
      });
    } else if (selectedValue?.from && selectedValue?.to) {
      setSelectedValue((prev) => {
        const newValue = _.clone(prev);

        if (date.isBefore(newValue.from)) {
          newValue.from = date;
        } else if (date.isAfter(newValue.to)) {
          newValue.to = date;
        } else {
          newValue.to = null;
          newValue.from = date;
        }

        return newValue;
      });
    } else if (!selectedValue?.from) {
      setSelectedValue((prev) => {
        const newValue = _.clone(prev);
        newValue.from = date;
        return newValue;
      });
    }
  };

  const hasSelectedRange = !!selectedValue.from && !!selectedValue.to;

  const daysClasses = classNames('days', 'range', 'unselectable', { 'has-range': hasSelectedRange });

  return (
    <div className={daysClasses}>
      {
        _.map(monthData, (day) => {
          const selectedStart = day.date.isSame(selectedValue.from, 'day');
          const selectedEnd = day.date.isSame(selectedValue.to, 'day');
          const selected = day.date.isSameOrAfter(selectedValue.from, 'day')
          && day.date.isSameOrBefore(selectedValue.to, 'day');

          const dayClasses = classNames('days_day-container', {
            current: day.isCurrentMonth,
            prev: day.isPrevMonth,
            next: day.isNextMonth,
            today: day.isToday,
            selected,
            'selected-start': selectedStart,
            'selected-end': selectedEnd,
          });

          return (
            <div
              className={dayClasses}
              key={day.date.format()}
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
  );
};

DateRange.propTypes = {
  value: PropTypes.shape({ from: PropTypes.string, to: PropTypes.string }),
  format: PropTypes.string,
  monthData: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.number,
    date: PropTypes.objectOf(PropTypes.any),
  })).isRequired,
};

DateRange.defaultProps = {
  value: { from: null, to: null },
  format: 'DD.MM.YYYY',
};

export default DateRange;
