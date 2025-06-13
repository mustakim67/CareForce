import React, { Suspense } from 'react';
import AllPosts from '../../Components/AllPosts';
import Loading from '../../Components/Loading';

const AllVolunteer = () => {
    return (
        <div>
            <Suspense fallback={<Loading/>}>
                <AllPosts></AllPosts>
            </Suspense>
        </div>
    );
};

export default AllVolunteer;