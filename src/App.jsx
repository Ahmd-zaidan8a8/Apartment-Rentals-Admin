import ErrorPage from "./pages/ErrorPage";
import ItemDetails from "./pages/ItemDetails";
import About from "./pages/About";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import data from "./data/data.json";
import { useState } from "react";

const App = () => {
  const { results } = data;

  // results Arr of objects
  const [apartementList, setApartementList] = useState(results);
  const [newItem, setNewItem] = useState({
    name: "",
    city: "",
    country: "",
    price: "",
    "review_scores_rating" : "",
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
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedList = [...apartementList, newItem];
    setApartementList(updatedList);
    setNewItem({
      name: "",
      city: "",
      country: "",
      price: "",
      "review_scores_rating" : "",
    });
  };

  return (
    <>
      <Navbar />

      {/* <Link to="/">HomePage</Link>
      <Link to="/items/:itemDetail">Details</Link>
      <Link to="/about">About</Link> */}

      {/* <Sidebar /> */}

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              apartementList={apartementList}
              handleDelete={handleDelete}
            />
          }
        />
        <Route
          path="/items/:itemDetail"
          element={<ItemDetails apartementList={apartementList} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              newItem={newItem}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
};

export default App;
