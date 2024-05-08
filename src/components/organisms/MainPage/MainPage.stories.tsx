import type { Meta, StoryObj } from '@storybook/react';

import { MainPage } from '.';

const meta = {
  title: 'Organisms/MainPage',
  component: MainPage,
  argTypes: {},
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  render: () => <MainPage />
};
