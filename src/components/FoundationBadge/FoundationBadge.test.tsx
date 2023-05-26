import { render, screen } from '@testing-library/react';

import { Foundation, FoundationBadge } from './FoundationBadge';

const defaultProps = {
  foundation: Foundation.cncf,
};

describe('FoundationBadge', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('creates snapshot', () => {
    const { asFragment } = render(<FoundationBadge {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders proper content', () => {
    render(<FoundationBadge {...defaultProps} />);

    expect(screen.getByText('CNCF')).toBeInTheDocument();
    expect(screen.getByTestId('foundation-badge')).toBeInTheDocument();
  });
});
