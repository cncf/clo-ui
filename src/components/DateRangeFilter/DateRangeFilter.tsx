import { isEmpty, isEqual, isNil, omitBy } from 'lodash';
import moment from 'moment';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

import { useOutsideClick } from '../../hooks';
import { DateRangeBtn } from './DateRangeBtn';
import styles from './DateRangeFilter.module.css';

export interface IDateRangeFilterProps {
  initialDate: string;
  from?: string;
  to?: string;
  onDateRangeChange: (dates: DateRangeOpts) => void;
}

export interface DateRangeOpts {
  from?: string;
  to?: string;
}

export enum DateRange {
  From = 'from',
  To = 'to',
}

export const DateRangeFilter = (props: IDateRangeFilterProps) => {
  const END_DATE = moment().format('YYYY-MM-DD');
  const [dateFrom, setDateFrom] = useState<string>(props.initialDate);
  const [dateTo, setDateTo] = useState<string>(END_DATE);
  const ref = useRef<HTMLDivElement>(null);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  useOutsideClick([ref], showCalendar, () => setShowCalendar(false));

  const updateRange = (dates: DateRangeOpts) => {
    if (
      !isEmpty(dates) &&
      !isEqual(
        dates,
        omitBy(
          {
            from: props.from,
            to: props.to,
          },
          isNil
        )
      )
    ) {
      props.onDateRangeChange(dates);
    }
  };

  const onDateChange = (date: string, type: DateRange) => {
    switch (type) {
      case DateRange.From:
        setDateFrom(date);
        return;
      case DateRange.To:
        setDateTo(date);
        return;
    }
  };

  useEffect(() => {
    setDateFrom(props.from || props.initialDate);
    setDateTo(props.to || END_DATE);
  }, [props.from, props.to]);

  useEffect(() => {
    const times: DateRangeOpts = {};
    if (dateTo !== END_DATE) {
      times[DateRange.To] = dateTo;
    }
    if (dateFrom !== props.initialDate) {
      times[DateRange.From] = dateFrom;
    }
    updateRange(times);
  }, [dateTo, dateFrom]);

  return (
    <>
      <div className={`fw-bold text-uppercase text-primary ${styles.categoryTitle}`}>
        <small>Accepted</small>
      </div>

      <div className={`flex-column mb-4 ${styles.mobileDateRange}`}>
        <div className="my-2">
          <label htmlFor="from" className={`form-label text-uppercase text-muted ${styles.label}`}>
            From:
          </label>
          <input
            type="date"
            className={`form-control form-control-sm rounded-0 ${styles.input}`}
            min={props.initialDate}
            max={dateTo}
            id="from"
            value={dateFrom}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onDateChange(e.target.value, DateRange.From)}
          />
        </div>
        <div>
          <label htmlFor="to" className={`form-label text-uppercase text-muted ${styles.label}`}>
            To:
          </label>
          <input
            type="date"
            className={`form-control form-control-sm rounded-0 ${styles.input}`}
            min={dateFrom}
            max={END_DATE}
            id="to"
            value={dateTo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onDateChange(e.target.value, DateRange.To)}
          />
        </div>
      </div>

      <div className={`mt-3 mb-4 ${styles.desktopDateRange}`}>
        <DateRangeBtn
          date={dateFrom}
          min={props.initialDate}
          max={dateTo}
          onDateChange={onDateChange}
          type={DateRange.From}
        />
        <div className="mt-3">
          <DateRangeBtn date={dateTo} min={dateFrom} max={END_DATE} onDateChange={onDateChange} type={DateRange.To} />
        </div>
      </div>
    </>
  );
};
