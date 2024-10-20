import React, { useContext } from "react";
import { useAdminContext } from "../../AdminContext";

const TagsSelect = ({ tags = [], updateTags }) => {

    const { productTags } = useAdminContext();

      const handleTagChange = (e) => {
        const selectedTag = e.target.value;
        if (selectedTag && !tags.includes(selectedTag)) {
          updateTags([...tags, selectedTag]);
        }
      };
      const removeTag = (index) => {
        updateTags(tags.filter((_, i) => i !== index));
      };

  return (
    <div className="my-2">
      <label htmlFor="tags" className="form-label">
        <h5 className="text-muted"> Product Tags :</h5>
      </label>

      <div className="tags-select">
        <select onChange={handleTagChange} className="tags-select-field px-3 py-2 rounded mb-2 border-2 border-secondary bg-secondary-subtle">
          <option value="">Select a tag</option>
          {productTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <div className="selected-tags m-0 p-0 my-2">
           {/* <textarea  */}
            {/* readOnly
            id="tags"
            name="tags"
            className="form-control"
            value= */}
           {tags.map((tag, index) => (
              <div key={index} className="tag text-nowrap d-inline-block bg-info-subtle rounded-4 border border-2 border-info me-2 mb-2 ps-3 pe-2 py-1">
                <span className="tag-text fw-medium me-3">{tag}</span>
                <span className="tag-close " onClick={() => removeTag(index)}>
                  &times;
                </span>
              </div>
            ))}
           {/* /> */}
        </div>
      </div>
    </div>
  );
};

export default TagsSelect;
