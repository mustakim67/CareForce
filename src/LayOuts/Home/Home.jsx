import React from 'react';
import Banner from '../../Components/Banner';
import VolunteersNeedNow from '../../Components/VolunteersNeedNow';

const Home = () => {
    return (
        <div>
            <div className='z-0'>
                <Banner></Banner>
                <VolunteersNeedNow></VolunteersNeedNow>
            </div>

        </div>
    );
};

export default Home;