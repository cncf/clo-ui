import classnames from 'classnames';
import React, { MouseEvent as ReactMouseEvent, useEffect, useState } from 'react';

import { NoData } from '../NoData/NoData';
import styles from './Tabs.module.css';

export interface ITabsProps {
  tabs: ITabProps[];
  active: string;
  noDataContent: string;
  className?: string;
}

export interface ITabProps {
  name: string;
  title: string;
  shortTitle?: string;
  content: React.ReactNode;
}

export const Tabs = React.memo(function Tabs(props: ITabsProps) {
  const [activeTab, setActiveTab] = useState(props.active);
  const [visibleContent, setVisibleContent] = useState<React.ReactNode | undefined>();

  useEffect(() => {
    const currentActiveTab = props.tabs.find((tab: ITabProps) => tab.name === activeTab);
    if (currentActiveTab) {
      setVisibleContent(currentActiveTab.content);
    }
  }, [props.tabs, activeTab]);

  return (
    <>
      <div className={props.className}>
        <ul className={`nav nav-tabs ${styles.tabs}`}>
          {props.tabs.map((tab: ITabProps) => (
            <li className="nav-item" key={tab.name}>
              <button
                className={classnames('btn nav-item rounded-0 lightText', styles.btn, {
                  [`active btn-secondary ${styles.active}`]: tab.name === activeTab,
                })}
                onClick={(e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveTab(tab.name);
                  setVisibleContent(tab.content);
                }}
                aria-label={`Open tab ${tab.name}`}
              >
                <span className="d-none d-sm-block">{tab.title}</span>
                <span className="d-block d-sm-none">{tab.shortTitle || tab.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="tab-content mt-4">
        <div className="tab-pane fade show active">
          {visibleContent ? <>{visibleContent}</> : <NoData>{props.noDataContent}</NoData>}
        </div>
      </div>
    </>
  );
});
