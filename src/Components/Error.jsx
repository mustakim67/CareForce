import React from 'react';
import error from '../assets/error.jpg'
import Navbar from '../Components/Navbar'
import { NavLink } from 'react-router';

const Error = () => {
    return (
        <>
            <Helmet>
                <title>Error | CareForce</title>
            </Helmet>
            <Navbar></Navbar>
            <div className=' mt-30 place-items-center'>
                <img className=' mx-auto h-[400px]' src={error} alt="" />
                <NavLink to={'/'} className=' bg-linear-to-r from-orange-500 to-red-500 btn text-center rounded-lg mt-4 text-white'>Back to Home</NavLink>
            </div>
        </>
    );
};

export default Error;