import React from 'react';

import styles from './SubNavbar.module.css';

export interface ISubNavbarProps {
  children: React.ReactNode;
}

export const SubNavbar = (props: ISubNavbarProps) => {
  return (
    <nav className={`navbar navbar-expand-sm ${styles.navbar}`} role="navigation">
      <div className="container-lg">{props.children}</div>
    </nav>
  );
};
