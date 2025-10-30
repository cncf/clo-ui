import { act, render, screen } from '@testing-library/react';

import { CodeBlock } from './CodeBlock';

const defaultProps = {
  language: 'markdown',
  content: '##Sample',
  label: 'Copy btn',
  withCopyBtn: true,
  effective_theme: 'light',
};

const flushPromises = () => new Promise((resolve) => setTimeout(resolve, 0));

describe('CodeBlock', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('creates snapshot', async () => {
    const { asFragment } = render(<CodeBlock {...defaultProps} />);
    await act(async () => {
      await flushPromises();
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders proper content', async () => {
    render(<CodeBlock {...defaultProps} />);
    await act(async () => {
      await flushPromises();
    });

    const code = screen.getByTestId('code');
    expect(code).toBeInTheDocument();
    expect(code).toHaveTextContent('##Sample');

    expect(screen.getByRole('button', { name: 'Copy btn' })).toBeInTheDocument();
  });
});
