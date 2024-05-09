import { Link } from "react-router-dom";
import AddItemForm from "../components/AddItemForm";

const Dashboard = ({ newItem, handleChange, handleSubmit , isFormSubmitted}) => {
  return (
    <div>
      <AddItemForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        newItem={newItem}
        isFormSubmitted={isFormSubmitted}
      />
      <div className="text-center p-4">
        <Link to="/" className="btn btn-outline-secondary">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
