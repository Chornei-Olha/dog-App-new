import { SvgIcon } from '@mui/material';

import LikeIconButton from '../assets/icons/LikeIconButton.svg?react';
import DislikeIconButton from '../assets/icons/DislikeIconButton.svg?react';

type AddLikeIconButtonProps = {
  grade?: 'default' | 'dislike';
};

export const AddLikeIconButton = ({
  grade = 'default'
}: AddLikeIconButtonProps) => {
  switch (grade) {
    case 'dislike': {
      return <SvgIcon component={DislikeIconButton} inheritViewBox />;
    }
    default: {
      return <SvgIcon component={LikeIconButton} inheritViewBox />;
    }
  }
};
