import React, {
  useEffect, useState, useCallback, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';
import classNames from 'classnames';

import StyledComponent from './StyledComponent';

import ArrowIcon from './ArrowIcon';
import DateOnly from './DateOnly';
import DateRange from './DateRange';

moment.locale('ru');

const DatePopover = ({
  containerRef,
  isOpen,
  closePopover,
  styles,
  mode,
  value,
  format,
}) => {
  const [activeDate, setActiveDate] = useState(moment());

  const dayWeeks = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  const getMonthDays = useCallback(() => {
    const currentDate = activeDate.clone();

    const daysInMonth = currentDate.daysInMonth();
    const startDayOfWeek = currentDate.clone().startOf('month').day();
    const endDayOfWeek = currentDate.clone().endOf('month').day();

    const daysBeforeCurrentMonth = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;
    const daysAfterCurrentMonth = endDayOfWeek === 0 ? 0 : 7 - endDayOfWeek;

    const lastDayPrevMonth = +currentDate.clone().subtract(1, 'month').endOf('month').format('D');

    const result = [];

    for (let i = lastDayPrevMonth - daysBeforeCurrentMonth + 1; i <= lastDayPrevMonth; i += 1) {
      const data = {
        text: i,
        date: activeDate.clone().subtract(1, 'month').set('date', i),
        isPrevMonth: true,
      };

      result.push(data);
    }

    for (let i = 1; i <= daysInMonth; i += 1) {
      const date = currentDate.clone().set('date', i);

      const data = {
        text: i,
        date,
        isCurrentMonth: true,
        isToday: moment().format('DD.MM.YYYY') === date.format('DD.MM.YYYY'),
      };

      result.push(data);
    }

    for (let i = 1; i <= daysAfterCurrentMonth; i += 1) {
      const data = {
        text: i,
        date: currentDate.clone().add(1, 'month').set('date', i),
        isNextMonth: true,
      };

      result.push(data);
    }

    return result;
  }, [activeDate]);

  const currentMonthData = useMemo(getMonthDays, [activeDate]);

  useEffect(() => {
    const checkOutsideClick = (event) => {
      if (!event.target.closest('.date-popover-container')) {
        containerRef.current?.classList.remove('date-popover-container');
        document.removeEventListener('click', checkOutsideClick);
        closePopover();
      }
    };

    if (isOpen && containerRef.current) {
      containerRef.current.classList.add('date-popover-container');
      document.addEventListener('click', checkOutsideClick);
    }
  }, [isOpen]);

  const componentClasses = classNames('smooth', {
    'smooth-enable': !isOpen,
  });

  const changeMonth = (action) => {
    const currentActiveDate = activeDate.clone();

    if (action === 'prev') {
      currentActiveDate.subtract(1, 'month');
    } else if (action === 'next') {
      currentActiveDate.add(1, 'month');
    }

    setActiveDate(currentActiveDate);
  };

  return (
    <StyledComponent className={componentClasses} styles={styles}>
      <div className="header">
        <div
          className="header_prev-day"
          role="button"
          onClick={() => changeMonth('prev')}
          onKeyDown={() => changeMonth('prev')}
          tabIndex={0}
        >
          <ArrowIcon />
        </div>

        <div className="header_current-day">
          <span>{activeDate.format('MMMM YYYY')}</span>
        </div>

        <div
          className="header_next-day"
          role="button"
          onClick={() => changeMonth('next')}
          onKeyDown={() => changeMonth('next')}
          tabIndex={0}
        >
          <ArrowIcon />
        </div>
      </div>

      <div className="day-weeks mt-15">
        {
          _.map(dayWeeks, (dayWeek) => (
            <div className="day-weeks_day" key={dayWeek}>
              <span>{dayWeek}</span>
            </div>
          ))
        }
      </div>

      {
        mode === 'only'
          ? (
            <DateOnly
              value={value}
              format={format}
              monthData={currentMonthData}
            />
          ) : (
            <DateRange
              value={value}
              format={format}
              monthData={currentMonthData}
            />
          )
      }
    </StyledComponent>
  );
};

DatePopover.propTypes = {
  containerRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  isOpen: PropTypes.bool,
  closePopover: PropTypes.func,
  mode: PropTypes.oneOf(['only', 'range']),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ from: PropTypes.string, to: PropTypes.string }),
  ]),
  format: PropTypes.string,
  styles: PropTypes.shape({
    container: PropTypes.shape({
      borderRadius: PropTypes.string,
      boxShadow: PropTypes.string,
      padding: PropTypes.string,
      backgroundColor: PropTypes.string,
    }),
    header: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.string,
      fontWeight: PropTypes.string,
      buttonColor: PropTypes.string,
    }),
    dayWeeks: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.string,
    }),
    days: PropTypes.shape({
      color: PropTypes.string,
      selectedColor: PropTypes.string,
      selectedBackgroundColor: PropTypes.string,
      transition: PropTypes.string,
    }),
  }),
};

DatePopover.defaultProps = {
  containerRef: null,
  isOpen: false,
  closePopover: () => {},
  mode: 'range',
  value: null,
  format: 'DD.MM.YYYY',
  styles: {
    container: {
      borderRadius: '6px',
      boxShadow: '0 0 15px 0 rgb(0 0 0 / 20%)',
      padding: '15px',
      backgroundColor: '#fff',
    },
    header: {
      color: '#555',
      fontSize: '1.2em',
      fontWeight: 'bold',
      buttonColor: '#555',
    },
    dayWeeks: {
      color: '#999',
      fontSize: '1em',
    },
    days: {
      color: '#222',
      selectedColor: '#eee',
      selectedBackgroundColor: '#73a4eb',
      transition: '0.2s',
    },
  },
};

export default DatePopover;
