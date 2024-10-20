import React from "react";
import { useShop } from "../../ShopContext";
import { MdOutlineDeleteForever } from "react-icons/md";
import DefaultImage from '../../../../images/smartwatch.gif';

export const CartItems = (props) => {
  const { formatPrice, cart, removeItemFromCart } = useShop();

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="mb-5 pb-5"> 
        <div className="row container border-bottom border-secondary mx-auto">
          <div className="col-0 col-md-2 py-3 d-none d-md-block">
            <h5 className="m-0 p-0 fw-bold text-center">Product</h5>
          </div>
          <div className="col-3 py-3">
            <h5 className="m-0 p-0 fw-bold text-center">Name</h5>
          </div>
          <div className="col-2 col-md-1 py-3">
            <h5 className="m-0 p-0 fw-bold text-center">Color</h5>
          </div>
          <div className="col-3 py-3">
            <h5 className="m-0 p-0 fw-bold text-center">Price * </h5>
            <h5 className="m-0 p-0 fw-bold text-center">Quantity</h5>
          </div>
          <div className="col-2 py-3">
            <h5 className="m-0 p-0 fw-bold text-center">Total</h5>
          </div>
          <div className="col-2 col-md-1 py-3">
            <h5 className="m-0 p-0 fw-bold text-center">Delete</h5>
          </div>
        </div>
  
        {cart.map((product) => (
          <div
            key={`${product.id}-${product.selectedColor}`}
            className="row container border border-secondary-subtle mx-auto "
          >
            <div className="col-0 col-md-2 m-0 p-2 align-content-center text-center d-none d-md-block">
              <img
                className="border rounded-4 w-25 h-100"
                src={product.image && product.image.length > 0 ? product.image : DefaultImage }
                alt={product.name}
              />
            </div>
  
            <div className="col-3 m-0 p-0 align-content-center text-center">
              <h5>{product.name}</h5>
            </div>
  
            <div className=" col-2 col-md-1 m-0 p-0 align-content-center text-center">
              <span
                className=" p-3 d-inline-block"
                style={{
                  borderRadius: "50px",
                  height: "20px",
                  backgroundColor: product.selectedColor,
                  border: "0.5px solid black",
                }}
              ></span>
            </div>
  
            <div className="col-3 m-0 p-0 align-content-center text-center">
              <span className="col-12 m-0 p-0 noto-serif fw-semibold ">
                {formatPrice(product.price)}
                <br /> &nbsp;* {product.quantity}
              </span>
            </div>
  
            <div className="col-2 m-0 p-0 align-content-center text-center">
              <h5 className="m-0 p-0 noto-serif fw-bold ProductPrice">
                {formatPrice(product.price * product.quantity)}
              </h5>
            </div>
  
            <div className="col-1 m-0 p-0 align-content-center text-center">
              <MdOutlineDeleteForever
                className=" fs-2 RemoveFromCartButton"
                onClick={() =>
                  removeItemFromCart(product.id, product.selectedColor)
                }
              />
            </div>
          </div>
        ))}
      </div>
        <div className="row container mx-auto mt-5 py-5">
          <h4> Cart Total : </h4>
          <div className="col-12 col-md-6 row my-4">
            <div className="col-12 d-flex flex-row justify-content-between border-bottom border-secondary-subtle py-2 px-3 ">
              <h6 className="">Sub Total : </h6>
              <h6 className="noto-serif"> {formatPrice(totalAmount)} </h6>
            </div>
            <div className="col-12 d-flex flex-row justify-content-between border-bottom border-secondary-subtle py-2 px-3">
              <h6 className="">Shipping Fee : </h6>
              <h6 className=""> {formatPrice(0)} </h6>
            </div>
            <div className="col-12 d-flex flex-row justify-content-between py-2 px-1">
              <h5 className=" fw-bolder">Total : </h5>
              <h5 className="noto-serif fw-bolder fs-4"> {formatPrice(totalAmount)} </h5>
            </div>
            <button type="button" className="btn btn-outline-warning light-bg-button w-75 mx-auto mt-5 mb-4">Proceed to checkout </button>

          </div>
        </div>
    </>
  );
};
