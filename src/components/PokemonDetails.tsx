import { usePokemonDetailsQuery } from "../app/store";

type PokemonDetailsProps = {
  pokemonName: string;
};

function PokemonDetails({ pokemonName }: PokemonDetailsProps) {
  const { data, error, isLoading, isUninitialized } = usePokemonDetailsQuery({
    name: pokemonName,
  });

  if (isUninitialized || isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error</p>;
  }

  return (
    <article>
      <h2>{data.name}</h2>
      <img src={data.sprites.front_default} alt={data.name} />
      <ul>
        <li>id: {data.id}</li>
        <li>height: {data.height}</li>
        <li>weight: {data.weight}</li>
        <li>
          types:
          {data.types.map((item) => item.type.name)}
        </li>
      </ul>
    </article>
  );
}

export default PokemonDetails;