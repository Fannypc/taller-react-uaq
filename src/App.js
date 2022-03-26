import User from "./components/User";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import ShowModal from "./components/Modal";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [backUpPokemons, setBackUpPokemons] = useState([]);

  const fetchPokemons = async () => {
    const response = await axios.get(
      "https://hidden-plains-73441.herokuapp.com/api/v1/pokemons"
    );
    // console.log("response", response.data);
    setPokemons(response.data);
    setBackUpPokemons(response.data);
  };

  useEffect(() => {
    try {
      let fetchUsers = async function () {
        const response = await axios.get(
          "https://hidden-plains-73441.herokuapp.com/api/v1/pokemons"
        );
        // console.log("response", response.data);
        setPokemons(response.data);
        setBackUpPokemons(response.data);
      };
      fetchUsers();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const buscarPokemon = function (event) {
    let pokemonsArray = [...backUpPokemons];
    pokemonsArray = pokemonsArray.filter((user) => {
      return (
        user.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    setPokemons(pokemonsArray);
  };

  return (
    <Container className="mt-5">
      <Form>
        <Row>
          <Col xs={2} className="d-flex justify-content-end">
            <Form.Label>Buscar un Pokemon:</Form.Label>
          </Col>
          <Col xs={10}>
            <Form.Control
              type="text"
              placeholder="Ingresa el nombre"
              onChange={buscarPokemon}
            />
          </Col>
        </Row>
      </Form>
      <Row>
        <Col>
          <ShowModal fetchPokemons={fetchPokemons} />
          <div className="pokemon-container m-5">
            {pokemons.map((user) => {
              return <User key={user.id} user={user} />;
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
