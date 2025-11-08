import { createBrowserRouter } from "react-router";
import Root from "./Components/Root";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
export const router = createBrowserRouter([
    
  {
    path: "/",
    element:<Root></Root>,

    children :[{
      index :true,
      element:<Home></Home>,

      
    },
    {
      path : "/login",
      Component : Login
    },
    {
      path: "/register",
      Component :Register
    }
  ]
  },
]);