import type { Meta, StoryObj } from '@storybook/react';

import { UploadNewImage } from '.';

const meta = {
  title: 'Organisms/UploadNewImage',
  component: UploadNewImage,
  argTypes: {},
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof UploadNewImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UploadImage: Story = {
  render: () => <UploadNewImage />
};
