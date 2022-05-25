import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Contact from './Contact';
import OurServices from './OurServices';
import Reviwes from './Reviwes';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <OurServices></OurServices>
            <BusinessSummery></BusinessSummery>
            <Reviwes></Reviwes>
            <Contact></Contact>
        </div>
    );
};

export default Home;