import type { Meta, StoryObj } from '@storybook/react';

import { CheckBox } from './Checkbox';

const meta: Meta<typeof CheckBox> = {
  title: 'Interactive/Checkbox',
  component: CheckBox,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'test',
    value: 'value1',
    label: 'Test Checkbox',
    checked: false,
    device: 'desktop',
    onChange: () => {},
  },
};
