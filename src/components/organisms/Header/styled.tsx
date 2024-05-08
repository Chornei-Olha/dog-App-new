import { styled } from '@mui/material/styles';
import { AppBar, AppBarProps, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ModalDialog from '../../atoms/ModalDialog';

const Wrap = styled(AppBar)<AppBarProps>(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 5,
  backgroundColor: theme.palette.grey[600],
  borderRadius: '0 0 32px 32px',
  boxShadow: `3px 3px 0px 0px ${theme.palette.common.black}`,
  paddingTop: '20px',
  paddingBottom: '16px'
}));

const Container = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '10px',
  maxWidth: 1200,
  width: '100%',
  margin: '0 auto',
  padding: '0 15px'
}));

const Logo = styled(Link)(({ theme: { palette } }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  textDecoration: 'none',
  color: palette.text.primary
}));

const LogoDog = styled(Typography)(() => ({
  fontFamily: 'Goldman',
  fontSize: '30px',
  fontWeight: '700'
}));

const LogoStarGallery = styled(Typography)(() => ({
  fontFamily: 'Goldman',
  fontSize: '20px',
  maxWidth: '74px',
  lineHeight: 0.8
}));

const ModalDialogStyled = styled(ModalDialog)(() => ({
  maxWidth: '600px',
  width: '100%',
  padding: '40px'
}));

export { Wrap, Container, Logo, LogoDog, LogoStarGallery, ModalDialogStyled };
