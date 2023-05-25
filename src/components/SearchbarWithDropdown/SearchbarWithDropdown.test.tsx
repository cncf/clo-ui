import { render, screen } from '@testing-library/react';

import { SearchbarWithDropdown } from './SearchbarWithDropdown';

const searchProjectsMock = jest.fn();
const onSearchMock = jest.fn();
const onCleanSearchValueMock = jest.fn();
const openProjectMock = jest.fn();

const defaultProps = {
  effective_theme: 'light',
  searchProjects: searchProjectsMock,
  onSearch: onSearchMock,
  onCleanSearchValue: onCleanSearchValueMock,
  openProject: openProjectMock,
  searchParams: new URLSearchParams(''),
};

describe('SearchbarWithDropdown', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('creates snapshot', () => {
    const { asFragment } = render(<SearchbarWithDropdown {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders proper content', () => {
    render(<SearchbarWithDropdown {...defaultProps} />);

    expect(screen.getByPlaceholderText('Search projects')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Clear search' })).toBeNull();
    expect(screen.getByRole('button', { name: 'Search text' })).toBeInTheDocument();
  });
});
