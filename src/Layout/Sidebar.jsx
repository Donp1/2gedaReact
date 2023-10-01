import { BiSolidHome } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { IoStorefrontOutline, IoLogOutOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import "./style.css";
import { NavLink } from "react-router-dom";


const Sidebar = ({isCollapsed}) => {
  return (
    <div className={isCollapsed ? "sidebar-container  nil" : "sidebar-container"}>
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
            to="/not"
            exact
            className={({ isActive }) =>
              isActive ? "active-link side-item" : "side-item"
            }
          >
            <IoMdNotificationsOutline className="side-icon " />
            <div className="sidebar-text">Connect</div>
          </NavLink>
          <NavLink
            to="/bu"
            exact
            className={({ isActive }) =>
              isActive ? "active-link side-item" : "side-item"
            }
          >
            <IoStorefrontOutline className="side-icon " />
            <div className="sidebar-text">Commerce</div>
          </NavLink>
          <NavLink
            to="/not"
            exact
            className={({ isActive }) =>
              isActive ? "active-link side-item" : "side-item"
            }
          >
            <IoMdNotificationsOutline className="side-icon " />
            <div className="sidebar-text">Business Directory</div>
          </NavLink>
          
          <NavLink
            to="/mess"
            exact
            className={({ isActive }) =>
              isActive ? "active-link side-item" : "side-item"
            }
          >
            <AiOutlineMessage className="side-icon " />
            <div className="sidebar-text">Chat</div>
          </NavLink>
          <NavLink
            to="/people"
            exact
            className={({ isActive }) =>
              isActive ? "active-link side-item" : "side-item"
            }
          >
            <BsPersonCircle className="side-icon " />
            <div className="sidebar-text">Profile</div>
          </NavLink>
          <NavLink
            to="/not"
            exact
            className={({ isActive }) =>
              isActive ? "active-link side-item" : "side-item"
            }
          >
            <IoMdNotificationsOutline className="side-icon " />
            <div className="sidebar-text">Tickets</div>
          </NavLink>
          <NavLink
            to="/not"
            exact
            className={({ isActive }) =>
              isActive ? "active-link side-item" : "side-item"
            }
          >
            <IoMdNotificationsOutline className="side-icon " />
            <div className="sidebar-text">Live</div>
          </NavLink>
          <NavLink
            to="/not"
            exact
            className={({ isActive }) =>
              isActive ? "active-link side-item" : "side-item"
            }
          >
            <IoMdNotificationsOutline className="side-icon " />
            <div className="sidebar-text">Stereo</div>
          </NavLink>
          <NavLink
            to="/not"
            exact
            className={({ isActive }) =>
              isActive ? "active-link side-item" : "side-item"
            }
          >
            <IoMdNotificationsOutline className="side-icon " />
            <div className="sidebar-text">Tv</div>
          </NavLink>
          <NavLink
            to="/not"
            exact
            className={({ isActive }) =>
              isActive ? "active-link side-item" : "side-item"
            }
          >
            <IoMdNotificationsOutline className="side-icon " />
            <div className="sidebar-text">Voting</div>
          </NavLink>
          <NavLink
            to="/not"
            exact
            className={({ isActive }) =>
              isActive ? "active-link side-item" : "side-item"
            }
          >
            <IoMdNotificationsOutline className="side-icon " />
            <div className="sidebar-text">Education</div>
          </NavLink>

          <div className="side-item lout">
            <IoLogOutOutline className="side-icon " />
            <div className="sidebar-text">Sign out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
