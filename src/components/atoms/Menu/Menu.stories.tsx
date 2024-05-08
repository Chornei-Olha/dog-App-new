import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from '.';
import { menuHeader } from '../../../utils/const';

const meta = {
  title: 'Atoms/Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuNav: Story = {
  args: {
    menuList: menuHeader
  }
};
