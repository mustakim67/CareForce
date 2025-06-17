import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { MdEdit, MdDelete, MdOutlineManageAccounts } from "react-icons/md";
import Swal from 'sweetalert2';
import axios from 'axios';
import { AuthContext } from '../Contexts/AuthContext';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from './Hooks/useAxiosSecure';

const MyPost = () => {
    const [endDate, setEndDate] = useState();
    const { user, loading, setLoading } = useContext(AuthContext);
    const [Update, setUpdate] = useState(null)

    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axios('http://localhost:3000/posts')
            .then(res => setData(res.data))
            .catch(() => {
                console.log('error')
            });
    }, []);

    const [data, setData] = useState()
    const result = data?.filter(post => post.OrganizationEmail === user.email) || "";
    useEffect(() => {
        if (Update?.deadline) {
            const defaultDate = Update?.deadline;
            setEndDate(defaultDate);
        }
    }, [Update])

const [requestedPosts, setRequestedPosts] = useState([]);

  useEffect(() => {
  axiosSecure('/requested')
    .then(res => {
      const filtered = res.data.filter(requested => requested.UserEmail === user.email);
      setRequestedPosts(filtered);
    })
    .catch(err => {
      console.error('Unauthorized or other error:', err);
    })
}, [axiosSecure, user?.email]);

    const handleDelete = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/posts/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your group has been deleted.",
                                icon: "success"
                            });

                            const remainingGroups = data.filter(group => group._id !== _id);
                            setData(remainingGroups);
                        }
                    })
                    .catch(() => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong while deleting!",
                        });
                    });
            }
        });
    }
    const handleCancel = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/requested/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your request has been cancelled.",
                                icon: "success"
                            });

                            const remainingPost = requestedPosts.filter(post => post._id !== _id);
                            setRequestedPosts(remainingPost);
                        }
                    })
                    .catch(() => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong while deleting!",
                        });
                    });
            }
        });
    }
    const handleUpdateFormData = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateData = Object.fromEntries(formData.entries());
        updateData.category = form.category.value;
        updateData.deadline = new Date(endDate);
        // send update data to db
        axios.patch(`http://localhost:3000/posts/${Update._id}`, updateData)
            .then(res => {
                if (res.data.modifiedCount || res.data.matchedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Post Information updated successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    const updatedPost = { ...Update, ...updateData };
                    const updatedData = data.map(group => group._id === Update._id ? updatedPost : group);
                    setData(updatedData);
                    form.reset();
                    setUpdate(null);
                    document.getElementById('my_modal_4').close();
                }
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            });
    };
    return (
        <div className="px-4 md:px-[7%] py-8">
            <h1 className="text-2xl font-bold text-center my-15 ">My Volunteer <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'>Need Posts</span></h1>
            {
                result.length > 0 ? (
                    <div>
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mx-auto">
                            {result.map((mypost) => (
                                <div key={mypost._id} className="card bg-base-100 shadow-sm">
                                    <figure>
                                        <img
                                            src={mypost.thumbnail}
                                            alt={mypost.postTitle}
                                            className="w-full h-48 object-cover"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{mypost.postTitle}</h2>
                                        <p className="text-sm text-gray-600 mb-2">{mypost.category}</p>
                                        <div className="card-actions justify-end flex-wrap gap-2">
                                            <button
                                                className="btn btn-sm flex gap-1 bg-gradient-to-r from-orange-500 to-red-500 text-white"
                                                onClick={() => {
                                                    setUpdate(mypost);
                                                    document.getElementById('my_modal_4').showModal();
                                                }}
                                            >
                                                Update <MdEdit size={15} />
                                            </button>
                                            <button
                                                className="btn btn-sm flex gap-1 bg-gradient-to-r from-orange-500 to-red-500 text-white"
                                                onClick={() => handleDelete(mypost._id)}
                                            >
                                                Delete <MdDelete size={15} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center mt-10 text-gray-600 text-lg">
                        <h1> No Posts found !!</h1>
                    </div>
                )
            }
            <div>
                <h1 className="text-2xl font-bold text-center my-15 ">My Volunteer <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'>Request Posts</span></h1>
                {requestedPosts.length > 0 ? (
                    <>
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                            {requestedPosts.map((post) => (
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
                                        <h1>Location : {post.OrganizationName}</h1>
                                        <button onClick={() => handleCancel(post._id)} className='w-full btn bg-gradient-to-r from-orange-500 to-red-500 text-white'>Cancel </button>
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
            < dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg text-center">Update Post Information</h3>
                    <form
                        onSubmit={handleUpdateFormData}
                        className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mt-7 p-6 shadow-xl rounded-xl"
                    >
                        <div>
                            <label className="block mb-1 font-semibold ">Post Title</label>
                            <input
                                defaultValue={Update?.postTitle}
                                type="text"
                                name="postTitle"
                                className="w-full input input-bordered"
                                placeholder="Enter Post Title"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Thumbnail URL</label>
                            <input
                                defaultValue={Update?.thumbnail}
                                type="text"
                                name="thumbnail"
                                className="w-full input input-bordered"
                                placeholder='https://'
                            />
                        </div>


                        <div className="md:col-span-2">
                            <label className="block mb-1 font-semibold">Description</label>
                            <textarea
                                defaultValue={Update?.description}
                                name="description"
                                rows="3"
                                className="w-full textarea textarea-bordered"
                                placeholder="Describe the post"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Category</label>
                            <select
                                name="category"
                                className="w-full select select-bordered"
                                value={Update?.category || ""}
                                onChange={(e) =>
                                    setUpdate((prev) => ({ ...prev, category: e.target.value }))
                                }
                                required
                            >
                                <option value="">Select a category</option>
                                <option value="Health Care">Health Care</option>
                                <option value="Education">Education</option>
                                <option value="Social Services">Social Services</option>
                                <option value="Animal Welfare">Animal Welfare</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Location</label>
                            <input
                                defaultValue={Update?.location}
                                type="text"
                                name="location"
                                className="w-full input input-bordered"
                                placeholder="Location"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Number of volunters needed: </label>
                            <input
                                defaultValue={Update?.numberOfVolunteers}
                                type="number"
                                name="numberOfVolunteers"
                                className="w-full input input-bordered"
                                placeholder="e.g. 10"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Deadline</label>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                name="deadline"
                                placeholderText="Select deadline"
                                className="w-[100%] input input-bordered inline-block"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Organizer Name</label>
                            <input
                                type="text"
                                name="OrganizationName"
                                className="w-full input input-bordered  cursor-not-allowed"
                                value={user?.displayName || ""}
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Organizer Email</label>
                            <input
                                type="email"
                                name="OrganizationEmail"
                                className="w-full input input-bordered  cursor-not-allowed"
                                value={user?.email || ""}
                                readOnly
                            />
                        </div>


                        <div className='flex flex-col md:flex-row gap-2'>
                            <button type="submit" className="w-full btn bg-gradient-to-r from-orange-500 to-red-500 text-white mt-4 mx-auto">Update Post Information</button>
                            <button type='button' onClick={() => {
                                document.getElementById('my_modal_4').close()
                            }} className="w-full btn bg-gradient-to-r from-orange-500 to-red-500 text-white md:mt-4 mx-auto">Close</button>
                        </div>

                    </form>
                </div>
            </dialog>
        </div >
    );
};

export default MyPost;
