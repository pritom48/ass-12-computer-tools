import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import OurServices from './OurServices';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <OurServices></OurServices>
            <BusinessSummery></BusinessSummery>
        </div>
    );
};

export default Home;