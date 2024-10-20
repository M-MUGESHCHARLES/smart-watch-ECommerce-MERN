import React from "react";
import Slider from "react-slick";

export default function TrendingNowCarousel() {
  var settings = {
    infinite: true,
    dots: false,
    speed: 2500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    arrows: false,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 0.5,
        },
      },
    ],
  };

  return (
    <div className="p-2">
      <Slider {...settings}>
        <div>
          <div className="p-2 p-md-3 p-lg-4 text-center mx-5">
            <h1 id="TrendingHeading"> #TrendingNow </h1>
          </div>
        </div>

        <div>
          <div className="p-2 p-md-3 p-lg-4 text-center mx-5">
            <h1 id="TrendingHeading"> #TrendingNow </h1>
          </div>
        </div>

        <div>
          <div className="p-2 p-md-3 p-lg-4 text-center mx-5">
            <h1 id="TrendingHeading"> #TrendingNow </h1>
          </div>
        </div>

        <div>
          <div className="p-2 p-md-3 p-lg-4 text-center mx-5">
            <h1 id="TrendingHeading"> #TrendingNow </h1>
          </div>
        </div>
      </Slider>
    </div>
  );
}