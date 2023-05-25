import { render, screen } from '@testing-library/react';

import { CheckSet, CheckSetBadge } from './CheckSetBadge';

const defaultProps = {
  checkSets: ['code', 'community'] as CheckSet[],
};

describe('CheckSetBadge', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('creates snapshot', () => {
    const { asFragment } = render(<CheckSetBadge {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders proper content', () => {
    render(<CheckSetBadge {...defaultProps} />);

    const badge = screen.getByTestId('checkset-badge');
    expect(badge).toHaveTextContent('code+community');
  });
});
