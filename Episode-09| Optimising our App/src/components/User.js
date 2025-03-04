import React from "react";
import { useState, useEffect } from "react";

const User = ({ name }) => {
  useEffect(() => {
    // getUserDetails();
    const timer = setInterval(()=>{
      console.log("UseEffect ran ")
    } , 1000)
    return ()=>{
        clearInterval(timer)
    }
  }, []);
  console.log("render")

  const getUserDetails = async () => {
    const response = await fetch("https://api.github.com/users/sohail7000");
    const json = await response.json();
    console.log(json);
  };
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Bangalore</h3>
      <h3></h3>
    </div>
  );
};

export default User;
