import type { Meta, StoryObj } from '@storybook/react';

import { ExternalLink } from './ExternalLink';

const meta: Meta<typeof ExternalLink> = {
  title: 'Foundation/ExternalLink',
  component: ExternalLink,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: 'https://example.com',
    label: 'External Link',
    className: 'text-primary',
    children: 'External Link',
  },
};
