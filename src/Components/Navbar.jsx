import React from "react";
import { NavLink } from "react-router";
import { FiAlignLeft } from "react-icons/fi";



const Navbar = () => {
  return (
    <div>
      <nav className="nav-bg p-4">
        <div className="flex montserrat items-center justify-between">
          <h1 className="text-white text-lg flex items-center gap-2 justify-center"><span className="md:hidden"><FiAlignLeft size={25}></FiAlignLeft></span>Freelancer Hub</h1>
          <ul className="hidden md:flex items-center effect  gap-8">
            <NavLink to={"/"}>Add Task</NavLink>
            <NavLink to={"/"}>Browse Tasks</NavLink>
            <NavLink to={"/"}>My Posted Tasks</NavLink>
          </ul>
          <div className="flex items-center text-white effect  gap-4">
            <button className=" p-2 ">Login</button>
            <button className=" p-2">SignUp</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
