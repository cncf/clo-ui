import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Navigation/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    header: 'Modal Title',
    children: <div>Modal content goes here</div>,
  },
};

export const WithButton: Story = {
  args: {
    open: false,
    header: 'Modal Title',
    buttonContent: <span>Open Modal</span>,
    children: <div>Modal content goes here</div>,
  },
};
