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
    e.preventDefault();
    const updatedList = [...apartementList, newItem].reverse();
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
      {/* <Link to="/">HomePage</Link>
      <Link to="/items/:itemDetail">Details</Link>
      <Link to="/about">About</Link> */}

      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
          </div>
          <div className="col-md-9">

          </div>
        </div>
      </div> */}
      <Navbar />

      <div class="container">
        <div class="row">
          <div class="col-md-3 container">{<Sidebar />}</div>
          <div class="col-md-9">
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
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default App;
