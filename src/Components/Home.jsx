import React from "react";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <div>
      <nav className="bg-lime-200 p-4">
        <div className="flex montserrat items-center justify-between">
            <h1>Freelancer Hub</h1>
          <ul className="flex items-center gap-4">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink  to={"/"}>Add Task</NavLink>
            <NavLink  to={"/"}>Browse Tasks</NavLink>
            <NavLink  to={"/"}>My Posted Tasks</NavLink>
          </ul> 
          <div className="flex items-center  gap-4">
            <button className="border p-2 ">Login</button>
            <button  className="border p-2">SignUp</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
