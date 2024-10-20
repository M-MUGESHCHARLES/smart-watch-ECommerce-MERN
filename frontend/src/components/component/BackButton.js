import React from 'react'
import { useNavigate } from 'react-router-dom';
import ScrollToTopLink from './ScrollToTopLink';

export default function BackButton() {

  const navigate = useNavigate(); 

  return (
    <>
    <ScrollToTopLink to="/shop" > 
      <div className="col-md-3 text-center header-buttons-div ">
        <button type="button" className="btn btn-secondary ms-5 me-3" onClick={() => navigate(-1)}>
          <span className="Header-Button ps-2 pe-2 zoom-effect">
            <i className="fa-solid fa-arrow-left bi "></i> &nbsp; Back
          </span>
        </button>
      </div>
    </ScrollToTopLink>
    </>
  );
}
