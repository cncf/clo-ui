import React from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';

import styles from './SelectedFilterBadge.module.css';

export interface ISelectedFilterBadgeProps {
  categoryName: string;
  category: string;
  filterName: string;
  filter: string;
  onClick: (category: string, filter: string) => void;
}

export const SelectedFilterBadge: React.FC<ISelectedFilterBadgeProps> = (props: ISelectedFilterBadgeProps) => {
  return (
    <span
      role="listitem"
      className={`badge bg-secondary rounded-0 text-light me-3 my-1 ${styles.badge} lightBorder`}
      key={`filter_${props.category}_${props.filter}`}
    >
      <div className="d-flex flex-row align-items-baseline">
        <div className={styles.content}>
          <small className="text-uppercase fw-normal me-2">{props.categoryName}:</small>
          <span>{props.filterName}</span>
        </div>
        <button
          className={`btn btn-link btn-sm lh-1 ${styles.btn}`}
          onClick={() => props.onClick(props.category, props.filter)}
          aria-label={`Remove ${props.filterName} filter`}
        >
          <IoMdCloseCircleOutline />
        </button>
      </div>
    </span>
  );
};
