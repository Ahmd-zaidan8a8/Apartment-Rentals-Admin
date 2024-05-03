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
    <div className="HomePage">
      <h1>This is our HomePage</h1>
      <List apartementList={apartementList} onDelete={handleDelete} />
    </div>
  );
};

export default HomePage;
