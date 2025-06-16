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

        </div>
    );
};

export default Home;