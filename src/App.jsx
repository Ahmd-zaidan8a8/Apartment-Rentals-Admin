import { useState } from "react";
import data from "./data/data.json";
import List from "./components/List";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import ItemDetails from "./components/ItemDetails";
import About from "./components/About";

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
      {/* <Routes> */}
        {/* <Route path="/dashboard" element={<Dashboard />} */}
        {/* <Route path="/notfound" element={<NotFound />} /> */}
      <List apartementList={apartementList} onDelete={handleDelete} />
      {/* </Routes> */}
    </>
  );
};

export default App;
