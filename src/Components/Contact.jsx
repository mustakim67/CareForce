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
        <section className=" dark:text-white px-[7%] py-16 space-y-16 min-h-dvh">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    Contact Us
                </h1>
                <p className="mt-4 text-lg dark:text-white">
                    We're here to help and answer any question you might have.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-orange-500 dark:text-orange-400">
                        Get In Touch
                    </h2>
                    <div className="flex items-start gap-4">
                        <FaEnvelope className="text-orange-500 mt-1" />
                        <div>
                            <p className="font-medium">Email</p>
                            <p className="dark:text-white">support@careforce.org</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <FaPhoneAlt className="text-orange-500 mt-1" />
                        <div>
                            <p className="font-medium">Phone</p>
                            <p className=" dark:text-white">+880 1234 567 890</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <FaMapMarkerAlt className="text-orange-500 mt-1" />
                        <div>
                            <p className="font-medium">Location</p>
                            <p className="dark:text-white">Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <h2 className="text-2xl font-semibold text-orange-500 dark:text-orange-400">
                        Send a Message
                    </h2>

                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />

                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500  dark:text-white"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        required
                        className="w-full px-4 py-3  border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500  dark:text-white"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-md font-semibold text-white hover:opacity-90 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
