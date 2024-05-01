import { useState } from "react";
import data from "./data/data.json";
import List from "./components/List";

const App = () => {
  const { results } = data;
  const [apartements, setApartements] = useState(results);

  const handleDelete = (id) => {
    const filtered = apartements.filter((apartement) => apartement.id !== id);
    setApartements(filtered);
  };

  return (
    <>
      <h1>Appartements List.</h1>
      <List apartements={apartements} onDelete={handleDelete} />
    </>
  );
};

export default App;
