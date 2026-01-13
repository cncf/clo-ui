import type { Meta, StoryObj } from '@storybook/react';

import { InputFiltersSection } from './InputFiltersSection';

const meta: Meta<typeof InputFiltersSection> = {
  title: 'Filters/InputFiltersSection',
  component: InputFiltersSection,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 280 }}>
      <InputFiltersSection
        section={{
          key: 'name',
          title: 'Name',
        }}
        device="desktop"
        onChange={() => {}}
      />
    </div>
  ),
};
