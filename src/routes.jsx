import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import Contacts from "./pages/contacts";
import { Students } from "./pages/students";
import { ErrorPage } from "./pages/error-page";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
    
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
