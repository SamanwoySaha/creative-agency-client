import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ClientService from '../ClientService/ClientService';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import './ClientServiceList.css';

const ClientServiceList = () => {
    const { loggedInUser } = useContext(UserContext);
    const [ orders, setOrders ] = useState([]);

    useEffect(() => {
        fetch('https://calm-savannah-67550.herokuapp.com/ordersByEmail', {
            method: 'POST',
            body: JSON.stringify({ email: loggedInUser.email }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <DashboardHeader><p>Service List</p></DashboardHeader>
            <div className="clientServiceList d-flex flex-wrap">
                {
                    orders.map(service => <ClientService key={service._id} service={service}></ClientService>)
                }
            </div>
        </div>
    );
};

export default ClientServiceList;