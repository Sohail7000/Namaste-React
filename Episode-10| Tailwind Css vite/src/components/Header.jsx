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
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-amber-100 lg:bg-green-100">
      <div className="logo-container">
        <img className="w-46" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center"> 
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li> 
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to ="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button onClick={() => setBtnName(buttonToggle())} className="login">
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;