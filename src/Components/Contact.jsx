import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="text-white px-[10%] py-16 space-y-16">

            {/* Page Header */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    Contact Us
                </h1>
                <p className="mt-4 text-gray-300 text-lg">
                    We're here to help and answer any question you might have. Reach out and we’ll get back to you as soon as possible.
                </p>
            </motion.div>

            {/* Contact Info + Form */}
            <div className="grid md:grid-cols-2 gap-12">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-semibold text-orange-400">Get In Touch</h2>
                    <div className="flex items-start gap-4 text-gray-300">
                        <FaEnvelope className="text-orange-500 mt-1" />
                        <div>
                            <p className="font-medium text-white">Email</p>
                            <p>support@careforce.org</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 text-gray-300">
                        <FaPhoneAlt className="text-orange-500 mt-1" />
                        <div>
                            <p className="font-medium text-white">Phone</p>
                            <p>+880 172714546</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 text-gray-300">
                        <FaMapMarkerAlt className="text-orange-500 mt-1" />
                        <div>
                            <p className="font-medium text-white">Location</p>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Message submitted! (Form logic not implemented)");
                    }}
                >
                    <h2 className="text-2xl font-semibold text-orange-400">Send a Message</h2>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-gray-800 rounded-md text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 bg-gray-800 rounded-md text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        rows="5"
                        className="w-full px-4 py-3 bg-gray-800 rounded-md text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-md font-semibold hover:opacity-90 transition mx-auto"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
