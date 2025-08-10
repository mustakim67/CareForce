import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ala2i16',
            'template_h745ep3',
            form.current,
            'FCTrb40E4wz1ZrjWv'
        ).then(
            () => {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: 'Thank you for reaching out. We’ll get back to you shortly.',
                    confirmButtonColor: '#ea580c',
                    background: '#1e293b',
                    color: '#fff',
                });
                form.current.reset();
            },
            (error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong. Please try again later.',
                    confirmButtonColor: '#dc2626',
                    background: '#1e293b',
                    color: '#fff',
                });
                console.error(error);
            }
        );
    };

    return (
        <section className="px-[7%] py-16 min-h-dvh flex flex-col justify-center">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    Contact Us
                </h1>
                <p className="mt-4 text-lg max-w-2xl mx-auto">
                    We’re here to answer your questions, listen to your feedback, and explore ways we can work together to make a difference.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="backdrop-blur-md bg-white/10 dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg space-y-8 border border-white/20"
                >
                    <div className='flex justify-between '>
                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 pl-8">
                                Get In Touch
                            </h2>
                            {[
                                {
                                    icon: <FaEnvelope className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 text-xl" />,
                                    label: 'Email',
                                    value: 'support@careforce.org'
                                },
                                {
                                    icon: <FaPhoneAlt className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 text-xl" />,
                                    label: 'Phone',
                                    value: '+880 1234 567 890'
                                },
                                {
                                    icon: <FaMapMarkerAlt className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 text-xl" />,
                                    label: 'Location',
                                    value: 'Dhaka, Bangladesh'
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.03 }}
                                    className="flex items-start gap-4"
                                >
                                    {item.icon}
                                    <div>
                                        <p className="font-medium">{item.label}</p>
                                        <p>{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Image with overlay & text */}
                        <div className="relative w-[400px] h-[300px] rounded-xl overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src="https://i.ibb.co.com/394T18wZ/vecteezy-a-young-girl-smiles-for-the-camera-56269591.jpg"
                                alt="Join us"
                            />
                            <div className="absolute inset-0 bg-black/50"></div>
                            <div className="absolute inset-0 flex justify-center items-end pb-5">
                                <p className="text-white text-xl md:text-2xl font-bold text-center px-4">
                                    Join with us to make a <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'> flower smile</span>
                                </p>
                            </div>
                        </div>
                    </div>


                </motion.div>

                {/* Contact Form */}
                <motion.form
                    ref={form}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="backdrop-blur-md bg-white/10 dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg space-y-6 border border-white/20"
                >
                    <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                        Send a Message
                    </h2>

                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                    />

                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                    ></textarea>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-lg font-semibold text-white shadow-md hover:opacity-90 transition"
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
