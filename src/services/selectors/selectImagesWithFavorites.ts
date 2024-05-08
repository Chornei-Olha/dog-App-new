import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { imagesApi } from '../images';
import { favoritesApi } from '../favorite';

export interface GetImagesProps {
  getImagesProps: {
    limit: number;
    page: number;
    mime_type: string | undefined;
    order: string | undefined;
  };
}

export const selectImagesWithFavorites = ({ getImagesProps }: GetImagesProps) =>
  createSelector(
    (state: RootState) =>
      imagesApi.endpoints.getImages.select(getImagesProps)(state)?.data || [],
    (state: RootState) =>
      favoritesApi.endpoints.getFavorites.select()(state)?.data || [],
    (images, favorites) => {
      const favoriteIds = new Set(favorites.map(fav => fav.image_id));
      return images.map(image => ({
        ...image,
        isFavorite: favoriteIds.has(image.id)
      }));
    }
  );
