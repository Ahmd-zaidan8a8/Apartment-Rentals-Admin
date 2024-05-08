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
    <div className="ItemDetails">
      <h1>Apartement Details</h1>
      {apartement !== null && (
        <ul>
          <li>{apartement.name}</li>
          <li>
            {" "}
            Location :{apartement.city} , {apartement.country}
          </li>
          <li>accommodates: {apartement.accommodates}</li>
          <li>price: {apartement.price}</li>
          <li>cleaning fee: {apartement["cleaning_fee"]}</li>
          <li>
            review scores rating: {apartement["review_scores_rating"]} / 100
          </li>
          <li>bathrooms: {apartement.bathrooms}</li>
          <li>bedrooms: {apartement.bedrooms}</li>
          <li>beds: {apartement.beds}</li>
          <li>host response time: {apartement["host_response_time"]}</li>
          <li>description: {apartement.description}</li>
        </ul>
      )}
      <div className="text-center p-3">
        <Link to="/" className="link-underline-light">
          Back to Homepage
        </Link>

      </div>
    </div>
  );
}

export default ItemDetails;
