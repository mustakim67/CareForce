import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from 'framer-motion';
import { fadeIn } from './variant';

const Banner = () => {
    return (
        <div>
            <Carousel
                autoPlay
                interval={5000}
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showArrows={false}
                stopOnHover={false}
                swipeable
                emulateTouch
            >
                {/* Slide 1 */}
                <div className="relative w-full md:h-[750px] h-[500px] bg-[url('https://i.ibb.co/Fk2rFyJQ/ray-sangga-kusuma-U2ep-v-QIick-unsplash.jpg')] bg-center bg-cover bg-no-repeat">
                    <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 px-6 text-center text-white max-w-2xl z-10">
                        <motion.h2
                            variants={fadeIn('right', 0.1)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-4xl md:text-5xl font-bold mb-4">
                            Be the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Change</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeIn('left', 0.1)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-lg md:text-xl">
                            Join hands, lift hearts. Volunteering is more than service — it's impact,
                            compassion, and community.
                        </motion.p>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="relative w-full md:h-[750px] h-[500px] bg-[url('https://i.ibb.co/35K4bKQr/charity-poor.png')] bg-center bg-cover bg-no-repeat">
                    <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 px-6 text-center text-white max-w-2xl z-10">
                        <motion.h2
                            variants={fadeIn('right', 0.1)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-4xl md:text-5xl font-bold mb-4">
                            Together We Make a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Difference</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeIn('left', 0.1)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-lg md:text-xl">
                            Every small act of kindness brings us closer. Team up and leave a lasting mark on your community.
                        </motion.p>
                    </div>
                </div>

                {/* Slide 3 */}
                <div className="relative w-full md:h-[750px] h-[500px] bg-[url('https://i.ibb.co/Ps36rnzK/ochimax-studio-9l-YZIIr8-Cug-unsplash.jpg')] bg-center bg-cover bg-no-repeat">
                    <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 px-6 text-center text-white max-w-2xl z-10">
                        <motion.h2
                            variants={fadeIn('right', 0.1)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-4xl md:text-5xl font-bold mb-4">
                            Give Time, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Gain Hope</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeIn('left', 0.1)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-lg md:text-xl">
                            Share your time and skills to uplift lives. When we give, we also grow.
                        </motion.p>
                    </div>
                </div>

            </Carousel>
        </div>
    );
};

export default Banner;