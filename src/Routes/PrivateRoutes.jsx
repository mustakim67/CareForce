import React from 'react';
import { use } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = use(AuthContext);

    if (loading) {

        return <div className='flex justify-center my-80'>
            <span className="loading loading-bars loading-xl mx-auto"></span>
        </div>

    }

    if (!user) {
        return <Navigate to={'/login'}></Navigate>
    }
    return children;
};

export default PrivateRoutes;