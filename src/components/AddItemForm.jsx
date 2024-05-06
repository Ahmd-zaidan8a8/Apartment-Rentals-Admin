import { useState } from "react";

const AddItemForm = ({ handleChange, handleSubmit, newItem }) => {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleChange}
          placeholder="Apartment name"
          required
        />
        <input
          type="text"
          name="city"
          value={newItem.city}
          onChange={handleChange}
          placeholder="City"
          required
        />
        <input
          type="text"
          name="country"
          value={newItem.country}
          onChange={handleChange}
          placeholder="Country"
          required
        />
        <button type="submit">Add Item</button>
      </form>
    );
  };
  

export default AddItemForm;