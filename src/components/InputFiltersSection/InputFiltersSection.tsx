import { isNull, isUndefined } from 'lodash';
import { KeyboardEvent, useRef, useState } from 'react';
import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { GoCheck } from 'react-icons/go';
import { IoMdCloseCircleOutline } from 'react-icons/io';

import { FilterSection } from '../FiltersSection/FiltersSection';
import styles from './InputFiltersSection.module.css';

export interface IInputFiltersSectionProps {
  section: FilterSection;
  device: string;
  activeFilters?: string[];
  inputType?: string;
  decoratorActiveFilter?: string | JSX.Element;
  onChange: (name: string, value: string, checked: boolean) => void;
}

export const InputFiltersSection = (props: IInputFiltersSectionProps) => {
  const [value, setValue] = useState<string>('');
  const inputEl = useRef<HTMLInputElement>(null);

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    switch (e.key) {
      case 'Enter':
        e.preventDefault();
        onSearch();
        forceBlur();
        return;
      default:
        if (props.inputType === 'number') {
          if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
          }
        }
        return;
    }
  };

  const forceBlur = (): void => {
    if (!isNull(inputEl) && !isNull(inputEl.current)) {
      inputEl.current.blur();
    }
  };

  const onSearch = () => {
    if (value !== '') {
      props.onChange(props.section.key!, value, true);
    }
    setValue('');
  };

  return (
    <>
      <div className={`fw-bold text-uppercase text-primary ${styles.categoryTitle}`}>
        <small>{props.section.title}</small>
      </div>

      <div className="mt-2 mb-3">
        <div className="input-group input-group-sm mb-3">
          <input
            ref={inputEl}
            type={props.inputType || 'text'}
            pattern={props.inputType === 'number' ? '[0-9]*' : undefined}
            className="form-control border rounded-0"
            value={value}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="none"
            spellCheck="false"
            placeholder={props.section.placeholder || `Search ${props.section.key || ''}`}
            onKeyDown={onKeyDown}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-sm btn-secondary rounded-0"
              type="button"
              disabled={value === ''}
              onClick={() => {
                if (value !== '') {
                  props.onChange(props.section.key!, value, true);
                }
              }}
            >
              <FiPlus />
            </button>
          </div>
        </div>
      </div>

      {!isUndefined(props.activeFilters) && (
        <>
          {props.activeFilters.map((filter: string) => {
            return (
              <div className={`d-flex flex-row align-items-center ${styles.activeFilter}`}>
                <div className={`d-flex align-items-center justify-content-center ${styles.icon}`}>
                  <GoCheck />
                </div>
                <div className="px-2">
                  {props.decoratorActiveFilter || ''}
                  {filter}
                </div>
                <button
                  className={`btn btn-link text-decoration-none py-0 px-2 position-relative ${styles.btnRemove}`}
                  onClick={() => {
                    props.onChange(props.section.key!, filter, false);
                  }}
                  aria-label={`Remove ${filter}`}
                >
                  <IoMdCloseCircleOutline />
                </button>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
