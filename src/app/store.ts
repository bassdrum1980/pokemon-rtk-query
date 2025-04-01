import { createApi } from '@reduxjs/toolkit/query/react';
import { fakePokemonDetailData, fakePokemonListing } from '../data/pokemon';

function simulateLoading() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('done');
    }, 1000);
  });
}

export const pokemonApi = createApi({
  baseQuery: () => {},
  endpoints: (build) => ({
    pokemonList: build.query({
      async queryFn() {
        await simulateLoading();
        return { data: fakePokemonListing };
      },
    }),
    pokemonDetails: build.query({
      async queryFn() {
        await simulateLoading();
        return { data: fakePokemonDetailData };
      },
    }),
  }),
});

export const { usePokemonListQuery, usePokemonDetailsQuery } = pokemonApi;
