import { Box, BoxProps, alpha } from '@mui/material';
import { styled } from '@mui/material/styles';

interface BorderedBoxProps extends BoxProps {
  borderRadius?: number;
  showHovered?: boolean;
}

const BorderedBox = styled(Box, {
  shouldForwardProp: prop => prop !== 'showHovered'
})<BorderedBoxProps>(({ theme, borderRadius, showHovered }) => ({
  borderRadius: borderRadius || 20,
  boxShadow: `6px 6px 0px 0px ${alpha(theme.palette.common.black, 1)}`,
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: showHovered
      ? `6px 6px 8px 0px ${alpha(theme.palette.primary.main, 1)}`
      : `6px 6px 0px 0px ${alpha(theme.palette.common.black, 1)}`
  },
  '&:active': {
    boxShadow: showHovered
      ? `6px 6px 8px 0px ${alpha(theme.palette.primary.main, 1)}`
      : `6px 6px 0px 0px ${alpha(theme.palette.common.black, 1)}`
  }
}));

export default BorderedBox;
