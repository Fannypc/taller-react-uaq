import styles from "./Pokemon.module.css";
import { Card, Button } from "react-bootstrap";
import axios from "../../utils/axios";
import ShowModal from "../Modal";

function Pokemon({ pokemon, fetchPokemons }) {
  const deletePokemon = async () => {
    await axios.delete(`/pokemons/${pokemon.id}`);
    fetchPokemons();
    alert("Se ha eliminado el pokemon exitosamente!");
  };

  return (
    <Card>
      <Card.Body className={`${styles.card} m-5 text-center`}>
        <p>
          <strong>Name: </strong>
          {`${pokemon.name}`}
        </p>
        <p>
          <strong>Base Experience: </strong>
          {`${pokemon.base_experience}`}
        </p>
        <p>
          <strong>Height: </strong> {`${pokemon.height}`}
        </p>
        <p>
          <strong>Weight: </strong> {`${pokemon.weight}`}
        </p>
        <div className={`mb-5 ${styles.pokemonImg}`}>
          <img src={pokemon.sprite} alt="pokemon-img" />
        </div>
        <div className={`${styles.actionsContainer}`}>
          <ShowModal
            pokemon={pokemon}
            type={"update"}
            fetchPokemons={fetchPokemons}
          />
          <Button variant="danger" onClick={deletePokemon}>
            Danger
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Pokemon;
