import { groupBy } from 'lodash';
import moment from 'moment';

import { SortedDates } from '../components/Timeline/Timeline';

export const groupDatesByYearAndMonth = (dates: string[]): SortedDates => {
  const sortedDates: SortedDates = {};

  const sortedByYears = groupBy(dates, (result: string) => moment(result, 'YYYY-MM-DD').endOf('year').format('YYYY'));
  const years = Object.keys(sortedByYears);
  years.forEach((year: string) => {
    const groupedByMonth = groupBy(sortedByYears[year], (result: string) =>
      moment(result, 'YYYY-MM-DD').endOf('month').format('MM')
    );
    sortedDates[year] = groupedByMonth;
  });

  return sortedDates;
};
