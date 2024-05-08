import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import BorderedBox from '../../atoms/BorderedBox';

const CardBorder = styled(BorderedBox)(() => ({
  height: '100%'
}));

const CardBox = styled(Card)(() => ({
  borderRadius: '20px',
  boxShadow: 'none',
  position: 'relative',
  height: '100%'
}));

export { CardBorder, CardBox };
