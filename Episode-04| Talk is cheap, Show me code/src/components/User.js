import React from "react";
import { useState } from "react";

const User = ({ name }) => {
  const [count0] = useState(0);
  const [count1] = useState(1);
  return (
    <div className="user-card">
      <h1>Count: {count0} </h1>
      <h1>Count: {count1} </h1>
      <h2>Name: {name}</h2>
      <h3>Location: Bangalore</h3>
    </div>
  );
};

export default User;
