import { ChangeEvent, useRef, useState } from 'react';
import { Button } from '@mui/material';

import {
  FileTypeText,
  UploadImage,
  RemoveBtn,
  Image,
  TitleUpload,
  BoxUpload
} from './styled';
import { useUploadImageMutation } from '../../../services/images';

export const UploadNewImage = () => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadImage, { isLoading }] = useUploadImageMutation();

  const fileSelectedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const fileUploadHandler = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file!);
      await uploadImage(formData);
      console.log('File uploaded successfully:', file);
    } catch (err) {
      console.error('Error uploading file:', err);
    }
  };

  return (
    <BoxUpload>
      <TitleUpload>Upload a Dog image</TitleUpload>
      <UploadImage>
        {file ? (
          <>
            <RemoveBtn onClick={() => setFile(null)} aria-label="Remove Image">
              delete
            </RemoveBtn>
            <Image
              alt="not found"
              width="100%"
              src={URL.createObjectURL(file)}
            />
          </>
        ) : (
          <div>
            <input
              type="file"
              ref={fileInputRef}
              multiple
              hidden
              accept=".jpg, .png, image/jpeg, image/png"
              onChange={fileSelectedHandler}
            />
            <Button
              color="secondary"
              variant="contained"
              onClick={() => fileInputRef.current?.click()}
            >
              Browse files
            </Button>
          </div>
        )}
      </UploadImage>

      {file ? (
        <Button
          color="primary"
          variant="contained"
          onClick={fileUploadHandler}
          disabled={isLoading}
          sx={{ margin: '0 auto', display: 'block' }}
        >
          {isLoading ? 'Uploading...' : ' Upload an image'}
        </Button>
      ) : (
        <FileTypeText>Accepted File Types: jpg and png</FileTypeText>
      )}
    </BoxUpload>
  );
};
