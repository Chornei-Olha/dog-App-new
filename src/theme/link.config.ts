import { Components, Theme, alpha } from '@mui/material';

export const MuiLinkConfig: Components<Theme>['MuiLink'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      cursor: 'pointer',
      color: theme.palette.text.primary,
      backgroundColor: 'transparent',
      fontSize: '20px',
      textTransform: 'lowercase',
      borderRadius: '6px',
      transition: 'all 0.2s ease-in-out',
      whiteSpace: 'nowrap'
    }),

    underlineHover: ({ theme: { palette } }) => ({
      color: palette.secondary.main,
      '&:hover': {
        color: palette.action.hover
      },
      '&:active': {
        color: palette.action.hover
      }
    }),
    underlineNone: ({ theme: { palette } }) => ({
      textTransform: 'capitalize',
      padding: '4px 10px',
      '&:hover': {
        backgroundColor: palette.primary.dark,
        color: palette.primary.contrastText
      },
      '&:active': {
        backgroundColor: palette.primary.main,
        color: palette.primary.contrastText,
        boxShadow: `3px 3px 0px 0px ${alpha(palette.common.black, 1)}`
      }
    })
  }
};
