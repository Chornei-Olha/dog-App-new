import { Button } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import ArrowIcon from '../../../assets/icons/ArrowIcon.svg?react';
import PawIcon from '../../../assets/icons/PawIcon.svg?react';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['contained', 'outlined'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'contained',
    children: 'Button'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'outlined',
    color: 'secondary',
    children: 'Button'
  }
};

export const SecondaryWithIcons: Story = {
  args: {
    variant: 'contained',
    color: 'secondary',
    startIcon: <PawIcon />,
    endIcon: <ArrowIcon />,
    children: 'Goldendoodle'
  }
};
