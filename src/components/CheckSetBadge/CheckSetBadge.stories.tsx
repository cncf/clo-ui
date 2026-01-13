import type { Meta, StoryObj } from '@storybook/react';

import { CheckSet, CheckSetBadge } from './CheckSetBadge';

const meta: Meta<typeof CheckSetBadge> = {
  title: 'Badges/CheckSetBadge',
  component: CheckSetBadge,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checkSets: [CheckSet.Code, CheckSet.Docs],
  },
};
