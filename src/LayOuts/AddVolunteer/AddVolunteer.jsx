import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.png'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { Helmet } from 'react-helmet';

const AddVolunteer = () => {
    const [endDate, setEndDate] = useState(new Date());
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const Posts = Object.fromEntries(formData.entries())
        Posts.deadline = endDate.toISOString();


        // send post data to the database
        axios.post('https://care-force-server.vercel.app/posts', Posts)
            .then(res => {
                const data = res.data;
                if (data.insertedId) {
                    console.log('Posted successfully.');

                    Swal.fire({
                        title: "Post has been created successfully!",
                        icon: "success",
                        draggable: true
                    });

                    form.reset();
                    navigate('/manage-my-post');
                }
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            });
    }
    return (
        <>
            <Helmet>
                <title>Add volunteer need post | CareForce</title>
            </Helmet>
            <div className='gap-2 mx-auto place-items-center mt-10'>
                <h1 className='text-xl'>Create volunteer need posts in</h1>
                <div className='flex'>
                    <img className='max-w-[50px]' src={logo} alt="" />
                    <h1 className='text-2xl font-bold'>CareForce</h1>
                </div>

            </div>
            <form
                onSubmit={handleSubmit}
                className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mt-10 p-6 shadow-xl rounded-xl"
            >
                <div>
                    <label className="block mb-1 font-semibold ">Post Title</label>
                    <input
                        type="text"
                        name="postTitle"
                        className="w-full input input-bordered"
                        placeholder="Enter Post name"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Thumbnail URL</label>
                    <input
                        type="text"
                        name="thumbnail"
                        className="w-full input input-bordered"
                        placeholder='https://'
                    />
                </div>


                <div className="md:col-span-2">
                    <label className="block mb-1 font-semibold">Description</label>
                    <textarea
                        name="description"
                        rows="3"
                        className="w-full textarea textarea-bordered"
                        placeholder="Describe the post"
                        required
                    ></textarea>
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Category</label>
                    <select name="category" className="w-full select select-bordered" required>
                        <option value="">Select a category</option>
                        <option>Health Care</option>
                        <option>Education</option>
                        <option>Social Services</option>
                        <option>Animal Welfare</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Location</label>
                    <input
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
                        className="w-[100%] input input-bordered block"
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


                <div className="md:col-span-2">
                    <button type="submit" className="w-full btn btn-primary mt-4">Add Post</button>
                </div>
            </form>
        </>

    );
};

export default AddVolunteer;