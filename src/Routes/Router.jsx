import {
  createBrowserRouter,
} from "react-router";
import React from 'react';
import Root from "../LayOuts/Root/Root";
import Home from "../LayOuts/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            index:true,
            Component:Home
        }
    ]
  },
]);


export default router;