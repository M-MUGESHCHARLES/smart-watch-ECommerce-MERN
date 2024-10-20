import React from "react";

function Footer() {
  return (
    <>
      <div id="footer">
        <footer className="pt-5">
          <div className=" row mb-5">
            <div className="col-lg-6 col-md-6 col-sm-12 px-5">
              <div className="row">
                <div className="col-6 ">
                  <h5 className="footer-heading mb-3"> Company </h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-secondary">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-secondary">
                        Our Services
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-secondary">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-secondary">
                        Affiliate Program
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-secondary">
                        About
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 ">
                  <h5 className="footer-heading mb-3"> Get Help </h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-secondary">
                        FAQ
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-secondary">
                        Shipping
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-secondary">
                        Returns
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-secondary">
                        Order Status
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-secondary">
                        Payment Options
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 px-5 footer-form">
              <div className="py-5">
                <form>
                  <h5 className="footer-heading mb-3">
                    Subscribe to our newsletter
                  </h5>
                  <p>Monthly digest of what,s new and exciting from us.</p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-3">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button
                      className="btn btn-outline-warning dark-bg-button"
                      type="button"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
            <p className="ms-5 my-auto">
              © {new Date().getFullYear()} SmartWatch, Inc. All rights reserved.
            </p>
            <div className="social-links">
              <h5 className="ms-3 footer-heading mb-3"> Follow Us</h5>
              <ul className="list-unstyled d-flex me-5">
                <li className="ms-3">
                  <a className="link-body-emphasis text-warning">
                    <i className="fa-brands fa-square-x-twitter fa-2x"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-body-emphasis text-warning">
                    <i className="fa-brands fa-square-instagram fa-2x"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-body-emphasis text-warning">
                    <i className="fa-brands fa-square-facebook fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
