import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DisplayFeedback = () => {
  const [showSpinner, setShowSpinner] = useState(true);
  const [showCongrats, setShowCongrats] = useState(false);

  useEffect(() => {
    const spinnerTime = setTimeout(() => {
      setShowSpinner(false);
      setShowCongrats(true);
    }, 6000);

    return () => clearTimeout(spinnerTime);
  }, []);

  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        {showSpinner && (
          <div>
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status"></div>
            </div>
            <p>Your order is being managed</p>
          </div>
        )}
        {showCongrats && (
          <div className="text-center">
            <div className="congrats">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="green"
                width="100px"
                height="100px"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M20.94 11.86l-1.8-1.79c-.27-.27-.62-.41-.99-.41H15V7c0-.55-.45-1-1-1s-1 .45-1 1v2h-1V7c0-.55-.45-1-1-1s-1 .45-1 1v2H8V7c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .38.14.72.4.99l7.97 7.97c.2.2.45.3.7.3s.5-.1.7-.29l4.59-4.59c.4-.4.4-1.03 0-1.42zM8 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8-12.17L15.17 8H14V5.83L17.17 3H18v2.17z" />
              </svg>
              <p>Congratulations!</p>
            </div>
            <p>Your Apartment has been sucsessfully added.</p>
            <div className="text-center p-4">
              <Link to="/" className="btn btn-outline-secondary">
                Back to Homepage
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DisplayFeedback;
