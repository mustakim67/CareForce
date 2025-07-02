import {
  createBrowserRouter,
} from "react-router";
import React, { Component, Suspense } from 'react';
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
import About from "../Components/About";
import Contact from "../Components/Contact";
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
        loader: () => fetch("https://care-force-server.vercel.app/posts"),
        element:<PrivateRoutes><AllVolunteer></AllVolunteer></PrivateRoutes>
      },
      {
        path: '/add-volunteer-need-post',
        element: <PrivateRoutes><AddVolunteer /></PrivateRoutes>
      },
      {
        path: '/manage-my-post',
        element: <PrivateRoutes><ManageMyPost /></PrivateRoutes>
      },
      {
        path: '/volunteer-need-post-details/:id',
        element: <PrivateRoutes><VolunteerNeedPostDetails /></PrivateRoutes>
      },
      {
        path: '/about',
        Component:About
      },
      {
        path: '/contact',
        Component:Contact
      }

    ]
  },
]);


export default router;