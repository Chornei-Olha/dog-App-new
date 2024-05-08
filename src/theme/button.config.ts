import { Components, Theme, alpha } from '@mui/material';

export const MuiButtonConfig: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontFamily: 'Dosis',
      borderRadius: 10,
      boxShadow: 'none',
      textTransform: 'capitalize',
      fontSize: 20,
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: 1.6,
      padding: theme.spacing(1, 2),
      transition: 'all 0.2s ease-in-out',
      '&:hover, &:active': {
        backgroundColor: 'transparent',
        color: theme.palette.common.white,
        boxShadow: 'none',
        outline: 'none'
      }
    }),

    containedPrimary: ({ theme: { palette, typography } }) => ({
      color: palette.primary.contrastText,
      fontWeight: typography.fontWeightRegular,
      backgroundColor: palette.primary.main,
      boxShadow: `3px 3px 0px 0px ${alpha(palette.common.black, 1)}`,
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: palette.action.hover,
        boxShadow: `3px 3px 0px 0px ${alpha(palette.common.black, 1)}`
      },
      '&:active': {
        backgroundColor: palette.action.selected,
        boxShadow: `3px 3px 0px 0px ${alpha(palette.common.black, 1)}`
      }
    }),

    containedSecondary: ({ theme: { spacing, palette, typography } }) => ({
      backgroundColor: palette.grey[100],
      color: palette.secondary.dark,
      fontWeight: typography.fontWeightRegular,
      boxShadow: `3px 3px 0px 0px ${alpha(palette.common.black, 1)}`,
      transition: 'all 0.2s ease-in-out',
      padding: spacing(1, 2),
      '&:hover': {
        backgroundColor: palette.grey[300],
        color: palette.secondary.dark,
        boxShadow: `3px 3px 0px 0px ${alpha(palette.common.black, 1)}`
      },
      '&:active': {
        backgroundColor: palette.grey[500],
        color: palette.secondary.dark,
        boxShadow: `3px 3px 0px 0px ${alpha(palette.common.black, 1)}`
      }
    }),

    outlinedPrimary: ({ theme: { palette, typography } }) => ({
      color: palette.primary.main,
      fontWeight: typography.fontWeightRegular,
      backgroundColor: 'transparent',
      border: `1px solid ${palette.primary.main}`,
      position: 'relative',
      transition: 'all 0.2s ease-in-out',

      '&:after': {
        content: "''",
        position: 'absolute',
        display: 'block',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        borderRight: `1px solid ${palette.common.black}`,
        borderBottom: `1px solid ${palette.common.black}`,
        borderRadius: 8,
        bottom: '-4px',
        right: '-4px'
      },
      '&:hover': {
        color: palette.primary.main,
        border: `1px solid ${palette.primary.dark}`
      },
      '&:active': {
        color: palette.primary.main,
        border: `1px solid ${palette.primary.light}`
      }
    }),

    outlinedSecondary: ({ theme: { palette, typography } }) => ({
      color: palette.primary.contrastText,
      backgroundColor: 'transparent',
      fontWeight: typography.fontWeightRegular,
      border: `1px solid ${palette.secondary.contrastText}`,
      '&:hover': {
        border: `1px solid ${palette.grey[100]}`
      },
      '&:active': {
        border: `1px solid ${palette.grey[300]}`
      }
    }),

    textPrimary: ({ theme: { palette, typography } }) => ({
      color: palette.primary.main,
      backgroundColor: 'transparent',
      fontSize: 20,
      fontWeight: typography.fontWeightBold,
      '&:hover, &:active': {
        backgroundColor: 'transparent',
        color: palette.common.white,
        boxShadow: 'none',
        outline: 'none'
      }
    })
  },
  defaultProps: {
    disableRipple: true
  }
};
