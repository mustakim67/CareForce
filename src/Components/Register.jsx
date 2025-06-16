import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Register = () => {
    const [user, setUser] = useState(false)
    const { createUser, updateUserProfile, status, setStatus, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegisterData = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.url.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                setLoading(false)
                //update the user's profile
                updateUserProfile({
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        setUser({
                            ...createdUser,
                            displayName: name,
                            photoURL: photo
                        });

                        const DBprofile = {
                            name,
                            email,
                            photo
                        }
                        axios.post('http://localhost:3000/users', DBprofile)
                            .then(res => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Registration Successful !",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                            .catch(error => {
                                toast.error("Registration failed!", {
                                    autoClose: 4000,
                                    pauseOnHover: true,
                                    draggable: true,
                                });
                                console.log(error)
                            });
                    })
                    .catch(error => {
                        toast.error("Profile update failed!", {
                            autoClose: 4000,
                            pauseOnHover: true,
                            draggable: true,
                        });
                        console.log(error)
                    });
            })
            .catch(error => {
                toast.error("Registration failed!", {
                    autoClose: 4000,
                    pauseOnHover: true,
                    draggable: true,
                });
                console.log(error)
            });
    };
    return (
        <div>
             <Helmet>
                <title>Register | CareForce</title>
            </Helmet>
            <div className="min-h-dvh py-15 flex items-center justify-center px-4">
                <div className="w-full max-w-md p-6 rounded-xl shadow-lg">
                    <h1 className="text-3xl font-bold text-center mb-3">Register</h1>
                    <form onSubmit={handleRegisterData} className="space-y-3">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Your name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium  mb-1">
                                Photo URL
                            </label>
                            <input
                                type="url"
                                name="url"
                                required
                                placeholder="https://"
                                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                                title="Must be valid URL"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium  mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="mail@site.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                        </div>
                        <div className='relative'>
                            <label className="block text-sm font-medium  mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                required
                                minLength={6}
                                pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                placeholder="Password"
                                title="Password must be at least 6 characters long and include at least one uppercase and one lowercase letter"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-linear-to-r from-orange-500 to-red-500 text-white py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Register
                        </button>
                        <div className='text-center'>Already have an account ?<a className="link link-hover text-blue-500"><Link onClick={() => setStatus(!status)} to={'/login'}> login</Link> </a></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;