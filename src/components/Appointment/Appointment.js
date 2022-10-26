import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Appointment = () => {
  const handleSubmit = () => {
    alert("Your Appontment is Confirmed. Thanks");
  };

  return (
    <div>
      <h1>Doctor's Appointment</h1>
      <div className="container d-flex justify-content-center">
        <div className="col-sm-12 col-md-6 ">
          <Form onSubmit={handleSubmit} className="w-100">
            <Form.Group className="mb-3">
              <Form.Control
                required
                type="text"
                placeholder="Enter Your Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control required type="text" placeholder="Your email" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Short Description of Problem (*Optional)</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group controlId="duedate">
              <Form.Label>Select Date of Appointment</Form.Label>
              <Form.Control
                required
                type="date"
                name="duedate"
                placeholder="Due date"
              />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Get Appointment
            </Button>
            <br />
            <br />
            <Link to="/">Back to Home</Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
