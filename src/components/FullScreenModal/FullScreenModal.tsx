import isUndefined from 'lodash/isUndefined';
import React, { MouseEvent as ReactMouseEvent, useEffect, useState } from 'react';

import { useBodyScroll } from '../../hooks';
import styles from './FullScreenModal.module.css';

export interface IFullScreenModalProps {
  children: JSX.Element | JSX.Element[];
  open?: boolean;
  onClose?: () => void;
}

export const FullScreenModal = (props: IFullScreenModalProps) => {
  const [openStatus, setOpenStatus] = useState(props.open || false);
  useBodyScroll(openStatus, 'modal');

  const closeModal = () => {
    setOpenStatus(false);
    if (!isUndefined(props.onClose)) {
      props.onClose();
    }
  };

  useEffect(() => {
    if (!isUndefined(props.open)) {
      setOpenStatus(props.open);
    }
  }, [props.open]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []); /* eslint-disable-line react-hooks/exhaustive-deps */

  if (!openStatus) return null;

  return (
    <div className={`position-fixed overflow-hidden p-3 top-0 bottom-0 start-0 end-0 ${styles.modal}`} role="dialog">
      <div className={`position-absolute ${styles.closeWrapper}`}>
        <button
          type="button"
          className={`btn-close btn-close-white opacity-100 fs-5 ${styles.close}`}
          onClick={(e: ReactMouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            closeModal();
          }}
          aria-label="Close"
        ></button>
      </div>
      <div className="d-flex flex-column h-100 w-100">{props.children}</div>
    </div>
  );
};
