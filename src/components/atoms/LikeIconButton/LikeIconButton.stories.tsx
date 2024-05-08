import { ButtonBase } from '@mui/material';

import type { Meta, StoryObj } from '@storybook/react';
import { AddLikeIconButton } from '../../../icons/AddLikeIconButton';

const meta = {
  title: 'Atoms/LikeIconButton',
  component: ButtonBase,
  argTypes: {}
} satisfies Meta<typeof ButtonBase>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <AddLikeIconButton />
  }
};

export const Secondary: Story = {
  args: {
    children: <AddLikeIconButton grade="dislike" />
  }
};
