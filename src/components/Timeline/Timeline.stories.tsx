import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Timeline } from './Timeline';

const meta: Meta<typeof Timeline> = {
  title: 'Data Display/Timeline',
  component: Timeline,
};

export default meta;
type Story = StoryObj<typeof meta>;

function TimelineDemo() {
  const [activeDate, setActiveDate] = useState<string | undefined>(undefined);
  const snapshots = ['2024-01-01', '2024-01-02', '2024-01-03'];

  return <Timeline snapshots={snapshots} activeDate={activeDate} setActiveDate={setActiveDate} />;
}

export const Default: Story = {
  render: () => <TimelineDemo />,
};
