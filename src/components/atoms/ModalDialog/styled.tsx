import { Dialog, DialogTitle, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledDialog = styled(Dialog)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const StyledDialogTitle = styled(DialogTitle)({
  fontSize: '40px'
});

const CloseBtn = styled(IconButton)(() => ({
  position: 'absolute',
  top: '10px',
  right: '10px'
}));

export { StyledDialog, StyledDialogTitle, CloseBtn };
