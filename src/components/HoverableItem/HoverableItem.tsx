import React from 'react';

export interface IHoverableItemProps {
  children: JSX.Element | JSX.Element[] | string;
  onHover?: () => void;
  onLeave?: () => void;
}

export const HoverableItem = (props: IHoverableItemProps) => (
  <div
    onMouseEnter={() => {
      if (props.onHover) {
        props.onHover();
      }
    }}
    onMouseLeave={() => {
      if (props.onLeave) {
        props.onLeave();
      }
    }}
  >
    {props.children}
  </div>
);
