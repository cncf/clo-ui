import classNames from 'classnames';
import { isUndefined } from 'lodash';
import React, { useEffect, useId, useRef, useState } from 'react';

import { useOutsideClick } from '../../hooks/useOutsideClick';
import styles from './DropdownOnHover.module.css';

export interface IDropdownOnHoverProps {
  linkContent: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  dropdownClassName?: string;
  arrowClassName?: string;
  width?: number;
  tooltipStyle?: boolean;
  onClose?: () => void;
  ariaLabel?: string;
}

export const DropdownOnHover = (props: IDropdownOnHoverProps) => {
  const ref = useRef(null);
  const dropdownId = useId();
  const [openStatus, setOpenStatus] = useState(false);
  const [onLinkHover, setOnLinkHover] = useState(false);
  const [onDropdownHover, setOnDropdownHover] = useState(false);
  useOutsideClick([ref], openStatus, () => setOpenStatus(false));
  const arialabel = props.ariaLabel || 'Toggle dropdown';

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!openStatus && (onLinkHover || onDropdownHover)) {
      timeout = setTimeout(() => {
        setOpenStatus(true);
      }, 100);
    }
    if (openStatus && !onLinkHover && !onDropdownHover) {
      timeout = setTimeout(() => {
        if (!isUndefined(props.onClose)) {
          props.onClose();
        }
        // Delay to hide the dropdown to let some time for changing between dropdown and link
        setOpenStatus(false);
      }, 50);
    }
    return () => {
      if (!isUndefined(timeout)) {
        clearTimeout(timeout);
      }
    };
  }, [onLinkHover, onDropdownHover, openStatus]);

  return (
    <>
      <div className={props.className}>
        <div className="position-absolute">
          <div ref={ref} onMouseEnter={() => setOnDropdownHover(true)} onMouseLeave={() => setOnDropdownHover(false)}>
            <div
              role="complementary"
              id={dropdownId}
              className={classNames(
                'dropdown-menu rounded-0 text-wrap',
                styles.dropdown,
                props.dropdownClassName,
                { [`tooltipDropdown ${styles.tooltip}`]: props.tooltipStyle },
                {
                  show: openStatus,
                }
              )}
              style={{
                width: props.width ? `${props.width}px` : 'auto',
              }}
              aria-hidden={!openStatus}
            >
              {props.tooltipStyle && (
                <div className={`arrow ${styles.arrow} ${props.arrowClassName}`} data-testid="dropdown-arrow" />
              )}
              <div className="ps-3 pe-2 pt-1">{props.children}</div>
            </div>
          </div>
        </div>

        <div
          className="cursorDefault"
          role="button"
          onMouseEnter={(e) => {
            e.preventDefault();
            setOnLinkHover(true);
          }}
          onMouseLeave={() => {
            setOnLinkHover(false);
          }}
          // Prevent going to a different page when clicking on the link
          onClick={(e) => {
            e.stopPropagation();
          }}
          aria-expanded={openStatus}
          aria-haspopup="true"
          aria-controls={dropdownId}
          aria-label={arialabel}
        >
          {props.linkContent}
        </div>
      </div>
    </>
  );
};
