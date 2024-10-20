import React from 'react'
import { useShop } from '../pages/Shop/ShopContext';
import ScrollToTopLink from './ScrollToTopLink';

export const CartButton = () => {

  const {cart} = useShop();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <ScrollToTopLink to="cart">
        <button type="button" className="btn btn-secondary position-relative zoom-effect">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalItems}
          </span>
        </button>
      </ScrollToTopLink>
    </>
  );
}
