import { IconButton } from '@mui/material';

import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { AddFavoriteIcon } from '../AddFavoriteIcon';

const meta = {
  title: 'Atoms/IconButton',
  component: IconButton,
  argTypes: {}
} satisfies Meta<typeof IconButton>;

export default meta;

export const Primary = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleAddFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <IconButton onClick={handleAddFavorite} aria-label="add to favorites">
      <AddFavoriteIcon state={isFavorite ? 'active' : 'default'} />
    </IconButton>
  );
};
