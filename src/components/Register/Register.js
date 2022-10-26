import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { user, emailPasswordRegister, fbError } = useAuth();
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmaRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (passwordRef.current.value !== passwordConfirmaRef.current.value) {
      return setError("password did not matched");
    }
    try {
      setError("");
      setLoading(true);
      await emailPasswordRegister(
        emailRef.current.value,
        passwordRef.current.value
      );
    } catch {
      setError("Failed to Sign up");
    }
    setLoading(false);
    user.email && (
      <Alert>
        {" "}
        Welcome {user.email} <Link to="/">Go to Home</Link>
      </Alert>
    );
  }

  if (user.email) {
    return (
      <div>
        <h4>Registration Successful.</h4>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    );
  }

  return (
    <div
      style={{ minHeight: "100vh" }}
      className="d-flex justify-content-center align-items-center flex-column"
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <>
          <Card>
            <Card.Body className="text-center mb-3">
              <h2>Register ! New User.</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {fbError}

              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    ref={emailRef}
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    required
                    ref={passwordRef}
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    required
                    ref={passwordConfirmaRef}
                  ></Form.Control>
                </Form.Group>
                <br />
                <Button disabled={loading} className="w-100" type="submit">
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </>
      </div>
      <div className="w-100 text-center mt-2">
        Already Have an Account ? <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register;
