import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { HoverableItem } from './HoverableItem';

const meta: Meta<typeof HoverableItem> = {
  title: 'Foundation/HoverableItem',
  component: HoverableItem,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

function HoverableDemo() {
  const [hovered, setHovered] = useState(false);

  return (
    <HoverableItem onHover={() => setHovered(true)} onLeave={() => setHovered(false)}>
      <div className={`p-3 border ${hovered ? 'bg-light' : ''}`}>{hovered ? 'Hovering!' : 'Hoverable Item'}</div>
    </HoverableItem>
  );
}

export const Default: Story = {
  render: () => <HoverableDemo />,
};
