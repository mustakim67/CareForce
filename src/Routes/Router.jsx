import {
  createBrowserRouter,
} from "react-router";
import React, { Suspense } from 'react';
import Root from "../LayOuts/Root/Root";
import Home from "../LayOuts/Home/Home";
import Register from "../Components/Register";
import Login from "../Components/Login";
import Error from '../Components/Error';
import AddVolunteer from "../LayOuts/AddVolunteer/AddVolunteer";
import ManageMyPost from "../LayOuts/ManageMyPost/ManageMyPost";
import PrivateRoutes from "./PrivateRoutes";
import AllVolunteer from "../LayOuts/AllVolunteer/AllVolunteer";
import VolunteerNeedPostDetails from "../Components/VolunteerNeedPostDetails";
import Loading from "../Components/Loading";
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
        path: '/all-volunteers',
        loader: () => fetch("http://localhost:3000/posts"),// loading spinner add a somossa
        element:<Suspense fallback={<span>Loading...............</span>}><AllVolunteer></AllVolunteer></Suspense> 
      },
      {
        path: '/add-volunteer-need-post',
        element: <PrivateRoutes><AddVolunteer /></PrivateRoutes>
      },
      {
        path: '/manage-my-post',
        loader: () => fetch("http://localhost:3000/posts"),
        element: <PrivateRoutes><ManageMyPost /></PrivateRoutes>
      },
      {
        path: '/volunteer-need-post-details/:id',
        loader: () => fetch("http://localhost:3000/posts"),
        element: <PrivateRoutes><VolunteerNeedPostDetails/></PrivateRoutes>
      }

    ]
  },
]);


export default router;