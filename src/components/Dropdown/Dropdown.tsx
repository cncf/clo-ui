import classNames from 'classnames';
import isUndefined from 'lodash/isUndefined';
import React, { useEffect, useRef, useState } from 'react';

import { useOutsideClick } from '../../hooks/useOutsideClick';
import styles from './Dropdown.module.css';

export interface IDropdownProps {
  label: string;
  btnContent: React.ReactNode;
  children: React.ReactElement<{
    closeDropdown?: () => void;
    isVisibleDropdown?: boolean;
  }>;
  btnClassName?: string;
  dropdownClassName?: string;
  onClose?: () => void;
  disabled?: boolean;
}

export const Dropdown: React.FC<IDropdownProps> = (props: IDropdownProps) => {
  const [visibleDropdown, setVisibleDropdown] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideClick([ref], visibleDropdown, () => setVisibleDropdown(false));

  const closeDropdown = () => {
    setVisibleDropdown(false);
  };

  useEffect(() => {
    if (!visibleDropdown && !isUndefined(props.onClose)) {
      props.onClose();
    }
  }, [visibleDropdown]);

  return (
    <div ref={ref} className="position-relative">
      <button
        className={`btn btn-md btn-link text-white rounded-0 lh-1 ${styles.btn} ${props.btnClassName}`}
        type="button"
        onClick={() => setVisibleDropdown(!visibleDropdown)}
        aria-label={`${props.label} button`}
        aria-expanded={visibleDropdown}
        disabled={props.disabled}
      >
        {props.btnContent}
      </button>

      <div
        role="menu"
        className={classNames('dropdown-menu rounded-0', styles.dropdown, props.dropdownClassName, {
          show: visibleDropdown,
        })}
      >
        <div className={`dropdown-arrow ${styles.arrow}`} />
        {React.isValidElement(props.children)
          ? props.children.type === React.Fragment
            ? (() => {
                const fragment = props.children as React.ReactElement<{ children?: React.ReactNode }>;
                return (
                  <>
                    {React.Children.map(fragment.props.children, (child) =>
                      React.isValidElement(child)
                        ? React.cloneElement(child as React.ReactElement<Record<string, unknown>>, {
                            closeDropdown: closeDropdown,
                            isVisibleDropdown: visibleDropdown,
                          })
                        : child
                    )}
                  </>
                );
              })()
            : React.cloneElement(props.children, { closeDropdown: closeDropdown, isVisibleDropdown: visibleDropdown })
          : props.children}
      </div>
    </div>
  );
};
