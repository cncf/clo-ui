import type { Meta, StoryObj } from '@storybook/react';

import { GenericBadge } from './GenericBadge';

const meta: Meta<typeof GenericBadge> = {
  title: 'Badges/GenericBadge',
  component: GenericBadge,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'Badge',
    className: 'me-2',
  },
};
