// import React from 'react';
// import { Meta, StoryObj } from '@storybook/react';
// import BreedCard from '.';

// const meta: Meta = {
//   title: 'BreedCard',
//   component: BreedCard
// };

// export default meta;

// type StoryType = StoryObj<typeof meta>;

// export const MainBreedCard = args => <BreedCard {...args} />;
// MainBreedCard.args = {
//   image: 'https://example.com/dog.jpg',
//   name: 'Golden Retriever',
//   temperament: 'Intelligent, Friendly, Devoted',
//   moreInfo:
//     'The Golden Retriever is one of the most popular dog breeds in the United States.'
// };

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BreedCard from '.';

type BreedCardProps = React.ComponentProps<typeof BreedCard> & {
  image?: any;
  name?: string;
  temperament?: string;
  moreInfo?: string;
};

const meta: Meta<BreedCardProps> = {
  title: 'BreedCard',
  component: BreedCard
};
export default meta;

type Story = StoryObj<BreedCardProps>;

export const CustomBreedCard: Story = {
  args: {
    image: 'https://example.com/dog.jpg',
    name: 'Golden Retriever',
    temperament: 'Intelligent, Friendly, Devoted',
    moreInfo:
      'The Golden Retriever is one of the most popular dog breeds in the United States.'
  }
};
