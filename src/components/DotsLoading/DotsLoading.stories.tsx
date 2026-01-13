import type { Meta, StoryObj } from '@storybook/react';

import { DotsLoading } from './DotsLoading';

const meta: Meta<typeof DotsLoading> = {
  title: 'Feedback/DotsLoading',
  component: DotsLoading,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
