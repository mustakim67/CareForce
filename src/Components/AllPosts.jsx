import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaTableList, FaLocationDot } from "react-icons/fa6";
import axios from 'axios';

const AllPosts = () => {
    const initialPosts = useLoaderData();
    const [posts, setPosts] = useState(initialPosts.posts || []);
    const [searchText, setSearchText] = useState('');
    const [changed, setChanged] = useState(true);
    const [sortOrder, setSortOrder] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(initialPosts.totalPages || 1);

    const limit = 8;

    useEffect(() => {
        axios.get(`https://care-force-server.vercel.app/posts`, {
            params: {
                search: searchText,
                sort: sortOrder,
                page: currentPage,
                limit
            }
        })
            .then(res => {
                setPosts(res.data.posts);
                setTotalPages(res.data.totalPages);
            })
            .catch(err => console.log(err));
    }, [searchText, sortOrder, currentPage]);

    return (
        <div className='min-h-screen'>
            <h1 className="text-lg md:text-2xl font-bold text-center mb-4 md:mb-10 md:mt-35">
                All Volunteer <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'>Need Posts</span>
            </h1>

            {/* Search + Sort + Layout */}
            <div className="flex justify-between items-center mb-3 py-4 px-[7%] flex-wrap gap-4 ">
                <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                        setCurrentPage(1);
                    }}
                    className="w-full md:max-w-xl px-5 py-3 rounded-full border border-gray-500 shadow-md"
                />

                <div className="flex items-center gap-6">
                    <select
                        value={sortOrder}
                        onChange={(e) => {
                            setSortOrder(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="px-4 py-2 border border-gray-400 backdrop-blur-md rounded-md text-sm text-gray-900 bg-white dark:text-gray-100">
                        <option value="">Sort By Vacancy</option>
                        <option value="Highest">Highest</option>
                        <option value="Lowest">Lowest</option>
                    </select>
                    <BsFillGrid3X3GapFill size={30} onClick={() => setChanged(true)} className='cursor-pointer' />
                    <FaTableList size={30} onClick={() => setChanged(false)} className='cursor-pointer' />
                </div>
            </div>

            {/* Posts */}
            <div className="px-4 md:px-[7%] pt-8 pb-15">
                {changed ? (
                    posts?.length > 0 ? (
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                            {posts.map((post) => (
                                <div key={post._id} className="card bg-base-100 shadow-md border border-gray-300 hover:-translate-y-2 hover:shadow-orange-500/20 transition-all duration-500 ease-in-out">
                                    <figure>
                                        <img src={post.thumbnail} alt={post.postTitle} className="w-full h-48 object-cover" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{post.postTitle}</h2>
                                        <p className="text-sm">{post.category}</p>
                                        <h1 className='flex gap-2 items-center'>Vacancy: {post.numberOfVolunteers}</h1>
                                        <Link to={`/volunteer-need-post-details/${post._id}`}>
                                            <button className='w-full btn bg-gradient-to-r from-orange-500 to-red-500 text-white'>
                                                View Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center mt-10 text-gray-600 text-lg">No posts Found!</div>
                    )
                ) : (
                    <div className="px-[7xl] rounded-box border border-base-content/5 bg-base-100">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Thumbnail</th>
                                    <th>Title</th>
                                    <th>Deadline</th>
                                    <th>View Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.length > 0 ? (
                                    posts.map((post) => (
                                        <tr key={post._id}>
                                            <td><img src={post.thumbnail} alt='' className="w-13 h-10 md:w-16 md:h-12 rounded" /></td>
                                            <td className='text-sm font-bold'>{post.postTitle}</td>
                                            <td>{new Date(post.deadline).toLocaleDateString()}</td>
                                            <td>
                                                <Link to={`/volunteer-need-post-details/${post._id}`}>
                                                    <button className="btn btn-sm bg-gradient-to-r from-orange-500 to-red-500 text-white">Details</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center text-gray-600 py-5">No posts found!</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Pagination */}
                <div className="flex justify-center gap-2 mt-6">
                    <button
                        className="btn btn-sm"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Prev
                    </button>

                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`btn btn-sm ${currentPage === i + 1 ? 'btn-active' : ''}`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        className="btn btn-sm"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllPosts;
