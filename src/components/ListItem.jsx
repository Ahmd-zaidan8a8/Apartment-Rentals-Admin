import { Link } from "react-router-dom";

const ListItem = ({ item, onDelete , handleAddtoFavorites }) => {
  return (
    <div className="card mb-2">
      <Link
        to={`/items/${item.id}`}
        className="list-group-item list-group-item-action"
        aria-current="true"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{item.name}</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">
          {`Location:
          ${item.city}, ${item.country}`}
        </p>
        <p className="mb-1">Price: {item.price}$</p>
        <p className="mb-1">Raiting: {item["review_scores_rating"]}</p>
        <small>
          {item.cancellation_policy === "flexible" && (
            <p>Cancellation: FLEXIBLE</p>
          )}
        </small>
      </Link>
      <div className="d-flex justify-content-around">
        <Link to={`/edit/${item.id}`}>
          
          <button className="btn btn-primary m-1">Edit Item</button>
        </Link>
        <button
          className="btn btn-danger m-1"
          onClick={() => {
            onDelete(item.id);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => handleAddtoFavorites(item.id)}
          className="btn btn-info"
        >
          Add to Favorites
        </button>
      </div>
    </div>
  );
};

export default ListItem;
