import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter'

const VolunteersNeedNow = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://care-force-server.vercel.app/posts/upcoming')
            .then(res => {
                setPosts(res.data);
                setLoading(false);
            })

            .catch(err => console.error(err));
    }, []);
    if (loading) {
        return (
            <div className='flex justify-center mt-60 mb-200'>
                <span className="loading loading-bars loading-xl mx-auto"></span>
            </div>
        );
    }
    return (
        <div className='px-4 md:px-[7%] py-8 bg-[#FAF7F3]'>
            <div className='mt-14'>
                <div className='text-center text-2xl md:text-3xl font-semibold  mb-5 md:mt-2 mt-1  '>
                    <h1>Volunteer <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'>Needs Now</span></h1>
                </div>
            </div>

            <div className='mt-7 md:mt-15'>
                {
                    posts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {posts.map(post => (
                                <div key={post._id} className="card bg-base-100 shadow-md hover:-translate-y-1 hover:shadow-orange-500/20 transition">
                                    <figure>
                                        <img src={post.thumbnail} alt={post.postTitle} className="w-full h-44 object-cover" />
                                    </figure>
                                    <div className="card-body">
                                        <h3 className="card-title">{post.postTitle}</h3>
                                        <p className="text-sm ">{post.category}</p>
                                        <p className="text-sm ">Deadline: {new Date(post.deadline).toLocaleDateString()}</p>
                                        <Link
                                            to={`/volunteer-need-post-details/${post._id}`}
                                            className="btn mt-2 bg-gradient-to-r from-orange-500 to-red-500 text-white w-full"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">No upcoming posts found.</p>
                    )
                }
            </div>
            <Link to={'/all-volunteers'}> <button className='mt-8 btn  max-w-sm mx-auto flex justify-center text-white bg-gradient-to-r from-orange-500 to-red-500 '>See All</button></Link>
        </div>
    );
};

export default VolunteersNeedNow;