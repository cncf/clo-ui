import type { Meta, StoryObj } from '@storybook/react';

import { ElementWithTooltip } from './ElementWithTooltip';

const meta: Meta<typeof ElementWithTooltip> = {
  title: 'Foundation/ElementWithTooltip',
  component: ElementWithTooltip,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    active: true,
    element: <button className="btn btn-primary">Hover Me</button>,
    tooltipMessage: 'Tooltip content',
    visibleTooltip: true,
  },
};
