import React from 'react';
import './ClientService.css';

const ClientService = ({ service }) => {
    const { pic, title, description } = service;
    return (
        <div className="clientService">
            <img className="service-img img-fluid mb-3" src={pic} alt="" />
            <h5 className="service-title mb-2">{title}</h5>
            <p className="service-description mr-5">{description}</p>
        </div>
    );
};

export default ClientService;