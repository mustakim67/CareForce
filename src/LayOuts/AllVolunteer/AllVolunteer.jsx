import React, { Suspense } from 'react';
import AllPosts from '../../Components/AllPosts';
import { Helmet } from 'react-helmet';

const AllVolunteer = () => {
    return (
        <>
         <Helmet>
                <title>All Posts | CareForce</title>
            </Helmet>
        <div>
                <AllPosts></AllPosts>
        </div>
        </>
        
    );
};

export default AllVolunteer;