import { Box, CircularProgress } from '@mui/material';

export const Loader = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '400px'
    }}
  >
    <CircularProgress color="inherit" />
  </Box>
);
