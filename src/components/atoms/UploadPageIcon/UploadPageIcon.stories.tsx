import type { Meta, StoryObj } from '@storybook/react';
import { UploadPageIcon } from '.';

const meta = {
  title: 'Atoms/UploadPageIcon',
  component: UploadPageIcon,
  argTypes: {
    state: {
      options: ['active', 'default'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof UploadPageIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    state: 'default'
  }
};
