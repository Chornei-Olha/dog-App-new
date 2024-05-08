import { Components, Theme, alpha } from '@mui/material';

export const MuiButtonBaseConfig: Components<Theme>['MuiButtonBase'] = {
  styleOverrides: {
    root: ({ theme: { palette } }) => ({
      borderRadius: 50,
      backgroundColor: palette.primary.main,
      color: palette.common.white,
      textTransform: 'capitalize',
      padding: 10,
      transition: 'all 0.2s ease-in-out',
      boxShadow: `3px 3px 0px 0px ${alpha(palette.common.black, 1)}`,
      '&:hover': {
        backgroundColor: palette.action.hover
      },
      '&:active': {
        backgroundColor: palette.action.selected
      }
    })
  }
};
