import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer sticky-bottom bg-secondary p-1">
      <div className="text-center">
        <Link to="https://github.com/Ahmd-zaidan8a8/Apartment-Rentals-Admin.git">
          <FaGithub size={40} color="black" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
