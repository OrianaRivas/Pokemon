import { useState, useEffect } from "react";
import Buscador from "./components/Buscador";
import ListaPokemones from "./components/ListaPokemones";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    const obtenerPokemones = async () => {
      let url = "https://pokeapi.co/api/v2/pokemon?limit=20";
      if (busqueda) {
        url = `https://pokeapi.co/api/v2/pokemon/${busqueda.toLowerCase()}`;
      }
      try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) throw new Error("No se encontró el Pokémon");
        const datos = await respuesta.json();
        setPokemones(busqueda ? [datos] : datos.results);
      } catch (error) {
        setPokemones([]);
      }
    };
    obtenerPokemones();
  }, [busqueda]);

  return (
    <div>
      <h1>Catálogo de Pokémon</h1>
      <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />
      <ListaPokemones pokemones={pokemones} />
    </div>
  );
}

export default App;