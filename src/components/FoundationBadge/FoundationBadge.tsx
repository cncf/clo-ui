import { isNull, isUndefined } from 'lodash';
import React from 'react';

import styles from './FoundationBadge.module.css';

export enum Foundation {
  cdf = 'cdf',
  cncf = 'cncf',
  lfaidata = 'lfaidata',
}

export const FOUNDATIONS = {
  [Foundation.cdf]: {
    name: 'CDF',
  },
  [Foundation.cncf]: {
    name: 'CNCF',
  },
  [Foundation.lfaidata]: {
    name: 'LF AI & Data',
  },
};

export interface IFoundationBadgeProps {
  foundation?: Foundation | null;
  className?: string;
  onClick?: () => void;
}

export const FoundationBadge: React.FC<IFoundationBadgeProps> = (props: IFoundationBadgeProps) => {
  if (isUndefined(props.foundation) || isNull(props.foundation)) return null;

  const foundationData = FOUNDATIONS[props.foundation];

  return (
    <>
      {isUndefined(props.onClick) ? (
        <div
          data-testid="foundation-badge"
          className={`badge text-light extraLightText rounded-0 position-relative ${styles.badge} ${props.className}`}
        >
          <div className="d-flex flex-row align-items-center text-uppercase">{foundationData.name}</div>
        </div>
      ) : (
        <button
          type="button"
          data-testid="foundation-badge"
          className={`badge text-light extraLightText rounded-0 position-relative ${styles.badge} ${props.className}`}
          onClick={props.onClick}
        >
          <div className="d-flex flex-row align-items-center text-uppercase">{foundationData.name}</div>
        </button>
      )}
    </>
  );
};
