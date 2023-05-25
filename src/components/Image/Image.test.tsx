import { render, screen } from '@testing-library/react';

import { Image } from './Image';

const defaultProps = {
  url: 'http://img.url',
  dark_url: 'http://dark-img.url',
  alt: 'image',
  effective_theme: 'light',
};

describe('Image', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('creates snapshot', () => {
    const { asFragment } = render(<Image {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders proper content', () => {
    render(<Image {...defaultProps} />);

    const img = screen.getByAltText('image');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'http://img.url');
  });

  it('renders dark image', () => {
    render(<Image {...defaultProps} effective_theme="dark" />);

    const img = screen.getByAltText('image');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'http://dark-img.url');
  });

  it('renders placeholder', () => {
    render(<Image {...defaultProps} url={null} />);

    expect(screen.queryByAltText('image')).toBeNull();
    expect(screen.getByTestId('img-placeholder')).toBeInTheDocument();
  });
});
