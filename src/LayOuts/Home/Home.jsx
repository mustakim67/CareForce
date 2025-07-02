import React from 'react';
import Banner from '../../Components/Banner';
import VolunteersNeedNow from '../../Components/VolunteersNeedNow';
import { Helmet } from 'react-helmet';
import CountUp from 'react-countup';
import { FaHandsHoldingChild } from "react-icons/fa6";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { TiWorld } from "react-icons/ti";
import { motion } from 'framer-motion';
import { fadeIn } from '../../Components/variant'
import { FaSearch, FaHandsHelping, FaClipboardList } from 'react-icons/fa';

const Home = () => {
    const steps = [
        {
            icon: <FaSearch className="text-3xl text-orange-500" />,
            title: 'Explore Opportunities',
            description: 'Browse a variety of ongoing or upcoming volunteer events in your local area or community.',
        },
        {
            icon: <FaClipboardList className="text-3xl text-orange-500" />,
            title: 'Request to Join',
            description: 'With a single click, express your interest to join any project that resonates with you.',
        },
        {
            icon: <FaHandsHelping className="text-3xl text-orange-500" />,
            title: 'Make a Difference',
            description: 'Contribute your time, skills, and compassion to real-world projects and bring positive change.',
        },
    ];

    return (
        <div>
            <Helmet>
                <title>Home | CareForce</title>
            </Helmet>
            <div className='z-0'>
                <Banner></Banner>
                <VolunteersNeedNow></VolunteersNeedNow>
            </div>
            <div>
                <div className='mx-auto mt-10'>
                    <motion.h1
                        variants={fadeIn('up', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className='text-center font-bold text-xl md:text-4xl px-5'>
                        We are best <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'>in our Services</span>
                    </motion.h1>
                    <motion.p
                        variants={fadeIn('down', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className='text-lg px-8 pt-3  text-center max-w-7xl mx-auto'>we connect passionate volunteers with meaningful causes.
                        From organizing events to supporting communities, we empower people to make a real difference.
                        Join us to turn compassion into action and bring positive change to the world. </motion.p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5 px-[7%] my-15'>
                    <motion.div
                        variants={fadeIn('up', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className=' p-7 md:p-12 rounded-xl border-1 border-gray-300 text-center'>
                        <FaHandsHoldingChild size={40} className='mx-auto' />
                        <h1 className=' text-3xl font-bold  rounded-xl '><CountUp enableScrollSpy end={400} duration={3} />+</h1>
                        <p className=' pt-2'>Children Rescued</p>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('down', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className=' p-7 md:p-12 rounded-xl border-1 border-gray-300 text-center'>
                        <FaRegMoneyBill1 size={40} className='mx-auto' />
                        <h1 className=' text-3xl font-bold  rounded-xl'><CountUp enableScrollSpy end={78000} duration={3} />+</h1>
                        <p className=' pt-2'>Total Donations</p>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('up', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className=' p-7 md:p-12 rounded-xl border-1 border-gray-300 text-center'>
                        <FaHandHoldingHeart size={40} className='mx-auto' />
                        <h1 className=' text-3xl font-bold  rounded-xl'><CountUp enableScrollSpy end={700} duration={3} />+</h1>
                        <p className=' pt-2'>Event Compelted</p>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('down', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className='0 p-7 md:p-12 rounded-xl border-1 border-gray-300 text-center'>
                        <TiWorld size={40} className='mx-auto' />
                        <h1 className=' text-3xl font-bold  rounded-xl'><CountUp enableScrollSpy end={3000} duration={3} />+</h1>
                        <p className=' pt-2'>Total Volunteers</p>
                    </motion.div>
                </div>
                <section className="px-[7%] py-16">
                    <motion.h2
                        variants={fadeIn('up', 0.1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-3xl font-bold text-center mb-12"
                    >
                        How We{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                            Work
                        </span>
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn('down', 0.1)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.7 }}
                                className="p-8 rounded-2xl shadow-lg text-center space-y-4 hover:-translate-y-1 hover:shadow-orange-500/20 transition border border-gray-300"
                            >
                                <div className="flex justify-center">{step.icon}</div>
                                <h3 className="text-xl font-semibold">{step.title}</h3>
                                <p>{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
                <section className=" py-16 px-[7%]">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.h2
                            variants={fadeIn('up', 0.1)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-2xl md:text-4xl font-bold mb-6">
                            Why Volunteer <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'> With Us?</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeIn('down', 0.1)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-lg md:text-xl mb-8">
                            Volunteering is a powerful way to give back, build connections, and make a real difference in the lives of others. Whether you're passionate about the environment, education, or community development — we have a place for you.
                        </motion.p>

                        <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
                            <motion.div
                                variants={fadeIn('down', 0.1)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.7 }}
                                className="bg-orange-100 p-6 rounded-2xl shadow-md max-w-sm">
                                <h3 className="text-xl font-semibold text-orange-700 mb-2">Make an Impact</h3>
                                <p className='text-gray-500'>Help us create meaningful change in local communities by dedicating your time and effort.</p>
                            </motion.div>

                            <motion.div
                                variants={fadeIn('up', 0.1)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.7 }}
                                className="bg-blue-100 p-6 rounded-2xl shadow-md max-w-sm">
                                <h3 className="text-xl font-semibold text-blue-700 mb-2">Build Skills</h3>
                                <p className='text-gray-500'>Develop leadership, teamwork, and communication skills while doing something fulfilling.</p>
                            </motion.div>

                            <motion.div
                                variants={fadeIn('down', 0.1)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.7 }}
                                className="bg-green-100 p-6 rounded-2xl shadow-md max-w-sm">
                                <h3 className="text-xl font-semibold text-green-700 mb-2">Connect With Others</h3>
                                <p className='text-gray-500'>Meet like-minded people who share your passion for service and community growth.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

            </div>

        </div>
    );
};

export default Home;