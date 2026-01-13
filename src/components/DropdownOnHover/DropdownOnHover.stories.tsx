import type { Meta, StoryObj } from '@storybook/react';

import { DropdownOnHover } from './DropdownOnHover';

const meta: Meta<typeof DropdownOnHover> = {
  title: 'Interactive/DropdownOnHover',
  component: DropdownOnHover,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    linkContent: <span className="text-primary">Hover me</span>,
    children: <div>Dropdown content</div>,
    tooltipStyle: true,
  },
};
