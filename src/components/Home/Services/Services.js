import React from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const services = [
        {pic: 'https://i.imgur.com/1nOuv1K.png', title: 'Web & Mobile Design', description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'},
        {pic: 'https://i.imgur.com/1nOuv1K.png', title: 'Web & Mobile Design', description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'},
        {pic: 'https://i.imgur.com/1nOuv1K.png', title: 'Web & Mobile Design', description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'},
    ];
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