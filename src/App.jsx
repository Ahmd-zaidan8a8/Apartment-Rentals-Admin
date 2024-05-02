import { useState } from "react";
import data from "./data/data.json";
import List from "./components/List";
import NotFound from "./components/NotFound";
import ItemDetails from "./components/ItemDetails";
import About from "./components/About";
import { Routes, Route , Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

const App = () => {
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
    <>
      <Navbar />
      <Link to="./components/HomePage">HomePage</Link>
      <Link to="./components/NotFound">Error</Link>
      <Link to="./components/:ItemDetails">Details</Link>
      <Link to="./components/About">About</Link>

      <Sidebar />

      <HomePage>
        <List apartementList={apartementList} onDelete={handleDelete} />
      </HomePage>

      <Footer />

      <Routes>
        <Route path="/components/HomePage" element={<HomePage />} />
        <Route path="/components/NotFound" element={<NotFound />} />
        <Route path="/components/:ItemDetails" element={<ItemDetails />} />
        <Route path="/components/About" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
