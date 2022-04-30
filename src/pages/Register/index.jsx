import { Container } from "react-bootstrap";
import "../../App.css";
import AuthForm from "../../components/AuthForm";

function Register() {
  return (
    <>
      <Container className="mt-5">
        <AuthForm type={"Register"} />
      </Container>
    </>
  );
}

export default Register;
