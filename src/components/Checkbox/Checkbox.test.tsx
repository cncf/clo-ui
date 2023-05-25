import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CheckBox } from './Checkbox';

const onChangeMock = jest.fn();

const defaultProps = {
  name: 'checkbox',
  value: 'val',
  label: 'label',
  checked: false,
  onChange: onChangeMock,
  device: 'all',
};

describe('CheckBox', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('creates snapshot', () => {
    const { asFragment } = render(<CheckBox {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders input and label', () => {
    render(<CheckBox {...defaultProps} />);
    const check = screen.getByRole('checkbox');
    expect(check).toBeInTheDocument();
    expect(check).not.toBeChecked();
    expect(screen.getByLabelText(defaultProps.label)).toBeInTheDocument();
  });

  it('renders checked input with legend', () => {
    const props = {
      ...defaultProps,
      legend: ' legend',
      checked: true,
    };
    render(<CheckBox {...props} />);
    const check = screen.getByRole('checkbox');
    expect(check).toBeInTheDocument();
    expect(check).toBeChecked();
    const label = screen.getByTestId('checkboxLabel');
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('label legend');
  });

  it('calls onChange to click checkbox label', async () => {
    render(<CheckBox {...defaultProps} />);
    await userEvent.click(screen.getByTestId('checkboxLabel'));
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
