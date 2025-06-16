import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const VolunteerNeedPostDetails = () => {
    const { id } = useParams();
    const Details = useLoaderData();
    const PostDetails = Details.find(data => data._id === id);


    return (
        <div className="px-4 md:px-[10%] py-10">
            <div className=" gap-8 items-center">
                <h1 className="text-xl md:3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-6">{PostDetails.postTitle}</h1>
                <img
                    src={PostDetails.thumbnail}
                    alt={PostDetails.postTitle}
                    className="w-full h-72 md:h-[400px] object-cover rounded-xl shadow-md"
                />

                <div className='mt-5'>
                    <div className='flex flex-col md:flex-row justify-between pb-3 border-b border-b-gray-500'>
                        <div>
                            <p className="text-lg mb-2">
                                <span className="font-semibold ">Category:</span> {PostDetails.category}
                            </p>
                            <p className="text-lg mb-2">
                                <span className="font-semibold">Organization:</span> {PostDetails.OrganizationName}
                            </p>
                            <p className="text-lg mb-2">
                                <span className="font-semibold">Location:</span> {PostDetails.location}
                            </p>
                        </div>
                        <div>
                            <p className="text-lg mb-2">
                                <span className="font-semibold">Vacancy: </span> {PostDetails.numberOfVolunteers}
                            </p>
                            <p className="text-lg mb-2">
                                <span className="font-semibold">Deadline:</span> {new Date(PostDetails.deadline).toLocaleDateString()}
                            </p>
                        </div>

                    </div>


                    <p className="text-md mt-3">
                        {PostDetails.description || 'No description available.'}
                    </p>
                    <button className="mt-6 btn bg-gradient-to-r from-orange-500 to-red-500 text-white w-full">
                        Be a Volunteer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VolunteerNeedPostDetails;