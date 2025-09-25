import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Dropdown } from './Dropdown';

const defaultProps = {
  label: 'Label',
  btnContent: 'Button content',
};

type DropdownContentProps = {
  closeDropdown?: () => void;
  isVisibleDropdown?: boolean;
};

const DropdownContent = ({
  closeDropdown = () => undefined,
  isVisibleDropdown = false,
}: DropdownContentProps) => (
  <>
    Dropdown content
    {isVisibleDropdown && (
      <button type="button" onClick={closeDropdown}>
        Close dropdown
      </button>
    )}
  </>
);

describe('Dropdown', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('creates snapshot', () => {
    const { asFragment } = render(
      <Dropdown {...defaultProps}>
        <DropdownContent />
      </Dropdown>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders proper content', () => {
    render(
      <Dropdown {...defaultProps}>
        <DropdownContent />
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
        <DropdownContent />
      </Dropdown>
    );

    expect(screen.getByRole('menu')).not.toHaveClass('show');

    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(screen.getByRole('menu')).toHaveClass('show');
  });
});
