import React from 'react';
import ExploreSectionWatch4 from "../../../../images/HomePage/smart-watch-4-sideview.png";
import {ReactComponent as Icon1} from '../../../../images/icons/settings-svgrepo-com.svg'
import {ReactComponent as Icon2} from '../../../../images/icons/voice-svgrepo-com.svg'
import { BiCustomize } from "react-icons/bi";


export default function Explore() {
  return (
    <div>
      <section id="Explore-section">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 Explore-content-left justify-content-center">
            <div className="Explore-hero-image image-container " data-aos="fade-up-right">
              <img
                src={ExploreSectionWatch4}
                alt="Smart-Watch-SideView"
                id="Explore-HeroImage"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8">
            <div className="Explore-content-right mb-5">
              <div className="heading1 mb-4 mt-5" data-aos="fade-up">
                <h3>
                  {/* <span className="material-icons align-middle fs-1">tune</span> */}
                  <BiCustomize /> &nbsp; Customizable Watch Faces
                </h3>
                <p>
                  Users can personalize their smartwatch experience by choosing
                  from a variety of watch
                </p>
              </div>
              <div className="row" data-aos="fade-up-left">
                <div className="row mb-3">
                  <div className="col-3 E-icon1">
                    <Icon1 className="zoom-effect" />
                  </div>
                  <div className="col-9 E-icon-p">
                    <p>
                      Smartwatches can display notification for calls, messages,
                      emails and app alerts
                    </p>
                  </div>
                </div>

                <div className=" row mb-3">
                  <div className="col-3 E-icon2">
                    <Icon2 className="zoom-effect " />
                  </div>
                  <div className="col-9 E-icon-p">
                    <p>
                      Many smartwatches have voice assistant integration and
                      provide various user-friendly accessibilities
                    </p>
                  </div>
                </div>

                <div className="buy-now-btn-div justify-content-start ">
                  <button
                    type="button"
                    className="btn btn-warning button1 dark-bg-button zoom-effect px-4"
                  >
                    Explore Now <span className="align-bottom fw-bolder"> → </span>
                  </button>
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


