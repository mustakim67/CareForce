import {
  createBrowserRouter,
} from "react-router";
import React from 'react';
import Root from "../LayOuts/Root/Root";
import Home from "../LayOuts/Home/Home";
import Register from "../Components/Register";
import Login from "../Components/Login";
import AllVolunteer from "../Components/AllVolunteer";
import Error from '../Components/Error';
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: 'all-volunteers',
        Component: AllVolunteer
      }

    ]
  },
]);


export default router;