import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Data Display/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

function PaginationDemo() {
  const [active, setActive] = useState(1);

  return <Pagination limit={10} total={100} offset={0} active={active} onChange={setActive} />;
}

export const Default: Story = {
  render: () => <PaginationDemo />,
};
