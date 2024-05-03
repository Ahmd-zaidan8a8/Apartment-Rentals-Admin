import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" width="50" height="50" />
            <span>LogoName</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
