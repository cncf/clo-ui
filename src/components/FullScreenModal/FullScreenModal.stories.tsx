import type { Meta, StoryObj } from '@storybook/react';

import { FullScreenModal } from './FullScreenModal';

const meta: Meta<typeof FullScreenModal> = {
  title: 'Navigation/FullScreenModal',
  component: FullScreenModal,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    children: (
      <div className="d-flex align-items-center justify-content-center h-100">
        <div className="bg-dark text-light p-4">FullScreen Modal Content</div>
      </div>
    ),
  },
};
