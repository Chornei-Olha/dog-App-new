import { api } from './api';

export interface Images {
  id: string;
  url: string;
  width: number;
  height: number;
  mime_type: string;
  breeds: [
    {
      id: number;
      name: string;
      weight: string;
      height: string;
      life_span: string;
      reference_image_id: string;
    }
  ];
  categories: [];
}

export interface UploadImage {
  breeds: [];
  id: string;
  url: string;
  width: number;
  height: number;
  sub_id: string;
  created_at: string;
  original_filename: string;
  breed_ids: string;
}

export type ImagesUploadResponse = {
  id: string;
  url: string;
  width: number;
  height: number;
  original_filename: string;
  pending: number;
  approved: number;
};

export interface BreedImage {
  id: string;
  url: string;
  reference_image_id: string;
}

type ImagesResponse = {
  [breedId: string]: BreedImage[];
};

export const imagesApi = api.injectEndpoints({
  endpoints: build => ({
    getBreedImages: build.query<ImagesResponse, string>({
      query: imageId => ({
        url: `images/${imageId}`
      }),
      providesTags: id => [{ type: 'Images', id }]
    }),

    getImagesId: build.query<
      ImagesResponse,
      {
        limit?: number;
        page?: number;
        mime_type?: string;
        order?: string;
        breed_id?: number;
      }
    >({
      query: ({
        limit = 10,
        page = 0,
        mime_type = 'all',
        breed_id,
        order = 'RANDOM'
      }) => ({
        url: `images/search?limit=${limit}&page=${page}&mime_types=${mime_type}&order=${order}&breed_id=${breed_id}`
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Images', id }) as const),
        { type: 'Images' as const, id: 'LIST' }
      ]
    }),

    getImages: build.query<
      ImagesResponse,
      {
        limit?: number;
        page?: number;
        mime_type?: string;
        order?: string;
        breed_id?: number;
      }
    >({
      query: ({
        limit = 10,
        page = 0,
        mime_type = 'all',
        breed_id,
        order = 'RANDOM'
      }) => ({
        url: `images/search?limit=${limit}&page=${page}&mime_types=${mime_type}&order=${order}`
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Images', id }) as const),
        { type: 'Images' as const, id: 'LIST' }
      ]
    }),

    uploadImage: build.mutation<Images, FormData>({
      query(formData) {
        return {
          url: `images/upload`,
          method: 'POST',
          body: formData
        };
      },
      invalidatesTags: [{ type: 'Images', id: 'LIST' }]
    }),
    uploadImagesList: build.query<
      UploadImage[],
      {
        limit?: number;
        page?: number;
      }
    >({
      query: ({ limit = 10, page = 0 }) => ({
        url: `images/?limit=${limit}&page=${page}`
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Images', id }) as const),
        { type: 'Images' as const, id: 'LIST' }
      ]
    })
  })
});

export const {
  useGetBreedImagesQuery,
  useGetImagesIdQuery,
  useGetImagesQuery,
  useUploadImageMutation,
  useUploadImagesListQuery
} = imagesApi;
