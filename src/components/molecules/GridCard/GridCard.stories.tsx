import type { Meta } from '@storybook/react';

import { Box } from '@mui/material';
import { GridCard, GridCardProps } from '.';

const meta: Meta<GridCardProps> = {
  title: 'Molecules/GridCard',
  component: GridCard
};
export default meta;

export const Main = () => (
  <Box sx={{ width: '500px', height: '400px' }}>
    <GridCard
      imgUrl="http://via.placeholder.com/640x360"
      id="1"
      isFavorite={false}
      cardType="favorite"
    />
  </Box>
);

export const Upload = () => (
  <Box sx={{ width: '500px', height: '400px' }}>
    <GridCard
      imgUrl="http://via.placeholder.com/640x360"
      id="1"
      isFavorite={false}
      cardType="upload"
    />
  </Box>
);
