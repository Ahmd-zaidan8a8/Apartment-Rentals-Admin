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
      <h1 className="fs-2">Apartement Details</h1>
      {apartement !== null && (
        <ul className="list-unstyled">
          <li class="lh-lg pt-3 pb-3 fs-5"><b>{apartement.name}</b></li>
          <li class="lh-lg">
            {" "}
            <b>Location: </b>{apartement.city}, {apartement.country}
          </li>
          <li class="lh-lg"><b>Accommodates:</b> {apartement.accommodates}</li>
          <li class="lh-lg"><b>Price:</b> {apartement.price}€</li>
          <li class="lh-lg"><b>Cleaning fee:</b> {apartement["cleaning_fee"]}€</li>
          <li class="lh-lg">
            <b>Review scores rating:</b> {apartement["review_scores_rating"]} / 100
          </li>
          <li class="lh-lg"><b>Bathrooms:</b> {apartement.bathrooms}</li>
          <li class="lh-lg"><b>Bedrooms:</b> {apartement.bedrooms}</li>
          <li class="lh-lg"><b>Beds:</b> {apartement.beds}</li>
          <li class="lh-lg"><b>Host response time:</b> {apartement["host_response_time"]}</li>
          <li class="lh-lg"><b>Description:</b> {apartement.description}</li>
        </ul>
      )}
      </div>
      <div className="col-4">
        <p>photo placeholder</p>
        
        </div>
      
    </div>
    <div className="text-center p-3">
        <Link to="/" className="btn btn-outline-secondary">
          Back to Homepage
        </Link>

      </div>
    </div>
  );
}

export default ItemDetails;
