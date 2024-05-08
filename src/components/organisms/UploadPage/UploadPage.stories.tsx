import type { Meta, StoryObj } from '@storybook/react';

import { UploadPage } from '.';

const meta = {
  title: 'Organisms/UploadPage',
  component: UploadPage,
  argTypes: {},
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof UploadPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  render: () => <UploadPage />
};
