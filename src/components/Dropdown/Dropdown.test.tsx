import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Dropdown } from './Dropdown';

const defaultProps = {
  label: 'Label',
  btnContent: 'Button content',
};

describe('Dropdown', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('creates snapshot', () => {
    const { asFragment } = render(
      <Dropdown {...defaultProps}>
        <>Dropdown content</>
      </Dropdown>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders proper content', () => {
    render(
      <Dropdown {...defaultProps}>
        <>Dropdown content</>
      </Dropdown>
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Button content');
    expect(screen.getByLabelText('Label button')).toBeInTheDocument();
    expect(screen.getByRole('menu')).toBeInTheDocument();
    expect(screen.getByRole('menu')).not.toHaveClass('show');
  });

  it('opens dropdown', async () => {
    render(
      <Dropdown {...defaultProps}>
        <>Dropdown content</>
      </Dropdown>
    );

    expect(screen.getByRole('menu')).not.toHaveClass('show');

    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(screen.getByRole('menu')).toHaveClass('show');
  });
});
