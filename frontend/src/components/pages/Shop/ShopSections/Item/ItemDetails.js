import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { useShop } from "../../ShopContext";
import DescriptionAndReviewSection from "../ShopComponents/DescriptionAndReview-section";
import IconsCarousel from "../ShopComponents/IconsCarousel";
import { Link, useParams } from "react-router-dom";
import RelatedProducts from "../ShopComponents/RelatedProducts";
import ScrollToTopLink from "../../../../component/ScrollToTopLink";
// --- Icons
import { IoHome } from "react-icons/io5";


const ProductImage = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(
    images && images.length > 0 ? images[0] : null
  );

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="row" id="ProductImage">
      <div className="container col-12 mx-auto my-1 text-center MainImageContainer">
        <img src={selectedImage} alt="" className="MainImage" />
      </div>
      <div className="container col-10 mx-auto px-5 my-2 d-flex flex-row justify-content-center ThumbnailImageContainer">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`p-1 mx-2 ThumbnailImage ${
              selectedImage === image ? "active" : ""
            }`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

const Color = ({ product }) => {
  const { selectedColors, handleColorChange } = useShop();
  const selectedColor = selectedColors[product.id];

  return (
    <>
      <h6 className="m-0 text-muted"> Colors : </h6>
      <ul className="d-flex flex-row p-0 m-0 mt-2">
        {product.colors.map((color, i) => (
          <li
            key={i}
            className={`d-flex align-items-center mx-1 ItemColor d-inline-block 
                ${selectedColor === color ? "selected" : ""}`}
            onClick={() => handleColorChange(product.id, color)}
          >
            <span
              className="ItemDetailsColors"
              style={{ backgroundColor: color }}
            ></span>
          </li>
        ))}
      </ul>
    </>
  );
};

const QuantityBox = ({ quantity, setQuantity }) => {
  const { handleQuantityChange } = useShop();

  return (
    <div className="">
      <label className="form-label">
        <h6 className="m-0 text-muted"> Quantity : </h6>
      </label>
      <InputGroup>
        <Button
          variant="outline-secondary"
          onClick={() => handleQuantityChange(-1)}
        >
          -
        </Button>
        <FormControl
          className="text-center"
          value={quantity}
          readOnly
          style={{ maxWidth: "75px" }}
        />
        <Button
          variant="outline-secondary"
          onClick={() => handleQuantityChange(1)}
        >
          +
        </Button>
      </InputGroup>
    </div>
  );
};

export const ItemDetails = () => {
  const { category, name } = useParams();

  const {
    products,
    selectedColors,
    quantity,
    setQuantity,
    calculateDiscount,
    handleAddToCart,
    handleBuyNow,
    formatPrice,
  } = useShop();

  const product = products.find(
    (p) => p.category === category && p.name === name
  );

  if (!product) {
    return <div><h1 className="text-center m-5 p-5 text-warning">Product not found</h1></div>;
  }

  const discount = calculateDiscount(product.price, product.old_price);
  const selectedColor = selectedColors[product.id];

  return (
    <div className="row mx-auto pt-4 ItemDetails" id="ItemDetails">
      <div className="py-3 ps-4 fw-bold fs-6 text-capitalize m-0 p-0">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb ps-lg-5">
            <li className="breadcrumb-item text-secondary"> 
              <Link to="/shop" className="text-secondary"> <IoHome className="mb-1" /> Shop </Link>
            </li>
            <li className="breadcrumb-item text-secondary"> 
              <Link to={`/shop/${product.category}`}  className="text-secondary"> {product.category} </Link> 
            </li>
            <li className="breadcrumb-item active text-warning" > {product.name} </li>
          </ol>
        </nav>
      </div>
      
      <div className="container col-12 mx-auto col-md-6">
        <ProductImage images={product.image} />
      </div>
      <div className="container col-12 col-md-6 ">
        <div className="row py-3 px-4 px-md-0 pe-md-3">
          <h1 className="Cinzel">{product.name}</h1>
          <h6 className={product.inStock ? `InStock` : `OutStock`}>
            {product.inStock ? `In stock ` : `Out of stock `}
          </h6>
          <div className="d-flex flex-row align-items-center">
            <span className="me-4 m-0 fs-4 noto-serif fw-semibold ProductPrice">
              {formatPrice(product.price)}
            </span>
            <span className="text-decoration-line-through m-0 mt-2 fw-light fs-6 noto-serif OldPrice">
              {formatPrice(product.old_price)}
            </span>
            <span className="ms-3 badge bg-danger Discount rounded-5">
              {discount > 0 ? `${discount}% off` : ""}
            </span>
          </div>
          <hr className="my-3 w-75" />
          <div className="container">
            <p className="ProductDescription lh-lg">{product.description}</p>
          </div>
          <div className="col container">
            <div className="row">
              <div className="col-12 col-md-6 container mb-2">
                <Color product={product} />
              </div>
              <div className="col-12 col-md-6 container mb-2">
                <QuantityBox quantity={quantity} setQuantity={setQuantity} />
              </div>
            </div>
            <div className="row d-flex flex-row container mx-auto my-3 px-0">
              <div className="col-10 container px-0 my-2">
                <button
                  className="w-100 AddToCart light-bg-button btn btn-outline-secondary"
                  onClick={() =>
                    handleAddToCart(product, selectedColor, quantity)
                  }
                >
                  Add to Cart
                </button>
              </div>
              <div className="col-10 container px-0 my-2">
                {/* <ScrollToTopLink to="cart"> */}
                  <button
                    className="w-100 BuyNow light-bg-button btn btn-warning"
                    // onClick={() => handleBuyNow(product, selectedColor, quantity)}
                    onClick={() =>
                      handleBuyNow(product , selectedColor, quantity)
                    }
                  >
                    Buy Now
                  </button>
                {/* </ScrollToTopLink> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="light-bg-hr my-4">
        <hr />
      </div>
      {/* <hr className="my-4 w-100" /> */}
      <IconsCarousel />
      <DescriptionAndReviewSection
        description={product.description}
        className="mb-2"
      />
      <RelatedProducts category={product.category} name={product.name} />
    </div>
  );
};

export default ItemDetails;
