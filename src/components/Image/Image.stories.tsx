import type { Meta, StoryObj } from '@storybook/react';

import { Image } from './Image';

const meta: Meta<typeof Image> = {
  title: 'Foundation/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: 'https://via.placeholder.com/300',
    dark_url: 'https://via.placeholder.com/300/000000/FFFFFF',
    effective_theme: 'light',
    alt: 'Placeholder image',
    className: 'img-fluid',
  },
};
