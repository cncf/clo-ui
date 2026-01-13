import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { SortOptions } from './SortOptions';

const meta: Meta<typeof SortOptions> = {
  title: 'Filters/SortOptions',
  component: SortOptions,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

function SortOptionsDemo() {
  const [sortBy, setSortBy] = useState('name');

  return (
    <SortOptions
      width={180}
      by={sortBy}
      options={[
        { label: 'Name', by: 'name' },
        { label: 'Date', by: 'date', direction: 'desc' },
      ]}
      onSortChange={setSortBy}
    />
  );
}

export const Default: Story = {
  render: () => <SortOptionsDemo />,
};
