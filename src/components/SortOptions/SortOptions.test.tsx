import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SortOptions } from './SortOptions';

const mockOnSortChange = jest.fn();

const defaultProps = {
  width: 300,
  options: [
    {
      label: 'Applied at (asc)',
      by: 'date',
      direction: 'asc',
    },
    {
      label: 'Applied at (desc)',
      by: 'date',
      direction: 'desc',
    },
  ],
  by: 'date',
  direction: 'asc',
  onSortChange: mockOnSortChange,
};

describe('SortOptions', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('creates snapshot', () => {
    const { asFragment } = render(<SortOptions {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders proper content', () => {
    render(<SortOptions {...defaultProps} />);

    expect(screen.getByText('Sort:')).toBeInTheDocument();

    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getAllByRole('option').length).toBe(2);
    expect(screen.getByRole('option', { name: 'Applied at (asc)' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Applied at (desc)' })).toBeInTheDocument();
    expect((screen.getByRole('option', { name: 'Applied at (asc)' }) as HTMLOptionElement).selected).toBe(true);

    expect(screen.getByLabelText('Sort options select')).toBeInTheDocument();
    expect(screen.getByLabelText('Sort options select')).toHaveValue('date_asc');
  });

  it('calls onChange to update select', async () => {
    render(<SortOptions {...defaultProps} />);

    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'Applied at (desc)' })
    );

    expect(mockOnSortChange).toHaveBeenCalledTimes(1);
    expect(mockOnSortChange).toHaveBeenCalledWith('date_desc');
  });
});
