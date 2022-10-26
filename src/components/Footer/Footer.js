import React from "react";

const Footer = () => {
  return (
    <div className="container mt-4">
      <div className="row bg-light  p-2 fst-italic lh-1">
        <div className="col-md-6 col-sm-12 text-start">
          <div>
            <p>This Site is Created using</p>
            <ul>
              <li>React JS</li>
              <li>React Bootstrap</li>
              <li>Firebase</li>
              <li>React-Router</li>
            </ul>
          </div>
        </div>

        <div className="col-md-6 col-sm-12 text-end">
          <p>Address</p>
          <p>454/34. Kandirpar</p>
          <p>Comilla, Bangladesh</p>
        </div>
        <p>All right reserved by: © Dr. Priyanka's Clinic</p>
        <p>Developed By: © RNA Soft</p>
      </div>
    </div>
  );
};

export default Footer;
