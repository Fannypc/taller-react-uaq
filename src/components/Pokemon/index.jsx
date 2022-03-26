import styles from "./User.module.css";
import { Card, Button } from "react-bootstrap";
import UpdateModal from "../UpdateModal";
import axios from "axios";

function Pokemon(props) {
  const { pokemon, fetchPokemons, showModal } = props;

  const deletePokemon = async () => {
    await axios.delete(
      `https://hidden-plains-73441.herokuapp.com/api/v1/pokemons/${pokemon.id}`
    );
    props.fetchPokemons();
    alert("Se ha eliminado el pokemon exitosamente!");
  };

  return (
    <Card>
      <Card.Body className={`${styles.card} m-5 text-center`}>
        <p>
          <strong>Name:</strong>
        </p>
        <p>{`${pokemon.name}`}</p>
        <p>
          <strong>Base Experience:</strong>
        </p>
        <p>{`${pokemon.base_experience}`}</p>
        <p>
          <strong>Height:</strong>
        </p>
        <p>{`${pokemon.height}`}</p>
        <div className={`${styles.actionsContainer}`}>
          <UpdateModal pokemon={pokemon} fetchPokemons={fetchPokemons} />
          <Button variant="danger" onClick={deletePokemon}>
            Danger
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Pokemon;
