import { useGetFavoritesQuery } from '../../services/favorite';
import { useGetImagesQuery } from '../../services/images';
import { selectImagesWithFavorites } from '../../services/selectors';
import { useTypedSelector } from '../../services/store';

// eslint-disable-next-line @typescript-eslint/naming-convention
type useGetImagesWithFavoritesProps = {
  limit?: number;
  page: number;
  mime_type?: string | undefined;
  order?: string | undefined;
};

export const useGetImagesWithFavorites = ({
  limit = 10,
  page,
  mime_type,
  order
}: useGetImagesWithFavoritesProps) => {
  const { isLoading: isLoadingImages } = useGetImagesQuery({
    limit: 10,
    page,
    mime_type,
    order
  });

  const { isLoading: isLoadingFavorites } = useGetFavoritesQuery();

  const favoritedImages = useTypedSelector(
    selectImagesWithFavorites({
      getImagesProps: { limit, page, mime_type, order }
    })
  );

  return {
    data: favoritedImages,
    isLoading: isLoadingImages || isLoadingFavorites
  };
};
