import type { Meta, StoryObj } from '@storybook/react';

import { Foundation, FoundationBadge } from './FoundationBadge';

const meta: Meta<typeof FoundationBadge> = {
  title: 'Badges/FoundationBadge',
  component: FoundationBadge,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    foundation: Foundation.cncf,
  },
};

export const Incubating: Story = {
  args: {
    foundation: Foundation.lfaidata,
  },
};
