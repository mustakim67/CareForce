import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="px-[7%] py-16 space-y-16">

            {/* About Us */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
            >
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 text-center">
                    About Us
                </h1>
                <p className="text-lg leading-relaxed">
                    We are Care Force — a passionate initiative created to bring together those who want to help and those who need a helping hand. Our goal is simple: to build a stronger, more connected community through meaningful volunteer work.
                </p>
                <p className="text-lg  leading-relaxed">
                    At Care Force, we believe that every individual has the power to make a difference. Whether you're looking to contribute your time or looking for support in running a project, we’re here to make that connection smooth, respectful, and impactful.
                </p>
            </motion.div>

            {/* The Way We Work */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
            >
                <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">The Way We Work</h2>
                <div className="space-y-4 ">
                    <p><strong>Discover Opportunities:</strong> Volunteers can explore a wide range of social projects, each aimed at solving real-world problems and strengthening our communities.</p>
                    <p><strong >Offer Help Easily:</strong> Once you find a project that speaks to you, simply send a request to join. We’ve kept the process simple, because helping others should never be complicated.</p>
                    <p><strong>Create Impactful Posts:</strong> If you're part of a group or organization in need of volunteers, you can create and share opportunities with just a few clicks.</p>
                    <p><strong>Manage Everything in One Place:</strong> Track your requests, update your posts, and connect with like-minded people — all from your dashboard.</p>
                    <p><strong>Built on Trust & Purpose:</strong> Every interaction on Care Force is driven by genuine care, community spirit, and the desire to make a real difference.</p>
                </div>
            </motion.div>

            {/* project details */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-6"
            >
                <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Project Overview</h2>
                <p className=" text-lg leading-relaxed">
                    Care Force was born out of a simple idea: making it easier for people to support one another. We've seen how powerful volunteerism can be — not just for those receiving help, but for those giving it as well. That's why we created a space where opportunities to give back are easy to find, easy to manage, and always meaningful.
                </p>
                <p className="text-lg leading-relaxed">
                    Our platform connects individuals and organizations to collaborate on real needs in real communities. Whether it's a neighborhood cleanup, a blood donation drive, or helping at a local shelter — Care Force is here to bridge the gap and build a network of care.
                </p>
                <p className="text-lg leading-relaxed">
                    Together, we believe we can make volunteering more accessible, more impactful, and more rewarding for everyone involved.
                </p>
            </motion.div>

        </section>
    );
};

export default About;