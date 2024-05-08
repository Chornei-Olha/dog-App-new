import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const BreedCardStyled = styled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '20px',
  overflow: 'hidden'
});

// export const BreedCardImage = styled('img')({
//   width: '100%',
//   height: 'auto',
//   display: 'block'
// });

export const BreedCardText = styled(Box)({
  padding: '14px 28px 28px 29px',
  height: '32%',
  textAlign: 'left'
});
