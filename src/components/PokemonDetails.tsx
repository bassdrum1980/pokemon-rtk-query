import { fakePokemonDetailData } from "../data/pokemon";

function PokemonDetails({ pokemonName }) {
  const data = fakePokemonDetailData;

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