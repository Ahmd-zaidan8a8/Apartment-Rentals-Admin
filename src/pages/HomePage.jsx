import List from "../components/List";
import data from "../data/data.json";
import { useState } from "react";
import AddItemForm from "../components/AddItemForm";

const HomePage = () => {
  const { results } = data;

  // results Arr of objects
  const [apartementList, setApartementList] = useState(results);

  const [newItem, setNewItem] = useState({
    name: "",
    city: "",
    country: ""
  });

  const handleDelete = (id) => {
    const filtered = apartementList.filter(
      (apartement) => apartement.id !== id
    );
    setApartementList(filtered);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedList = [...apartmentList, newItem];
    setApartementList(updatedList);
    setNewItem({
      name: "",
      city: "",
      country: ""
    });
  };

  return (
    <div className="HomePage m-1">
      <h1 className="m-2 mt-4">Your appartments' list</h1>
      
      <List apartementList={apartementList} onDelete={handleDelete} />
      {apartementList.length > 0 && (
        <AddItemForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        newItem={newItem}
      />
      )};
    </div>
  );
};

export default HomePage;
