import { useEffect, useState } from "react";
import styles from "./Pokemon.module.css";
import { Card } from "react-bootstrap";

function Pokemon(props) {
  const [pokemon, setPokemon] = useState(props.pokemon);

  return (
    <Card>
      <Card.Body className={`${styles.card} m-5`}>
        <p>{pokemon.name}</p>
        <span>Abilities</span>
        <ul>
          {pokemon.abilities &&
            pokemon.abilities.map((ability) => <li>{ability.name}</li>)}
        </ul>
        <span>Base experience: {pokemon.base_experience}</span>
      </Card.Body>
    </Card>
  );
}

export default Pokemon;
