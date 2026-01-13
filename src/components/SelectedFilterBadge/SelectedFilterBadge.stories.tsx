import type { Meta, StoryObj } from '@storybook/react';

import { SelectedFilterBadge } from './SelectedFilterBadge';

const meta: Meta<typeof SelectedFilterBadge> = {
  title: 'Filters/SelectedFilterBadge',
  component: SelectedFilterBadge,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    categoryName: 'Status',
    category: 'status',
    filterName: 'Active',
    filter: 'active',
    onClick: () => {},
  },
};
