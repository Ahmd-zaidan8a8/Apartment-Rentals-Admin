import { useState } from "react";
import data from "./data/data.json";

const App = () => {
  const { results } = data;
  const [apartements, setApartements] = useState(results);

  const handleDelete = (id) => {
    const filtered = apartements.filter((apartement) => apartement.id !== id);
    setApartements(filtered);
  };
  const apartementList = apartements.map((apartement) => {
    return (
      <div key={apartement.id}>
        <p>{apartement.name}</p>
        <p>Price: {apartement.price}</p>
        {apartement.cancellation_policy === "flexible" && <p>flexible</p>}
        <button
          onClick={() => {
            handleDelete(apartement.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <>
      <h1>Appartements List.</h1>
      <ul>{apartementList}</ul>
    </>
  );
};

export default App;
