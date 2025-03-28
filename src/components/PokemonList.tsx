import { fakePokemonListing } from "../data/pokemon";

function PokemonList({ onPokemonSelected }) {
  const data = fakePokemonListing;

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