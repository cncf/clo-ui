import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Interactive/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const DropdownContent = ({ closeDropdown }: { closeDropdown?: () => void }) => (
  <div className="d-flex flex-column p-2">
    <button className="btn btn-link text-start" onClick={closeDropdown}>
      Option 1
    </button>
    <button className="btn btn-link text-start" onClick={closeDropdown}>
      Option 2
    </button>
  </div>
);

export const Default: Story = {
  args: {
    label: 'Open menu',
    btnContent: <span>Menu</span>,
    children: <DropdownContent />,
  },
};
