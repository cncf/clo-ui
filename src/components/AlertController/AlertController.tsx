import classnames from 'classnames';
import isNull from 'lodash/isNull';
import React, { useState } from 'react';

import styles from './AlertController.module.css';
import { alertDispatcher } from './alertDispatcher';

export interface Alert {
  type: 'success' | 'danger' | 'warning' | 'info';
  message: string;
  dismissOn?: number;
  autoClose?: boolean;
}

export const AlertController = () => {
  const [alert, setAlert] = useState<Alert | null>(null);

  alertDispatcher.subscribe({
    updateAlertWrapper: (alert: Alert | null) => setAlert(alert),
  });

  const onClose = () => {
    alertDispatcher.postAlert(null);
  };

  return (
    <div className="position-relative" aria-hidden={isNull(alert)} tabIndex={-1}>
      <div
        data-testid="alertController"
        className={classnames(
          `alert alert-dismissible position-fixed rounded-0`,
          `alert-${!isNull(alert) && alert.type ? alert.type : 'warning'}`,
          styles.alert,
          { [`show ${styles.active}`]: !isNull(alert) },
          { fade: isNull(alert) }
        )}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        {!isNull(alert) && (
          <>
            {alert.message}
            <div className={styles.btnClose}>
              <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
