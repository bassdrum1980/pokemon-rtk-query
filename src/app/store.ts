import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { fakePokemonDetailData, fakePokemonListing } from '../data/pokemon';

export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2',
  }),
  endpoints: (build) => ({
    pokemonList: build.query({
      query() {
        return {
          url: '/pokemon',
          params: {
            limit: 11,
          },
        };
      },
    }),
    pokemonDetails: build.query({
      query({ name }) {
        return `/pokemon/${name}`;
      },
    }),
  }),
});

export const { usePokemonListQuery, usePokemonDetailsQuery } = pokemonApi;
