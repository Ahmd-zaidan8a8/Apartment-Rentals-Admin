import { useState } from "react";
import data from "./data/data.json";
import List from "./components/List";

const App = () => {
  const { results } = data;
  
  // results Arr of objects
  const [apartementList, setApartementList] = useState(results);

  const handleDelete = (id) => {
    const filtered = apartementList.filter((apartement) => apartement.id !== id);
    setApartementList(filtered);
  };

  return (
    <>
      <List apartementList={apartementList} onDelete={handleDelete} />
    </>
  );
};

export default App;
