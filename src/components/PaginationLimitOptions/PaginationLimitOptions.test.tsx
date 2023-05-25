import { fireEvent, render, screen } from '@testing-library/react';

import { PaginationLimitOptions } from './PaginationLimitOptions';

const mockOnPaginationLimitChange = jest.fn();

const defaultProps = {
  limit: 20,
  onPaginationLimitChange: mockOnPaginationLimitChange,
};

describe('PaginationLimit', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('creates snapshot', () => {
    const { asFragment } = render(<PaginationLimitOptions {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders proper content', () => {
    render(<PaginationLimitOptions {...defaultProps} />);

    expect(screen.getByText('Show:')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getAllByRole('option').length).toBe(3);
    expect(screen.getByRole('option', { name: '20' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '40' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '60' })).toBeInTheDocument();
    expect((screen.getByRole('option', { name: '20' }) as HTMLOptionElement).selected).toBe(true);

    expect(screen.getByLabelText('Pagination limit select')).toBeInTheDocument();
    expect(screen.getByLabelText('Pagination limit select')).toHaveValue('20');
  });

  it('renders limit from context', () => {
    render(<PaginationLimitOptions {...defaultProps} limit={60} />);

    expect((screen.getByRole('option', { name: '60' }) as HTMLOptionElement).selected).toBe(true);
  });

  it('calls onChange to update select', () => {
    render(<PaginationLimitOptions {...defaultProps} />);

    const select = screen.getByRole('combobox');
    fireEvent.change(select, '40');

    expect(mockOnPaginationLimitChange).toHaveBeenCalledTimes(1);
    expect(mockOnPaginationLimitChange).toHaveBeenCalledWith(20);
  });
});
