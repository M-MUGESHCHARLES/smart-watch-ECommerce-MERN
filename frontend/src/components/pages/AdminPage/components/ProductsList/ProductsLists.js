import React, {  useEffect } from 'react'
import { MdOutlineDeleteForever } from "react-icons/md";
import { useAdminContext } from '../../AdminContext';

export const ProductsLists = () => {

    const {formatPrice, fetchProducts, removeProduct, allProducts  } = useAdminContext();

    useEffect(() => {
      if (fetchProducts) {
        fetchProducts();
      }
    }, [fetchProducts]);
    

  return (
    <div className="py-2 m-0 p-0" id='SideContent'>
      <h2 className="text-center my-4 "> Products List </h2>

        {/* --------------------- table heading  */}
      <div className="row mx-auto border-bottom border-3 border-secondary-subtle pt-3 px-1">
        <div className="col-5 col-md-7 py-3">
          <h6 className="m-0 p-0 fw-bold text-center text-secondary">Product</h6>
        </div>
        <div className="col-2 col-md-1 py-3">
          <h6 className="m-0 p-0 fw-bold text-center text-secondary">Color</h6>
        </div>
        <div className="col-3 py-3">
          <h6 className="m-0 p-0 fw-bold text-center text-secondary"> Price</h6>
        </div>
        <div className="col-2 col-md-1 py-3">
          <h6 className="m-0 p-0 fw-bold text-center text-secondary">Delete</h6>
        </div>
      </div>

      {/* ------------------------ product details */}

      {allProducts.map((product, index) =>  {
        return (
            
        <div className='row mx-auto border-bottom border-dark px-1 pt-3 pb-1' key={index}>
        <div className='col-5 col-md-7 row m-0 p-0 border-end border-dark'>

            <div className='col-12 col-md-4 border-dark p-2 d-flex'>
              <img src={product.image[0]} className='w-50 mx-auto rounded-4 align-self-center' alt='' id="Product-Image"/> 
            </div>
            <div className='col-12 col-md-8 align-content-center'>
                <p className='text-dark fw-bold m-0 '>Name : <span className='text-secondary fw-normal'>{product.name}</span> </p> 
                <p className='text-dark fw-bold m-0 '>Category :  <span className='text-secondary fw-normal'>{product.category}</span></p> 
                <p className='m-0 '>                
                <span className={`badge rounded-5 text-bg-primary my-2 px-2 py-1 ${product.bestSeller ? "d-inline-block" : "d-none"}`}>
                    Best Seller
                </span></p> 

            </div>
        </div>

        <div className='col-2 col-md-1 row m-0 p-0 border-end border-dark align-content-center'>
                {product.colors.map((color,index) => {
                    return (
                      <div className='col-12' key={index}>
                          <span
                            className="p-2 p-lg-3 mx-auto my-1 align-items-center justify-content-center d-flex"
                            style={{
                              borderRadius: "50%",
                              height: "12px",
                              width:"12px",
                              backgroundColor: color,
                              border: "0.5px solid black",
                            }}
                            key={index}
                          >{index + 1 }</span>
                      </div>
                    );
                })}
        </div>

        <div className='col-3 border-end border-secondary m-0 p-0 align-content-center'>
            <p className='text-dark fw-bold m-0 text-center'>Old Price : 
                <span className='text-secondary fw-semibold'>{ formatPrice(product.old_price)}</span> </p>
            <p className='text-dark fw-bold m-0 text-center'>New Price :  
                <span className='text-success fw-bold'>{formatPrice(product.price)}</span> </p>
        </div>

        <div className="col-2 col-md-1 m-0 p-0 align-content-center text-center">
              <button className='btn btn-danger px-1 py-2'
               onClick={() => removeProduct(product.id)}>
                <MdOutlineDeleteForever className=" fs-2" />
              </button>
            </div>
    
        </div>
        );      
    })}
      
    </div>
  );
}

