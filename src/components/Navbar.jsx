import { FaBuildingColumns } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <FaBuildingColumns size={40} />
            <span style={{ display: "inline-block", padding: "1rem" }}>
              LogoName
            </span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
