import type { Meta, StoryObj } from '@storybook/react';

import { SampleQueries } from './SampleQueries';

const meta: Meta<typeof SampleQueries> = {
  title: 'Foundation/SampleQueries',
  component: SampleQueries,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="p-3 border" style={{ maxWidth: 420 }}>
      <div className="fw-bold mb-2">Sample Queries</div>
      <SampleQueries
        queries={[
          { name: 'Query 1', filters: { text: 'alpha' } },
          { name: 'Query 2', filters: { text: 'beta' } },
        ]}
        maxQueriesNumber={5}
        prepareQueryString={(filters) => `?q=${filters.text}`}
      />
    </div>
  ),
};
