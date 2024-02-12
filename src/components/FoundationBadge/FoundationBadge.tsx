import { isNull, isUndefined } from 'lodash';
import React from 'react';

import { cutString } from '../../utils';
import styles from './FoundationBadge.module.css';

export enum Foundation {
  aswf = 'aswf',
  cdf = 'cdf',
  cncf = 'cncf',
  lfaidata = 'lfaidata',
  lfenergy = 'lfenergy',
  lfnetworking = 'lfnetworking',
  openmainframeproject = 'openmainframeproject',
}

export const FOUNDATIONS = {
  [Foundation.aswf]: {
    name: 'ASWF',
  },
  [Foundation.cdf]: {
    name: 'CDF',
  },
  [Foundation.cncf]: {
    name: 'CNCF',
  },
  [Foundation.lfaidata]: {
    name: 'LF AI & Data',
  },
  [Foundation.lfenergy]: {
    name: 'LF Energy',
  },
  [Foundation.lfnetworking]: {
    name: 'LF Networking',
  },
  [Foundation.openmainframeproject]: {
    name: 'OMP',
  },
};

export interface IFoundationBadgeProps {
  foundation?: Foundation | null;
  className?: string;
  maxLength?: number;
  onClick?: () => void;
}

export const FoundationBadge: React.FC<IFoundationBadgeProps> = (props: IFoundationBadgeProps) => {
  if (isUndefined(props.foundation) || isNull(props.foundation)) return null;

  const foundationData = FOUNDATIONS[props.foundation];
  const foundationName = !isUndefined(foundationData) ? foundationData.name : props.foundation;

  return (
    <>
      {isUndefined(props.onClick) ? (
        <div
          data-testid="foundation-badge"
          className={`badge text-light extraLightText rounded-0 position-relative ${styles.badge} ${props.className}`}
        >
          <div className="d-flex flex-row align-items-center text-uppercase">
            {!isUndefined(props.maxLength) ? cutString(foundationName, props.maxLength) : foundationName}
          </div>
        </div>
      ) : (
        <button
          type="button"
          data-testid="foundation-badge"
          className={`badge text-light extraLightText rounded-0 position-relative ${styles.badge} ${props.className}`}
          onClick={props.onClick}
        >
          <div className="d-flex flex-row align-items-center text-uppercase">
            {!isUndefined(props.maxLength) ? cutString(foundationName, props.maxLength) : foundationName}
          </div>
        </button>
      )}
    </>
  );
};
