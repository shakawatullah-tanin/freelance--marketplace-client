import { createBrowserRouter } from "react-router";
import Root from "./Components/Root";
import Home from "./Components/Home";
export const router = createBrowserRouter([
    
  {
    path: "/",
    element:<Root></Root>,

    children :[{
      index :true,
      element:<Home></Home>
    }]
  },
]);