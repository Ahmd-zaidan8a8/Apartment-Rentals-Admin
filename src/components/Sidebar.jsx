import { Link } from "react-router-dom";
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import '../App.css'


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul className="list-unstyled">
        <li>
          <Link to="/" className="text-white ">Homepage</Link>
        </li>
        <li>
          <Link to="/about" className="text-white ">About</Link>
        </li>
        <li>
          <Link to="/dashboard" className="text-white ">Create a new item</Link>
        </li>
      </ul>
    </div>
  )
};


export default Sidebar;
