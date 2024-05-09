import "../App.css"
import { Link } from "react-router-dom";

function NotFound(){
    return(
        <div className="NotFound row">
            <div className="col">
            <h1>Page not found</h1>
            <p>Sorry, the page you were looking for was not found.</p>
            <Link to="/" className="btn btn-outline-secondary">
          Back to Homepage
        </Link>
            </div>
            <div className="col">
                <img src="src/images/not-found.png" alt="page-not-found" />
            </div>

        </div>
    )
}

export default NotFound;