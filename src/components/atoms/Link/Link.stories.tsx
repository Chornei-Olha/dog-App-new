import { Link } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Link',
  component: Link,
  argTypes: {
    variant: {
      options: ['inherit', 'h2'],
      control: 'radio'
    },
    underline: ['none', 'hover']
  }
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LinkMore: Story = {
  render: () => (
    <Link href="/" variant="inherit" underline="hover">
      more
    </Link>
  )
};

export const NavLink: Story = {
  render: () => (
    <Link href="/" variant="h2" underline="none">
      Main
    </Link>
  )
};
