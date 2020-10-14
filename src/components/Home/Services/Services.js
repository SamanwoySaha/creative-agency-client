import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://calm-savannah-67550.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <Container className="services px-0">
            <h1 className="heading">Providing awesome <span className="special">services</span></h1>
            <div className="row mt-5">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </Container>
    );
};

export default Services;