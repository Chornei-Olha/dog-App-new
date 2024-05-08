import type { Meta, StoryObj } from '@storybook/react';

import { FavoriteList } from '.';

const meta = {
  title: 'Organisms/FavoriteList',
  component: FavoriteList,
  argTypes: {},
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof FavoriteList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const List: Story = {
  args: {
    favoritesData: [
      {
        id: 1,
        user_id: 'ep8try',
        image_id: 'Sk4DXl54m',
        sub_id: 'test',
        created_at: '2023-11-08T10:54:43.000Z',
        image: {
          id: 'Sk4DXl54m',
          url: 'https://cdn2.thedogapi.com/images/Sk4DXl54m.jpg'
        }
      },
      {
        id: 2,
        user_id: 'ep8try',
        image_id: 'Sk4DXl54m',
        sub_id: 'test',
        created_at: '2023-11-08T10:54:43.000Z',
        image: {
          id: 'Sk4DXl54m',
          url: 'https://cdn2.thedogapi.com/images/Sk4DXl54m.jpg'
        }
      },
      {
        id: 3,
        user_id: 'ep8try',
        image_id: 'Sk4DXl54m',
        sub_id: 'test',
        created_at: '2023-11-08T10:54:43.000Z',
        image: {
          id: 'Sk4DXl54m',
          url: 'https://cdn2.thedogapi.com/images/Sk4DXl54m.jpg'
        }
      }
    ]
  }
};
