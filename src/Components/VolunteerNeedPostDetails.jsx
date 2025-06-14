import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const VolunteerNeedPostDetails = () => {
    const{id} = useParams();
    const Details=useLoaderData();
    console.log(id)

  console.log(Details.find(data=>data._id===id))

    return (
        <div>
           <h1>ami post details of : {id}</h1> 
        </div>
    );
};

export default VolunteerNeedPostDetails;