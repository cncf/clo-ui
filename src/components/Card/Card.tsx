import classNames from 'classnames';
import { isUndefined } from 'lodash';
import React from 'react';

import styles from './Card.module.css';

export interface ICardProps {
  wrapperClassName?: string;
  className?: string;
  children: React.ReactNode;
  hoverable: boolean;
  onClick?: () => void;
}

export const Card: React.FC<ICardProps> = (props: ICardProps) => {
  return (
    <div className={props.wrapperClassName} role="listitem">
      <div
        className={classNames(
          'card rounded-0 p-0 h-100 mw-100 d-flex text-reset text-decoration-none',
          props.className,
          {
            [styles.hoverable]: props.hoverable,
          }
        )}
        onClick={props.onClick || undefined}
        role={!isUndefined(props.onClick) ? 'button' : ''}
      >
        {props.children}
      </div>
    </div>
  );
};
