import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Contexts/AuthContext';

const VolunteerNeedPostDetails = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const Details = useLoaderData();
    const PostDetails = Details.find(data => data._id === id);
    const [endDate, setEndDate] = useState();
    const [Update, setUpdate] = useState(null);
    useEffect(() => {
        if (Update?.deadline) {
            const defaultDate = Update?.deadline;
            setEndDate(defaultDate);
        }
    }, [Update])


    const handleUpdateFormData = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateData = Object.fromEntries(formData.entries());
        updateData.category = form.category.value;
        updateData.deadline = new Date(endDate);
        // send update data to db
        axios.post('http://localhost:3000/requested', updateData)
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
    };
    return (
        <div className="px-4 md:px-[10%] py-10">
            <div className=" gap-8 items-center">
                <h1 className="text-xl md:3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-6">
                    {PostDetails?.postTitle || ""}
                </h1>
                <img
                    src={PostDetails?.thumbnail}
                    alt=''
                    className="w-full h-72 md:h-[400px] object-cover rounded-xl shadow-md"
                />

                <div className='mt-5'>
                    <div className='flex flex-col md:flex-row justify-between pb-3 border-b border-b-gray-500'>
                        <div>
                            <p className="text-lg mb-2">
                                <span className="font-semibold ">Category:</span> {PostDetails?.category}
                            </p>
                            <p className="text-lg mb-2">
                                <span className="font-semibold">Organization:</span> {PostDetails?.OrganizationName}
                            </p>
                            <p className="text-lg mb-2">
                                <span className="font-semibold">Location:</span> {PostDetails?.location}
                            </p>
                        </div>
                        <div>
                            <p className="text-lg mb-2">
                                <span className="font-semibold">Vacancy: </span> {PostDetails?.numberOfVolunteers}
                            </p>
                            <p className="text-lg mb-2">
                                <span className="font-semibold">Deadline:</span> {new Date(PostDetails?.deadline).toLocaleDateString()}
                            </p>
                        </div>

                    </div>


                    <p className="text-md mt-3">
                        {PostDetails?.description || 'No description available.'}
                    </p>
                    <button onClick={() => {
                        setUpdate(PostDetails);
                        document.getElementById('my_modal_4').showModal();
                    }} className="mt-6 btn bg-gradient-to-r from-orange-500 to-red-500 text-white w-full">
                        Be a Volunteer
                    </button>
                </div>
            </div>
            < dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg text-center">Be a Volunteer</h3>
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
                                className="w-full input input-bordered  cursor-not-allowed"
                                placeholder="Enter Post Title"
                                required
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Thumbnail URL</label>
                            <input
                                defaultValue={Update?.thumbnail}
                                type="text"
                                name="thumbnail"
                                className="w-full input input-bordered  cursor-not-allowed"
                                placeholder='https://'
                                readOnly
                            />
                        </div>


                        <div className="md:col-span-2">
                            <label className="block mb-1 font-semibold">Description</label>
                            <textarea
                                defaultValue={Update?.description}
                                name="description"
                                rows="3"
                                className="w-full textarea textarea-bordered  cursor-not-allowed"
                                placeholder="Describe the post"
                                required
                                readOnly
                            ></textarea>
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Category</label>
                            <select
                                name="category"
                                disabled
                                className="w-full select select-bordered bg-gray-100 cursor-not-allowed"
                                value={Update?.category || ""}
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
                                className="w-full input input-bordered cursor-not-allowed"
                                placeholder="Location"
                                required
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Number of volunters needed: </label>
                            <input
                                defaultValue={Update?.numberOfVolunteers}
                                type="number"
                                name="numberOfVolunteers"
                                className="w-full input input-bordered cursor-not-allowed"
                                placeholder="e.g. 10"
                                required
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Deadline</label>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                name="deadline"
                                placeholderText="Select deadline"
                                className="w-[100%] input input-bordered inline-block  cursor-not-allowed"
                                required
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Organizer Name</label>
                            <input
                                type="text"
                                name="OrganizationName"
                                className="w-full input input-bordered  cursor-not-allowed"
                                value={PostDetails?.OrganizationName || ""}
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Organizer Email</label>
                            <input
                                type="email"
                                name="OrganizationEmail"
                                className="w-full input input-bordered  cursor-not-allowed"
                                value={PostDetails?.OrganizationEmail || ""}
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">User Name</label>
                            <input
                                type="text"
                                name="UserName"
                                className="w-full input input-bordered  cursor-not-allowed"
                                value={user?.displayName || ""}
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">User Email</label>
                            <input
                                type="email"
                                name="UserEmail"
                                className="w-full input input-bordered  cursor-not-allowed"
                                value={user?.email || ""}
                                readOnly
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block mb-1 font-semibold">Suggestios</label>
                            <textarea
                                name="suggestion"
                                rows="3"
                                className="w-full textarea textarea-bordered "
                                placeholder="Suggestions..."
                            ></textarea>
                        </div>
                        <div className='md:col-span-2'>
                            <label className="block mb-1 font-semibold">Status: </label>
                            <input
                                type="text"
                                name="status"
                                className="w-full input input-bordered  cursor-not-allowed"
                                value="requested"
                                readOnly
                            />
                        </div>
                        <div className='flex flex-col md:flex-row gap-2'>
                            <button type="submit" className="w-full btn bg-gradient-to-r from-orange-500 to-red-500 text-white mt-4 mx-auto">Request</button>
                            <button type='button' onClick={() => {
                                document.getElementById('my_modal_4').close()
                            }} className="w-full btn bg-gradient-to-r from-orange-500 to-red-500 text-white md:mt-4 mx-auto">Close</button>
                        </div>

                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default VolunteerNeedPostDetails;