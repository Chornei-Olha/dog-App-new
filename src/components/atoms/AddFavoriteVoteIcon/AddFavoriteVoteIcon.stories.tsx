import type { Meta, StoryObj } from '@storybook/react';
import { AddFavoriteVoteIcon } from '.';

const meta = {
  title: 'Atoms/AddFavoriteVoteIcon',
  component: AddFavoriteVoteIcon,
  argTypes: {
    state: {
      options: ['hover', 'active', 'default'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof AddFavoriteVoteIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    state: 'default'
  }
};
