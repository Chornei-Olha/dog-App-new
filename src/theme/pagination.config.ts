import { Components, Theme } from '@mui/material';

export const MuiPaginationConfig: Components<Theme>['MuiPagination'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      cursor: 'pointer',
      color: theme.palette.text.primary,
      backgroundColor: 'transparent',
      position: 'relative',
      width: '100%',
      marginTop: '20px',
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'flex-end',

      '.MuiPaginationItem-root': {
        fontSize: '20px',
        borderRadius: '20px',
        backgroundColor: 'transparent',
        transition: 'all 0.2s ease-in-out',

        '&:hover': {
          color: theme.palette.primary.main,
          backgroundColor: 'transparent'
        }
      },
      '.Mui-selected': {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.light,
        boxShadow: `2px 2px 0px 0px ${theme.palette.common.black}`
      }
    })
  }
};
