import { endOfMonth, endOfYear, format, parseISO } from 'date-fns';
import { groupBy } from 'lodash';

import { SortedDates } from '../components/Timeline/Timeline';

export const groupDatesByYearAndMonth = (dates: string[]): SortedDates => {
  const sortedDates: SortedDates = {};

  const sortedByYears = groupBy(dates, (result: string) => format(endOfYear(parseISO(result)), 'yyyy'));
  const years = Object.keys(sortedByYears);
  years.forEach((year: string) => {
    const groupedByMonth = groupBy(sortedByYears[year], (result: string) => format(endOfMonth(parseISO(result)), 'MM'));
    sortedDates[year] = groupedByMonth;
  });

  return sortedDates;
};
