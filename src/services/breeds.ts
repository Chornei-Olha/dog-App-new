import { api } from "./api";

export const breedsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBreeds: build.query<Breed[], void>({
      query: () => "breeds",
    }),
    getBreedById: build.query<BreedDetails, string>({
      query: (breedId) => `breeds/${breedId}`,
    }),
  }),
});

export const { useGetBreedsQuery, useGetBreedByIdQuery } = breedsApi;

export interface Breed {
  id: string;
  name: string;
  temperament: string;
  reference_image_id?: string;
  image: string;
  moreInfo: string;
}

export interface BreedDetails extends Breed {
  weight: {
    metric: string;
  };
  height: {
    metric: string;
  };
  life_span: string;
  breed_for: string;
  origin: string;
}
