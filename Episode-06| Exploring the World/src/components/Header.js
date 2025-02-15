import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export default Header = () => {
  const [btnName, setBtnName] = useState("login");
  const buttonToggle = ()=>{
    buttonName = btnName=="login" ? "logout" : "login";
    return buttonName;
  }
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            onClick={() => setBtnName(buttonToggle())}
            className="login"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
