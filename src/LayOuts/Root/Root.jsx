import React from 'react';
import Navbar from '../../Components/Navbar';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
         <ToastContainer />
        </>
    );
};

export default Root;