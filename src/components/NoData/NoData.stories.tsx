import type { Meta, StoryObj } from '@storybook/react';

import { NoData } from './NoData';

const meta: Meta<typeof NoData> = {
  title: 'Data Display/NoData',
  component: NoData,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'No results found',
  },
};
