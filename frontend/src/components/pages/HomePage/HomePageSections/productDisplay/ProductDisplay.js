import React from "react";
import ProductSectionWatch5 from "../../../../images/HomePage/smart-watch-5-frontbackView.png";
import ProductSectionWatch6 from "../../../../images/HomePage/ProductDisplay-Watch-image.jpeg";
import { ImPower } from "react-icons/im";


export default function ProductDisplay() {
  return (
    <div>
      <section id="Product-Display-Section">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className=" col-lg-6 col-md-12  ProductDisplay-container-left justify-content-center">
              <div
                className="hero-img image-container"
                data-aos="fade-up-right"
              >
                <img
                  src={ProductSectionWatch5}
                  alt="Smart-Watch-SideView"
                  id="ProductDisplay-HeroImage1"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12  ProduuctDisplay-container-right">
              <div className="row">
                <div className="col-12 p-0">
                  <div
                    className="heading1 mb-4 mt-5 container"
                    data-aos="fade-up"
                  >
                    <h3 className="lh-lg text-center container">
                      {/* <span className="material-symbols-outlined align-middle fs-1">
                        bolt
                      </span> */}
                      <ImPower />
                      &nbsp; Empower Your Wrist, <br /> &nbsp;&nbsp; Elevate
                      Your Day
                    </h3>
                    <p>
                      Enhance your wrist experience with cutting-edge
                      technology, uplifting your daily activities to new heights
                    </p>
                  </div>
                </div>

                <div className="col-12 p-0" data-aos="fade-up-left">
                  <div className="row container">
                    <div className="container col-md-6 col-sm-12 p-0 ">
                      <div className="centerDiv container mb-4">
                        <img
                          src={ProductSectionWatch6}
                          alt="Smart-Watch"
                          id="ProductDisplay-HeroImage2"
                        />
                      </div>
                    </div>
                    <div className="container col-sm-12 col-md-6 p-0">
                      <div className=" container centerDiv EPadding">
                        <h4> Smartwatches come</h4>
                        <p className="fs-6">
                          Overall our smartwatches offer a wide range of
                          advantages...
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="container row">
                    <div className=" container col-lg-6 col-12">
                      <div className="buy-now-btn-div justify-content-start ">
                        <button
                          type="button"
                          className="btn btn-warning button1 dark-bg-button zoom-effect px-4 "
                        >
                          Explore More
                          <span className="align-bottom fw-bolder"> → </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dark-bg-hr">
          <hr />
        </div>
      </section>
    </div>
  );
}
