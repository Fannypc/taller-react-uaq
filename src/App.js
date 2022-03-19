import Pokemon from "./components/Pokemon";
import { Container } from "react-bootstrap";
import { PokemonList } from "./PokemonList";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [pokemons, setPokemons] = useState(PokemonList);
  useEffect(() => {
    alert(`Numero total de pokemons: ${pokemons.length}`);
  }, [pokemons]);

  const addPokemon = function () {
    let pokemonInfo = prompt("Nombre del pokemon");
    setPokemons([...pokemons, { name: pokemonInfo }]);
  };
  return (
    <Container className="mt-5">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => addPokemon()}
      >
        Agregar
      </button>
      <div className="pokemon-container m-5">
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </Container>
  );
}

export default App;
