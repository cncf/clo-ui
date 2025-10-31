import classNames from 'classnames';
import { format, parseISO } from 'date-fns';
import isUndefined from 'lodash/isUndefined';
import uniq from 'lodash/uniq';
import React, { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react';
import { RiHistoryFill } from 'react-icons/ri';

import { groupDatesByYearAndMonth } from '../../utils/groupDatesByYearAndMonth';
import styles from './Timeline.module.css';

export interface SortedDates {
  [key: string]: {
    [key: string]: string[];
  };
}

export interface ITimelineProps {
  className?: string;
  snapshots: string[];
  activeDate?: string;
  currentSearch?: string;
  setActiveDate: Dispatch<SetStateAction<string | undefined>>;
}

const MIN_NUMBER_SNAPSHOTS = 3;

export const Timeline = (props: ITimelineProps) => {
  const [today] = useState<string>(format(new Date(), 'yyyy-MM-dd'));
  const [availablaSnapshots, setAvailablaSnapshots] = useState<string[]>([]);
  const [dates, setDates] = useState<SortedDates | undefined>();

  useEffect(() => {
    const formatDates = () => {
      const allDates = uniq([today, ...props.snapshots]);
      setAvailablaSnapshots(allDates);
      setDates(groupDatesByYearAndMonth(allDates));
    };
    formatDates();
  }, [props.snapshots]);

  if (isUndefined(dates) || availablaSnapshots.length < MIN_NUMBER_SNAPSHOTS) return null;

  return (
    <div className={`d-none d-sm-flex ${props.className}`}>
      <div>
        <div className="d-flex flex-column text-center border">
          <div className="mt-2 pb-3 fs-4">
            <RiHistoryFill />
          </div>
          <div className="d-flex flex-column text-center">
            {Object.keys(dates)
              .sort()
              .reverse()
              .map((year: string) => {
                return (
                  <div className="mb-3" key={`year_${year}`}>
                    <div className={`fw-bold w-100 border-top border-bottom px-1 mb-3 ${styles.year}`}>{year}</div>
                    {Object.keys(dates[year])
                      .sort()
                      .reverse()
                      .map((month: string) => {
                        return (
                          <Fragment key={`date_${year}_${month}`}>
                            <div className={`position-relative mt-3 mb-2 fw-bold text-uppercase ${styles.month}`}>
                              {format(new Date(2000, Number(month) - 1, 1), 'MMM')}
                            </div>
                            <div className="d-flex flex-column align-items-center">
                              {dates[year][month]
                                .sort()
                                .reverse()
                                .map((time: string) => {
                                  const isToday = time === today;
                                  const selectedDate = props.activeDate || today;
                                  const isActive = selectedDate === time;

                                  return (
                                    <button
                                      key={`time_${time}`}
                                      className={classNames(
                                        'position-relative btn btn-link text-decoration-none text-center text-muted rounded-circle my-1 p-0',
                                        styles.dot,
                                        {
                                          [styles.activeDot]: isActive,
                                        }
                                      )}
                                      onClick={() => {
                                        props.setActiveDate(!isToday ? time : undefined);
                                      }}
                                      disabled={isActive}
                                      aria-label={`Opens snapshot: ${format(parseISO(time), "do MMM ''yy")}`}
                                    >
                                      <div className={styles.content}>{format(parseISO(time), 'd')}</div>
                                    </button>
                                  );
                                })}
                            </div>
                          </Fragment>
                        );
                      })}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
