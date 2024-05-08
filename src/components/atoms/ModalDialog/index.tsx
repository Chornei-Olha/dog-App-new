import {
  Box,
  Button,
  DialogActions,
  DialogContentText,
  DialogContent
} from '@mui/material';

import CloseIcon from '../../../assets/icons/CloseIcon.svg?react';
import { CloseBtn, StyledDialog, StyledDialogTitle } from './styled';

interface ModalDialogProps {
  open: boolean;
  onClose?: () => void;
  confirm?: () => void;
  title?: string;
  description?: string;
  textBtnClose?: string;
  textBtnConfirm?: string;
  children?: React.ReactNode;
}

const ModalDialog = ({
  open,
  onClose,
  confirm,
  title = 'Upload a Dog image',
  description = 'Information for this dialog',
  textBtnClose = 'close',
  textBtnConfirm = 'confirm',
  children
}: ModalDialogProps) => (
  <StyledDialog
    open={open}
    onClose={onClose}
    PaperProps={{
      style: {
        borderRadius: 20,
        background: 'white',
        boxShadow: '6px 6px 0px 0px #000000',
        maxWidth: '100%'
      }
    }}
  >
    <CloseBtn onClick={onClose}>
      <CloseIcon />
    </CloseBtn>
    {children ? (
      <Box>{children}</Box>
    ) : (
      <Box sx={{ padding: 1 }}>
        <StyledDialogTitle>{title}</StyledDialogTitle>
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button onClick={onClose} color="primary" variant="outlined">
            {textBtnClose}
          </Button>
          <Button onClick={confirm} color="primary" variant="contained">
            {textBtnConfirm}
          </Button>
        </DialogActions>
      </Box>
    )}
  </StyledDialog>
);
export default ModalDialog;
