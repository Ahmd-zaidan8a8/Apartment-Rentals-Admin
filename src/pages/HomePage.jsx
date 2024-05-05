import List from "../components/List";
import data from "../data/data.json";
import { useState } from "react";

const HomePage = () => {
  const { results } = data;

  // results Arr of objects
  const [apartementList, setApartementList] = useState(results);

  const handleDelete = (id) => {
    const filtered = apartementList.filter(
      (apartement) => apartement.id !== id
    );
    setApartementList(filtered);
  };

  return (
    <div className="HomePage m-1">
      <h1 className="m-2 mt-4">Your appartments' list</h1>
      <List apartementList={apartementList} onDelete={handleDelete} />
    </div>
  );
};

export default HomePage;
