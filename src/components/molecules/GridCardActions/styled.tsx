import { Box, CardActions } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const WrapActions = styled(CardActions)(({ theme: { palette } }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '24px 24px 20px 24px',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'transparent',
  transition: 'background-color 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: alpha(palette.common.black, 0.45)
  }
}));

const CardActionsTop = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%'
}));

const CardActionsBottom = styled(Box)(() => ({
  width: '100%'
}));

export { WrapActions, CardActionsTop, CardActionsBottom };
