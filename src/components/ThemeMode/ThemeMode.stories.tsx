import type { Meta, StoryObj } from '@storybook/react';

import { ThemeMode } from './ThemeMode';

const meta: Meta<typeof ThemeMode> = {
  title: 'Interactive/ThemeMode',
  component: ThemeMode,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    device: 'desktop',
    configuredTheme: 'light',
    onChange: () => {},
  },
};
