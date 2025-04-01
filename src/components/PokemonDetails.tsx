import { usePokemonDetailsQuery } from "../app/store";

function PokemonDetails() {
  const { data, error, isLoading } = usePokemonDetailsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
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