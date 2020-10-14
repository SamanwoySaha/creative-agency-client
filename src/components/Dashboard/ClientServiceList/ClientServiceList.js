import React from 'react';
import { services } from '../../../fakeData/fakeData';
import ClientService from '../ClientService/ClientService';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import './ClientServiceList.css';

const ClientServiceList = () => {
    return (
        <div>
            <DashboardHeader><p>Service List</p></DashboardHeader>
            <div className="clientServiceList d-flex">              
            { 
                services.map(service => <ClientService service={service}></ClientService>)
            }
            </div>
        </div>
    );
};

export default ClientServiceList;