import type { Meta, StoryObj } from '@storybook/react';

import { FavoritePage } from '.';

const meta = {
  title: 'Organisms/FavoritePage',
  component: FavoritePage,
  argTypes: {},
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof FavoritePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  render: () => <FavoritePage />
};
