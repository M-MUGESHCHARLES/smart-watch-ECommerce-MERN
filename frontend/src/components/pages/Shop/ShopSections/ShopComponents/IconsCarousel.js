import React from "react";
import Slider from "react-slick";

// svg
import { ReactComponent as Warranty } from "../../../../images/icons/warranty.svg";
import { ReactComponent as Replacment } from "../../../../images/icons/exchange.svg";
import { ReactComponent as Shipping } from "../../../../images/icons/delivery.svg";
import { ReactComponent as Legacy } from "../../../../images/icons/legacy.svg";


export default function IconsCarousel() {
  var settings = {
    className: "center",
    infinite: true,
    dots: false,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: false,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="p-2" id="IconsCarousel">
      <Slider {...settings}>
        <div>
          <div className="p-2 p-lg-5 text-center">
            <Warranty className="IconsCarousel-SVG" />
            <h5 className="mt-2"> 1 Year Warranty </h5>
          </div>
        </div>
        <div>
          <div className="p-2 p-lg-5 text-center">
            <Legacy className="IconsCarousel-SVG" />
            <h5 className="mt-2"> 15 years of Legacy </h5>
          </div>
        </div>
        <div>
          <div className="p-2 p-lg-5 text-center">
            <Shipping className="IconsCarousel-SVG" />
            <h5 className="mt-2"> Free Shipping </h5>
          </div>
        </div>
        <div>
          <div className="p-2 p-lg-5 text-center">
            <Replacment className="IconsCarousel-SVG" />
            <h5 className="mt-2"> 7 Days Replacement </h5>
          </div>
        </div>
      </Slider>
    </div>
  );
}

