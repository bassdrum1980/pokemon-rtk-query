import { usePokemonListQuery } from "../api/pokemonApi";

type PokemonListProps = {
  onPokemonSelected: (name: string) => void;
};

function PokemonList({ onPokemonSelected }: PokemonListProps) {
  const { data, error, isLoading, isUninitialized } = usePokemonListQuery();

  if (isUninitialized || isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <article>
      <h2>Overview</h2>
      <ol start={1}>
        {data.results.map((pokemon) => (
          <li key={pokemon.name}>
            <button onClick={() => onPokemonSelected(pokemon.name)}>
              {pokemon.name}
            </button>
          </li>
        ))}
      </ol>
    </article>
  );
}

export default PokemonList;