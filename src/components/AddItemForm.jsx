import { useEffect } from "react";
import { useRef } from "react";
import DisplayFeedback from "./DisplayFeedback";
import { useNavigate } from "react-router-dom";

const AddItemForm = ({ handleChange, handleSubmit, newItem , isFormSubmitted }) => {
  const ref = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);

  return (
    <div className="border p-4 pb-0">
      <h4 className="m-1 p-2">Add a new apartment</h4>
      <form onSubmit={handleSubmit} className="mb-4 p-4 border">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Apartment Name
          </label>
          <input
            ref={ref}
            className="form-control"
            type="text"
            id="name"
            value={newItem.name}
            onChange={handleChange}
            placeholder="Enter an apartment name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            className="form-control"
            type="text"
            id="city"
            value={newItem.city}
            onChange={handleChange}
            placeholder="Enter city"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <br />
          <input
            className="form-control"
            type="text"
            id="country"
            value={newItem.country}
            onChange={handleChange}
            placeholder="Enter country"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <br />
          <input
            className="form-control"
            type="number"
            id="price"
            value={newItem.price}
            onChange={handleChange}
            placeholder="Enter the price"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="review_scores_rating" className="form-label">
            Rating
          </label>
          <br />
          <input
            className="form-control"
            type="number"
            id="review_scores_rating"
            value={newItem["review_scores_rating"]}
            onChange={handleChange}
            placeholder="Enter the rating"
            required
          />
        </div>
      <button type="submit" className="btn btn-primary">
        Add Item
      </button>
      {isFormSubmitted && navigate("/feedback")}
      </form>
    </div>
  );
};

export default AddItemForm;
