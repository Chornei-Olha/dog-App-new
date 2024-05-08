import { SvgIcon } from '@mui/material';

import FavoritePageDefaultIcon from '../assets/icons/FavoritePageDefaultIcon.svg?react';
import FavoritePageActiveIcon from '../assets/icons/FavoritePageActiveIcon.svg?react';

type FavoritePageIconProps = {
  state: 'active' | 'default';
};

export const FavoritePageIcon = ({
  state = 'default'
}: FavoritePageIconProps) => {
  switch (state) {
    case 'active': {
      return <SvgIcon component={FavoritePageActiveIcon} inheritViewBox />;
    }
    default: {
      return <SvgIcon component={FavoritePageDefaultIcon} inheritViewBox />;
    }
  }
};
