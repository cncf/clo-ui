import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Data Display/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    hoverable: true,
    children: (
      <div className="p-3">
        <h5>Card Title</h5>
        <p>Card content goes here</p>
      </div>
    ),
  },
};

export const Static: Story = {
  args: {
    hoverable: false,
    children: (
      <div className="p-3">
        <h5>Static Card</h5>
        <p>This card is not hoverable</p>
      </div>
    ),
  },
};
