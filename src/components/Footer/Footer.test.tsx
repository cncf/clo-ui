import { render, screen } from '@testing-library/react';

import { Footer } from './Footer';

const defaultProps = {
  logo: <>Logo</>,
  children: <span>Content</span>,
};

describe('Footer', () => {
  it('creates snapshot', () => {
    const { asFragment } = render(<Footer {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders proper content', () => {
    render(<Footer {...defaultProps} />);

    expect(screen.getByText('Logo')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
