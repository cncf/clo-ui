import type { Meta, StoryObj } from '@storybook/react';

import { BlockCodeButtons } from './BlockCodeButtons';

const meta: Meta<typeof BlockCodeButtons> = {
  title: 'Foundation/BlockCodeButtons',
  component: BlockCodeButtons,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleContent = 'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: demo';

export const Default: Story = {
  args: {
    filename: 'sample.yaml',
    content: sampleContent,
  },
  render: (args) => (
    <div className="position-relative border p-4" style={{ width: 420 }}>
      <pre className="mb-0">{sampleContent}</pre>
      <BlockCodeButtons {...args} />
    </div>
  ),
};
