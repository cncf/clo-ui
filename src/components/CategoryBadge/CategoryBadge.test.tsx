import { render, screen } from '@testing-library/react';

import { CategoryBadge } from './CategoryBadge';

const defaultProps = {
  category: 'sandbox',
};

describe('CategoryBadge', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('creates snapshot', () => {
    const { asFragment } = render(<CategoryBadge {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders proper content', () => {
    render(<CategoryBadge {...defaultProps} />);

    expect(screen.getByText('sandbox')).toBeInTheDocument();
  });
});
