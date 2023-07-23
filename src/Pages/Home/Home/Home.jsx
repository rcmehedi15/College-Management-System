import React from 'react';
import Banner from '../Banner/Banner';
import LatestNotice from '../LatestNotice/LatestNotice';
import RecentNotice from '../RecentNotice/RecentNotice';
import Event from '../Event/Event';

const Home = () => {
    return (
        <>
            <Banner />
            <LatestNotice />
            <RecentNotice />
            <Event />
        </>
    );
};

export default Home;