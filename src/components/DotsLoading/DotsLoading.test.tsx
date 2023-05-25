import { render, screen } from '@testing-library/react';

import { DotsLoading } from './DotsLoading';

describe('DotsLoading', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('creates snapshot', () => {
    const { asFragment } = render(<DotsLoading />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders proper content', () => {
    render(<DotsLoading />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
