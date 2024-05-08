import { Box, Button, IconButton } from '@mui/material';
import { useState } from 'react';

import { AddFavoriteIcon } from '../../atoms/AddFavoriteIcon';
import ModalDialog from '../../atoms/ModalDialog';
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation
} from '../../../services/favorite';
import { WrapActions, CardActionsTop, CardActionsBottom } from './styled';

export interface GridCardActionsProps {
  id: string | number;
  isFavorite?: boolean;
  cardType?: 'favorite' | 'upload';
}

export const GridCardActions = ({
  id,
  isFavorite = false,
  cardType
}: GridCardActionsProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const [addFavorite] = useAddFavoriteMutation();
  const [deleteFavorite] = useDeleteFavoriteMutation();

  const addToFavorite = () => {
    if (typeof id === 'string') {
      addFavorite({ image_id: id });
    }
  };

  const deleteFromFavorite = () => {
    if (typeof id === 'number') {
      deleteFavorite({ favourite_id: id });
    }
    setIsOpenDeleteModal(false);
  };
  // eslint-disable-next-line no-nested-ternary
  const iconState = isFavorite ? 'active' : isHovered ? 'hover' : 'default';

  return (
    <>
      <ModalDialog
        title="Delete the photo?"
        description="You will not be able to  recover it"
        textBtnClose="Cancel"
        textBtnConfirm="Delete"
        open={isOpenDeleteModal}
        confirm={deleteFromFavorite}
        onClose={() => setIsOpenDeleteModal(false)}
      />
      <WrapActions
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardActionsTop>
          {isFavorite ? (
            <Box aria-label="add to favorites">
              <AddFavoriteIcon state={iconState} />
            </Box>
          ) : (
            <IconButton onClick={addToFavorite} aria-label="add to favorites">
              <AddFavoriteIcon state={iconState} />
            </IconButton>
          )}
        </CardActionsTop>
        {isHovered && (
          <CardActionsBottom>
            {cardType === 'favorite' && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start'
                }}
              >
                <Button
                  variant="text"
                  color="primary"
                  onClick={() => {
                    setIsOpenDeleteModal(true);
                  }}
                >
                  delete
                </Button>
              </Box>
            )}
            {cardType === 'upload' && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start'
                }}
              >
                <Button
                  variant="text"
                  color="primary"
                  onClick={() => {
                    console.log('delete item', id);
                  }}
                >
                  delete
                </Button>
              </Box>
            )}
          </CardActionsBottom>
        )}
      </WrapActions>
    </>
  );
};
