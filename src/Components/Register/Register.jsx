import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../ContextApi";
import { CgLogIn } from "react-icons/cg";

const Register = () => {
  const { userInfo, setUserInfo } = useContext(AuthContext);

  const handleregiser = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const userData = Object.fromEntries(formData.entries());
    setUserInfo(userData);
  };
  console.log(userInfo)

  return (
    <div className="text-center">
      <form
        onSubmit={handleregiser}
        className="my-20 w-fit p-16 rounded-lg mx-auto form-bg"
      >
        <h1 className=" text-xl md:text-2xl text-white my-4  font-bold">
          Regiser
        </h1>
        <input
          type="text"
          placeholder="Name"
          className="p-2 
            relative"
          name="name"
          id=""
        />
        <br />
        <input
          className="p-2 my-4
            relative"
          type="email"
          name="email"
          placeholder="Email"
        />{" "}
        <br />
        <input
          className="p-2
            relative"
          type="url"
          name="photo"
          placeholder="Photo URL"
        />
        <br />
        <input
          className="p-2 my-4 relative"
          type="password"
          name="password"
          placeholder="Password"
        />{" "}
        <br />
        <button
          type="button"
          className="my-4 py-2 flex items-center  gap-2 px-8"
        >
          {" "}
          <img src="google.png" className="w-8" alt="" /> Sign in with Google
        </button>
        <button className="px-8 py-2">Regiser</button>
        <h3 className="mt-2">
          Already sign in?{" "}
          <Link className="text-white" to={"/login"}>
            Login
          </Link>
        </h3>
      </form>
    </div>
  );
};

export default Register;
