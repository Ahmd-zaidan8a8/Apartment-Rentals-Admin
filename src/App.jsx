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
import DisplayFeedback from "./components/DisplayFeedback";

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

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedList = [...apartementList, newItem].reverse();
    setApartementList(updatedList);
    setIsFormSubmitted(true);
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
    setIsFormSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-md-3 container">{<Sidebar />}</div>
          <div className="col-md-9">
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
                    isFormSubmitted={isFormSubmitted}
                  />
                }
              />
              <Route
                path="/edit/:itemId"
                element={<EditItemForm handleEditSubmit={handleEditSubmit} />}
              />
              <Route path="/feedback" element={<DisplayFeedback />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
