import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [count, setCount] = useState(0);
function handleSubmit(e){
  setCount((previous)=>previous+1)
}
  return (
    <>
      <h3 className="count">Times rendered: {count}</h3>
      <h2 className="title">Sign Up</h2>
  
        <div className="inputs">
          <input type="text" onChange = {handleSubmit} placeholder="Enter Your First Name" /> <br />
          <input type="text" onChange = {handleSubmit} placeholder="Enter Your Last Name" /> <br />
          <button type="submit" onSubmit = {handleSubmit}>Submit</button>
        </div>
        </>
  );
}