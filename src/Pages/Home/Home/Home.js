import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import StayConnected from '../StayConnected/StayConnected.jsx'
import About from '../About/About';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <About></About>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <StayConnected/>
        </div>
    );
};

export default Home;