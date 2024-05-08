import type { Meta, StoryObj } from '@storybook/react';
import { FavoritePageIcon } from '.';

const meta = {
  title: 'Atoms/FavoritePageIcon',
  component: FavoritePageIcon,
  argTypes: {
    state: {
      options: ['active', 'default'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof FavoritePageIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    state: 'default'
  }
};
