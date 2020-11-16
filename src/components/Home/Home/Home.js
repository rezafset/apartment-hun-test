import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Apartment from '../Apartment/Apartment';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import Slogan from '../Slogan/Slogan';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Slogan></Slogan>
            <Apartment></Apartment>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;