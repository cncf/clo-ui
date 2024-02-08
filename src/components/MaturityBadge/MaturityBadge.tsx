import { isNull, isUndefined } from 'lodash';
import React from 'react';

import { cutString } from '../../utils';
import styles from './MaturityBadge.module.css';

export enum Maturity {
  active = 'active',
  adopted = 'adopted',
  earlyadoption = 'earlyadoption',
  emeritus = 'emeritus',
  graduated = 'graduated',
  incubating = 'incubating',
  incubation = 'incubation',
  sandbox = 'sandbox',
  'working-group' = 'working-group',
}

const MaturityLabel = {
  [Maturity.active]: 'Active',
  [Maturity.adopted]: 'Adopted',
  [Maturity.earlyadoption]: 'Early adoption',
  [Maturity.emeritus]: 'Emeritus',
  [Maturity.graduated]: 'Graduated',
  [Maturity.incubating]: 'Incubating',
  [Maturity.incubation]: 'Incubation',
  [Maturity.sandbox]: 'Sandbox',
  [Maturity['working-group']]: 'Working group',
};

export interface IMaturityBadgeProps {
  maturityLevel?: Maturity | null;
  className?: string;
  maxLength?: number;
  onClick?: () => void;
}

export const MaturityBadge: React.FC<IMaturityBadgeProps> = (props: IMaturityBadgeProps) => {
  if (isUndefined(props.maturityLevel) || isNull(props.maturityLevel)) return null;

  const levelData = Object.values(Maturity).includes(props.maturityLevel)
    ? MaturityLabel[props.maturityLevel!]
    : props.maturityLevel;

  return (
    <>
      {isUndefined(props.onClick) ? (
        <div
          data-testid="maturity-badge"
          className={`badge text-dark lighterText rounded-0 position-relative ${styles.badge} ${props.className}`}
        >
          <div className="d-flex flex-row align-items-center text-capitalize">
            {!isUndefined(props.maxLength) ? cutString(levelData, props.maxLength) : levelData}
          </div>
        </div>
      ) : (
        <button
          type="button"
          data-testid="maturity-badge"
          className={`badge text-dark lighterText rounded-0 position-relative ${styles.badge} ${props.className}`}
          onClick={props.onClick}
        >
          <div className="d-flex flex-row align-items-center text-capitalize">
            {!isUndefined(props.maxLength) ? cutString(levelData, props.maxLength) : levelData}
          </div>
        </button>
      )}
    </>
  );
};
