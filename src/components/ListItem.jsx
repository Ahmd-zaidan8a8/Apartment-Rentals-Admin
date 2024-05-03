import { Link } from "react-router-dom";

const ListItem = ({ item , onDelete }) => {
  return (
    <div className="card">
      <p>{item.name}</p>
      <p>{item.city} , {item.country}</p>
      <p>Price: {item.price}</p>
      <p>{item["review_scores_rating"]}</p>

      {item.cancellation_policy === "flexible" && <p>flexible</p>}

      <button
        onClick={() => {
          onDelete(item.id);
        }}
      >
        Delete
      </button>

      <Link className="details-link" to="/items:itemDetail">
        Show Details
      </Link>
    </div>
  );
};

export default ListItem;
