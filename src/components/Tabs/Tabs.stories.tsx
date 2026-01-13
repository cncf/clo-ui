import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    active: 'tab1',
    noDataContent: 'No data available',
    tabs: [
      { name: 'tab1', title: 'Tab 1', content: <div>Content 1</div> },
      { name: 'tab2', title: 'Tab 2', content: <div>Content 2</div> },
    ],
  },
};
