import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Searchbar } from './Searchbar';

const meta: Meta<typeof Searchbar> = {
  title: 'Interactive/Searchbar',
  component: Searchbar,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

function SearchbarDemo() {
  const [value, setValue] = useState('');

  return (
    <div style={{ width: 320 }}>
      <Searchbar
        value={value}
        placeholder="Search..."
        onValueChange={setValue}
        onSearch={() => {}}
        cleanSearchValue={() => setValue('')}
        bigSize={false}
      />
    </div>
  );
}

export const Default: Story = {
  render: () => <SearchbarDemo />,
};
