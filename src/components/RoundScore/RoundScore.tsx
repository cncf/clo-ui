import { isUndefined } from 'lodash';
import React from 'react';

import { getCategoryColor } from '../../utils/getCategoryColor';
import { roundScoreValue } from '../../utils/roundScoreValue';
import styles from './RoundScore.module.css';

export interface IRoundScoreProps {
  score?: number;
  className?: string;
}

export const RoundScore = (props: IRoundScoreProps) => {
  const color = getCategoryColor(props.score);

  return (
    <div
      data-testid="global-score"
      className={`d-flex align-items-center justify-content-center rounded-pill ${styles.score} ${props.className}`}
    >
      <div className={styles.chart}>
        <svg viewBox="0 0 36 36" className="d-block">
          <path
            className={styles.circleBg}
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          {!isUndefined(props.score) && (
            <path
              className={styles.circle}
              strokeDasharray={`${props.score}, 100`}
              style={{ stroke: `var(--clo-${color})` }}
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          )}

          <text x="18" y="23" className={styles.value}>
            {props.score ? roundScoreValue(props.score) : '-'}
          </text>
        </svg>
      </div>
    </div>
  );
};
