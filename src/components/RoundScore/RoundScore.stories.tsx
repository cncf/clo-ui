import type { Meta, StoryObj } from '@storybook/react';

import { RoundScore } from './RoundScore';

const meta: Meta<typeof RoundScore> = {
  title: 'Data Display/RoundScore',
  component: RoundScore,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    score: 85,
  },
};

export const LowScore: Story = {
  args: {
    score: 45,
  },
};

export const PerfectScore: Story = {
  args: {
    score: 100,
  },
};
