import { render, screen } from '@testing-library/react';

import { Searchbar } from './Searchbar';

const onValueChangeMock = jest.fn();
const onSearchMock = jest.fn();
const cleanSearchValueMock = jest.fn();

const defaultProps = {
  placeholder: 'Placeholder text',
  value: '',
  onValueChange: onValueChangeMock,
  onSearch: onSearchMock,
  cleanSearchValue: cleanSearchValueMock,
  bigSize: false,
};

describe('Searchbar', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('creates snapshot', () => {
    const { asFragment } = render(<Searchbar {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders proper content', () => {
    render(<Searchbar {...defaultProps} />);

    expect(screen.getByPlaceholderText('Placeholder text')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Clear search' })).toBeNull();
    expect(screen.getByRole('button', { name: 'Search text' })).toBeInTheDocument();
  });
});
