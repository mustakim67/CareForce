import {
  createBrowserRouter,
} from "react-router";
import React from 'react';
import Root from "../LayOuts/Root/Root";
import Home from "../LayOuts/Home/Home";
import Register from "../Components/Register";
import Login from "../Components/Login";
import Error from '../Components/Error';
import AddVolunteer from "../LayOuts/AddVolunteer/AddVolunteer";
import ManageMyPost from "../LayOuts/ManageMyPost/ManageMyPost";
import PrivateRoutes from "./PrivateRoutes";
import AllVolunteer from "../LayOuts/AllVolunteer/AllVolunteer";
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
      },
      {
        path: '/add-volunteer-need-post',
        element: <PrivateRoutes><AddVolunteer /></PrivateRoutes>
      },
      {
        path: '/manage-my-post',
        loader: () => fetch("http://localhost:3000/posts"),
        element: <PrivateRoutes><ManageMyPost /></PrivateRoutes>
      }

    ]
  },
]);


export default router;