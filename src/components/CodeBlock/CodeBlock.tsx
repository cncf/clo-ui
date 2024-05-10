import { isUndefined } from 'lodash';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { tomorrowNight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { ButtonCopyToClipboard } from '../ButtonCopyToClipboard/ButtonCopyToClipboard';
import styles from './CodeBlock.module.css';

export interface ICodeBlockProps {
  language: string;
  content: string;
  withCopyBtn: boolean;
  label?: string;
  darkCode?: boolean;
  style?: { [key: string]: string | number };
  effective_theme: string;
}

export const CodeBlock = (props: ICodeBlockProps) => {
  const isDarkActive = (props.effective_theme === 'dark' && isUndefined(props.darkCode)) || props.darkCode;

  return (
    <div data-testid="code" className={`d-flex flex-row align-items-center pb-2 ${styles.codeBlock}`}>
      <SyntaxHighlighter
        language={props.language}
        style={isDarkActive ? tomorrowNight : docco}
        customStyle={{
          backgroundColor: 'var(--bg-code)',
          color: 'var(--color-font)',
          padding: '1rem',
          marginBottom: 0,
          width: props.withCopyBtn ? 'calc(100% - 1rem - 32px)' : '100%',
          ...props.style,
        }}
      >
        {props.content}
      </SyntaxHighlighter>

      {props.withCopyBtn && (
        <ButtonCopyToClipboard
          text={props.content}
          label={props.label || 'Copy code to clipboard'}
          wrapperClassName="ms-3"
        />
      )}
    </div>
  );
};
