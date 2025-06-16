import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter'

const VolunteersNeedNow = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/posts/upcoming')
            .then(res => setPosts(res.data))
            .catch(err => console.error(err));
    }, []);
    const handleType = (count) => {
        console.log(count);
    };

    const handleDone = () => {
        console.log('Done after 5 loops!');
    };

    return (
        <div className='px-4 md:px-[7%] py-8'>
            <div className='border border-orange-500 rounded-xl mt-8'>
                <div className='text-center text-2xl md:text-3xl font-semibold mt-4 md:mt-8 mb-5   text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'>
                    <Typewriter
                        words={[`Volunteer Needs Now`]}
                        loop={Infinity}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        onLoopDone={handleDone}
                        onType={handleType}
                    />
                </div>
            </div>

            <div className='mt-7 md:mt-15'>
                {
                    posts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {posts.map(post => (
                                <div key={post._id} className="card bg-base-100 shadow-md">
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
             <Link to={'/all-volunteers'}> <button className='mt-8 btn  max-w-sm mx-auto flex justify-center text-white bg-gradient-to-r from-orange-500 to-red-500 '>View All</button></Link>
        </div>
    );
};

export default VolunteersNeedNow;