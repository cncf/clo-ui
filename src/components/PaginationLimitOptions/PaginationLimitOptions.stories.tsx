import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { PaginationLimitOptions } from './PaginationLimitOptions';

const meta: Meta<typeof PaginationLimitOptions> = {
  title: 'Data Display/PaginationLimitOptions',
  component: PaginationLimitOptions,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

function PaginationLimitOptionsDemo() {
  const [limit, setLimit] = useState(20);

  return <PaginationLimitOptions limit={limit} onPaginationLimitChange={setLimit} />;
}

export const Default: Story = {
  render: () => <PaginationLimitOptionsDemo />,
};
