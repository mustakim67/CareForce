import React from 'react';
import Banner from '../../Components/Banner';
import VolunteersNeedNow from '../../Components/VolunteersNeedNow';
import { Helmet } from 'react-helmet';

const Home = () => {
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
                <section className=" py-16 px-4 md:px-12">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Why Volunteer <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'> With Us?</span>
                        </h2>
                        <p className="text-lg md:text-xl mb-8">
                            Volunteering is a powerful way to give back, build connections, and make a real difference in the lives of others. Whether you're passionate about the environment, education, or community development — we have a place for you.
                        </p>

                        <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
                            <div className="bg-orange-100 p-6 rounded-2xl shadow-md max-w-sm">
                                <h3 className="text-xl font-semibold text-orange-700 mb-2">Make an Impact</h3>
                                <p className='text-gray-500'>Help us create meaningful change in local communities by dedicating your time and effort.</p>
                            </div>

                            <div className="bg-blue-100 p-6 rounded-2xl shadow-md max-w-sm">
                                <h3 className="text-xl font-semibold text-blue-700 mb-2">Build Skills</h3>
                                <p className='text-gray-500'>Develop leadership, teamwork, and communication skills while doing something fulfilling.</p>
                            </div>

                            <div className="bg-green-100 p-6 rounded-2xl shadow-md max-w-sm">
                                <h3 className="text-xl font-semibold text-green-700 mb-2">Connect With Others</h3>
                                <p className='text-gray-500'>Meet like-minded people who share your passion for service and community growth.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </div>
    );
};

export default Home;