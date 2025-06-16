import React from 'react';
import MyPost from '../../Components/MyPost';
import { Helmet } from 'react-helmet';

const ManageMyPost = () => {
    return (
        <div>
             <Helmet>
                <title>Manage My Post | CareForce</title>
            </Helmet>
            <MyPost></MyPost>
        </div>
    );
};

export default ManageMyPost;