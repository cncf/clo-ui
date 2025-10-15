import { render, screen } from '@testing-library/react';

import { SampleQueries } from './SampleQueries';

const mockQueries = [
  {
    name: 'Only graduated projects',
    filters: {
      pageNumber: 1,
      filters: { maturity: ['graduated'] },
    },
  },
  {
    name: 'Only incubating projects',
    filters: {
      pageNumber: 1,
      filters: { maturity: ['incubating'] },
    },
  },
  {
    name: 'Only sandbox projects',
    filters: {
      pageNumber: 1,
      filters: { maturity: ['sandbox'] },
    },
  },
];

const defaultProps = {
  queries: mockQueries,
  prepareQueryString: () => '?maturity=graduated&page=1',
  maxQueriesNumber: 5,
};

jest.mock('lodash', () => ({
  ...(jest.requireActual('lodash') as unknown as object),
  sampleSize: () => {
    return mockQueries;
  },
}));

describe('SampleQueries', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('creates snapshot', () => {
    const { asFragment } = render(<SampleQueries {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  describe('Render', () => {
    it('renders component', () => {
      render(<SampleQueries {...defaultProps} />);

      expect(screen.getAllByRole('link', { name: /Filter by/ })).toHaveLength(mockQueries.length);

      for (let i = 0; i < mockQueries.length; i++) {
        expect(screen.getByText(mockQueries[i].name)).toBeInTheDocument();
      }
    });

    it('renders proper classes', () => {
      render(<SampleQueries {...defaultProps} className="custom" />);

      const links = screen.getAllByRole('link', { name: /Filter by/ });
      expect(links[0]).toHaveClass('badge rounded-0 border fw-normal mx-2 mt-3 text-decoration-none custom');
    });

    it('checks first sample query', async () => {
      render(<SampleQueries {...defaultProps} />);

      const links = screen.getAllByRole('link', { name: /Filter by/ });
      expect(links[0]).toHaveProperty('href', 'http://localhost/search?maturity=graduated&page=1');
    });
  });
});
