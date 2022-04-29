import React from "react";
import cycle from "../../../images/cycle.png";
import "./Repair.css";

const Repair = () => {
  return (
    <div className="py-5 repair-section">
      <div>
        <img width={"80%"} src={cycle} alt="" />
      </div>
      <div className="text-white p-4">
        <h1 className="mb-5 service-title">Bike service & repair</h1>
        <div className="service-options">
          <div>
            <p className="fs-3 fw-bold"><span style={{color: '#df453e'}}>01.</span> Tune-ups & builds</p>
            <p>
              We have all the necessary parts to create a bike that fits you
              perfectly
            </p>
          </div>
          <div>
            <p className="fs-3 fw-bold"><span style={{color: '#df453e'}}>02.</span> Personal bike fit</p>
            <p>
              We have all the necessary parts to create a bike that fits you
              perfectly
            </p>
          </div>
          <div>
            <p className="fs-3 fw-bold"><span style={{color: '#df453e'}}>03.</span> Adjust & install</p>
            <p>
              We have all the necessary parts to create a bike that fits you
              perfectly
            </p>
          </div>
          <div>
            <p className="fs-3 fw-bold"><span style={{color: '#df453e'}}>04.</span> Free delivery</p>
            <p>
              We have all the necessary parts to create a bike that fits you
              perfectly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repair;
