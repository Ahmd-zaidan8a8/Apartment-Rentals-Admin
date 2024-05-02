import { useState } from "react";
import data from "./data/data.json";
import List from "./components/List";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import ItemDetails from "./components/ItemDetails";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";


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
    <nav>
      <p>We need to import the Navbar here</p>
    </nav>
    <div>
      <p>The sidebar needs to be here</p>
    </div>
    <footer>
      <p>The footer needs to be displayed here</p>
    </footer>

      {/* <Routes> 
         <Route path="/components/dashboard" element={<Dashboard />} />
         <Route path="/components/notfound" element={<NotFound />} />  */}
         {/* <Route path="/components/itemdetails" element={<ItemDetails />} /> */}
         {/* <Route path="/components/about" element={<About />} /> */}
      <List apartementList={apartementList} onDelete={handleDelete} />
       {/* </Routes> */}
    </>
  );
};

export default App;
