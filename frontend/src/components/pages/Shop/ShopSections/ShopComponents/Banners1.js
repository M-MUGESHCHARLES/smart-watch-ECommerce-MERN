import React from "react";
import { Carousel } from "antd";

// banner images
import bannerlg01 from "../../../../images/banners/Rage.webp";
import bannersm01 from "../../../../images/banners/Rage_01.webp";
import bannerlg02 from "../../../../images/banners/Fusion.webp";
import bannersm02 from "../../../../images/banners/Fusion_01.webp";
import bannerlg03 from "../../../../images/banners/Boltt.png";
import bannersm03 from "../../../../images/banners/Boltt_01.webp";

const HeroBanner = () => {

  return (
    <div className=" m-0 p-0">
      <Carousel dotPosition="right" autoplay effect="fade" autoplaySpeed={3000}>
        <div>
          <img src={bannerlg01} className="img-fluid d-none d-sm-none d-md-block" id="banner" alt="banner" />
          <img src={bannersm01} className="img-fluid d-sm-block d-md-none " id="banner-sm" alt="banner" />
        </div>
        <div>
          <img src={bannerlg02} className="img-fluid d-none d-sm-none d-md-block" id="banner" alt="banner" />
          <img src={bannersm02} className="img-fluid d-sm-block d-md-none " id="banner-sm" alt="banner" />
        </div>
        <div>
          <img src={bannerlg03} className="img-fluid d-none d-sm-none d-md-block" id="banner" alt="banner" />
          <img src={bannersm03} className="img-fluid d-sm-block d-md-none"  id="banner-sm" alt="banner" />
        </div>
      </Carousel>
    </div>
  );
};
export default HeroBanner;
