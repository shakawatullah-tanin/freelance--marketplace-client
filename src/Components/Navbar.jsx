import React from "react";
import { NavLink } from "react-router";


const Navbar = () => {
  return (
    <div>
      <nav className="nav-bg p-4">
        <div className="flex montserrat items-center justify-between">
          <h1 className="text-white">Freelancer Hub</h1>
          <ul className="flex items-center gap-8">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/"}>Add Task</NavLink>
            <NavLink to={"/"}>Browse Tasks</NavLink>
            <NavLink to={"/"}>My Posted Tasks</NavLink>
          </ul>
          <div className="flex items-center text-white  gap-4">
            <button className=" p-2 ">Login</button>
            <button className=" p-2">SignUp</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
