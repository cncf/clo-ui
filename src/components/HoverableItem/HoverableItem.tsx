import React from 'react';

export interface IHoverableItemProps {
  children: React.ReactNode;
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
