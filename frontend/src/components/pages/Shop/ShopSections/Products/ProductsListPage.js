import React, { useState } from 'react';
import { Item } from '../Item/Item';

import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useShop } from '../../ShopContext';


export const ProductsListPage = (props) => {

  const {products} = useShop();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 7; 

  // Filter products based on category
  const filteredProducts = products.filter(
    (product) => product.category === props.category
  );

  // Calculate the products to display on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className=" m-0 p-0 w-100 mx-auto" id="ProductsListPage">

      {/* Banner section  */}

      <div className="row  rounded-5 m-0 p-0 w-100 h-100">
        {props.banner}
      </div>

      {/* Products Items displays section */}

      <div className="row py-3 m-0 p-0 ">

        <div className="col-0 col-lg-3 ">
          {/* Add Filteration sections */}
        </div>

        <div className="col-12 col-lg-9 m-0 p-0">
          <div className="row mx-auto">
            {currentProducts.map((product, i) => {
              return (
                <div key={i} className="col-6 col-md-4 col-lg-3 py-2 px-2">
                  <Item
                    name={product.name}
                    image={product.image}
                    description={product.description}
                    price={product.price}
                    old_price={product.old_price}
                    bestSeller={product.bestSeller}
                    colors={product.colors}
                    category={product.category}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

          <div className="light-bg-hr">
            <hr />
          </div>

{/* Pagination section */}
          <div className="row py-3 mx-auto">
            <nav>
              <ul className="pagination justify-content-center">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <MdOutlineKeyboardDoubleArrowLeft />
                  </button>
                </li>
                {[...Array(totalPages)].map((_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      index + 1 === currentPage ? "active" : ""
                    }`}
                  >
                    <button
                      onClick={() => paginate(index + 1)}
                      className="page-link"
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <MdOutlineKeyboardDoubleArrowRight />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
    </div>
  );
}
