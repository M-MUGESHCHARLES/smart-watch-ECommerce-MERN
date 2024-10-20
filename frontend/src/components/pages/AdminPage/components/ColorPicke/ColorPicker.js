import React from "react";

export const ColorPicker = ({ colors = [], updateColors }) => {

  const handleColorChange = (index, value) => {
    const updatedColors = colors.map((color, i) =>
      i === index ? value : color
    );
    updateColors(updatedColors);
  };

  const addColor = () => {
    const newColor = "#000"; // Example default color
    updateColors([...colors, newColor]);
  };

  const removeColor = (index) => {
    const updatedColors = colors.filter((_, i) => i !== index);
    updateColors(updatedColors);
  };

  return (
    <div className="my-2">
      <label htmlFor="colors" className="form-label">
        <h5 className="text-muted">Product Colors:</h5>
      </label>
      <button
        type="button"
        className="btn btn-secondary my-3 ms-5"
        onClick={addColor}
      >
        Add Color
      </button>
      <div className="row">
        {colors.map((color, index) => (
          <div className="col my-2 d-flex align-items-center" key={index}>
            <label htmlFor={`color-${index}`} className="form-label me-2">
              <h6 className="text-muted">Color {index + 1}:</h6>
            </label>
            <input
              type="color"
              className="form-control form-control-color border border-3 border-secondary"
              id={`color-${index}`}
              value={color.value}
              title="Choose your color"
              onChange={(e) => handleColorChange(index, e.target.value)}
            />
            <span
              type="button"
              className="bg-danger rounded-4 ms-3 fw-bold text-white p-1"
              onClick={() => removeColor(index)}
            >
              &times;
            </span>
          </div>
        ))}
      </div>

      {/* Display selected colors */}
      <div className="mt-3">
        <h6 className="text-muted">Selected Colors:</h6>
        <textarea
          id="colors"
          name="colors"
          className="form-control"
          readOnly
          value={colors.join(" , ")}
        />
      </div>
    </div>
  );
};
