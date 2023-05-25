import { render, screen } from '@testing-library/react';

import { Card } from './Card';

const defaultProps = {
  hoverable: false,
};

describe('Card', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('creates snapshot', () => {
    const { asFragment } = render(
      <Card {...defaultProps}>
        <>card content</>
      </Card>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders proper content', () => {
    render(
      <Card {...defaultProps}>
        <>card content</>
      </Card>
    );

    expect(screen.getByText('card content')).toBeInTheDocument();
  });
});
