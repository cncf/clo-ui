import type { Meta, StoryObj } from '@storybook/react';

import { Maturity, MaturityBadge } from './MaturityBadge';

const meta: Meta<typeof MaturityBadge> = {
  title: 'Badges/MaturityBadge',
  component: MaturityBadge,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maturityLevel: Maturity.sandbox,
  },
};

export const Graduated: Story = {
  args: {
    maturityLevel: Maturity.graduated,
  },
};
