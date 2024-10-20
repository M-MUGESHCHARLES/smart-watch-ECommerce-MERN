import React from "react";

export const ImageUpload = ({ productDetails, setProductDetails }) => {
  
  // Handle image selection and add to the productDetails.image array
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setProductDetails((prevDetails) => ({
      ...prevDetails,
      image: [...prevDetails.image, ...files],
    }));
  };

  // Handle image removal from the productDetails.image array
  const handleRemoveImage = (index) => {
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      image: prevDetails.image.filter((_, i) => i !== index),
    }));
  };

  return (
    <div>
      <label htmlFor="imageUpload" className="form-label">
        <h5 className="text-muted">Upload Images:</h5>
      </label>
      <input
        type="file"
        id="imageUpload"
        multiple
        className="form-control"
        accept="image/*"
        onChange={handleImageChange}
      />

      {/* Display the selected images */}
      <div className="mt-3">
        <h6 className="text-muted">Selected Images:</h6>
        <div className="d-flex flex-wrap" name="image">
          {productDetails.image.map((image, index) => (
            <div key={index} className="m-2">
              <img
                src={URL.createObjectURL(image)}
                alt={`Selected ${index}`}
                className="img-thumbnail"
                style={{ maxWidth: "100px", maxHeight: "100px" }}
              />
              <button
                type="button"
                className="btn btn-danger mt-1 w-100"
                onClick={() => handleRemoveImage(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
