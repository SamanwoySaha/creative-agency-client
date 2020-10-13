import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Clients from '../Clients/Clients';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Reviews from '../Reviews/Reviews';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Clients></Clients>
            <Services></Services>
            <Portfolio></Portfolio>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;