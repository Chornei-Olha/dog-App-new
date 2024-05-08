import { Components, Theme } from '@mui/material';

export const MuiIconButtonConfig: Components<Theme>['MuiIconButton'] = {
  styleOverrides: {
    root: () => ({
      padding: 1,
      backgroundColor: 'transparent',
      boxShadow: 'none',
      '&:hover, &:active': {
        backgroundColor: 'transparent'
      }
    })
  }
};
