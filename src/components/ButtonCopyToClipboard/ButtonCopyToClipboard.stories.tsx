import type { Meta, StoryObj } from '@storybook/react';

import { ButtonCopyToClipboard } from './ButtonCopyToClipboard';

const meta: Meta<typeof ButtonCopyToClipboard> = {
  title: 'Interactive/ButtonCopyToClipboard',
  component: ButtonCopyToClipboard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Text to copy',
  },
};

export const WithVisibleText: Story = {
  args: {
    text: 'Text to copy',
    visibleBtnText: true,
    contentBtn: 'Copy to clipboard',
    className: 'btn btn-primary rounded-0 px-3',
  },
};
