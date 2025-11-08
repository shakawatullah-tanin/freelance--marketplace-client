import React from "react";
import { Link } from "react-router";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    const formUser = Object.fromEntries(formData.entries());

    console.log(formUser);
  };
  return (
    <div className="text-center">
      <form
        className="my-20 w-fit p-16 rounded-lg mx-auto form-bg"
        onSubmit={handleLogin}
      >
        <h1 className=" text-xl md:text-2xl text-white  font-bold">Login</h1>
        <input
          className="p-2 my-4
            relative"
          type="email"
          name="email"
          placeholder="Email"
        />
       
        <br />
        <input
          className="p-2  relative"
          type="password"
          name="password"
          placeholder="Password"
        />{" "}
      <br />
        <button type="button" className="my-4 py-2 flex items-center  gap-2 px-8"> <img src="google.png" className="w-8" alt="" /> Sign in with Google</button>
        <button className="px-8 py-2">Login</button>
        <h3 className="mt-2">Don't have an account? <Link className="text-white" to={"/register"}>Regiser</Link></h3>
      </form>
    </div>
  );
};

export default Login;
