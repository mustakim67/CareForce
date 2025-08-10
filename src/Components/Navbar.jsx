import React, { useContext } from 'react';
import logo from '../assets/logo.png';
import { FaBars } from "react-icons/fa";
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import { IoMdLogOut } from "react-icons/io";
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { auth } from './Firebase/Firebase.init';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOutUser(auth)
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logout Successful!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch(error => {
                toast.error("Log Out failed!", {
                    autoClose: 4000,
                    pauseOnHover: true,
                    draggable: true,
                });
                console.error(error);
            });
    };

    const activeClass = `relative text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 after:content-[''] after:absolute after:left-0 after:-bottom-1 
after:w-full after:h-[2px] after:bg-gradient-to-r after:from-orange-500 after:to-red-500`;

    return (
        <div className="navbar backdrop-blur-md bg-black/30 text-white shadow-lg px-[4%] md:px-[7%] py-4 fixed top-0 z-50">
            {/* Navbar Start */}
            <div className="navbar-start">
                {/* Mobile Menu */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <FaBars size={20} />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <NavLink to="/" className={({ isActive }) => isActive ? activeClass : ''}>Home</NavLink>

                        {user && (
                            <>
                                <li>
                                    <details>
                                        <summary>My Profile</summary>
                                        <ul className="p-2">
                                            <li>
                                                <NavLink to="/add-volunteer-need-post" className={({ isActive }) => isActive ? activeClass : ''}>
                                                    Add Volunteer Need Post
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/manage-my-post" className={({ isActive }) => isActive ? activeClass : ''}>
                                                    Manage My Posts
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <NavLink to="/all-volunteers" className={({ isActive }) => isActive ? activeClass : ''}>
                                        All Volunteer Need Posts
                                    </NavLink>
                                </li>
                            </>
                        )}

                        <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : ''}>About Us</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : ''}>Contact</NavLink>
                    </ul>
                </div>

                {/* Logo */}
                <div className='flex items-center'>
                    <img className='max-w-[30%] md:max-w-full' src={logo} alt="Logo" />
                    <div>
                        <h1 className='text-lg md:text-xl lg:text-3xl font-bold'>CareForce</h1>
                        <p className='text-xs md:text-sm'>Serves Better</p>
                    </div>
                </div>
            </div>

            {/* Navbar Center (Desktop Menu) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 lg:flex lg:items-center lg:text-lg font-500 lg:gap-5">
                    <NavLink to="/" className={({ isActive }) => isActive ? activeClass : ''}>Home</NavLink>

                    {user && (
                        <>
                            <li>
                                <details>
                                    <summary>My Profile</summary>
                                    <ul className="p-2">
                                        <li>
                                            <NavLink to="/add-volunteer-need-post" className={({ isActive }) => isActive ? activeClass : ''}>
                                                Add Volunteer Need Post
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/manage-my-post" className={({ isActive }) => isActive ? activeClass : ''}>
                                                Manage My Posts
                                            </NavLink>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </>
                    )}
                    <li>
                        <NavLink to="/all-volunteers" className={({ isActive }) => isActive ? activeClass : ''}>
                            All Volunteer Need Posts
                        </NavLink>
                    </li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : ''}>About Us</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : ''}>Contact</NavLink>
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end">
                {!user && (
                    <Link to="/login">
                        <button className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white btn mr-3">
                            Login
                        </button>
                    </Link>
                )}

                {user && (
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="w-12 rounded-full mr-4">
                            <img
                                src={user?.photoURL}
                                alt="User"
                                className="rounded-full max-w-12 h-12 md:max-w-18 md:h-18 object-cover ring ring-orange-500 ring-offset-3"
                            />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 text-black rounded-box z-1 w-52 p-2 shadow-sm -translate-x-20">
                            <li><span className='mx-auto'>{user?.displayName || "User Name"}</span></li>
                            <li><NavLink to="/dashboard" className='mx-auto'>Dashboard</NavLink></li>
                            <li>
                                <button onClick={handleSignOut} className='btn btn-sm mt-1 rounded-full'>
                                    Logout <IoMdLogOut size={18} />
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
