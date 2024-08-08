import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import Contacts from "./pages/contacts";
import { Students } from "./pages/students";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/students",
    element: <Students />,
  },
  
  
]);
