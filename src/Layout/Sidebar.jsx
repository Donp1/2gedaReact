import { BiSolidHome } from "react-icons/bi";
import { IoStorefrontOutline } from "react-icons/i05";
import "./style.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-box">
        <div className="sidebar-items">
          <NavLink
            to="/"
            exact
            className={({ isActive }) =>
              isActive ? "active-link side-item" : "side-item"
            }
          >
            <BiSolidHome className="side-icon " />
            <div className="sidebar-text">Home</div>
          </NavLink>
          <NavLink
            to="/bu"
            exact
            className={({ isActive }) =>
              isActive ? "active-link side-item" : "side-item"
            }
          >
            <IoStorefrontOutline className="side-icon " />
            <div className="sidebar-text">Business</div>
          </NavLink>
          <NavLink
            to="/people"
            exact
            className={({ isActive }) =>
              isActive ? "active-link side-item" : "side-item"
            }
          >
            <BiSolidHome className="side-icon " />
            <div className="sidebar-text">People</div>
          </NavLink>
          <NavLink
            to="/mess"
            exact
            className={({ isActive }) =>
              isActive ? "active-link side-item" : "side-item"
            }
          >
            <BiSolidHome className="side-icon " />
            <div className="sidebar-text">Messages</div>
          </NavLink>
          <NavLink
            to="/not"
            exact
            className={({ isActive }) =>
              isActive ? "active-link side-item" : "side-item"
            }
          >
            <BiSolidHome className="side-icon " />
            <div className="sidebar-text">Notification</div>
          </NavLink>

          <div className="side-item lout">
            <BiSolidHome className="side-icon " />
            <div className="sidebar-text">Sign out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
