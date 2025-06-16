import React from 'react';
import Navbar from '../../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    const navigation = useNavigation();
    return (
        <>
            <Navbar></Navbar>

            <div>
                {navigation.state === 'loading' ? (
                    <div className='flex justify-center my-80'>
                        <span className="loading loading-bars loading-xl mx-auto"></span>
                    </div>
                ) : (<Outlet />)}
            </div>

            <ToastContainer />
        </>
    );
};

export default Root;