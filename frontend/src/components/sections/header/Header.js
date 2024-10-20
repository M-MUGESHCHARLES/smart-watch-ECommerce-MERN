import React from "react";
import RegisterButton from "../../component/RegisterButton";
import ShopButton from "../../component/ShopButton";

const header = () => {
  return (
    <div className="header sticky-top" id="header">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3  border-bottom">
        <div className="col-md-3 mb-2 mb-md-0 text-center">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none navbar-brand urbanist"
          >
            SMART-WATCH
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#hero-section" className="nav-link px-2 link-secondary">
              Home
            </a>
          </li>
          {/* <li>
            <a href="#Explore-section" className="nav-link px-2">
              Explore
            </a>
          </li> */}
          <li>
            <a href="#features-section" className="nav-link px-2">
              Features
            </a>
          </li>
          <li>
            <a href="#FAQ-section" className="nav-link px-2">
              FAQs
            </a>
          </li>
          <li>
            <a href="#footer" className="nav-link px-2">
              About Us
            </a>
          </li>
        </ul>

        <div className="col-md-3 text-center header-buttons-div ">

          <ShopButton />
          
          {/* <RegisterButton />          */}

          
        </div>
      </header>
    </div>
  );
};

export default header;
