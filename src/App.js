import Pokemon from "./components/Pokemon";
import { Container, Button } from "react-bootstrap";
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
      <Button variant="primary" onClick={() => addPokemon()}>
        Primary
      </Button>
      <div className="pokemon-container m-5">
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </Container>
  );
}

export default App;
