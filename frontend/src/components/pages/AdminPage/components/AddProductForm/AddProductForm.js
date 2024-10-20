import React, { useState } from "react";
import { ColorPicker } from "../ColorPicke/ColorPicker";
import { ImageUpload } from "../ImageUploder/ImageUploader";
import TagsSelect from "../TagsSelect/TagsSelect";
import axios from 'axios';
import { useAdminContext } from "../../AdminContext";

export default function AddProductForm () {

    const {productCategory, Port } = useAdminContext();

    const [productDetails , setProductDetails] =useState({
      name:'',
      image: [],
      description:'',
      price:0,
      old_price:0,
      bestSeller:false,
      colors: [],
      inStock:true,
      category:'',
      tags: [],
    });

    const changeHandler = (e) => {
      const { name, value, type, checked } = e.target;

      // Handle different types of input
      if (type === "checkbox") {
        setProductDetails((prevDetails) => ({
          ...prevDetails,
          [name]: checked,
        }));
      } else {
        setProductDetails((prevDetails) => ({
          ...prevDetails,
          [name]: value,
        }));
      }
    };

    const updateColors = (newColors) => {
      setProductDetails((prevDetails) => ( {...productDetails, colors: newColors}));
    };

    const updateTags = (newTags) => {
      setProductDetails((prevDetails) => ( {...productDetails, tags: newTags}));
    };

    const handleSubmit = async (event) => {

      event.preventDefault(); 

      const formData = new FormData();

      // Append product details to FormData
      formData.append("name", productDetails.name);
      formData.append("description", productDetails.description);
      formData.append("price", productDetails.price);
      formData.append("old_price", productDetails.old_price);
      formData.append("bestSeller", productDetails.bestSeller);
      formData.append("inStock", productDetails.inStock);
      formData.append("category", productDetails.category);
      formData.append("colors", JSON.stringify(productDetails.colors)); // Convert array to JSON string
      formData.append("tags", JSON.stringify(productDetails.tags)); // Convert array to JSON string

      // Append each selected image file to the FormData
      productDetails.image.forEach((image) => {
        formData.append("images", image);
      });

      try {
        // Send the product details along with the images to the backend
        const response = await axios.post(
          `${Port}/addproduct`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        if (response.data.success) {
          console.log("Form submitted successfully:", response.data);
          alert("Product added successfully!");
        } else {
          alert("Failed to add product");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };

    const clearForm = () => {
      setProductDetails({
        name: "",
        image: [],
        description: "",
        price: 0,
        old_price: 0,
        bestSeller: false,
        colors: [],
        inStock: true,
        category: "",
        tags: [],
      });
    };

    return (
    <div className="AddProductForm" id="SideContent" >
      <form className="p-0 m-0 py-2" onSubmit={handleSubmit}>
        <div className="p-3">
          <div className="my-3">
            <h2> Add New Product :</h2>
          </div>

          <div className="row">
            {/* name field */}
            <div className="col-8 my-2">
              <label htmlFor="name" className="form-label">
                <h6 className="text-muted">Product Name :</h6>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="product name"
                id="name"
                name="name"
                value={productDetails.name}
                onChange={changeHandler}
              />
            </div>
            {/* description field */}
            <div className="col-12 my-2 ">
              <label htmlFor="description" className="form-label">
                <h6 className="text-muted">Description :</h6>
              </label>
              <textarea
                className="form-control"
                placeholder="product description"
                id="description"
                name="description"
                rows="3"
                value={productDetails.description}
                onChange={changeHandler}
              ></textarea>
            </div>
          </div>

          <div className="row row-cols-2 ">
            {/* new price field */}
            <div className="col my-2">
              <label htmlFor="price" className="form-label">
                <h6 className="text-muted">New Price :</h6>
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                placeholder="new price"
                value={productDetails.price}
                onChange={changeHandler}
              />
            </div>

            {/* Old Price field*/}
            <div className="col my-2">
              <label htmlFor="old_price" className="form-label">
                <h6 className="text-muted">Old Price :</h6>
              </label>
              <input
                type="number"
                className="form-control"
                id="old_price"
                name="old_price"
                placeholder="old price"
                value={productDetails.old_price}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="row">
            {/* category field */}
            <div className="col-7 my-2 ">
              <label htmlFor="category" className="form-label">
             <h6 className="text-muted"> Category :</h6>
              </label>
              <select 
                id="category" 
                name="category" 
                className="form-select w-auto py-2 rounded border-2 border-secondary bg-secondary-subtle " 
                value={productDetails.category}
                onChange={changeHandler}
              >
                <option value="">Select product category</option>
                
                {productCategory.map((p,index) => {
                    return(
                    <option key={index} value={p.value}>{p.name}</option>
                )
                })}
                
              </select>
            </div>

            <div className="col-5 row m-0 p-0">
                {/* Best Seller field */}
                <div className="col-12 col-md-6 my-2">
                  <div className="form-check my-auto mt-0 mt-md-4 ">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="bestSeller"
                      name="bestSeller"
                      checked={productDetails.bestSeller}
                      onChange={changeHandler}
                    />
                    <label className="form-check-label" htmlFor="bestSeller">
                      <h6 className="text-muted">: Best Seller</h6>
                    </label>
                  </div>
                </div>
    
                {/* inStock field */}
                <div className="col-12 col-md-6 my-2">
                  <div className="form-check my-auto mt-0 mt-md-4 ">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inStock"
                      name="inStock"
                      checked={productDetails.inStock}
                      onChange={changeHandler}
                    />
                    <label className="form-check-label" htmlFor="inStock">
                   <h6 className="text-muted">   : In Stock</h6>
                    </label>
                  </div>
                </div>
            </div>

          </div>
          

          <div className="px-3"><hr className="mx-auto border-3 border-secondary"/></div>

          <div className="row">
            {/* Colors Input */}
            <ColorPicker colors={productDetails.colors} updateColors={updateColors} />
          </div>

          <div className="px-3"><hr className="mx-auto border-3 border-secondary"/></div>

          <div className="row">
            {/* Image upload field */}
            <ImageUpload productDetails={productDetails} setProductDetails={setProductDetails} />
          </div>

          <div className="px-3"><hr className="mx-auto border-3 border-secondary"/></div>

          <div className="row">
            {/* Product Tags */}
            <TagsSelect tags={productDetails.tags} updateTags={updateTags}  />
          </div>

          <div className="px-5 mt-5 mb-2"><hr className="mx-auto border-3 border-secondary"/></div>


        <div className="d-flex justify-content-around">
          <button type="button" className="btn btn-outline-dark bg-secondary-subtle px-5 py-2 mx-1" onClick={clearForm}> 
            Clear 
          </button>
          
          <button
            type="button"
            className="btn btn-warning px-5 py-2 mx-1"
            data-bs-toggle="modal" data-bs-target="#AddProductModal"
            onClick={() => console.log(productDetails)}
          >
            Add Product 
          </button>

        </div> 

          {/* ======================================= Modal  */}

          <div className="modal fade" id="AddProductModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header bg-secondary">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">{productDetails.name}</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                  Once the product has been added cannot be edited.
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={(e)=> e.preventDefault()}>Edit</button>
                  <button type="submit" className="btn btn-outline-warning" data-bs-dismiss='modal' >Save & Add Product</button>
                </div>
              </div>
            </div>
          </div>



        </div>
      </form>
    </div>
  );
}
