function Buscador({ busqueda, setBusqueda }) {
    return (
      <input
        type="text"
        placeholder="Buscar Pokémon"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    );
  }
  
  export default Buscador;