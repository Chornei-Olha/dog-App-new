import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../theme/theme';

const List = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '20px',

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)'
  }
}));

const ListItem = styled(Box)(() => ({
  width: '100%',
  height: '400px'
}));

export { List, ListItem };
