import { useState } from "react";
import styles from "./Pokemon.module.css";
import {Card} from 'react-bootstrap';


function Pokemon(props) {
  const [pokemon, setPokemon] = useState(props.pokemon);

  return (
    <div className={`${styles.container}`}>

    <Card>
      <Card.Body>
      <p>{pokemon.name}</p>
        <p>{pokemon.power}</p>
        <button
          className={`${styles.btn} ${styles.success}`}
          onClick={() => {
            setPokemon((prevState) => ({ ...prevState, name: "Charizard" }));
          }}
        >
          Change name
        </button>
        {/* <button type="button" className="btn btn-primary">Primary</button> */}
      </Card.Body>
    </Card>
    </div>
  );
}

export default Pokemon;
