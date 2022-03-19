import User from "./components/User";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import { PokemonList } from "./PokemonList";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [backUpUsers, setBackUpUsers] = useState([]);

  useEffect(() => {
    try {
      let fetchUsers = async function () {
        const response = await axios.get(
          "https://reqres.in/api/users?per_page=12"
        );
        setUsers(response.data.data);
        setBackUpUsers(response.data.data);
      };
      fetchUsers();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const buscarUsuario = function (event) {
    let usersArray = [...backUpUsers];
    usersArray = usersArray.filter((user) => {
      let full_name = `${user.first_name} ${user.last_name}`;
      return (
        full_name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    setUsers(usersArray);
  };

  return (
    <Container className="mt-5">
      <Form>
        <Row>
          <Col xs={2} className="d-flex justify-content-end">
            <Form.Label>Buscar un ususssario:</Form.Label>
          </Col>
          <Col xs={10}>
            <Form.Control
              type="text"
              placeholder="Ingresa el nombre"
              onChange={buscarUsuario}
            />
          </Col>
        </Row>
      </Form>
      <Row>
        <Col>
          <div className="pokemon-container m-5">
            {users.map((user) => {
              return <User key={user.id} user={user} />;
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
