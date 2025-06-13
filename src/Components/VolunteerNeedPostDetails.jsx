import React from 'react';
import { useParams } from 'react-router';

const VolunteerNeedPostDetails = () => {
    const Post= useParams();
    console.log(Post.id)
    return (
        <div>
            
        </div>
    );
};

export default VolunteerNeedPostDetails;