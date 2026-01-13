import type { Meta, StoryObj } from '@storybook/react';

import { SubNavbar } from './SubNavbar';

const meta: Meta<typeof SubNavbar> = {
  title: 'Navigation/SubNavbar',
  component: SubNavbar,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Section 1
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Section 2
          </a>
        </li>
      </ul>
    ),
  },
};
