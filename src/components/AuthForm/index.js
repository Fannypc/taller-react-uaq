import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Container, Row, Card, Form, Button, Col } from "react-bootstrap";
import "../../App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginUser,
  registerUser,
  clearError,
} from "../../store/actions/authActions";
import ErrorHandler from "../../utils/errorHandler";

function Login({ type }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: user, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (error) {
      ErrorHandler(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(type === "Login" ? loginUser(formData) : registerUser(formData));
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Container className="mt-5">
        <Form onSubmit={handleSubmit}>
          <Row className={"justify-content-center"}>
            <Col xs={6}>
              <Card className="p-4">
                <div className="text-center">
                  <Card.Title>{type}</Card.Title>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    onChange={handleChange}
                  />
                </Form.Group>

                {type === "Register" && (
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      onChange={handleChange}
                    />
                  </Form.Group>
                )}

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  {type === "Login" ? (
                    <Link to="/register">Crear una cuenta</Link>
                  ) : (
                    <p>
                      Ya tienes una cuenta?{" "}
                      <Link to="/login">Inicia Sesión</Link>
                    </p>
                  )}
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Card>
            </Col>
          </Row>
        </Form>
        <Row>
          <div className="pokemon-container m-5"></div>
        </Row>
      </Container>
    </>
  );
}

export default Login;
