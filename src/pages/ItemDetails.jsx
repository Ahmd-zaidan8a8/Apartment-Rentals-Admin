import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ItemDetails({ apartementList }) {
  console.log("item details called");
  const [apartement, setApartement] = useState(null);
  const id = useParams();
  console.log(apartement);

  useEffect(() => {
    console.log("useEffect called");
    setApartement(
      apartementList.filter((apartement) => apartement.id === id.itemDetail)[0]
    );
  }, []);

  return (
    <div className="ItemDetails container m-2 pt-2">
      <div className="row border">
        <div className="col-8">
      <h1>Apartement Details</h1>
      {apartement !== null && (
        <ul className="list-unstyled">
          <li><b>{apartement.name}</b></li>
          <li>
            {" "}
            <b>Location: </b>{apartement.city} , {apartement.country}
          </li>
          <li><b>Accommodates:</b> {apartement.accommodates}</li>
          <li><b>Price:</b> {apartement.price}€</li>
          <li><b>Cleaning fee:</b> {apartement["cleaning_fee"]}€</li>
          <li>
            <b>Review scores rating:</b> {apartement["review_scores_rating"]} / 100
          </li>
          <li><b>Bathrooms:</b> {apartement.bathrooms}</li>
          <li><b>Bedrooms:</b> {apartement.bedrooms}</li>
          <li><b>Beds:</b> {apartement.beds}</li>
          <li><b>Host response time:</b> {apartement["host_response_time"]}</li>
          <li><b>Description:</b> {apartement.description}</li>
        </ul>
      )}
      </div>
      <div className="col-4">
        <p>photo placeholder</p>
        
        </div>
      
    </div>
    <div className="text-center p-3">
        <Link to="/" className="link-underline-light">
          Back to Homepage
        </Link>

      </div>
    </div>
  );
}

export default ItemDetails;
