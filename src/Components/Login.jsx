import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { GoogleAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2';
import {auth} from '../Components/Firebase/Firebase.init'
import { AuthContext } from '../Contexts/AuthContext';

const Login = () => {
    const { signInUser, googleSignIn, user, status, setStatus } = useContext(AuthContext);
    const navigate = useNavigate();
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [user, navigate]);

    const provider = new GoogleAuthProvider();


    const handleLoginData = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(() => {
                Swal.fire({
                    title: "Congratulations!",
                    text: "You've successfully logged in",
                    icon: "success",
                    confirmButtonText: "Okay"
                });
                setFailed(false);
                navigate('/home');
            })
            .catch((error) => {
                console.log(error);
                setFailed(true);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn(auth, provider)
            .then(() => {
                Swal.fire({
                    title: "Congratulations!",
                    text: "You've successfully logged in",
                    icon: "success",
                    confirmButtonText: "Okay"
                });
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className="min-h-[700px] flex flex-col md:flex-row  items-center justify-center bg-[url(/img/mountains.jpg)] px-4">
                <div className="w-full max-w-md  p-8 rounded-xl shadow-lg">
                    <h1 className="text-3xl font-bold text-center mb-6">Log In</h1>
                    <form onSubmit={handleLoginData} className="space-y-3">
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
                        <div>
                            <label className="block text-sm font-medium  mb-1">
                                Password
                            </label>
                            <input
                                name="password"
                                required
                                minLength={6}
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                placeholder="Password"
                                title="Must be at least 6 characters and include a number, a lowercase, and an uppercase letter"
                                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        {failed && (
                            <p className="text-red-500">
                                Please try again with valid email and password
                            </p>
                        )}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Login
                        </button>
                    </form>

                    <div className="divider py-3 text-sm">OR</div>

                    <div className="flex flex-col justify-center gap-4 mt-4">
                        <button
                            onClick={handleGoogleSignIn}
                            className="btn bg-white text-black border-[#e5e5e5]"
                        >
                            <svg
                                aria-label="Google logo"
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <g>
                                    <path d="M0 0h512v512H0z" fill="#fff" />
                                    <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                                    <path fill="#4285f4" d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                                    <path fill="#fbbc02" d="M90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                                    <path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                                </g>
                            </svg>
                            <span className="ml-2">Login with Google</span>
                        </button>
                    </div>

                    <p className="text-center text-sm text-gray-600 mt-5">
                        Don’t have an account?{' '}
                        <Link to="/register" onClick={() => setStatus(!status)} className="text-blue-600 hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;
