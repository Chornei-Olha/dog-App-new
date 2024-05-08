import { SvgIcon } from '@mui/material';

import UploadPageDefaultIcon from '../../../assets/icons/UploadPageDefaultIcon.svg?react';
import UploadPageActiveIcon from '../../../assets/icons/UploadPageActiveIcon.svg?react';

type UploadPageIconProps = {
  state?: 'active' | 'default';
};

export const UploadPageIcon = ({ state = 'default' }: UploadPageIconProps) => {
  switch (state) {
    case 'active': {
      return <SvgIcon component={UploadPageActiveIcon} inheritViewBox />;
    }
    default: {
      return <SvgIcon component={UploadPageDefaultIcon} inheritViewBox />;
    }
  }
};
