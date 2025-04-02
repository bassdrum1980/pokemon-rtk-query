import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PokemonListingType, PokemonDetailType } from '../data/pokemon';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2',
  }),
  endpoints: (build) => ({
    pokemonList: build.query<PokemonListingType, void>({
      query() {
        return {
          url: '/pokemon',
          params: {
            limit: 11,
          },
        };
      },
    }),
    pokemonDetails: build.query<PokemonDetailType, { name: string }>({
      query({ name }) {
        return `/pokemon/${name}`;
      },
    }),
  }),
});

export const { usePokemonListQuery, usePokemonDetailsQuery } = pokemonApi;
