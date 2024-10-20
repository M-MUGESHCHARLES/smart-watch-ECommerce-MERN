import React from 'react';
import '../../Shop.css'
import { useNavigate } from 'react-router-dom';
import { useShop } from '../../ShopContext';

export const Item = (props) => {

  const {formatPrice} = useShop();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleButtonClick = () => {
      navigate(`/shop/${props.category}/${props.name}`);
      scrollToTop();
  }

  return (
    <>
      <div className="Item border rounded border-secondary-subtle text-center d-flex flex-column p-0 m-0 shadow bg-body-tertiary rounded" 
           onClick={handleButtonClick} data-aos="slide-left"
      >
        <div className="row object-fit-cover m-0 p-0">
          <div className="Item_image p-0">
            <img
              src={props.image[0]}
              alt=""
              className="object-fit-cover img-fluid rounded-top"
              onClick={handleButtonClick}
            />
            <span
              className={` badge rounded-3 ${
                props.bestSeller ? "d-block" : "d-none"
              }`}
              id="bestSeller"
            >
              Best Seller
            </span>
          </div>
        </div>

        <div className="row py-2 px-0 my-2">
          <h6 className="fs-5 fw-bolder Cinzel fs-smaller"> {props.name} </h6>
          <div className="light-bg-hr">
            <hr />
          </div>
        </div>

        <div className="row mb-2 px-0">
          <div className="py-2 d-flex flex-row column-gap-3 mx-auto justify-content-center">
            <h6 className="m-0 fw-bold fs-large align-top noto-serif ProductPrice">
              {formatPrice(props.price)}
            </h6>
            <h6 className="text-decoration-line-through fw-light align-bottom m-0 fs-smaller noto-serif OldPrice">
              {formatPrice(props.old_price)}
            </h6>
          </div>

          <div className="container">
            <ul className="d-flex flex-row p-0 m-0 mt-2 justify-content-center">
              {props.colors.map((color, i) => {
                return (
                  <li key={i} className="d-inline-block mx-1">
                    <span
                      className="Item_colors d-inline-block"
                      style={{ backgroundColor: color }}
                    ></span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="buy-now-btn-div justify-content-center px-0 my-3" >
            <button
              type="button"
              className="btn btn-warning button1 light-bg-button zoom-effect px-4 text-nowrap fw-medium"
              onClick={handleButtonClick}
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

