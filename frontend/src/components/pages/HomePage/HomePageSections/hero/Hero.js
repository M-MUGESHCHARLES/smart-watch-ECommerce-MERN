import React from "react";
import WatchCarousel from "../WatchCarousel";


const Hero = () => {
  return (
    <div id="hero-section">
      <div className="row m-0 hero-row">
        <div className="container col-lg-4 col-md-12 hero-container-left d-flex justify-content-center">
          <div className="container hero-content-left px-5 my-auto mx-auto d-grid justify-content-center " data-aos="fade-right">
            <div className="container d-flex flex-column " >
              <h2 className="fs-2 fw-bold "> Smart Watch </h2>
              <em className="text-body-secondary">
                <h3 className=""> for Your </h3>
                <h2 className="  fs-3 fw-semibold"> Smart Life </h2>
              </em>
            </div>
            <div className="buy-now-btn-div justify-content-center ">
              <button
                type="button"
                className="btn btn-warning button1 light-bg-button zoom-effect px-4 text-nowrap "
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="container col-lg-4 col-md-12 text-center hero-container-center" data-aos="fade-up">
          <WatchCarousel />
        </div>
        <div className="container col-lg-4 col-md-12 text-center hero-container-right d-flex justify-content-center" data-aos="fade-left">
          <div className="hero-content-right ps-5 pe-5 ">
            <h2 className="fs-2 fw-bold c1">
              Outfit
              <span className="fw-normal text-body-secondary"> Style </span>
            </h2>
            <br />
            <p className="text-center">
              Many smartwatches come equipped with sensors to monitor fitness
            </p>
          </div>
        </div>
      </div>

      <div className="light-bg-hr">
        <hr />
      </div>
    </div>
  );
};

export default Hero;
