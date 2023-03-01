import { isNull, isUndefined } from 'lodash';
import React, { ChangeEvent, useRef } from 'react';

export interface ISortOptionsProps {
  width: number;
  options: any[];
  by: string;
  direction?: string;
  className?: string;
  onSortChange: (value: string) => void;
}

export const SortOptions: React.FC<ISortOptionsProps> = (props: ISortOptionsProps) => {
  const selectEl = useRef<HTMLSelectElement>(null);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    props.onSortChange(event.target.value);
    forceBlur();
  };

  const forceBlur = (): void => {
    if (!isNull(selectEl) && !isNull(selectEl.current)) {
      selectEl.current.blur();
    }
  };

  return (
    <div className={`d-flex flex-nowrap align-items-center me-2 me-md-4 ${props.className}`}>
      <label className="form-label me-2 mb-0">Sort:</label>
      <select
        ref={selectEl}
        className="form-select form-select-sm rounded-0 cursorPointer"
        style={{ width: `${props.width}px` }}
        value={`${props.by}${!isUndefined(props.direction) ? `_${props.direction}` : ''}`}
        onChange={handleChange}
        aria-label="Sort options select"
      >
        {props.options.map((opt: any) => (
          <option key={`sort_${opt.label}${!isUndefined(opt.direction) ? `_${opt.direction}` : ''}`} value={opt.by}>
            {opt.label}
          </option>
        ))}
        ;
      </select>
    </div>
  );
};
