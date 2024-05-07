import { Link } from "react-router-dom";
import AddItemForm from "../components/AddItemForm";

const Dashboard = ({ newItem, handleChange, handleSubmit }) => {
  return (
    <div>
      <AddItemForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        newItem={newItem}
      />
      <div className="text-center">
        <Link to="/" className="link-underline-light">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
