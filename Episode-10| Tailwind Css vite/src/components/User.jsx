import React from "react";
import { useState, useEffect } from "react";

const User = () => {
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    // getUserDetails();
    const timer = setInterval(() => {
      console.log("UseEffect ran ");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  console.log("render");

  useEffect(() => {
    const userInfodata = getUserDetails();
    setUserInfo(userInfodata);
    console.log(userInfo)
  }, []);

  const getUserDetails = async () => {
    const response = await fetch("https://api.github.com/users/sohail7000");
    const json = await response.json();
    console.log(json);
    return json;
  };
  // const { name, location, login, avatar_url } = userInfo;
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Bangalore</h3>
      <h3></h3>
    </div>
  );
};

export default User;
