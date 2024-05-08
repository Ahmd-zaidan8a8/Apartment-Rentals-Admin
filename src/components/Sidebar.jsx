import { Link } from "react-router-dom";
import SidebarMenu from 'react-bootstrap-sidebar-menu';


const Sidebar = () => {
  return (
    <div className="bg-dark text-white" style={{ width: '250px', height: '100vh' }}>
      <ul className="list-unstyled">
        <li>
          <Link to="/" className="text-white text-decoration-none">Homepage</Link>
        </li>
        <li>
          <Link to="/about" className="text-white text-decoration-none">About</Link>
        </li>
        <li>
          <Link to="/dashboard" className="text-white text-decoration-none">Create a new item</Link>
        </li>
      </ul>
    </div>
  )
};

export default Sidebar;
