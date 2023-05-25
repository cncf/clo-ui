import { render, screen } from '@testing-library/react';

import { FiltersSection } from './FiltersSection';

const onChangeMock = jest.fn();

const defaultProps = {
  section: {
    key: 'foundation',
    title: 'Foundation',
    options: [
      { value: 'cncf', name: 'CNCF' },
      { value: 'lfaidata', name: 'LF AI & Data' },
    ],
  },
  visibleTitle: false,
  device: 'desktop',
  activeFilters: [],
  onChange: onChangeMock,
};

const openMock = jest.fn();
window.open = openMock;

describe('FiltersSection', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('creates snapshot', () => {
    const { asFragment } = render(<FiltersSection {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders proper content', () => {
    render(<FiltersSection {...defaultProps} />);

    expect(screen.getAllByRole('checkbox')).toHaveLength(2);
  });
});
