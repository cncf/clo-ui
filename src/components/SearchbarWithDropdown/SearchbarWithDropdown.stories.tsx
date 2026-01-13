import type { Meta, StoryObj } from '@storybook/react';

import { SearchbarWithDropdown } from './SearchbarWithDropdown';

const meta: Meta<typeof SearchbarWithDropdown> = {
  title: 'Interactive/SearchbarWithDropdown',
  component: SearchbarWithDropdown,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 420 }}>
      <SearchbarWithDropdown
        effective_theme="light"
        searchProjects={async () => ({ items: [], 'Pagination-Total-Count': '0' })}
        onCleanSearchValue={() => {}}
        onSearch={() => {}}
        openProject={() => {}}
        searchParams={new URLSearchParams()}
      />
    </div>
  ),
};
