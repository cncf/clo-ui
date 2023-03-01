import React from 'react';

import styles from './CheckSetBadge.module.css';

export enum CheckSet {
  Code = 'code',
  CodeLite = 'code-lite',
  Community = 'community',
  Docs = 'docs',
}

export interface ICheckSetBadgeProps {
  checkSets: CheckSet[];
  className?: string;
}

export const CheckSetBadge = (props: ICheckSetBadgeProps) => {
  return (
    <div className={`d-inline-flex ${props.className}`}>
      <div
        data-testid="repo-kind-badge"
        className={`badge text-secondary border border-secondary rounded-0 position-relative text-uppercase ${styles.badge}`}
      >
        <div className="d-flex flex-row align-items-center">
          {props.checkSets.map((k: CheckSet, index: number) => {
            return (
              <React.Fragment key={`kind_${k}`}>
                {index !== 0 && <div className={`px-1 position-relative ${styles.symbol}`}>+</div>}
                {k}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
