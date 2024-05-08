import { SvgIcon } from '@mui/material';

import AddFavoriteHoverIcon from '../../../assets/icons/AddFavoriteHoverIcon.svg?react';
import AddFavoriteActiveIcon from '../../../assets/icons/AddFavoriteActiveIcon.svg?react';
import AddFavoriteDefaultIcon from '../../../assets/icons/AddFavoriteDefaultIcon.svg?react';

type AddFavoriteIconProps = {
  state?: 'hover' | 'active' | 'default';
};

export const AddFavoriteIcon = ({
  state = 'default'
}: AddFavoriteIconProps) => {
  switch (state) {
    case 'hover': {
      return <SvgIcon component={AddFavoriteHoverIcon} inheritViewBox />;
    }
    case 'active': {
      return <SvgIcon component={AddFavoriteActiveIcon} inheritViewBox />;
    }
    default: {
      return <SvgIcon component={AddFavoriteDefaultIcon} inheritViewBox />;
    }
  }
};
