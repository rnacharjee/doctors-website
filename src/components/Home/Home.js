import React, { createContext, useEffect, useState } from "react";

import HomeCarousel from "../Carousel/HomeCarousel";
import "./Home.css";
import Service from "../Service/Service";
import Facilities from "../Facilities/Facilities";
import NewBornCare from "../NewBornCare/NewBornCare";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container">
      <div className="row g-1 m-2">
        <div className="clinic-div col-md-4 d-flex justify-content-center align-items-center flex-md-column">
          <h1 id="clinic-name">Dr. Priyanka's Child Care</h1>
        </div>
        <HomeCarousel></HomeCarousel>
      </div>
      <div className="all-services">
        <h1 className="mt-4 services-text">Our Services</h1>
        <div className="container">
          <div className="row g-4">
            {services.map((service) => (
              <Service
                key={service.id}
                service={service}
                services={services}
              ></Service>
            ))}
          </div>
        </div>
      </div>
      <Facilities></Facilities>
      <NewBornCare></NewBornCare>
    </div>
  );
};

export default Home;
