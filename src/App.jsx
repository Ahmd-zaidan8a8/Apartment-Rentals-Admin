import ErrorPage from "./pages/ErrorPage";
import ItemDetails from "./pages/ItemDetails";
import About from "./pages/About";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Link to="/">HomePage</Link>
      <Link to="/items/:itemDetail">Details</Link>
      <Link to="/about">About</Link>

      <Sidebar />


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/items/:itemDetail" element={<ItemDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
