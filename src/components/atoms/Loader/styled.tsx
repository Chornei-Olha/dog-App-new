import { styled } from '@mui/material/styles';
import { List, ListProps, alpha } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavList = styled(List)<ListProps>(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '575px',
  width: '100%',
  padding: 0
}));

const NavListItem = styled(NavLink)(({ theme: { palette } }) => ({
  color: palette.text.primary,
  backgroundColor: 'transparent',
  fontSize: '20px',
  borderRadius: '6px',
  transition: 'all 0.2s ease-in-out',
  whiteSpace: 'nowrap',
  textTransform: 'capitalize',
  padding: '4px 10px',
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: palette.primary.dark,
    color: palette.primary.contrastText
  },
  '&:active': {
    backgroundColor: palette.primary.main,
    color: palette.primary.contrastText,
    boxShadow: `3px 3px 0px 0px ${alpha(palette.common.black, 1)}`
  },

  '&.active': {
    backgroundColor: palette.primary.main,
    color: palette.primary.contrastText,
    boxShadow: `3px 3px 0px 0px ${alpha(palette.common.black, 1)}`
  }
}));

export { NavList, NavListItem };
