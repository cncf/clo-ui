import type { Meta, StoryObj } from '@storybook/react';

import { CategoryBadge } from './CategoryBadge';

const meta: Meta<typeof CategoryBadge> = {
  title: 'Badges/CategoryBadge',
  component: CategoryBadge,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    category: 'Technology',
    className: 'me-2',
  },
};
