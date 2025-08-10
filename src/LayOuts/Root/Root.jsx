import React from 'react';
import Navbar from '../../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Footer from '../../Components/Footer';

const Root = () => {
    const navigation = useNavigation();
    return (
        <>
            <Navbar></Navbar>

            <div className='mt-20 md:mt-25'>
                {navigation.state === 'loading' ? (
                    <div className='flex justify-center items-center min-h-screen'>
                        <span className="loading loading-bars loading-xl"></span>
                    </div>
                ) : (<Outlet />)}
            </div>
            <Footer></Footer>

            <ToastContainer />
        </>
    );
};

export default Root;