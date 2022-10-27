import React from "react";
import "./Facility.css";
const Facilities = () => {
  return (
    <div className="container bg-success p-2 rounded mt-4">
      <div className="mt-2 ">
        <h1 className=" rounded text-white">Facilities</h1>
      </div>
      <div className="m-2 ">
        <div className="row g-4">
          <div className="col-md-4 col-sm-6 col-xs-12  ">
            <div className=" facility">
              <h3>X-Ray</h3>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 ">
            <div className=" facility">
              <h3>Nebulization</h3>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 ">
            <div className=" facility">
              <h3>Blood Test</h3>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 ">
            <div className=" facility">
              <h3>Vaccination</h3>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 ">
            <div className=" facility">
              <h3>Hearing screening</h3>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 ">
            <div className=" facility">
              <h3>Heart screening</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
