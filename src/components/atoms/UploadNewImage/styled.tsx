import { Box, Button, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';

const BoxUpload = styled(Box)(({ theme: { palette } }) => ({
  borderRadius: '20px',
  backgroundColor: palette.common.white,
  maxWidth: '600px',
  width: '100%',
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));

const TitleUpload = styled(Typography)(() => ({
  marginBottom: '32px'
}));

const UploadImage = styled(Box)(({ theme: { palette } }) => ({
  position: 'relative',
  width: '400px',
  minHeight: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: `1px dashed ${palette.primary.main}`,
  borderRadius: '10px',
  marginBottom: '10px'
}));

const DefaultImage = styled(Box)(() => ({
  position: 'relative',
  width: '100px',
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const FileTypeText = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: 400
}));

const RemoveBtn = styled(Button)(() => ({
  position: 'absolute',
  top: 0,
  right: 0,
  '&:hover': {
    color: 'red'
  }
}));

const Image = styled('img')(() => ({
  borderRadius: '10px'
}));

export {
  BoxUpload,
  UploadImage,
  TitleUpload,
  DefaultImage,
  FileTypeText,
  RemoveBtn,
  Image
};
