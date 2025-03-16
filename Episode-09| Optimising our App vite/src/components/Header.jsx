import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  const onlineStatus = useOnlineStatus();

  const buttonToggle = () => {
    const buttonName = btnName === "login" ? "logout" : "login";
    return buttonName;
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li> 
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to ="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button onClick={() => setBtnName(buttonToggle())} className="login">
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;