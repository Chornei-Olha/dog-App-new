import { Box, styled } from '@mui/material';

import theme from '../../../theme/theme';

const List = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridAutoRows: '196px',
  gridGap: '20px',
  margin: '0 auto',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)'
  }
}));

const Item = styled(Box)(() => ({
  gridColumn: 'span 1',
  gridRow: 'span 1',

  '&:nth-of-type(1)': {
    gridColumn: '1 / 3;',
    gridRow: '1 / 3'
  },

  '&:nth-of-type(2)': {
    gridColumn: '3',
    gridRow: '1'
  },

  '&:nth-of-type(3)': {
    gridColumn: '4',
    gridRow: '1 / 3'
  },

  '&:nth-of-type(4)': {
    gridColumn: '1',
    gridRow: '3 / 5'
  },

  '&:nth-of-type(5)': {
    gridColumn: '2',
    gridRow: '3'
  },

  '&:nth-of-type(6)': {
    gridColumn: '3',
    gridRow: '2 / 4'
  },

  '&:nth-of-type(7)': {
    gridColumn: '4',
    gridRow: '3'
  },

  '&:nth-of-type(8)': {
    gridColumn: '2',
    gridRow: '4'
  },

  '&:nth-of-type(9)': {
    gridColumn: '3',
    gridRow: '4'
  },

  '&:nth-of-type(10)': {
    gridColumn: '4',
    gridRow: '4'
  },

  [theme.breakpoints.down('md')]: {
    '&:nth-of-type(1), &:nth-of-type(3), &:nth-of-type(5), &:nth-of-type(7), &:nth-of-type(9)':
      {
        gridColumn: '1 /2',
        gridRow: 'span 2'
      },
    '&:nth-of-type(10), &:nth-of-type(2),  &:nth-of-type(4), &:nth-of-type(6),  &:nth-of-type(8)':
      {
        gridColumn: '2 / 3',
        gridRow: 'span 2'
      }
  },
  [theme.breakpoints.down('sm')]: {
    '&:nth-of-type(1), &:nth-of-type(3), &:nth-of-type(5), &:nth-of-type(7), &:nth-of-type(9)':
      {
        gridColumn: 'span 2',
        gridRow: 'span 2'
      },
    '&:nth-of-type(10), &:nth-of-type(2),  &:nth-of-type(4), &:nth-of-type(6),  &:nth-of-type(8)':
      {
        gridColumn: 'span 2',
        gridRow: 'span 2'
      }
  }
}));

export { List, Item };
