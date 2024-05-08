import { SvgIcon } from '@mui/material';

import AddFavoriteVoteDefaultIcon from '../../../assets/icons/AddFavoriteVoteDefaultIcon.svg?react';
import AddFavoriteVoteHoverIcon from '../../../assets/icons/AddFavoriteVoteHoverIcon.svg?react';
import AddFavoriteVoteActiveIcon from '../../../assets/icons/AddFavoriteVoteActiveIcon.svg?react';

type AddFavoriteVoteIconProps = {
  state?: 'hover' | 'active' | 'default';
};

export const AddFavoriteVoteIcon = ({
  state = 'default'
}: AddFavoriteVoteIconProps) => {
  switch (state) {
    case 'hover': {
      return <SvgIcon component={AddFavoriteVoteHoverIcon} inheritViewBox />;
    }
    case 'active': {
      return <SvgIcon component={AddFavoriteVoteActiveIcon} inheritViewBox />;
    }
    default: {
      return <SvgIcon component={AddFavoriteVoteDefaultIcon} inheritViewBox />;
    }
  }
};
