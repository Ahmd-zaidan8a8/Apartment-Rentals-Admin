import { useForm } from "react-hook-form";
import { Link, useParams, useNavigate } from "react-router-dom";

const EditItemForm = ({ handleEditSubmit }) => {
  const { register, handleSubmit } = useForm();
  // TODO:
  const navigate = useNavigate();
  // console.log(navigate)

  const { itemId } = useParams();

  const onSubmit = (data) => {
    handleEditSubmit(data, itemId);
    navigate(`/items/${itemId}`);
    
  };

  return (
    <>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            apartement Name
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className="form-control"
          />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            {...register("location")}
            id="location"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="accommodates" className="form-label">
            Accommodates
          </label>
          <input
            {...register("accommodates")}
            id="accommodates"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            {...register("price")}
            id="price"
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cleaningFee" className="form-label">
            Cleaning fee
          </label>
          <input
            {...register("cleaningFee")}
            id="cleaningFee"
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="score" className="form-label">
            Score
          </label>
          <input
            {...register("score")}
            id="score"
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bathrooms" className="form-label">
            Bathrooms
          </label>
          <input
            {...register("bathrooms")}
            id="bathrooms"
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bedrooms" className="form-label">
            Bedrooms
          </label>
          <input
            {...register("bedrooms")}
            id="bedrooms"
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="beds" className="form-label">
            Beds
          </label>
          <input
            {...register("beds")}
            id="beds"
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="responseTime" className="form-label">
            Response time
          </label>
          <input
            {...register("responseTime")}
            id="responseTime"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
        </div> */}
        <button type="submit" className="btn btn-primary">
          Edit Apartment
        </button>
      </form>
      <div className="text-center p-3">
        <Link to="/" className="btn btn-outline-secondary">
          Back to Homepage
        </Link>
      </div>
    </>
  );
};

export default EditItemForm;
