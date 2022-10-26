import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className=" col-md-4 bg-secondary">
          <img
            className="w-100 rounded-circle p-4 "
            src="https://i.ibb.co/DMCTBFw/pinky.jpg"
            alt=""
          />
        </div>
        <div className="col-md-8 text-start">
          <div className="lh-1">
            <h2 className="text-primary">Dr. Priyanka Achariya</h2>
            <p className="text-secondary fst-italic fw-bold">
              MBBS. BCS (Health), PGT (Child), DCH (Child) <br />
              Assistant Surgeon <br /> Upazilla Health Complex, Shahrasti <br />{" "}
              Chandpur, Bangladesh.
            </p>
            <hr />
            <h4>Degree & Achievements</h4>
            <h6>MBBS</h6>
            <p>Shaheed Mansur Ali Medical College, Dhaka</p>
            <h6>PGT (Child)</h6>
            <p>Centre for Woman and Child Health – CWCH</p>
            <h6>DCH (Child)</h6>
            <p>DR. M R KHAN SHISHU HOSPITAL & INSTITUTE OF CHILD HEALTH</p>
            <h4>Specialization</h4>
            <p className="text-primary fst-italic mb-4">
              Adolescent Medicine <br /> Neonatal-Perinatal Medicine <br />
              Emergency Medicine <br />
              Pediatric Infectious Diseases <br />
              Pediatric Nephrology <br />{" "}
            </p>
          </div>
        </div>
      </div>
      <Link
        className="border border-1 text-decoration-none bg-warning fw-bold text-dark p-1 rounded mx-2 "
        to="/appointment"
      >
        Book an Appointment
      </Link>
    </div>
  );
};

export default About;
