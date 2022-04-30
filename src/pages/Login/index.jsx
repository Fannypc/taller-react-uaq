// import { useState } from "react";
import { Container } from "react-bootstrap";
import "../../App.css";
import AuthForm from "../../components/AuthForm";

function Login() {
  return (
    <>
      <Container className="mt-5">
        <AuthForm type={"Login"} />
      </Container>
    </>
  );
}

export default Login;
