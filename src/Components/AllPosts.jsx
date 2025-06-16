import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const AllPosts = () => {
    const AllPosts = useLoaderData();
    const [posts, setPosts] = useState(AllPosts);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3000/posts?search=${searchText}`)
            .then(res => res.json())
            .then(data => setPosts(data));
    }, [searchText]);

    return (
        <div className="px-4 md:px-[7%] py-8">

            <div className="flex justify-center mb-12">
                <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="w-full max-w-xl px-5 py-3 rounded-full border border-gray-300 shadow-sm"
                />
            </div>

            {posts.length > 0 ? (
                <>
                    <h1 className="text-lg md:text-2xl font-bold text-center mb-4 md:mb-15">
                        All Volunteer <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'>Need Posts</span>
                    </h1>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                        {posts.map((post) => (
                            <div key={post._id} className="card bg-base-100 shadow-md border border-gray-300">
                                <figure>
                                    <img
                                        src={post.thumbnail}
                                        alt={post.postTitle}
                                        className="w-full h-48 object-cover"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{post.postTitle}</h2>
                                    <p className="text-sm text-gray-600">{post.category}</p>
                                    <h1>Deadline: {new Date(post.deadline).toLocaleDateString()}</h1>
                                    <div className='flex justify-between'>
                                        <h1>Location : {post.OrganizationName}</h1>
                                        <h1 className='font-semibold'>Vacancy: {post.numberOfVolunteers}</h1>
                                    </div>
                                    
                                    <Link to={`/volunteer-need-post-details/${post._id}`}> <button className='w-full btn bg-gradient-to-r from-orange-500 to-red-500 text-white'>View Details </button></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </>

            ) : (
                <div className="text-center mt-10 text-gray-600 text-lg">
                    <h1>No posts Found !</h1>
                </div>
            )}
        </div>
    );
};

export default AllPosts;
