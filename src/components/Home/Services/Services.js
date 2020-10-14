import React from 'react';
import { Container } from 'react-bootstrap';
import { services } from '../../../fakeData/fakeData';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    return (
        <Container className="services px-0">
            <h1 className="heading">Providing awesome <span className="special">services</span></h1>
            <div className="row mt-5">
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
        </Container>
    );
};

export default Services;