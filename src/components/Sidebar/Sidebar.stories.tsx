import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Sidebar',
    header: 'Sidebar Title',
    buttonTitle: 'Open Sidebar',
    open: true,
    children: <div className="p-3">Sidebar Content</div>,
  },
};
