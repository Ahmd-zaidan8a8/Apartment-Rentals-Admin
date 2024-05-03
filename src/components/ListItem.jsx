import { Link } from "react-router-dom";

const ListItem = ({ item, onDelete }) => {
  return (
    <div className="card mb-2">
      <Link
        to="/items/:itemDetail"
        className="list-group-item list-group-item-action"
        aria-current="true"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{item.name}</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">
          {item.city} , {item.country}
        </p>
        <p className="mb-1">Price: {item.price}$</p>
        <p className="mb-1">Raiting: {item["review_scores_rating"]}</p>
        <small>
          {item.cancellation_policy === "flexible" && <p>flexible</p>}
        </small>
      </Link>
      <button
        className="btn btn-danger"
        onClick={() => {
          onDelete(item.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ListItem;
