import { api } from './api';

export interface Favorite {
  image_id: string;
  sub_id?: string;
}

export type FavoritesResponse = {
  id: number;
  user_id: string;
  image_id: string;
  sub_id: string;
  created_at: string;
  image: {
    id: string;
    url: string;
  };
};

export const favoritesApi = api.injectEndpoints({
  endpoints: build => ({
    addFavorite: build.mutation<unknown, Favorite>({
      query: body => ({
        url: `favourites`,
        method: 'POST',
        body
      }),
      invalidatesTags: [{ type: 'Favorites', id: 'LIST' }]
    }),

    deleteFavorite: build.mutation<unknown, { favourite_id: number }>({
      query: ({ favourite_id }) => ({
        url: `favourites/${favourite_id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [{ type: 'Favorites', id: 'LIST' }]
    }),

    getFavorites: build.query<FavoritesResponse[], void>({
      query: () => ({
        url: `favourites`
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Favorites', id }) as const),
        { type: 'Favorites' as const, id: 'LIST' }
      ]
    })
  })
});

export const {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useGetFavoritesQuery
} = favoritesApi;
