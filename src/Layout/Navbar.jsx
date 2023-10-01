import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  const [ isToggled, setIsToggled] = useState(true);

  const handleToggledIcon = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src="images/lo2.png" alt="" className="logo-img" />
        <div className="logo-text">2geda</div>
      </div>
      <div className="searc-profile">
        <div className="mobile-searc" onClick={handleToggledIcon}><BiSearch className="sea-icon" /></div>
        <div className={isToggled ? "searc-container  nil" : "searc-container"}>
          <input
            type="text"
            className="searc-inp"
            placeholder="Search Name, Place and Jobs"
          />
          <BiSearch className="sea-icon" />
        </div>
        <div className="profile-container">
          <img
            src="https://image.cnbcfm.com/api/v1/image/107228941-1682027700192-_DSC5658.jpg?v=1682427601&w=1920&h=1080"
            alt=""
          />
          <div className="pro-text">My Profile</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
