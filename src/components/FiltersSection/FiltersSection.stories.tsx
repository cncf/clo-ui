import type { Meta, StoryObj } from '@storybook/react';

import { FiltersSection } from './FiltersSection';

const meta: Meta<typeof FiltersSection> = {
  title: 'Filters/FiltersSection',
  component: FiltersSection,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 280 }}>
      <FiltersSection
        section={{
          title: 'Status',
          options: [
            { name: 'Active', value: 'active' },
            { name: 'Archived', value: 'archived' },
          ],
        }}
        visibleTitle={true}
        device="desktop"
        onChange={() => {}}
      />
    </div>
  ),
};
