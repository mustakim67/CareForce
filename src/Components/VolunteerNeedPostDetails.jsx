import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const VolunteerNeedPostDetails = () => {
    const{id} = useParams();
    const Details=useLoaderData();
  const PostDetails=Details.find(data=>data._id===id);


    return (
         <div className="px-4 md:px-[10%] py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <img
                    src={PostDetails.thumbnail}
                    alt={PostDetails.postTitle}
                    className="w-full h-72 md:h-[400px] object-cover rounded-xl shadow-md"
                />

                <div>
                    <h1 className="text-3xl font-bold  mb-4">{PostDetails.postTitle}</h1>
                    <p className="text-lg mb-2">
                        <span className="font-semibold ">Category:</span> {PostDetails.category}
                    </p>
                    <p className="text-lg mb-2">
                        <span className="font-semibold">Organization:</span> {PostDetails.OrganizationName}
                    </p>
                    <p className="text-lg mb-2">
                        <span className="font-semibold">Deadline:</span> {PostDetails.deadline}
                    </p>
                    <p className="text-md mt-6 ">
                        {PostDetails.description || 'No description available.'}
                    </p>

                    <button className="mt-6 btn bg-gradient-to-r from-orange-500 to-red-500 text-white w-full md:w-auto">
                       Be a Volunteer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VolunteerNeedPostDetails;