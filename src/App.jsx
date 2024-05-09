import ErrorPage from "./pages/ErrorPage";
import ItemDetails from "./pages/ItemDetails";
import About from "./pages/About";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import data from "./data/data.json";
import { useState } from "react";
import EditItemForm from "./components/EditItemForm";

const App = () => {
  const { results } = data;

  const [apartementList, setApartementList] = useState(results);
  const [newItem, setNewItem] = useState({
    name: "",
    city: "",
    country: "",
    price: "",
    review_scores_rating: "",
  });

  const handleDelete = (id) => {
    const filtered = apartementList.filter(
      (apartement) => apartement.id !== id
    );
    setApartementList(filtered);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNewItem({
      ...newItem,
      [id]: value,
    });
  };

  // TODO: Feedback
  const handleSubmit = (e) => {
    console.log(apartementList);
    e.preventDefault();
    const updatedList = [...apartementList, newItem].reverse();
    console.log(updatedList);
    setApartementList(updatedList);
    setNewItem({
      name: "",
      city: "",
      country: "",
      price: "",
      review_scores_rating: "",
    });
  };

  const handleEditSubmit = (data, apartementId) => {
    const newApartment = data;

    const newList = apartementList.map((apartement) => {
      return apartementId === apartement.id
        ? { ...newApartment, id: apartementId }
        : apartement;
    });
    setApartementList(newList);
  };

  return (
    <>
      <Navbar />

      {/* <Link to="/about">About</Link> */}
      <Link to="/dashboard">Go to dashboard</Link>

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
          path="/items/:itemId"
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
        <Route
          path="/edit/:itemId"
          element={<EditItemForm handleEditSubmit={handleEditSubmit} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
};

export default App;
