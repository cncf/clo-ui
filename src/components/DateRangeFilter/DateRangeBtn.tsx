import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import classNames from 'classnames';
import moment from 'moment';
import React, { useRef, useState } from 'react';
import { Calendar } from 'react-date-range';

import { useOutsideClick } from '../../hooks';
import styles from './DateRangeBtn.module.css';
import { DateRange } from './types';

export interface IDateRangeBtnProps {
  date: string;
  min: string;
  max: string;
  type: DateRange;
  onDateChange: (date: string, type: DateRange) => void;
}

const LEGEND = {
  [DateRange.From]: 'From',
  [DateRange.To]: 'To',
};

export const DateRangeBtn = (props: IDateRangeBtnProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  useOutsideClick([ref], showCalendar, () => setShowCalendar(false));

  const handleChange = (date: Date) => {
    props.onDateChange(moment(date).format('YYYY-MM-DD'), props.type);
    setShowCalendar(false);
  };

  return (
    <>
      <div className={`text-uppercase text-muted mb-1 ${styles.legend}`}>{LEGEND[props.type]}:</div>
      <button
        className={`btn btn-sm btn-outline-secondary rounded-0 ${styles.dateBtn}`}
        onClick={() => setShowCalendar(!showCalendar)}
        aria-label={`Open calendar to choose date ${props.type}`}
      >
        {moment(props.date).format('MMM D, YYYY')}
      </button>

      <div
        role="complementary"
        ref={ref}
        className={classNames(styles.dropdown, 'dropdown-menu tooltipDropdown rounded-0 text-wrap mt-2 p-0', {
          show: showCalendar,
        })}
      >
        <div className={`arrow ${styles.arrow}`} />

        <Calendar
          onChange={handleChange}
          minDate={moment(props.min).toDate()}
          maxDate={moment(props.max).toDate()}
          date={moment(props.date).toDate()}
          className={styles.calendar}
        />
      </div>
    </>
  );
};
