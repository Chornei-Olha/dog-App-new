import type { Meta, StoryObj } from '@storybook/react';

import Header from '.';

const meta = {
  title: 'Organisms/Header',
  component: Header,
  argTypes: {},
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RHeader: Story = {
  render: () => <Header />
};
