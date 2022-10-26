import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { id, serviceName, description, costing, img } = props.service;
  const navigate = useNavigate();

  const detailsBtnHandler = () => {
    console.log(id);
    navigate(`/details/${id}`);
  };

  return (
    <div className="col-sm-6 col-md-4 p-2">
      <Card bg="dark" text="light" className="service-card h-100">
        <Card.Img variant="top" src={img}></Card.Img>
        <Card.Body>
          <Card.Title className=" bg-info py-2 text-dark rounded">
            {serviceName}
          </Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Text className="text-dark bg-secondary py-1 rounded">
            Starts From: {costing} BDT
          </Card.Text>
          <Button onClick={detailsBtnHandler}>Details</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Service;
