import TarjetaPokemon from "./TarjetaPokemon";

function ListaPokemones({ pokemones }) {
  return (
    <div className="lista-pokemones">
      {pokemones.map((pokemon, index) => (
        <TarjetaPokemon key={index} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default ListaPokemones;