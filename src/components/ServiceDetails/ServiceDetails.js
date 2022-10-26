import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const serviceID = useParams();

  const [service, setService] = useState([]);

  console.log(serviceID);

  useEffect(() => {
    fetch("../../services.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filteredService = data.filter((ser) => {
          return ser.id === serviceID.serviceID;
        });
        setService(filteredService);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
          <h1 className="my-4">{service[0]?.serviceName}</h1>
          <h6>{service[0]?.description}</h6>
          <h4 className="text-secondary">
            Price Starts From : {service[0]?.costing}
          </h4>
          <Link
            className=" border border-1 text-decoration-none fw-bold bg-warning px-4 py-2 rounded"
            to="/appointment"
          >
            Book Now
          </Link>
          <div className="d-flex my-4">
            <Link
              className=" border border-1 text-decoration-none bg-info text-dark p-1 rounded mx-2"
              to="/"
            >
              All Services
            </Link>
            <Link
              className=" border border-1 text-decoration-none bg-info text-dark p-1 rounded mx-2"
              to="/appointment"
            >
              Get an Appointment
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <img className="w-100" src={service[0]?.img} alt="" />
        </div>
      </div>
    </div>
  );
};
export default ServiceDetails;
