import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { AlertController } from './AlertController';
import { alertDispatcher } from './alertDispatcher';

const meta: Meta<typeof AlertController> = {
  title: 'Feedback/AlertController',
  component: AlertController,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

function AlertDemo() {
  const [alertType, setAlertType] = useState<'success' | 'danger' | 'warning' | 'info'>('success');

  const showAlert = () => {
    alertDispatcher.postAlert({
      type: alertType,
      message: `This is a ${alertType} alert message!`,
      autoClose: true,
      dismissOn: 5000,
    });
  };

  return (
    <div className="p-4">
      <AlertController />
      <div className="d-flex flex-column gap-2" style={{ maxWidth: 240 }}>
        <select
          value={alertType}
          onChange={(e) => setAlertType(e.target.value as 'success' | 'danger' | 'warning' | 'info')}
        >
          <option value="success">Success</option>
          <option value="danger">Danger</option>
          <option value="warning">Warning</option>
          <option value="info">Info</option>
        </select>
        <button onClick={showAlert}>Show Alert</button>
      </div>
    </div>
  );
}

export const Default: Story = {
  render: () => <AlertDemo />,
};
