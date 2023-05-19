import { isNull, isUndefined } from 'lodash';
import React from 'react';
import { MdCategory } from 'react-icons/md';

import styles from './CategoryBadge.module.css';

export interface ICategoryBadgeProps {
  category?: string | null;
  className?: string;
}

export const CategoryBadge: React.FC<ICategoryBadgeProps> = (props: ICategoryBadgeProps) => {
  if (isUndefined(props.category) || isNull(props.category)) return null;

  return (
    <div
      data-testid="category-badge"
      className={`badge text-dark lighterText rounded-0 position-relative ${styles.badge} ${props.className}`}
    >
      <div className="d-flex flex-row align-items-center text-capitalize">
        <MdCategory className="me-2" />
        {props.category}
      </div>
    </div>
  );
};
