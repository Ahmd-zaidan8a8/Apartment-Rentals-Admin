import { Link } from "react-router-dom";

const ListItem = (props) => {
  const { item , onDelete } = props;
  console.log(item['picture_url'].url)
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

      <Link className="details-link" to="#">Show Details</Link>
    </div>
  );
};

export default ListItem;
