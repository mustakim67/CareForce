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

            <div className='mt-28'>
                {navigation.state === 'loading' ? (
                    <div className='flex justify-center mt-60 mb-200'>
                        <span className="loading loading-bars loading-xl mx-auto"></span>
                    </div>
                ) : (<Outlet />)}
            </div>
            <Footer></Footer>

            <ToastContainer />
        </>
    );
};

export default Root;