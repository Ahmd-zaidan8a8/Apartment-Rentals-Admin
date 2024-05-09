import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import "../App.css";

function ItemDetails({ apartementList }) {
  const [apartement, setApartement] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    const apart = apartementList.find((apartement) => apartement.id === itemId);

    setApartement(apart);
  }, []);

  return (
    <div className="ItemDetails container m-2 pt-2">
      <div className="row border">
        <div className="col-8">
          <h1 className="fs-2">Apartement Details</h1>
          {apartement !== undefined && (
            <ul className="list-unstyled">
              <li className="lh-lg pt-3 pb-3 fs-5">
                <b>{apartement.name}</b>
              </li>
              <li className="lh-lg">
                {" "}
                <b>Location: </b>
                {apartement.city}, {apartement.country}
              </li>
              <li className="lh-lg">
                <b>Accommodates:</b> {apartement.accommodates}
              </li>
              <li className="lh-lg">
                <b>Price:</b> {apartement.price}€
              </li>
              <li className="lh-lg">
                <b>Cleaning fee:</b> {apartement["cleaning_fee"]}€
              </li>
              <li className="lh-lg">
                <b>Review scores rating:</b>{" "}
                {apartement["review_scores_rating"]} / 100
              </li>
              <li className="lh-lg">
                <b>Bathrooms:</b> {apartement.bathrooms}
              </li>
              <li className="lh-lg">
                <b>Bedrooms:</b> {apartement.bedrooms}
              </li>
              <li className="lh-lg">
                <b>Beds:</b> {apartement.beds}
              </li>
              <li className="lh-lg">
                <b>Host response time:</b> {apartement["host_response_time"]}
              </li>
              <li className="lh-lg">
                <b>Description:</b>
                <ExpandableText>{apartement.description}</ExpandableText>
              </li>
            </ul>
          )}
        </div>

        <div className="col-4">
          {apartement.picture ? (
            <img src={apartement.picture} alt="Apartment" />
          ) : (
            <img src="/src/images/apartment-1.jpeg" />
          )}
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
