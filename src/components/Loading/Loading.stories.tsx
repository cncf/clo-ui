import type { Meta, StoryObj } from '@storybook/react';

import { Loading } from './Loading';

const meta: Meta<typeof Loading> = {
  title: 'Feedback/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: 'relative',
    noWrapper: true,
  },
};

export const WithWrapper: Story = {
  args: {
    position: 'relative',
    transparentBg: true,
  },
};

export const Small: Story = {
  args: {
    position: 'relative',
    smallSize: true,
    noWrapper: true,
  },
};

export const FullScreen: Story = {
  args: {
    position: 'fixed',
  },
};
