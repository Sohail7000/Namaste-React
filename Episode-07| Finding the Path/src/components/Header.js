import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

export default Header = () => {
  const [btnName, setBtnName] = useState("login");

  useEffect(() => {
    console.log("effect Rendered");
  }, [btnName]);

  const buttonToggle = () => {
    buttonName = btnName == "login" ? "logout" : "login";
    return buttonName;
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to ="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
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
