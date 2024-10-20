import React from 'react'

// images
import Logo1 from "../../../../images/partners/amazon.png";
import Logo2 from "../../../../images/partners/flipkar.png";
import Logo3 from "../../../../images/partners/myntra.png";
import Logo4 from "../../../../images/partners/chroma.png";
import Logo5 from "../../../../images/partners/ajio.png";
import Logo6 from "../../../../images/partners/cred.png";
import Logo7 from "../../../../images/partners/nykaa.png";
import Logo8 from "../../../../images/partners/sangeetha.png";


export const BrandPartners = () => {
  return (
    <div className="BrandPartners pt-4 pb-3">
        <div className="container mb-4">
        <h2 className="Shop-Heading"> Our Partners</h2>
      </div>

      <div className="row container mx-auto parent">
        <div className="col-lg-3 col-md-4 col-6 text-center p-3 child" data-aos="zoom-in-up" > <img src={Logo4} alt='' height="auto" /> </div>
        <div className="col-lg-3 col-md-4 col-6 text-center p-3 child" data-aos="zoom-in-up" > <img src={Logo2} alt='' height="auto" /> </div>
        <div className="col-lg-3 col-md-4 col-6 text-center p-3 child" data-aos="zoom-in-up" > <img src={Logo3} alt='' height="auto" /> </div>
        <div className="col-lg-3 col-md-4 col-6 text-center p-3 child" data-aos="zoom-in-up" > <img src={Logo5} alt='' height="auto" /> </div>
        <div className="col-lg-3 col-md-4 col-6 text-center p-3 child" data-aos="zoom-in-up" > <img src={Logo6} alt='' height="auto" /> </div>
        <div className="col-lg-3 col-md-4 col-6 text-center p-3 child" data-aos="zoom-in-up" > <img src={Logo1} alt='' height="auto" /> </div>
        <div className="col-lg-3 col-md-4 col-6 text-center p-3 child" data-aos="zoom-in-up" > <img src={Logo7} alt='' height="auto" /> </div>
        <div className="col-lg-3 col-md-4 col-6 text-center p-3 child" data-aos="zoom-in-up" > <img src={Logo8} alt='' height="auto" /> </div>
      </div>

      
    </div>
  );
}
