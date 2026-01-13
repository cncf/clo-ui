import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Navigation/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'bg-dark text-light',
    logo: <div className="fw-bold">CLO-UI</div>,
    children: (
      <div>
        <div className="fw-bold">Resources</div>
        <div>Docs</div>
        <div>GitHub</div>
      </div>
    ),
  },
};
