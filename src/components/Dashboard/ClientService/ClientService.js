import React from 'react';
import './ClientService.css';

const ClientService = ({ service }) => {
    const { category, description, status, iconImg, iconContentType } = service;
    const statusStyle = {
        pending: {
            backgroundColor: '#FFE3E3',
            color: '#FF4545'
        },
        onGoing: {
            backgroundColor: '#FFBD3E',
            color: '#222'
        },
        done: {
            backgroundColor: '#C6FFE0',
            color: '#009444'
        }
    }

    return (
        <div className="clientService">
            <div className="d-flex justify-content-between">
                <img className="service-img img-fluid mb-3" src={`data:${iconContentType};base64,${iconImg}`} alt="" />
                <p style={(status === 'Pending') ? statusStyle.pending
                    : (status === 'Ongoing') ? statusStyle.onGoing
                    : statusStyle.done}
                className="status">{status}</p>
            </div>
            <h5 className="service-title mb-2">{category}</h5>
            <p className="service-description ml-n1 w-100">{description}</p>
        </div>
    );
};

export default ClientService;