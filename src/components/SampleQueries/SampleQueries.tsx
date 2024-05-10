import { isUndefined, sampleSize } from 'lodash';
import React, { Fragment } from 'react';

export interface ISampleQueriesProps {
  queries: SampleQuery[];
  path?: string;
  className?: string;
  lineBreakIn?: number;
  prepareQueryString: (items: any) => string; // eslint-disable-line @typescript-eslint/no-explicit-any
  maxQueriesNumber: number;
}

export interface SampleQuery {
  name: string;
  filters: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export const SampleQueries = React.memo(function SampleQueries(props: ISampleQueriesProps) {
  const queries =
    props.queries.length > props.maxQueriesNumber ? sampleSize(props.queries, props.maxQueriesNumber) : props.queries;
  return (
    <>
      {queries.map((query: SampleQuery, index: number) => (
        <Fragment key={`sampleQuery_${index}`}>
          <a
            className={`badge rounded-0 border fw-normal mx-2 mt-3 text-decoration-none ${props.className}`}
            href={`/${props.path || 'search'}${props.prepareQueryString(query.filters)}`}
            target="_self"
            rel="noopener noreferrer"
            aria-label={`Filter by ${query.name}`}
          >
            {query.name}
          </a>
          {!isUndefined(props.lineBreakIn) && index === props.lineBreakIn - 1 && (
            <div className="d-block w-100" data-testid="sampleQueryBreakLine" />
          )}
        </Fragment>
      ))}
    </>
  );
});
