import React from 'react';
import logo from '../assets/logo.png';
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-[4%] md:px-[7%]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <FaBars size={20} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLink to={'/'}>Home</NavLink>
                          
                            <li>
                                <NavLink>My Profile</NavLink>
                                <ul className="p-2">
                                    <li><Link>Add Volunteer need Post</Link></li>
                                    <li><Link>Manage My Posts</Link></li>
                                </ul>
                            </li>
                             <NavLink>All volunteer Need posts</NavLink>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img className='max-w-[30%] md:max-w-full' src={logo} alt="" />
                        <div>
                            <h1 className='text-xl md:text-4xl font-bold'>Care Force</h1>
                            <p className='tetx-xs md:text-sm'>Serves Better</p>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 lg:flex lg:items-center lg:text-lg font-500 lg:gap-10">
                        <NavLink to={'/'}>Home</NavLink>
                        <li>
                            <details>
                                <summary>My Profile</summary>
                                <ul className="p-2">
                                    <li>
                                        <Link>Add Volunteer need Post</Link>
                                    </li>
                                    <li>
                                        <Link>Manage My Posts</Link>
                                    </li>

                                </ul>
                            </details>
                        </li>
                        <NavLink>All volunteer Need posts</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;