import Pokemon from "../../components/Pokemon";
import { Container, Row, Col, Form } from "react-bootstrap";
import ShowModal from "../../components/Modal";
import "../../App.css";
import { useState, useEffect, useCallback } from "react";
import axios from "../../utils/axios";
import Navbar from "../../components/Navbar";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [backUpPokemons, setBackUpPokemons] = useState([]);

  const fetchPokemons = useCallback(async () => {
    const response = await axios.get("/pokemons");
    setPokemons(response.data);
    setBackUpPokemons(response.data);
  }, []);

  useEffect(() => {
    try {
      fetchPokemons();
    } catch (err) {
      console.log(err);
    }
  }, [fetchPokemons]);

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
    <>
      <Container className="mt-5">
        <Form>
          <Row>
            <Col xs={2} className="d-flex justify-content-end white-text">
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
          <div className="pokemon-container m-5">
            {pokemons.map((pokemon) => {
              return (
                <Col>
                  <Pokemon
                    key={pokemon.id}
                    pokemon={pokemon}
                    fetchPokemons={fetchPokemons}
                  />
                </Col>
              );
            })}
          </div>
        </Row>
      </Container>
    </>
  );
}

export default App;
