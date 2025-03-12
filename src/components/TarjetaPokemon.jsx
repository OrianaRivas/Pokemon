import { useState, useEffect } from "react";

function TarjetaPokemon({ pokemon }) {
  const [detalles, setDetalles] = useState(null);

  useEffect(() => {
    if (pokemon.url) {
      fetch(pokemon.url)
        .then((res) => res.json())
        .then((data) => setDetalles(data));
    } else {
      setDetalles(pokemon);
    }
  }, [pokemon]);

  return (
    <div className="tarjeta">
      {detalles ? (
        <>
          <h2>{detalles.name}</h2>
          <img src={detalles.sprites.front_default} alt={detalles.name} />
          <p>Peso: {detalles.weight}</p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default TarjetaPokemon;