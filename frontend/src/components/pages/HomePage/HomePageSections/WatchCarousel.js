import React from 'react';
import Slider from "react-slick";
import Watch1 from "../../../images/HomePage/smart-watch-1.png";
import Watch2 from "../../../images/HomePage/smart-watch-2.png";
import Watch3 from "../../../images/HomePage/smart-watch-3.png";



export default function WatchCarousel() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      waitForAnimate: false,
    };
  
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="rings d-grid justify-content-center ">
            <div className="ring3 justify-content-center">
              <div className="ring2 justify-content-center">
                <div className="ring1 justify-content-center ">
                  <div className="hero-img justify-content-center">
                    <img src={Watch1} alt="Hero-Img1" className="Hero-img1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="rings d-grid justify-content-center ">
            <div className="ring6 justify-content-center">
              <div className="ring5 justify-content-center">
                <div className="ring4 justify-content-center ">
                  <div className="hero-img justify-content-center">
                    <img src={Watch2} alt="Hero-Img2" className="Hero-img2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="rings d-grid justify-content-center ">
            <div className="ring9 justify-content-center">
              <div className="ring8 justify-content-center">
                <div className="ring7 justify-content-center ">
                  <div className="hero-img justify-content-center">
                    <img src={Watch3} alt="Hero-Img3" className="Hero-img3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

