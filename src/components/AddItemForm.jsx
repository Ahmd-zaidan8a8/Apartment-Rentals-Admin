import { useEffect } from "react";
import { useRef } from "react";

const AddItemForm = ({ handleChange, handleSubmit, newItem }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);
  return (
    <div className="border p-4 mb-4">
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
            name="name"
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
            name="city"
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
            name="country"
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
            name="price"
            value={newItem.price}
            onChange={handleChange}
            placeholder="Enter the price"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Price
          </label>
          <br />
          <input
            className="form-control"
            type="number"
            name="rating"
            value={newItem.price}
            onChange={handleChange}
            placeholder="Enter the rating"
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItemForm;
