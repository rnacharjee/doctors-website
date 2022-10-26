import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {
    user,
    signInUsingGoogle,
    logOut,
    isLoading,
    emailPasswordLogin,
    fbError,
  } = useAuth();

  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      setError("");
      setLoading(true);
      await emailPasswordLogin(
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
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div>
      <h4>Login using Google</h4>
      <br />

      <button
        className="bg-warning px-4 rounded py-1 border-0"
        onClick={signInUsingGoogle}
      >
        Google sign in
      </button>

      <br />

      <hr />
      <h4 className="text-primary">or</h4>
      <h4>Login using Email & Password</h4>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <>
            <Card>
              <Card.Body className="text-center mb-3">
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
                  <br />
                  <Button disabled={loading} className="w-100" type="submit">
                    Login
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </>
        </div>
      </div>
      <br />

      <h6>
        New User ? <Link to="/register">Register</Link>
      </h6>
    </div>
  );
};

export default Login;
